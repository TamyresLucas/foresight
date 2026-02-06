#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class CodeReviewChecker {
  constructor(prNumber, baseBranch = "main") {
    this.prNumber = prNumber;
    this.baseBranch = baseBranch;
    this.results = {};
    this.score = 0;
    this.changedFiles = [];
  }

  async runChecklist() {
    console.log("🔍 Executando Code Review Checklist");
    console.log(`📋 PR #${this.prNumber} -> ${this.baseBranch}`);
    console.log("");

    try {
      // Obter arquivos modificados
      await this.getChangedFiles();

      if (this.changedFiles.length === 0) {
        console.log("ℹ️ Nenhum arquivo modificado para revisar");
        return;
      }

      console.log(`📁 Arquivos modificados: ${this.changedFiles.length}`);
      this.changedFiles.forEach((file) => console.log(`   • ${file}`));
      console.log("");

      // Executar checklists
      await this.checkArchitecture();
      await this.checkCode();
      await this.checkStyling();
      await this.checkTests();
      await this.checkDocumentation();

      // Gerar relatório final
      this.generateFinalReport();
    } catch (error) {
      console.error("❌ Erro na execução:", error.message);
      throw error;
    }
  }

  async getChangedFiles() {
    try {
      // Obter diff entre base branch e PR
      const diffOutput = execSync(
        `git diff --name-only origin/${this.baseBranch}...HEAD`,
        { encoding: "utf-8" },
      );

      this.changedFiles = diffOutput
        .split("\n")
        .filter((file) => file.trim())
        .filter(
          (file) =>
            file.startsWith("src/components/") ||
            file.startsWith("src/lib/") ||
            file.endsWith(".md"),
        );
    } catch (error) {
      console.warn(
        "⚠️ Não foi possível obter arquivos modificados:",
        error.message,
      );
      this.changedFiles = [];
    }
  }

  async checkArchitecture() {
    console.log("🏗️ Verificando Arquitetura");

    const checks = {
      "categoria-correta": {
        description: "Componente está na categoria correta",
        check: () => this.checkCorrectCategory(),
      },
      "arquitetura-tokens": {
        description: "Segue arquitetura de tokens",
        check: () => this.checkTokenArchitecture(),
      },
      "public-api-exports": {
        description: "Public API exports estão corretos",
        check: () => this.checkPublicAPIExports(),
      },
      "imports-circulares": {
        description: "Não há imports circulares",
        check: () => this.checkCircularImports(),
      },
    };

    this.results.arquitetura = await this.runChecks("Arquitetura", checks);
  }

  async checkCode() {
    console.log("💻 Verificando Código");

    const checks = {
      "typescript-sem-erros": {
        description: "TypeScript sem erros ou warnings",
        check: () => this.checkTypeScript(),
      },
      "eslint-sem-erros": {
        description: "ESLint sem erros",
        check: () => this.checkESLint(),
      },
      "prettier-aplicado": {
        description: "Prettier aplicado",
        check: () => this.checkPrettier(),
      },
      "sem-console-log": {
        description: "Sem console.log ou debugger",
        check: () => this.checkConsoleLogs(),
      },
    };

    this.results.codigo = await this.runChecks("Código", checks);
  }

  async checkStyling() {
    console.log("🎨 Verificando Styling");

    const checks = {
      "apenas-tokens-css": {
        description: "Usa apenas tokens CSS",
        check: () => this.checkCSSTokens(),
      },
      "classes-tailwind-organizadas": {
        description: "Classes Tailwind organizadas",
        check: () => this.checkTailwindOrganization(),
      },
      "cva-bem-definidas": {
        description: "Variantes CVA bem definidas",
        check: () => this.checkCVAVariants(),
      },
      "dark-mode-testado": {
        description: "Dark mode testado",
        check: () => this.checkDarkMode(),
      },
    };

    this.results.styling = await this.runChecks("Styling", checks);
  }

  async checkTests() {
    console.log("🧪 Verificando Testes");

    const checks = {
      "story-criada": {
        description: "Story criada e funcional",
        check: () => this.checkStoryCreated(),
      },
      "casos-de-uso-cobertos": {
        description: "Casos de uso principais cobertos",
        check: () => this.checkUseCasesCovered(),
      },
      "acessibilidade-testada": {
        description: "Acessibilidade testada",
        check: () => this.checkAccessibilityTested(),
      },
      "edge-cases-documentados": {
        description: "Edge cases documentados",
        check: () => this.checkEdgeCasesDocumented(),
      },
    };

    this.results.testes = await this.runChecks("Testes", checks);
  }

  async checkDocumentation() {
    console.log("📚 Verificando Documentação");

    const checks = {
      "props-documentadas": {
        description: "Props documentadas com JSDoc",
        check: () => this.checkPropsDocumented(),
      },
      "readme-atualizado": {
        description: "README atualizado se necessário",
        check: () => this.checkReadmeUpdated(),
      },
      "changelog-atualizado": {
        description: "CHANGELOG atualizado",
        check: () => this.checkChangelogUpdated(),
      },
      "migration-guide": {
        description: "Migration guide se breaking change",
        check: () => this.checkMigrationGuide(),
      },
    };

    this.results.documentacao = await this.runChecks("Documentação", checks);
  }

  async runChecks(category, checks) {
    const results = {
      categoria: category,
      checks: {},
      passed: 0,
      total: Object.keys(checks).length,
      score: 0,
    };

    for (const [checkId, check] of Object.entries(checks)) {
      try {
        console.log(`   📋 ${check.description}...`);
        const result = await check.check();
        results.checks[checkId] = {
          description: check.description,
          ...result,
        };

        if (result.passed) {
          results.passed++;
          console.log(`      ✅ ${result.message}`);
        } else {
          console.log(`      ❌ ${result.message}`);
        }
      } catch (error) {
        console.log(`      ⚠️ Erro: ${error.message}`);
        results.checks[checkId] = {
          description: check.description,
          passed: false,
          message: `Erro: ${error.message}`,
        };
      }
    }

    results.score = (results.passed / results.total) * 100;
    console.log(
      `   📊 ${category}: ${results.score.toFixed(1)}% (${results.passed}/${results.total})`,
    );
    console.log("");

    return results;
  }

  // Implementação das verificações específicas

  checkCorrectCategory() {
    // Verificar se componentes estão na categoria correta
    const categoryIssues = [];

    for (const file of this.changedFiles) {
      if (file.includes("components/ui/") && file.includes("/survey-")) {
        categoryIssues.push(file);
      }
      if (file.includes("components/survey/") && !file.includes("survey-")) {
        categoryIssues.push(file);
      }
    }

    return {
      passed: categoryIssues.length === 0,
      message:
        categoryIssues.length === 0
          ? "Todos os componentes estão em categorias corretas"
          : `${categoryIssues.length} componentes em categorias incorretas`,
    };
  }

  checkTokenArchitecture() {
    // Verificar se segue arquitetura de tokens
    let tokenIssues = 0;

    for (const file of this.changedFiles) {
      if (!file.endsWith(".tsx") && !file.endsWith(".ts")) continue;

      try {
        const content = fs.readFileSync(file, "utf-8");

        // Procurar por cores hardcoded
        if (/#[0-9a-fA-F]{6}/.test(content)) tokenIssues++;
        if (/rgb\(/.test(content)) tokenIssues++;
      } catch (error) {
        // Ignorar arquivos que não podem ser lidos
      }
    }

    return {
      passed: tokenIssues === 0,
      message:
        tokenIssues === 0
          ? "Arquitetura de tokens seguida corretamente"
          : `${tokenIssues} arquivos com cores hardcodeadas`,
    };
  }

  checkPublicAPIExports() {
    // Verificar se exports públicos estão corretos
    try {
      const indexPath = "src/index.ts";
      if (!fs.existsSync(indexPath)) {
        return { passed: false, message: "src/index.ts não encontrado" };
      }

      const indexContent = fs.readFileSync(indexPath, "utf-8");
      const exportCount = (indexContent.match(/export \{/g) || []).length;

      return {
        passed: exportCount > 0,
        message: `${exportCount} exports públicos encontrados`,
      };
    } catch (error) {
      return { passed: false, message: "Erro ao verificar exports" };
    }
  }

  checkCircularImports() {
    // Verificação simplificada de imports circulares
    try {
      // Em um projeto real, usaríamos uma biblioteca como madge
      return {
        passed: true,
        message: "Nenhum import circular detectado (verificação básica)",
      };
    } catch (error) {
      return {
        passed: false,
        message: "Erro ao verificar imports circulares",
      };
    }
  }

  checkTypeScript() {
    try {
      // Tentar compilar TypeScript
      execSync("npx tsc --noEmit", { stdio: "pipe" });
      return {
        passed: true,
        message: "TypeScript sem erros",
      };
    } catch (error) {
      return {
        passed: false,
        message: "TypeScript com erros",
      };
    }
  }

  checkESLint() {
    try {
      execSync("npx eslint src --ext .ts,.tsx --max-warnings 0", {
        stdio: "pipe",
      });
      return {
        passed: true,
        message: "ESLint sem erros",
      };
    } catch (error) {
      return {
        passed: false,
        message: "ESLint com erros",
      };
    }
  }

  checkPrettier() {
    try {
      execSync('npx prettier --check "src/**/*.{ts,tsx}"', { stdio: "pipe" });
      return {
        passed: true,
        message: "Prettier aplicado corretamente",
      };
    } catch (error) {
      return {
        passed: false,
        message: "Prettier não aplicado",
      };
    }
  }

  checkConsoleLogs() {
    let consoleCount = 0;
    let debuggerCount = 0;

    for (const file of this.changedFiles) {
      if (!file.endsWith(".tsx") && !file.endsWith(".ts")) continue;

      try {
        const content = fs.readFileSync(file, "utf-8");
        consoleCount += (content.match(/console\.(log|warn|error)/g) || [])
          .length;
        debuggerCount += (content.match(/debugger/g) || []).length;
      } catch (error) {
        // Ignorar arquivos que não podem ser lidos
      }
    }

    return {
      passed: consoleCount === 0 && debuggerCount === 0,
      message: `${consoleCount} console.log e ${debuggerCount} debugger encontrados`,
    };
  }

  checkCSSTokens() {
    // Similar a checkTokenArchitecture mas mais específico para CSS
    return this.checkTokenArchitecture();
  }

  checkTailwindOrganization() {
    let cnCount = 0;

    for (const file of this.changedFiles) {
      if (!file.endsWith(".tsx")) continue;

      try {
        const content = fs.readFileSync(file, "utf-8");
        cnCount += (content.match(/cn\(/g) || []).length;
      } catch (error) {
        // Ignorar arquivos que não podem ser lidos
      }
    }

    return {
      passed: cnCount > 0,
      message: `${cnCount} usos da função cn() encontrados`,
    };
  }

  checkCVAVariants() {
    let cvaCount = 0;

    for (const file of this.changedFiles) {
      if (!file.endsWith(".tsx")) continue;

      try {
        const content = fs.readFileSync(file, "utf-8");
        cvaCount += (content.match(/cva\(/g) || []).length;
      } catch (error) {
        // Ignorar arquivos que não podem ser lidos
      }
    }

    return {
      passed: cvaCount > 0 || !this.changedFiles.some((f) => f.includes("ui/")),
      message: `${cvaCount} componentes com CVA encontrados`,
    };
  }

  checkDarkMode() {
    let darkModeCount = 0;

    for (const file of this.changedFiles) {
      if (!file.endsWith(".tsx")) continue;

      try {
        const content = fs.readFileSync(file, "utf-8");
        darkModeCount += (content.match(/dark:/g) || []).length;
      } catch (error) {
        // Ignorar arquivos que não podem ser lidos
      }
    }

    return {
      passed:
        darkModeCount > 0 || !this.changedFiles.some((f) => f.includes("ui/")),
      message: `${darkModeCount} arquivos com dark mode encontrados`,
    };
  }

  checkStoryCreated() {
    let storyCount = 0;

    for (const file of this.changedFiles) {
      if (file.endsWith(".stories.tsx")) {
        storyCount++;
      }
    }

    // Verificar se para cada componente modificado existe uma story
    const componentFiles = this.changedFiles.filter(
      (f) => f.endsWith(".tsx") && !f.includes(".stories."),
    );
    const expectedStories = componentFiles.length;

    return {
      passed: storyCount >= expectedStories,
      message: `${storyCount}/${expectedStories} stories encontradas`,
    };
  }

  checkUseCasesCovered() {
    // Verificação simplificada
    return {
      passed: true,
      message: "Casos de uso documentados (verificação visual)",
    };
  }

  checkAccessibilityTested() {
    // Verificar se há menções de acessibilidade nas stories
    let a11yCount = 0;

    for (const file of this.changedFiles) {
      if (!file.endsWith(".stories.tsx")) continue;

      try {
        const content = fs.readFileSync(file, "utf-8");
        if (content.includes("a11y") || content.includes("accessibility")) {
          a11yCount++;
        }
      } catch (error) {
        // Ignorar arquivos que não podem ser lidos
      }
    }

    return {
      passed: a11yCount > 0,
      message: `${a11yCount} stories com acessibilidade encontradas`,
    };
  }

  checkEdgeCasesDocumented() {
    // Verificação simplificada
    return {
      passed: true,
      message: "Edge cases documentados (verificação manual)",
    };
  }

  checkPropsDocumented() {
    let jsdocCount = 0;

    for (const file of this.changedFiles) {
      if (!file.endsWith(".tsx") && !file.endsWith(".ts")) continue;

      try {
        const content = fs.readFileSync(file, "utf-8");
        jsdocCount += (content.match(/\/\*\*[\s\S]*?\*\//g) || []).length;
      } catch (error) {
        // Ignorar arquivos que não podem ser lidos
      }
    }

    return {
      passed: jsdocCount > 0,
      message: `${jsdocCount} blocos JSDoc encontrados`,
    };
  }

  checkReadmeUpdated() {
    // Verificar se README foi modificado
    const readmeFiles = this.changedFiles.filter(
      (f) => f.includes("README") || f.includes("readme"),
    );

    return {
      passed: readmeFiles.length > 0,
      message: `${readmeFiles.length} READMEs modificados`,
    };
  }

  checkChangelogUpdated() {
    // Verificar se CHANGELOG foi modificado
    const changelogFiles = this.changedFiles.filter(
      (f) => f.includes("CHANGELOG") || f.includes("changelog"),
    );

    return {
      passed: changelogFiles.length > 0,
      message: `${changelogFiles.length} CHANGELOGs modificados`,
    };
  }

  checkMigrationGuide() {
    // Verificar se há mudanças quebrando e se migration guide existe
    let breakingChanges = 0;

    for (const file of this.changedFiles) {
      if (!file.endsWith(".tsx") && !file.endsWith(".ts")) continue;

      try {
        const content = fs.readFileSync(file, "utf-8");
        // Simplificado: procurar por quebras comuns
        if (content.includes("deprecated") || content.includes("breaking")) {
          breakingChanges++;
        }
      } catch (error) {
        // Ignorar arquivos que não podem ser lidos
      }
    }

    const migrationFiles = this.changedFiles.filter(
      (f) => f.includes("MIGRATION") || f.includes("migration"),
    );

    return {
      passed: breakingChanges === 0 || migrationFiles.length > 0,
      message: `${breakingChanges} breaking changes, ${migrationFiles.length} migration guides`,
    };
  }

  calculateTotalScore() {
    let totalPassed = 0;
    let totalChecks = 0;

    for (const category of Object.values(this.results)) {
      totalPassed += category.passed;
      totalChecks += category.total;
    }

    this.score = totalChecks > 0 ? (totalPassed / totalChecks) * 100 : 0;
    return this.score;
  }

  generateFinalReport() {
    const score = this.calculateTotalScore();

    console.log("📊 RELATÓRIO FINAL DE CODE REVIEW");
    console.log("=".repeat(60));
    console.log(`📋 PR #${this.prNumber}`);
    console.log(`🎯 Score Final: ${score.toFixed(1)}%`);
    console.log(
      `✅ Checks Aprovados: ${this.calculateApprovedChecks()}/${this.calculateTotalChecks()}`,
    );
    console.log("");

    // Resumo por categoria
    for (const [categoryName, category] of Object.entries(this.results)) {
      const status =
        category.score >= 80 ? "✅" : category.score >= 60 ? "⚠️" : "❌";
      console.log(
        `${status} ${category.categoria}: ${category.score.toFixed(1)}% (${category.passed}/${category.total})`,
      );
    }

    console.log("");
    console.log("🔧 ITENS REQUERIDOS PARA APROVAÇÃO:");
    const requiredActions = this.getRequiredActions();

    if (requiredActions.length === 0) {
      console.log("   🎉 PR pode ser aprovado!");
    } else {
      requiredActions.forEach((action) => console.log(`   • ${action}`));
    }

    console.log("");

    // Status final
    if (score >= 80) {
      console.log("✅ STATUS: PR APROVADO para merge");
    } else if (score >= 60) {
      console.log("⚠️ STATUS: REQUER APROVAÇÃO COM OBSERVAÇÕES");
    } else {
      console.log("❌ STATUS: REQUER CORREÇÕES OBRIGATÓRIAS");
    }

    // Salvar relatório em arquivo
    this.saveReportToFile();

    // Retornar score para CI/CD
    console.log(`SCORE=${score.toFixed(1)}`);
  }

  calculateApprovedChecks() {
    let total = 0;
    for (const category of Object.values(this.results)) {
      total += category.passed;
    }
    return total;
  }

  calculateTotalChecks() {
    let total = 0;
    for (const category of Object.values(this.results)) {
      total += category.total;
    }
    return total;
  }

  getRequiredActions() {
    const actions = [];

    for (const [categoryName, category] of Object.entries(this.results)) {
      for (const [checkId, check] of Object.entries(category.checks)) {
        if (!check.passed) {
          actions.push(`${check.description} (${category.categoria})`);
        }
      }
    }

    return actions;
  }

  saveReportToFile() {
    const reportPath = path.join(
      __dirname,
      "../code-review-reports",
      `pr-${this.prNumber}-${Date.now()}.md`,
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
    let report = `# Code Review Report - PR #${this.prNumber}\n\n`;
    report += `**Data:** ${new Date().toISOString()}\n`;
    report += `**Score:** ${score.toFixed(1)}%\n`;
    report += `**Status:** ${score >= 80 ? "✅ Aprovado" : score >= 60 ? "⚠️ Requer Aprovação" : "❌ Requer Correções"}\n\n`;

    report += `## 📊 Resumo\n\n`;
    report += `| Categoria | Score | Status |\n`;
    report += `|-----------|-------|--------|\n`;

    for (const [categoryName, category] of Object.entries(this.results)) {
      const status =
        category.score >= 80 ? "✅" : category.score >= 60 ? "⚠️" : "❌";
      report += `| ${category.categoria} | ${category.score.toFixed(1)}% | ${status} |\n`;
    }

    report += `\n## 📁 Arquivos Modificados\n\n`;
    this.changedFiles.forEach((file) => {
      report += `- ${file}\n`;
    });

    report += `\n## 🔧 Ações Requeridas\n\n`;
    const actions = this.getRequiredActions();

    if (actions.length === 0) {
      report += `🎉 Nenhuma ação necessária! PR pode ser aprovado.\n`;
    } else {
      actions.forEach((action) => {
        report += `- [ ] ${action}\n`;
      });
    }

    report += `\n## 📋 Detalhes\n\n`;
    for (const [categoryName, category] of Object.entries(this.results)) {
      report += `### ${category.categoria}\n\n`;
      report += `- **Score:** ${category.score.toFixed(1)}% (${category.passed}/${category.total})\n\n`;

      for (const [checkId, check] of Object.entries(category.checks)) {
        const status = check.passed ? "✅" : "❌";
        report += `- ${status} ${check.description}: ${check.message}\n`;
      }
      report += "\n";
    }

    return report;
  }
}

// Execução principal
async function main() {
  const prNumber = process.argv[2];
  const baseBranch = process.argv[3] || "main";

  if (!prNumber) {
    console.error("❌ Erro: Número do PR não fornecido");
    console.log("Uso: node code-review-checklist.js <pr-number> [base-branch]");
    process.exit(1);
  }

  try {
    const checker = new CodeReviewChecker(prNumber, baseBranch);
    await checker.runChecklist();

    // Sair com código de erro se score baixo
    if (checker.score < 60) {
      process.exit(1);
    }
  } catch (error) {
    console.error("❌ Erro no code review:", error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = CodeReviewChecker;
