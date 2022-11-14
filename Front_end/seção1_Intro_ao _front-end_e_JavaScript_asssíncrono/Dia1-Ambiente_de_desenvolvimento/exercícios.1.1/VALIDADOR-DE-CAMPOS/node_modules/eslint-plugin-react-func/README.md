# eslint-plugin-react-func

React function rules for ESLint

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-react-func`:

```
$ npm install eslint-plugin-react-func --save-dev
```

or

```
$ yarn add eslint-plugin-react-func -D
```


## Usage

Add `react-func` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "react-func"
    ]
}
```



Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "react-func/max-lines-per-function": ["warn", 20],
        "react-func/max-combined-conditions": ["error", 1]
    }
}
```

## Supported Rules
&nbsp;
# max-lines-per-function
#### This rule will ignore any functions that contains JSX elements, custom hooks are also ignored.
## Options
   - "max" (default 50) enforces a maximum number of lines in a function.
   - "skipBlankLines" (default false) ignore lines made up purely of whitespace.
   - "skipComments" (default false) ignore lines containing just comments.
   - "IIFEs" (default false) include any code included in IIFEs.

```json
{
    "rules": {
        "react-func/max-lines-per-function": [
            "warn",
            {
                "max": 20,
                "skipBlankLines": true,
                "skipComments": true,
                "IIFEs": true
            }
        ],
    }
}
```

### Bad
```javascript
    /*eslint react-func/max-lines-per-function: ["error", 2]*/
    function foo() {
        var foo = 0;
        var bar = 0;
        var baz = 0;
    }
```

### Good
```javascript
    /*eslint react-func/max-lines-per-function: ["error", 2]*/
    function foo() {
        var foo = 0;
        var bar = 0;
    }
```

# max-combined-conditions
## Options
This rule has a numeric option (defaulted to 1) 


```json
{
    "rules": {
        "react-func/max-combined-conditions": ["error", 1],
    }
}
```
### Bad
```javascript
    /*eslint react-func/max-combined-conditions: ["error", 0]*/
    if (a < b && b > c) {
        a = c
    }
```
### Good
```javascript
    /*eslint react-func/max-combined-conditions: ["error", 0]*/
    const isBGreaterThanOthers = a < b && b > c

     if (isBGreaterThanOthers) {
        a = c
    }
```
