const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const template = require('@babel/template').default;
const generate = require('@babel/generator').default;
const fs = require('fs');
const path = require('path');
const sourceCode = fs.readFileSync(path.join(__dirname,'source.js'),'utf-8');
const ast = parser.parse(sourceCode,{
    sourceType: "module",
    plugins: [
        "jsx",
    ],
});
const newVariableDeclaration = template.ast('const filename = source.js');
traverse(ast,{
    Program(path) {
        const { node: { body } } = path;
        path.node.body = [ newVariableDeclaration, ... body ];
    }
})
const { code, map } = generate(ast, { sourceMaps: true, sourceFileName: 'source.js' });
console.log(map)
// console.log(template.ast('var filename = source.js'))