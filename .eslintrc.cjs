module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
      ecmaVersion: 2022,
      sourceType: 'module'
    },
    env: {
      node: true,
      es2022: true
    },
    plugins: ['@typescript-eslint', 'import', 'simple-import-sort'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'prettier'
    ],
    rules: {
      // Estilo e qualidade
      'no-console': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
  
      // Import organization
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/order': 'off',
      'import/newline-after-import': 'error',
  
      // TypeScript strictness
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  }
  