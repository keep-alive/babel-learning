var parser = require('@babel/parser');
var sourceCode = 'import * as b from "a"';
var ast = parser.parse(sourceCode,{ sourceType: 'unambiguous' });
console.log(ast)
