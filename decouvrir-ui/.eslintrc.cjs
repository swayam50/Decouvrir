module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'standard',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
        'indent': ['error', 4],
        'semi': [2, 'always'],
        'space-before-function-paren': [
            'error',
            {
                'named': 'never',
                'asyncArrow': 'always',
                'anonymous': 'always'
            }
        ],
        'no-unused-vars': 'warn',
        'react/prop-types': 'off',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true }
        ]
    }
}
