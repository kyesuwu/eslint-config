module.exports = {
    plugins: [
        "promise",
    ],
    extends: [
        "eslint:recommended",
        "plugin:promise/recommended",
    ],
    rules: {
        // Possible problems
        "array-callback-return": [
            "warn",
            {
                "allowImplicit": true
            }
        ],
        "no-duplicate-imports": "warn",
        "no-promise-executor-return": "error",
        "no-self-compare": "warn",
        "no-use-before-define": "error",
        // Suggestions
        "arrow-body-style": [
            "warn",
            "as-needed"
        ],
        "camelcase": "warn",
        "capitalized-comments": [
            "warn",
            "always",
            {
                "ignoreInlineComments": true
            }
        ],
        "class-methods-use-this": "error",
        // "curly": [
        //     "warn",
        //     "multi"
        // ],
        "default-case": "error",
        "default-case-last": "error",
        "default-param-last": "warn",
        "dot-notation": "warn",
        "eqeqeq": [
            "warn",
            "smart"
        ],
        "func-style": [
            "warn",
            "declaration",
            {
                "allowArrowFunctions": true
            }
        ],
        "grouped-accessor-pairs": [
            "warn",
            "getBeforeSet"
        ],
        "guard-for-in": "warn",
        "multiline-comment-style": "warn",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-caller": "error",
        "no-confusing-arrow": "warn",
        "no-continue": "warn",
        "no-empty-function": "error",
        "no-eq-null": "warn",
        "no-eval": "error",
        "no-extra-bind": "error",
        "no-labels": "error",
        "no-floating-decimal": "warn",
        "no-implicit-coercion": "warn",
        "no-implied-eval": "error",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "warn",
        "no-loop-func": "error",
        "no-mixed-operators": "warn",
        "no-multi-assign": "error",
        "no-negated-condition": "warn",
        "no-nested-ternary": "warn",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-wrappers": "error",
        "no-param-reassign": "warn",
        "no-plusplus": [
            "warn",
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "no-proto": "error",
        "no-return-assign": [
            "error",
            "always"
        ],
        "no-script-url": "error",
        "no-shadow": "warn",
        "no-throw-literal": "warn",
        "no-undef-init": "error",
        "no-unneeded-ternary": [
            "warn",
            {
                "defaultAssignment": false
            }
        ],
        "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
        "no-unused-expressions": [
            "warn",
            {
                "allowTernary": true
            }
        ],
        "no-useless-call": "error",
        "no-useless-computed-key": "warn",
        "no-useless-concat": "warn",
        "no-useless-constructor": "warn",
        "no-useless-rename": "warn",
        "no-useless-return": "warn",
        "no-var": "error",
        "object-shorthand": "warn",
        "operator-assignment": "warn",
        "prefer-arrow-callback": "warn",
        "prefer-const": "error",
        "prefer-exponentiation-operator": "warn",
        "prefer-object-spread": "warn",
        "prefer-rest-params": "warn",
        "prefer-spread": "warn",
        "prefer-template": "warn",
        "quote-props": [
            "warn",
            "as-needed"
        ],
        "radix": "warn",
        "spaced-comment": "warn",
        "yoda": "warn",
        // Formatting
        "array-bracket-newline": [
            "warn",
            "consistent"
        ],
        "array-bracket-spacing": "warn",
        "array-element-newline": [
            "warn",
            "consistent"
        ],
        "arrow-parens": [
            "warn",
            "as-needed"
        ],
        "arrow-spacing": [
            "warn",
            {
                "before": true,
                "after": true
            }
        ],
        "block-spacing": "warn",
        "brace-style": [
            "warn",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "comma-dangle": [
            "warn",
            "never"
        ],
        "comma-spacing": "warn",
        "comma-style": "warn",
        "computed-property-spacing": "warn",
        "dot-location": ["warn", "property"],
        "func-call-spacing": "warn",
        "function-call-argument-newline": [
            "warn",
            "consistent"
        ],
        "function-paren-newline": ["warn", "multiline-arguments"],
        "implicit-arrow-linebreak": "warn",
        "indent": [
            "warn",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "jsx-quotes": "warn",
        "key-spacing": "warn",
        "keyword-spacing": "warn",
        "linebreak-style": "warn",
        "lines-around-comment": [
            "warn",
            {
                "beforeBlockComment": true,
                "allowBlockStart": true,
                "allowBlockEnd": true,
                "allowObjectStart": true,
                "allowObjectEnd": true,
                "allowArrayStart": true,
                "allowArrayEnd": true,
                "allowClassStart": true,
                "allowClassEnd": true
            }
        ],
        "lines-between-class-members": "warn",
        "multiline-ternary": [
            "warn",
            "always-multiline"
        ],
        "new-parens": "warn",
        "newline-per-chained-call": "warn",
        "no-extra-parens": [
            "warn",
            "all",
            {
                "nestedBinaryExpressions": false,
                "ignoreJSX": "multi-line",
            }
        ],
        "no-mixed-spaces-and-tabs": "warn",
        "no-multi-spaces": "warn",
        "no-multiple-empty-lines": [
            "warn",
            {
                "max": 1,
                "maxEOF": 0
            }
        ],
        "no-tabs": "warn",
        "no-trailing-spaces": "warn",
        "no-whitespace-before-property": "warn",
        "nonblock-statement-body-position": "warn",
        "object-curly-newline": [
            "warn",
            {
                "consistent": true,
                "minProperties": 2
            }
        ],
        "object-curly-spacing": [
            "warn",
            "always"
        ],
        "object-property-newline": [
            "warn",
            {
                "allowAllPropertiesOnSameLine": true
            }
        ],
        "operator-linebreak": "warn",
        "padded-blocks": [
            "warn",
            "never"
        ],
        "quotes": "warn",
        "rest-spread-spacing": "warn",
        "semi": [
            "warn",
            "never"
        ],
        "space-before-blocks": "warn",
        "space-before-function-paren": [
            "warn",
            {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "space-in-parens": "warn",
        "space-infix-ops": "warn",
        "space-unary-ops": "warn",
        "switch-colon-spacing": "warn",
        "template-curly-spacing": "warn",
        "template-tag-spacing": "warn",
        "wrap-regex": "warn"
        // plugin:promise
    }
}