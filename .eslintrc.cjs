/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    'vue/no-unused-components': 'error',
    'vue/no-undef-components': [
      'error',
      {
        ignorePatterns: ['custom(\\-\\w+)+', 'router(\\-\\w+)+', 'font-awesome-icon', 'Toastify']
      }
    ],
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
