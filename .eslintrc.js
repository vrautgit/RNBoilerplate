module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
        'jest': true,
    },
    'rules': {
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        'comma-dangle': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-async-promise-executor': 'off'
    },
    'globals': {
        "fetch": false
    }
}