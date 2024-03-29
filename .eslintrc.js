module.exports = {
  root: true,
  env: { 
    browser: true, 
    amd: true, 
    es6: true 
  },
  extends: [
    'eslint:recommended', 
    'puglin: jsx-a11y/recommended', 
    'plugin:prettier/recommended', 
    'next', 
    'next/core-web-vitals'
  ],
  rules: {
    semi: ['error', 'always'],
  },
};
