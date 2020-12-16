module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true
  },
  "plugins": [
    "react",
    "react-hooks"
  ],
  "parser": "babel-eslint",
  "rules": {
    'dot-notation': 0,
    "strict": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'no-unused-vars': 0,
    'react/destructuring-assignment': 0,
    'no-named-as-default-member': 0,
    "react/forbid-prop-types": 0,
    "no-unused-expressions": 0,
    "import/no-extraneous-dependencies": 0,
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "react/jsx-props-no-spreading": 0, // No warning that using {...props} in <Tag />
    "import/no-unresolved": 0,
    "jsx-a11y/media-has-caption": 0,
    "no-console": 0,
    "no-void": 0,
    "prefer-arrow-callback": 0,
    "func-names": 0,
    "react/jsx-no-bind": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "no-param-reassign": 0
  },
};
