# PRD Index - Dynamic Palette Removal

## 📋 Executive Summary

This directory contains 11 PRDs (Product Requirement Documents) detailing the complete removal of the dynamic palette feature from the design system.

**Objective**: Convert dynamic tokens (`color-mix`) to static, remove product profiles (Voxco/Ascribe/Discuss), and keep only a unified theme with dark mode support.

---

## 📚 Related Documentation

- **[PRDs](README.md)** (you are here) - Requirements and planning
- **[SPECs](SPECS-INDEX.md)** - Technical implementation specifications
- **Relationship**: Each PRD has a corresponding SPEC with technical details

---

## 🗂️ PRD Structure

### **Phase 1: Preparation** (2 PRDs)

#### [PRD 1.1](PRD-1.1-converter-tokens-dinamicos.md) - Convert Dynamic Tokens to Static

- **Status**: PENDING
- **File**: New `src/styles/tokens-reference.ts`
- **Deliverable**: 15 dynamic tokens mapped with calculated HSL light/dark values
- **Next**: PRD 1.2

#### [PRD 1.2](PRD-1.2-analisar-lytenyte-grid.md) - Analyze lytenyte-grid.css

- **Status**: PENDING
- **File**: `src/components/lytenyte-grid/lytenyte-grid.css`
- **Deliverable**: 7 color-mix occurrences documented and calculated
- **Next**: PRD 2.1

---

### **Phase 2: Static CSS Implementation** (3 PRDs)

#### [PRD 2.1](PRD-2.1-criar-css-estatico.md) - Create Unified Static CSS

- **Status**: PENDING
- **File**: New `src/styles/tokens-static.css`
- **Deliverable**: CSS with all variables in :root and .dark
- **Next**: PRD 2.2

#### [PRD 2.2](PRD-2.2-atualizar-index-css.md) - Update index.css

- **Status**: PENDING
- **File**: `src/index.css`
- **Deliverable**: CSS using static values, no color-mix
- **Next**: PRD 2.3

#### [PRD 2.3](PRD-2.3-atualizar-lytenyte-grid.md) - Update lytenyte-grid.css

- **Status**: PENDING
- **File**: `src/components/lytenyte-grid/lytenyte-grid.css`
- **Deliverable**: 7 substitutions of color-mix for static variables
- **Next**: PRD 3.1

---

### **Phase 3: Dynamic Feature Removal** (2 PRDs)

#### [PRD 3.1](PRD-3.1-desativar-editor.md) - Disable Palette Editor

- **Status**: PENDING
- **File**: `src/stories/ColorPaletteEditor.tsx`
- **Deliverable**: Editor as display-only (no style injection)
- **Next**: PRD 3.2

#### [PRD 3.2](PRD-3.2-remover-persistencia-perfis.md) - Remove Profile Persistence

- **Status**: PENDING
- **File**: `src/stories/ColorPaletteEditor.tsx`
- **Deliverable**: Clean localStorage, only one default theme
- **Next**: PRD 4.1

---

### **Phase 4: Stories Cleanup** (5 subtasks in 1 PRD)

#### [PRD 4](PRD-4-limpeza-stories.md) - Stories Cleanup

- **Status**: PENDING
- **Files**:
  - 4.1: `ColorExportButton.tsx`
  - 4.2: `TokenUsageTable.tsx`
  - 4.3: `DynamicColorPalette.tsx`
  - 4.4: `ColorPaletteEditor.tsx` (simplified)
  - 4.5: `ColorPalette.stories.tsx`
- **Deliverable**: Unnecessary stories removed
- **Next**: PRD 5.1

---

### **Phase 5: Core Removal** (3 subtasks in 1 PRD)

#### [PRD 5](PRD-5-remocao-core.md) - Core Removal

- **Status**: PENDING
- **Files**:
  - 5.1: `src/index.ts` (remove export)
  - 5.2: `src/tokens/` (delete folder)
  - 5.3: `src/lib/color-utils.ts` (delete)
- **Deliverable**: Core code removed, builds passing
- **Next**: PRD 6.1

---

### **Phase 6: Final Validation** (4 subtasks in 1 PRD)

#### [PRD 6](PRD-6-validacao-final.md) - Final Validation

- **Status**: PENDING
- **Deliverables**:
  - 6.1: Dark mode functional
  - 6.2: Visual regression validated
  - 6.3: localStorage documented
  - 6.4: Breaking changes documented
- **Next**: 🎉 PROJECT COMPLETE

---

## 🚀 Execution Flow

```
PRD 1.1 → PRD 1.2 → PRD 2.1 → PRD 2.2 → PRD 2.3 →
PRD 3.1 → PRD 3.2 → PRD 4.x → PRD 5.x → PRD 6.x → ✅
```

**Important Rules**:

1. **Execute in order**: Each PRD must be completed before the next
2. **Test before proceeding**: Each PRD has a validation checklist
3. **Build between steps**: Always run `npm run build` after each PRD
4. **Commits**: Commit after each successful PRD

---

## 📊 Master Checklist

### Progress

- [ ] Phase 1: Preparation (0/2)
- [ ] Phase 2: Static CSS (0/3)
- [ ] Phase 3: Dynamic Removal (0/2)
- [ ] Phase 4: Stories Cleanup (0/5)
- [ ] Phase 5: Core Removal (0/3)
- [ ] Phase 6: Validation (0/4)

**Total Progress**: 0/19 subtasks

---

## 🎯 Project Success Criteria

At the end of all PRDs:

- ✅ Zero occurrences of `color-mix` in codebase
- ✅ All tokens are static (fixed HSL values)
- ✅ Dark mode works perfectly
- ✅ Only one theme (no Voxco/Ascribe/Discuss)
- ✅ `src/tokens/` completely removed
- ✅ `src/lib/color-utils.ts` removed
- ✅ Builds passing (`npm run build`)
- ✅ Storybook functional
- ✅ Breaking changes documentation complete

---

## 🆘 Troubleshooting

### If a build fails:

1. Check which was the last completed PRD
2. Review that PRD's checklist
3. Check for broken imports: `grep -r "from.*tokens" src/`
4. Restore from backup if necessary

### If dark mode stops working:

1. Check `tokens-static.css` has `.dark` section
2. Check `index.css` is importing correct CSS
3. Check `.dark` class is being applied to HTML

### If Storybook doesn't start:

1. Check if all imports in stories are valid
2. Check if deleted files have remaining imports
3. Clean cache: `rm -rf node_modules/.cache`

---

## 📞 Contact

For questions or issues during execution:

- Review the specific PRD carefully
- Check code examples in PRDs
- Consult the original file before modifications

---

**Last updated**: 2026-02-18
**Version**: 1.0
