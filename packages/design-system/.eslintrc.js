module.exports = {
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    'prefer-const': 'error',
    'no-var': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
                checkNode(node.value.consequent);
                checkNode(node.value.alternate);
              }
            }
          },
        };
      },
    },
    // Recomenda usar a função cn() para classes condicionais
    "react/prefer-cn-utility": {
      meta: {
        type: "suggestion",
        docs: {
          description:
            "Prefer using cn() utility for conditional className handling",
        },
      },
      create(context) {
        return {
          JSXAttribute(node) {
            if (
              node.name.name === "className" &&
              node.value &&
              node.value.type === "JSXExpressionContainer" &&
              node.value.expression.type === "ConditionalExpression"
            ) {
              context.report({
                node,
                message:
                  "Consider using cn() utility for safer className handling to avoid DOMTokenList errors.",
              });
            }
          },
        };
      },
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
