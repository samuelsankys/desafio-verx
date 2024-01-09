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
  },
}
