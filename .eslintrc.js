module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'vue/multi-word-component-names': 0,
    "no-unused-vars": "off",
    "max-len": ["warn", { "code": 80 }]
  },
}
