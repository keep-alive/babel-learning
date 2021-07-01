const types = require('@babel/types');
const generate = require('@babel/generator').default;
const left = types.numericLiteral(2);
const right = types.numericLiteral(6);
const ast = types.BinaryExpression('*',left,right);
const { code, map } = generate(ast);
console.log(code);