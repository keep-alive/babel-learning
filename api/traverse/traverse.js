const traverse = require('@babel/traverse').default;
const parser = require('@babel/parser');
const types = require('@babel/types');
const generate = require('@babel/generator').default;
const sourceCode = `
    function sum(a,b) {
        return a + b;
    }
`
const ast = parser.parse(sourceCode);
traverse(ast,{
    BinaryExpression: {
        enter(path) {
            let { node: { left }} = path;
            let right = types.numericLiteral(2);
            let newExp = types.BinaryExpression('*',left,right);
            path.replaceWith(newExp)
            path.skip()
        }
    }
})
const { code, map } = generate(ast);
console.log(code);