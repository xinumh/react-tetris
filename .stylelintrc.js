module.exports = {
  extends: ['stylelint-config-prettier', 'stylelint-config-rational-order'],
  plugins: ['stylelint-order'],
  ignoreFiles: ['node_modules/**/*', 'build/**/*', 'dist/**/*'],
  rules: {
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': ['width', 'height']
  }
}
