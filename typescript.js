const baseConfig = require('.')

const extensionRules = [
    "@typescript-eslint/brace-style",
    "@typescript-eslint/comma-dangle",
    "@typescript-eslint/comma-spacing",
    "@typescript-eslint/default-param-last",
    "@typescript-eslint/dot-notation",
    "@typescript-eslint/func-call-spacing",
    "@typescript-eslint/indent",
    "@typescript-eslint/init-declarations",
    "@typescript-eslint/keyword-spacing",
    "@typescript-eslint/lines-between-class-members",
    "@typescript-eslint/no-array-constructor",
    "@typescript-eslint/no-dupe-class-members",
    "@typescript-eslint/no-empty-function",
    "@typescript-eslint/no-extra-parens",
    "@typescript-eslint/no-extra-semi",
    "@typescript-eslint/no-implied-eval",
    "@typescript-eslint/no-invalid-this",
    "@typescript-eslint/no-loop-func",
    "@typescript-eslint/no-loss-of-precision",
    "@typescript-eslint/no-magic-numbers",
    "@typescript-eslint/no-redeclare",
    "@typescript-eslint/no-restricted-imports",
    "@typescript-eslint/no-shadow		",
    "@typescript-eslint/no-throw-literal",
    "@typescript-eslint/no-unused-expressions",
    "@typescript-eslint/no-unused-vars",
    "@typescript-eslint/no-use-before-define",
    "@typescript-eslint/no-useless-constructor",
    "@typescript-eslint/object-curly-spacing",
    "@typescript-eslint/padding-line-between-statements",
    "@typescript-eslint/quotes",
    "@typescript-eslint/require-await",
    "@typescript-eslint/return-await",
    "@typescript-eslint/semi",
    "@typescript-eslint/space-before-blocks",
    "@typescript-eslint/space-before-function-paren",
    "@typescript-eslint/space-infix-ops"
]

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        './index.js',
        'plugin:@typescript-eslint/recommended',
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict"
    ],
    rules: {
        "@typescript-eslint/consistent-type-exports": [
            "warn",
            {
                fixMixedExportsWithInlineTypeSpecifier: true
            }
        ],
        "@typescript-eslint/member-delimiter-style": [
            "warn",
            {
                multiline: {
                    delimiter: 'none'
                }
            }
        ],
        "@typescript-eslint/method-signature-style": "warn",
        "@typescript-eslint/no-confusing-void-expression": "warn",
        "@typescript-eslint/no-redundant-type-constituents": "warn",
        "@typescript-eslint/no-require-imports": "warn",
        "@typescript-eslint/no-useless-empty-export": "warn",
        "@typescript-eslint/prefer-enum-initializers": "warn",
        "@typescript-eslint/prefer-readonly": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/require-array-sort-compare": [
            "warn",
            {
                ignoreStringArrays: true
            }
        ],
        "@typescript-eslint/switch-exhaustiveness-check": "warn",
        "@typescript-eslint/type-annotation-spacing": "warn",
        "@typescript-eslint/consistent-indexed-object-style": [
            "warn",
            "record"
        ],
        // Extension rules
        ...Object.fromEntries(
            extensionRules
                .map(extRuleName => [
                    extRuleName,
                    baseConfig.rules[extRuleName.replace("@typescript-eslint/", "")]
                ])
                .filter(([, v]) => v)
        ),
        ...Object.fromEntries(
            extensionRules
                .map(extRuleName => [
                    extRuleName.replace("@typescript-eslint/", ""),
                    "off"
                ])
                .filter(([, v]) => v)
        )
    }
}