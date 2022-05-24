module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },

    extends: [
        "plugin:react/recommended",
        "airbnb",
        "airbnb/hooks",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "react-hooks"],
    rules: {
        "max-len": [
            "error",
            {
                code: 100,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "jsx-a11y/label-has-associated-control": [
            2,
            { required: { some: ["nesting", "id"] } },
        ],
        "no-use-before-define": ["error", { functions: false }],
        "comma-dangle": [
            "error",
            {
                arrays: "always-multiline",
                objects: "always-multiline",
                imports: "always-multiline",
                exports: "always-multiline",
                functions: "ignore",
            },
        ],
        "arrow-parens": ["error", "as-needed"],
        "linebreak-style": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/destructuring-assignment": "off",
        "react/forbid-prop-types": "off",
        "react/prefer-stateless-function": "off",
        "react/no-danger": "off",
        "react/static-property-placement": "off",
        "react/jsx-props-no-spreading": "off",
        "react/state-in-constructor": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/react-in-jsx-scope": "off",
        "react/function-component-definition": [
            "error",
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "jsx-a11y/anchor-is-valid": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "import/prefer-default-export": "off",
        "implicit-arrow-linebreak": "off",
        "no-plusplus": "off",
        "object-curly-newline": "off",
        "default-param-last": "off",
    },
};