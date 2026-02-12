# ESLint + Prettier Config

## Descrição
Configuração de linting e formatação de código para o Foresight Design System, garantindo consistência e qualidade.

## Regras Obrigatórias

### DO
- ✅ Configurar ESLint com regras consistentes
- ✅ Bloquear imports relativos com `no-restricted-imports`
- ✅ Integrar Prettier com ESLint
- ✅ Usar scripts de lint no package.json
- ✅ Configurar pre-commit hooks (husky + lint-staged)
- ✅ Verificar lint em CI/CD

### DON'T
- ❌ Ignorar erros de lint sem justificativa
- ❌ Usar configurações conflitantes entre ESLint e Prettier
- ❌ Desabilitar regras sem documentar razão
- ❌ Esquecer de rodar lint antes de commit
- ❌ Permitir imports relativos entre pacotes

## Exemplos de Código

### Configuração ESLint
```javascript
// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['../*'],
            message: 'Use absolute imports instead of relative parent imports',
          },
        ],
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
  },
};
```

### Configuração Prettier
```javascript
// .prettierrc.js
module.exports = {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  printWidth: 100,
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'lf',
};
```

### Scripts de Lint
```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx --max-warnings=0",
    "lint:fix": "eslint . --ext .ts,.tsx --fix",
    "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json,css,md}\"",
    "format:check": "prettier --check \"**/*.{ts,tsx,js,jsx,json,css,md}\"",
    "type-check": "tsc --noEmit",
    "check-all": "npm run type-check && npm run lint && npm run format:check"
  }
}
```

### Pre-commit Hooks
```json
{
  "devDependencies": {
    "husky": "^9.0.0",
    "lint-staged": "^15.2.0"
  },
  "scripts": {
    "prepare": "husky install"
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{js,jsx,json,css,md}": [
      "prettier --write"
    ]
  }
}
```

## Checklist de Verificação
- [ ] ESLint configurado com regras apropriadas
- [ ] Prettier configurado e integrado
- [ ] `no-restricted-imports` bloqueia imports relativos
- [ ] Scripts de lint definidos no package.json
- [ ] Husky configurado com hooks pre-commit
- [ ] lint-staged configurado para arquivos staged
- [ ] CI/CD verifica lint, format e type-check

## Referencias Uteis
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)
