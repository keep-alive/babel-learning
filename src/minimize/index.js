const parser = require('@babel/parser');
const { transformFromAstSync } = require('@babel/core');
const fs = require('fs');
const path = require('path');
const compress = require('../../plugins/babel-plugin-compress');
const confuse = require('../../plugins/babel-plugin-confuse');
const sourceCode = fs.readFileSync(path.join(__dirname,'source.js'),'utf-8');
const Ast = parser.parse(sourceCode,{
    sourceType: "module",
});
const { code, map, ast } = transformFromAstSync(
    Ast,
    sourceCode,
    {
        generatorOpts: {
            comments: false
        },
        sourceMaps: true,
        sourceFileName: 'source.js',
        ast: true,
        compact: true,
        plugins:[
            [confuse],
            [compress]
        ]
    }
);
console.log(code);