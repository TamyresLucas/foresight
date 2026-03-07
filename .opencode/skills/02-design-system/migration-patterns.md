# Migration Patterns

## Descrição
Estratégias e padrões para migração gradual de componentes legados para o Design System, minimizando riscos e impacto.

## Regras Obrigatórias

### DO
- ✅ Planejar migração gradual em fases
- ✅ Usar feature flags para componentes novos
- ✅ Implementar deprecação suave com console.warn
- ✅ Criar codemods para migração automática
- ✅ Comunicar breaking changes claramente
- ✅ Definir timeline de deprecação

### DON'T
- ❌ Fazer migração "big bang"
- ❌ Remover componentes sem aviso prévio
- ❌ Ignorar casos de uso especiais
- ❌ Quebrar builds sem migration path
- ❌ Esquecer de atualizar documentação

## Exemplos de Código

### Estratégias de Migração Gradual

```tsx
// strategies/FeatureFlag.tsx
interface FeatureFlagProps {
  flag: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function FeatureFlag({ flag, children, fallback }: FeatureFlagProps) {
  const isEnabled = useFeatureFlag(flag);
  
  return isEnabled ? <>{children}</> : <>{fallback}</>;
}

// Usage
function SurveyPage() {
  return (
    <FeatureFlag 
      flag="new-survey-builder" 
      fallback={<LegacySurveyBuilder />}
    >
      <NewSurveyBuilder />
    </FeatureFlag>
  );
}
```

```typescript
// utils/featureFlags.ts
const FEATURE_FLAGS = {
  'new-survey-builder': process.env.NEW_SURVEY_BUILDER === 'true',
  'ds-v2-components': process.env.DS_V2 === 'true',
  'experimental-animations': process.env.EXPERIMENTAL_ANIMATIONS === 'true',
};

export function useFeatureFlag(flag: string): boolean {
  // Check URL param first (for testing)
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const urlFlag = params.get(`ff-${flag}`);
    if (urlFlag !== null) return urlFlag === 'true';
  }
  
  return FEATURE_FLAGS[flag as keyof typeof FEATURE_FLAGS] || false;
}

export function enableFeatureFlag(flag: string) {
  localStorage.setItem(`ff-${flag}`, 'true');
}
```

### Feature Flags
```tsx
// components/FeatureToggle.tsx
import { useFeatureFlag } from '@/utils/featureFlags';

export function Button(props: ButtonProps) {
  const useNewButton = useFeatureFlag('ds-v2-button');
  
  if (useNewButton) {
    return <DSButton {...props} />;
  }
  
  return <LegacyButton {...props} />;
}
```

### Deprecação Suave
```tsx
// utils/deprecation.ts
interface DeprecationOptions {
  component: string;
  version: string;
  migrationPath: string;
  alternative: string;
}

export function useDeprecationWarning({
  component,
  version,
  migrationPath,
  alternative,
}: DeprecationOptions) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        `%c[Deprecation Warning]%c ${component} is deprecated and will be removed in v${version}.\n` +
        `Please migrate to ${alternative}.\n` +
        `Migration guide: ${migrationPath}`,
        'color: orange; font-weight: bold;',
        'color: inherit;'
      );
    }
  }, [component, version, migrationPath, alternative]);
}

// Usage in component
function LegacyButton(props: LegacyButtonProps) {
  useDeprecationWarning({
    component: 'LegacyButton',
    version: '3.0.0',
    alternative: 'Button from @/components/ui/button',
    migrationPath: 'https://docs.foresight.com/migration/button',
  });
  
  return <button {...props} />;
}
```

### Codemods para Migração Automática
```javascript
// codemods/button-v2.js
// jscodeshift transform

module.exports = function(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);
  
  // Find all imports of LegacyButton
  root.find(j.ImportDeclaration)
    .filter(path => path.node.source.value.includes('LegacyButton'))
    .forEach(path => {
      // Replace import
      path.node.source.value = '@/components/ui/button';
      
      // Rename import specifier
      path.node.specifiers.forEach(spec => {
        if (spec.local.name === 'LegacyButton') {
          spec.local.name = 'Button';
        }
      });
    });
  
  // Find all JSX elements using LegacyButton
  root.find(j.JSXOpeningElement)
    .filter(path => path.node.name.name === 'LegacyButton')
    .forEach(path => {
      // Rename to Button
      path.node.name.name = 'Button';
      
      // Map legacy props to new props
      path.node.attributes = path.node.attributes.map(attr => {
        if (attr.type === 'JSXAttribute') {
          // Map 'label' to 'children'
          if (attr.name.name === 'label') {
            return j.jsxAttribute(
              j.jsxIdentifier('children'),
              attr.value
            );
          }
          
          // Map legacy variant names
          if (attr.name.name === 'variant' && attr.value.type === 'StringLiteral') {
            const variantMap = {
              primary: 'default',
              secondary: 'secondary',
              danger: 'destructive',
            };
            if (variantMap[attr.value.value]) {
              attr.value.value = variantMap[attr.value.value];
            }
          }
        }
        return attr;
      });
    });
  
  // Find closing tags
  root.find(j.JSXClosingElement)
    .filter(path => path.node.name.name === 'LegacyButton')
    .forEach(path => {
      path.node.name.name = 'Button';
    });
  
  return root.toSource();
};

// Run with: npx jscodeshift -t codemods/button-v2.js src/
```

### Comunicação de Breaking Changes
```markdown
# Migration Guide: Button v2.0

## Breaking Changes

### 1. Props Renomeadas

| Old Prop | New Prop | Notes |
|----------|----------|-------|
| `label` | `children` | Use children instead of label |
| `onPress` | `onClick` | Standard DOM event |
| `variant` values | New values | See mapping below |

### 2. Mapping de Variantes

```tsx
// Before
<Button variant="primary" />
<Button variant="secondary" />
<Button variant="danger" />

// After
<Button variant="default" />
<Button variant="secondary" />
<Button variant="destructive" />
```

### 3. Size Changes

```tsx
// Before
<Button size="small" />
<Button size="medium" />
<Button size="large" />

// After
<Button size="sm" />
<Button size="default" />
<Button size="lg" />
```

## Migration Automation

Run the codemod:
```bash
npx @foresight/codemods button-v2 src/
```

## Timeline

- **v2.0.0**: Button v2 released, LegacyButton deprecated
- **v2.5.0**: Console warnings added
- **v3.0.0**: LegacyButton removed

## Manual Migration Steps

1. Update imports
2. Replace `label` with `children`
3. Update variant names
4. Update size values
5. Test all button instances
```

### Timeline de Deprecação
```typescript
// constants/deprecation.ts
export const DEPRECATION_TIMELINE = {
  'LegacyButton': {
    deprecatedIn: '2.0.0',
    warningAddedIn: '2.2.0',
    removalVersion: '3.0.0',
    migrationGuide: '/migration/button',
  },
  'LegacyCard': {
    deprecatedIn: '2.1.0',
    warningAddedIn: '2.3.0',
    removalVersion: '3.1.0',
    migrationGuide: '/migration/card',
  },
  'LegacyInput': {
    deprecatedIn: '2.2.0',
    warningAddedIn: '2.4.0',
    removalVersion: '3.2.0',
    migrationGuide: '/migration/input',
  },
};

// Check if component should show warning
export function shouldShowWarning(component: string, currentVersion: string): boolean {
  const info = DEPRECATION_TIMELINE[component];
  if (!info) return false;
  
  return compareVersions(currentVersion, info.warningAddedIn) >= 0 &&
         compareVersions(currentVersion, info.removalVersion) < 0;
}
```

## Checklist de Verificação
- [ ] Feature flags implementadas
- [ ] console.warn adicionado em componentes deprecados
- [ ] Codemods criados para migração automática
- [ ] Migration guide escrito e publicado
- [ ] Timeline de deprecação definida
- [ ] Breaking changes documentados no CHANGELOG
- [ ] Testes de regressão adicionados
- [ ] Comunicação enviada para stakeholders

## Referências Úteis
- [jscodeshift](https://github.com/facebook/jscodeshift)
[Semantic Versioning](https://semver.org/)
[Feature Flags Best Practices](https://martinfowler.com/articles/feature-toggles.html)
[Deprecation Policy](https://docs.npmjs.com/policies/deprecation)
