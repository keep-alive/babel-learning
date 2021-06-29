const parser = require('@babel/parser');
const sourceCode = `
    import React, { useEffects } from 'react';
`;
const ast = parser.parse(sourceCode,{ sourceType: 'unambiguous' });
console.log(ast)