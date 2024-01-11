module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['prettier', 'plugin:@typescript-eslint/recommended', 'standard-with-typescript'],
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: ['**/*.js'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-useless-catch': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/indent': 'off',
    "@typescript-eslint/no-misused-promises": "off"
  },
}
