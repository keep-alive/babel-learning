## @babel/generator

把 AST 打印成字符串，是一个从根节点递归打印的过程，对不同的 AST 节点做不同的处理，在这个过程中把抽象语法树中省略掉的一些分隔符重新加回来，并生成 sourcemap
```
function generate(AST, options, code) {}
```
### sourcemap 
* 主要用来把报错定位到源代码

```
/**
 * 一般格式
 * @param version
 * @param file 转换后的文件名
 * @param sources 源文件名
 * @param names 转换前的所有变量名和属性名
 * @param mappings 转换前代码和转换后代码的映射关系的集合
 * @param sourceRoot 转换前的文件所在的目录。转换前后的文件在同一目录，值为空
 */
{
　  version : 3,
    file: "",
    sourceRoot : "",
    sources: ['source.js'],
    names: [
        "useEffect",
        "props", 
        "console", 
        "log", 
        "document",
        "querySelector",
        "name",
    ],
    mappings: ';AAAA,SAASA,SAAT,QAA0B'
}
```

[@babel/generator](https://babeljs.io/docs/en/babel-generator)