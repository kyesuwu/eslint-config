module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        'react-native',
    ],
    env: {
        "react-native/react-native": true
    },
    extends: [
        "./react.js",
        "plugin:react-native/all"
    ]
}