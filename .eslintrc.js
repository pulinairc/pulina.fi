module.exports = {
  ignorePatterns: ['content/themes/annastiina/js/dist/*.js', 'content/themes/annastiina/node_modules/**/*.js', 'temp.js', 'content/themes/annastiina/js/src/front-end.js', '**/gulp/**/*.js', '**/gulp/*.js', 'gulpfile.js'],
  parser: 'babel-eslint',
  extends: 'eslint-config-airbnb/base',
  rules: {
    indent: ['error', 2],
  },
  env: {
    browser: true,
    jquery: true,
  },
};
