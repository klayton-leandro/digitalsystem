module.exports = {
  bracketSpacing: true,
  jsxSingleQuote: false,
  printWidth: 100,
  proseWrap: 'always',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  plugins: [
    'prettier-plugin-packagejson',
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  // @trivago/prettier-plugin-sort-imports config
  importOrder: ['^[./]'],
  importOrderSeparation: true,
  importOrderCaseInsensitive: true,
  // end @trivago/prettier-plugin-sort-imports config
}
