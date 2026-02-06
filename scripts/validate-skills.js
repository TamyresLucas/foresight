#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Skills disponíveis no workspace
const SKILLS = {
  "react-typescript.md": {
    name: "React TypeScript",
    checks: [
      "props-tipadas-corretamente",
      "forwardRef-usado-quando-necessario",
      "exports-corretos",
    ],
  },
  "tailwind-css.md": {
    name: "Tailwind CSS",
    checks: [
      "usa-apenas-tokens-css",
      "classes-tailwind-organizadas-cn",
      "dark-mode-implementado",
    ],
  },
  "css-variables-theming.md": {
    name: "CSS Variables Theming",
    checks: [
      "usa-tokens-css-hsl-oklab",
      "variaveis-de-cor-corretas",
      "tema-consistente",
    ],
  },
  "radix-ui-integration.md": {
    name: "Radix UI Integration",
    checks: [
      "radix-primitives-usados-corretamente",
      "aschild-pattern-aplicado",
      "data-attributes-corretos",
    ],
  },
  "accessibility-a11y.md": {
    name: "Accessibility A11y",
    checks: [
      "aria-attributes-corretos",
      "keyboard-navigation-funcional",
      "focus-management-adequado",
    ],
  },
  "storybook-patterns.md": {
    name: "Storybook Patterns",
    checks: ["story-existe", "props-documentadas", "exemplos-incluidos"],
  },
  "shadcn-ui-patterns.md": {
    name: "shadcn/ui Patterns",
    checks: [
      "cva-variants-bem-definidas",
      "padrao-shadcn-seguido",
      "composicao-de-componentes",
    ],
  },
  "design-system-architecture.md": {
    name: "Design System Architecture",
    checks: [
      "arquitetura-de-tokens-seguida",
      "public-api-correta",
      "imports-circulares-ausentes",
    ],
  },
};

class ComponentValidator {
  constructor(componentPath, componentType = "ui") {
    this.componentPath = componentPath;
    this.componentType = componentType;
    this.componentName = path.basename(componentPath, ".tsx");
    this.results = {};
    this.score = 0;
    this.totalChecks = 0;
  }

  async validate() {
    console.log(`🔍 Validando componente: ${this.componentName}`);
    console.log(`📁 Caminho: ${this.componentPath}`);
    console.log(`📦 Tipo: ${this.componentType}`);
    console.log("");

    // Verificar se o componente existe
    if (!fs.existsSync(this.componentPath)) {
      throw new Error(`Componente não encontrado: ${this.componentPath}`);
    }

    // Ler conteúdo do componente
    const componentContent = fs.readFileSync(this.componentPath, "utf-8");

    // Executar validações para cada skill
    for (const [skillFile, skill] of Object.entries(SKILLS)) {
      const skillPath = path.join(__dirname, "../.opencode/skills", skillFile);

      if (fs.existsSync(skillPath)) {
        await this.validateSkill(skill, skillPath, componentContent);
      }
    }

    // Verificar arquivos complementares
    await this.validateComplementaryFiles();

    // Gerar relatório
    this.generateReport();

    return this.results;
  }

  async validateSkill(skill, skillPath, componentContent) {
    console.log(`📚 Validando skill: ${skill.name}`);

    const skillResults = {
      skill: skill.name,
      checks: {},
      passed: 0,
      total: skill.checks.length,
      score: 0,
    };

    // Validar cada check da skill
    for (const check of skill.checks) {
      const result = await this.performCheck(check, componentContent);
      skillResults.checks[check] = result;
      if (result.passed) {
        skillResults.passed++;
      }
    }

    // Calcular score da skill
    skillResults.score = (skillResults.passed / skillResults.total) * 100;
    this.results[skill.name] = skillResults;

    console.log(
      `   ✅ ${skillResults.passed}/${skillResults.total} checks passados (${skillResults.score.toFixed(1)}%)`,
    );
  }

  async performCheck(check, componentContent) {
    switch (check) {
      case "props-tipadas-corretamente":
        return this.checkTypedProps(componentContent);
      case "forwardRef-usado-quando-necessario":
        return this.checkForwardRef(componentContent);
      case "exports-corretos":
        return this.checkExports();
      case "usa-apenas-tokens-css":
        return this.checkCSSTokens(componentContent);
      case "classes-tailwind-organizadas-cn":
        return this.checkTailwindClasses(componentContent);
      case "dark-mode-implementado":
        return this.checkDarkMode(componentContent);
      case "radix-primitives-usados-corretamente":
        return this.checkRadixPrimitives(componentContent);
      case "aschild-pattern-aplicado":
        return this.checkAsChildPattern(componentContent);
      case "data-attributes-corretos":
        return this.checkDataAttributes(componentContent);
      case "aria-attributes-corretos":
        return this.checkAriaAttributes(componentContent);
      case "keyboard-navigation-funcional":
        return this.checkKeyboardNavigation(componentContent);
      case "focus-management-adequado":
        return this.checkFocusManagement(componentContent);
      case "story-existe":
        return this.checkStoryExists();
      case "props-documentadas":
        return this.checkPropsDocumented(componentContent);
      case "exemplos-incluidos":
        return this.checkExamplesIncluded();
      case "cva-variants-bem-definidas":
        return this.checkCVAVariants(componentContent);
      case "padrao-shadcn-seguido":
        return this.checkShadcnPattern(componentContent);
      default:
        return { passed: true, message: "Check não implementado" };
    }
  }

  checkTypedProps(content) {
    const hasInterface =
      content.includes("interface ") || content.includes("type ");
    const hasGenericParams = content.includes("<") && content.includes(">");

    return {
      passed: hasInterface,
      message: hasInterface
        ? "Props tipadas corretamente"
        : "Props não tipadas",
    };
  }

  checkForwardRef(content) {
    const hasForwardRef = content.includes("forwardRef");
    const needsForwardRef =
      content.includes("ref") || content.includes("React.forwardRef");

    return {
      passed: !needsForwardRef || hasForwardRef,
      message: hasForwardRef
        ? "forwardRef implementado"
        : "forwardRef não necessário",
    };
  }

  checkExports() {
    const indexPath = this.componentPath.replace(/\.tsx$/, "/index.ts");

    if (fs.existsSync(indexPath)) {
      const indexContent = fs.readFileSync(indexPath, "utf-8");
      const hasExport = indexContent.includes(
        `export * from './${this.componentName}'`,
      );

      return {
        passed: hasExport,
        message: hasExport
          ? "Export correto no index.ts"
          : "Export faltando no index.ts",
      };
    }

    return { passed: false, message: "index.ts não encontrado" };
  }

  checkCSSTokens(content) {
    // Verificar se não há cores hardcoded
    const hasHexColors = /#[0-9a-fA-F]{6}/.test(content);
    const hasRgbColors = /rgb\(/.test(content);

    return {
      passed: !hasHexColors && !hasRgbColors,
      message:
        !hasHexColors && !hasRgbColors
          ? "Apenas tokens CSS usados"
          : "Cores hardcoded detectadas",
    };
  }

  checkTailwindClasses(content) {
    const hasCnFunction =
      content.includes("cn(") || content.includes("className={cn(");

    return {
      passed: hasCnFunction,
      message: hasCnFunction
        ? "Classes Tailwind organizadas com cn()"
        : "Função cn() não usada",
    };
  }

  checkDarkMode(content) {
    const hasDarkClasses = content.includes("dark:") || /dark:/.test(content);

    return {
      passed: hasDarkClasses,
      message: hasDarkClasses
        ? "Dark mode implementado"
        : "Dark mode não detectado",
    };
  }

  checkRadixPrimitives(content) {
    const hasRadixImports = /@radix-ui\/[\w-]+/.test(content);

    return {
      passed:
        hasRadixImports ||
        (!content.includes("Dialog") && !content.includes("Dropdown")), // Só se precisar
      message: hasRadixImports
        ? "Radix UI primitives usados"
        : "Radix UI não aplicável",
    };
  }

  checkAsChildPattern(content) {
    const hasAsChild = content.includes("asChild");

    return {
      passed: hasAsChild || !content.includes("@radix-ui"), // Só se usar Radix
      message: hasAsChild
        ? "asChild pattern aplicado"
        : "asChild não aplicável",
    };
  }

  checkDataAttributes(content) {
    const hasDataAttributes = /data-[a-z-]+/.test(content);

    return {
      passed: hasDataAttributes || !content.includes("@radix-ui"), // Só se usar Radix
      message: hasDataAttributes
        ? "Data attributes presentes"
        : "Data attributes não aplicáveis",
    };
  }

  checkAriaAttributes(content) {
    const hasAria = /aria-[\w-]+/.test(content);

    return {
      passed: hasAria || content.includes("Button"), // Botões devem ter
      message: hasAria ? "Atributos ARIA presentes" : "ARIA não detectado",
    };
  }

  checkKeyboardNavigation(content) {
    const hasKeyboardHandlers = /on(KeyPress|KeyDown|KeyUp)/.test(content);

    return {
      passed: hasKeyboardHandlers || !content.includes("Input"), // Inputs devem ter
      message: hasKeyboardHandlers
        ? "Keyboard navigation implementada"
        : "Keyboard handlers não detectados",
    };
  }

  checkFocusManagement(content) {
    const hasFocusManagement =
      content.includes("useRef") && content.includes("focus");

    return {
      passed: hasFocusManagement || !content.includes("Dialog"), // Dialogs devem ter
      message: hasFocusManagement
        ? "Focus management adequado"
        : "Focus management não detectado",
    };
  }

  checkStoryExists() {
    const storyPath = this.componentPath.replace(/\.tsx$/, ".stories.tsx");

    return {
      passed: fs.existsSync(storyPath),
      message: fs.existsSync(storyPath)
        ? "Story existe"
        : "Story não encontrada",
    };
  }

  checkPropsDocumented(content) {
    const hasJSDoc = /\/\*\*[\s\S]*?\*\//.test(content);

    return {
      passed: hasJSDoc,
      message: hasJSDoc
        ? "Props documentadas com JSDoc"
        : "JSDoc não encontrado",
    };
  }

  checkExamplesIncluded() {
    const storyPath = this.componentPath.replace(/\.tsx$/, ".stories.tsx");

    if (fs.existsSync(storyPath)) {
      const storyContent = fs.readFileSync(storyPath, "utf-8");
      const hasExamples =
        storyContent.includes("Template") || storyContent.includes("Example");

      return {
        passed: hasExamples,
        message: hasExamples
          ? "Exemplos incluídos na story"
          : "Exemplos não encontrados",
      };
    }

    return { passed: false, message: "Story não encontrada" };
  }

  checkCVAVariants(content) {
    const hasCVA =
      content.includes("cva(") || content.includes("class-variance-authority");

    return {
      passed: hasCVA,
      message: hasCVA ? "Variants CVA definidas" : "CVA não usado",
    };
  }

  checkShadcnPattern(content) {
    const hasShadcnPattern =
      content.includes("forwardRef") && content.includes("cn(");

    return {
      passed: hasShadcnPattern,
      message: hasShadcnPattern
        ? "Padrão shadcn/ui seguido"
        : "Padrão shadcn não detectado",
    };
  }

  async validateComplementaryFiles() {
    console.log(`📁 Validando arquivos complementares`);

    // Verificar story
    const storyPath = this.componentPath.replace(/\.tsx$/, ".stories.tsx");
    if (fs.existsSync(storyPath)) {
      console.log(`   ✅ Story encontrada: ${storyPath}`);
    } else {
      console.log(`   ❌ Story não encontrada: ${storyPath}`);
    }

    // Verificar index
    const indexPath = this.componentPath.replace(/\.tsx$/, "/index.ts");
    if (fs.existsSync(indexPath)) {
      console.log(`   ✅ Index encontrado: ${indexPath}`);
    } else {
      console.log(`   ❌ Index não encontrado: ${indexPath}`);
    }
  }

  calculateTotalScore() {
    let totalPassed = 0;
    let totalChecks = 0;

    for (const skill of Object.values(this.results)) {
      totalPassed += skill.passed;
      totalChecks += skill.total;
    }

    this.score = totalChecks > 0 ? (totalPassed / totalChecks) * 100 : 0;
    this.totalChecks = totalChecks;

    return this.score;
  }

  generateReport() {
    const score = this.calculateTotalScore();

    console.log("");
    console.log("📊 RELATÓRIO DE VALIDAÇÃO");
    console.log("=".repeat(50));
    console.log(`🎯 Componente: ${this.componentName}`);
    console.log(`📊 Score Final: ${score.toFixed(1)}%`);
    console.log(
      `✅ Checks Aprovados: ${this.calculateApprovedChecks()}/${this.totalChecks}`,
    );
    console.log("");

    // Detalhes por skill
    for (const [skillName, skill] of Object.entries(this.results)) {
      const status = skill.score >= 80 ? "✅" : skill.score >= 60 ? "⚠️" : "❌";
      console.log(
        `${status} ${skillName}: ${skill.score.toFixed(1)}% (${skill.passed}/${skill.total})`,
      );
    }

    console.log("");
    console.log("🔧 AÇÕES NECESSÁRIAS:");
    const actions = this.generateActionItems();

    if (actions.length === 0) {
      console.log(
        "   🎉 Nenhuma ação necessária! Componente está em conformidade.",
      );
    } else {
      actions.forEach((action) => console.log(`   • ${action}`));
    }

    console.log("");

    // Gerar arquivo de relatório
    this.saveReportToFile();
  }

  calculateApprovedChecks() {
    let total = 0;
    for (const skill of Object.values(this.results)) {
      total += skill.passed;
    }
    return total;
  }

  generateActionItems() {
    const actions = [];

    for (const [skillName, skill] of Object.entries(this.results)) {
      for (const [checkName, check] of Object.entries(skill.checks)) {
        if (!check.passed) {
          actions.push(`${checkName} (${skillName})`);
        }
      }
    }

    return actions;
  }

  saveReportToFile() {
    const reportPath = path.join(
      __dirname,
      "../validation-reports",
      `${this.componentName}-${Date.now()}.md`,
    );

    // Criar diretório se não existir
    const reportsDir = path.dirname(reportPath);
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }

    const reportContent = this.generateMarkdownReport();
    fs.writeFileSync(reportPath, reportContent);

    console.log(`📄 Relatório salvo em: ${reportPath}`);
  }

  generateMarkdownReport() {
    const score = this.calculateTotalScore();
    let report = `# Relatório de Validação - ${this.componentName}\n\n`;
    report += `**Data:** ${new Date().toISOString()}\n`;
    report += `**Score:** ${score.toFixed(1)}%\n`;
    report += `**Status:** ${score >= 80 ? "✅ Aprovado" : score >= 60 ? "⚠️ Parcial" : "❌ Reprovado"}\n\n`;

    report += `## 📊 Resumo\n\n`;
    report += `| Skill | Score | Status |\n`;
    report += `|-------|-------|--------|\n`;

    for (const [skillName, skill] of Object.entries(this.results)) {
      const status = skill.score >= 80 ? "✅" : skill.score >= 60 ? "⚠️" : "❌";
      report += `| ${skillName} | ${skill.score.toFixed(1)}% | ${status} |\n`;
    }

    report += `\n## 🔧 Ações Necessárias\n\n`;
    const actions = this.generateActionItems();

    if (actions.length === 0) {
      report += `🎉 Nenhuma ação necessária! Componente está em conformidade.\n`;
    } else {
      actions.forEach((action) => {
        report += `- [ ] ${action}\n`;
      });
    }

    report += `\n## 📋 Detalhes\n\n`;
    for (const [skillName, skill] of Object.entries(this.results)) {
      report += `### ${skillName}\n\n`;
      report += `- **Score:** ${skill.score.toFixed(1)}% (${skill.passed}/${skill.total})\n\n`;

      for (const [checkName, check] of Object.entries(skill.checks)) {
        const status = check.passed ? "✅" : "❌";
        report += `- ${status} ${checkName}: ${check.message}\n`;
      }
      report += "\n";
    }

    return report;
  }
}

// Execução principal
async function main() {
  const componentPath = process.argv[2];
  const componentType = process.argv[3] || "ui";

  if (!componentPath) {
    console.error("❌ Erro: Caminho do componente não fornecido");
    console.log("Uso: node validate-skills.js <caminho-do-componente> [tipo]");
    process.exit(1);
  }

  try {
    const validator = new ComponentValidator(componentPath, componentType);
    await validator.validate();

    // Retornar score para uso em CI/CD
    console.log(`SCORE=${validator.score.toFixed(1)}`);

    // Sair com código de erro se score baixo
    if (validator.score < 60) {
      process.exit(1);
    }
  } catch (error) {
    console.error("❌ Erro na validação:", error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = ComponentValidator;
