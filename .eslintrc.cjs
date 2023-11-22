module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb-typescript',
    'prettier',
    'plugin:import/typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
  },
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'import',
    'prettier',
    'react'
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ]
  }
};
