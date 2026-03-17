# Contributing Guide

How to contribute to Foresight Design System.

## 🎯 Before Starting

1. **Read Skills** - Check `.opencode/skills/` to understand patterns
2. **Setup environment** - See [Getting Started](../guides/getting-started.md)
3. **Understand architecture** - Read about [monorepo structure](../architecture/monorepo-structure.md)

## 🔄 Workflow

### 1. Create a Branch

```bash
git checkout -b feat/feature-name
# or
git checkout -b fix/bug-name
```

**Prefixes:**

- `feat/` - New feature
- `fix/` - Bug fix
- `docs/` - Documentation
- `refactor/` - Refactoring
- `test/` - Tests

### 2. Make your Changes

```bash
# Edit files
# ...

# Check types
npm run type-check

# Run lint
npm run lint

# Run tests
npm run test

# Build
npm run build
```

### 3. Commit

Use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# New component
git commit -m "feat: add AlertDialog component"

# Bug fix
git commit -m "fix: resolve focus trap in Modal"

# Documentation
git commit -m "docs: update Button usage examples"

# Breaking change
git commit -m "feat!: remove deprecated prop 'variant'"
```

### 4. Code Review

```bash
# Run review checklist
node tools/scripts/code-review-checklist.js
```

### 5. Push and PR

```bash
git push origin feat/feature-name
```

Open a Pull Request with:

- Descriptive title
- Description of changes
- Screenshots (if UI)
- Completed checklist

## 🎨 Code Patterns

### Components

```typescript
// ✅ GOOD
import * as React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'default' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'md', ...props }, ref) => {
    return <button ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

// ❌ BAD
const Button = (props) => <button {...props} />;
```

### Styles

```typescript
// ✅ Use tokens
className = "bg-primary text-primary-foreground";

// ❌ Never hardcode
className = "bg-blue-500 text-white";
```

### Tests

```typescript
// ✅ Test behavior
import { render, screen, fireEvent } from '@testing-library/react';

test('button calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click</Button>);
  fireEvent.click(screen.getByText('Click'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

## 📝 Documentation

### Components

Every component must have:

1. **JSDoc** describing purpose
2. **Storybook** with all variants
3. **README** (if complex)
4. **CHANGELOG** (if breaking change)

```typescript
/**
 * Button - Interactive button component
 *
 * @example
 * ```tsx
 * <Button variant="default" size="lg" onClick={handleClick}>
 *   Click here
 * </Button>
 * ```
 */
export interface ButtonProps {
  /** Visual variant of the button */
  variant?: "default" | "destructive" | "outline";
  /** Size of the button */
  size?: "sm" | "md" | "lg";
}
```

### Stories

```typescript
// Button.stories.tsx
const meta: Meta<typeof Button> = {
  title: 'Components/Actions/Button',
  component: Button,
  tags: ['autodocs'],
};

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};
```

## 🧪 Testing

### Local

```bash
# Unit tests
npm run test

# Storybook tests
npm run test:storybook

# e2e tests
npm run test:e2e
```

### CI/CD

All PRs run:

1. Type checking
2. Linting
3. Tests
4. Build

## 🐛 Reporting Bugs

### Issues

Use the template:

```markdown
**Description**
Brief description of the bug

**Reproduction**

1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen

**Screenshots**
If applicable

**Environment**

- OS: [e.g. macOS]
- Browser: [e.g. Chrome]
- Version: [e.g. 0.1.0]
```

## 🎨 Design System

### Adding Components

1. Create in `packages/design-system/src/components/ui/`
2. Follow existing pattern
3. Export in `packages/design-system/src/index.ts`
4. Create stories
5. Document in Storybook

### Tokens

To add new tokens:

1. Edit `packages/design-system/src/styles/tokens.css`
2. Update `packages/design-system/tailwind.config.js`
3. Document in Storybook

## ✅ PR Checklist

Before submitting:

- [ ] Code passes `npm run lint`
- [ ] Types pass `npm run type-check`
- [ ] Tests pass `npm run test`
- [ ] Build passes `npm run build`
- [ ] Stories created/updated
- [ ] Documentation updated
- [ ] No console.logs
- [ ] No commented code
- [ ] Commits follow conventional commits
- [ ] PR has clear description

## 🤝 Code of Conduct

- Be respectful
- Accept constructive feedback
- Focus on what's best for the community
- Help other contributors

## 📞 Questions?

- Open an issue
- Consult skills in `.opencode/skills/`
- See existing examples

---

**Thanks for contributing!** 🎉
