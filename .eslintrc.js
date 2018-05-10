module.exports = {
  "extends": "airbnb-base",
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "src/"]
      }
    }
  },
  "rules": {
    "import/prefer-default-export": 0,
    "no-console": 0,
    "arrow-body-style": 0,
    "global-require": 0,
    "object-curly-newline": 0,
    "import/no-dynamic-require": 0
  },
};
