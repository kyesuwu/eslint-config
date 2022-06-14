module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        "react",
        "react-hooks"
    ],
    extends: [
        "./index.js",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    rules: {
        "react/boolean-prop-naming": "warn",
        "react/button-has-type": "warn",
        "react/default-props-match-prop-types": "warn",
        "react/no-access-state-in-setstate": "warn",
        "react/no-did-mount-set-state": "warn",
        "react/no-did-update-set-state": "warn",
        "react/no-invalid-html-attribute": "warn",
        "react/no-this-in-sfc": "warn",
        "react/no-typos": "warn",
        "react/no-unused-prop-types": "warn",
        "react/no-will-update-set-state": "warn",
        "react/require-default-props": "warn",
        "react/self-closing-comp": "warn",
        // JSX
        "react/jsx-boolean-value": [
            "warn",
            "never"
        ],
        "react/jsx-closing-bracket-location": "warn",
        "react/jsx-closing-tag-location": "warn",
        "react/jsx-equals-spacing": "warn",
        "react/jsx-first-prop-new-line": [
            "warn",
            "multiline"
        ],
        "react/jsx-fragments": "warn",
        "react/jsx-indent": "warn",
        "react/jsx-indent-props": "warn",
        "react/jsx-key": "warn",
        "react/jsx-no-bind": "warn",
        "react/jsx-no-useless-fragment": "warn",
        "react/jsx-pascal-case": "warn",
        "react/jsx-tag-spacing": "warn",
        "react/jsx-wrap-multilines": [
            "warn",
            {
                "declaration": "parens-new-line",
                "assignment": "parens-new-line",
                "return": "parens-new-line",
                "arrow": "parens-new-line",
                "condition": "ignore",
                "logical": "ignore",
                "prop": "ignore"
            }
        ]
    }
}