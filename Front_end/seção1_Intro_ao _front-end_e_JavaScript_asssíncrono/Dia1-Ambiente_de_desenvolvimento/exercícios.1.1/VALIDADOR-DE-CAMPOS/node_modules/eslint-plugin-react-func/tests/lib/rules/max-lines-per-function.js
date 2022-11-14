/**
 * @fileoverview  max lines per function for react
 * @author Lisonglin
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/max-lines-per-function"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("max-lines-per-function", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "  function tooLong() { /* more than 20 lines */  }",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
