# Babel 介绍

## Babel 用途

* 转译esnext jsx ts等到目标环境支持的js
* 做特定用途转换（例如函数插入特定代码）
* 对代码结构分析检查

## Babel source to source转换
* 通过 parser 把源码转成抽象语法树（AST）

    - 词法分析 把代码细分成无法再拆的token
    - 语法分析 对token遍历组装成AST

* 遍历 AST，对 AST 进行增删改
* 把编辑后的 AST 转成目标代码，并生成 sourcemap

## AST（Abstract Syntax Tree）

AST是对源代码的抽象，标识符、语句、表达式等都有对应的AST，可通过 [axtexplorer.net](https://astexplorer.net/)查看。
* File AST最外层
* Program 程序节点
* Comment 注释

    - 块注释(CommentBlock)
    - 行内注释(CommentLine)

* Literal 字面量(StringLiteral、NullLiteral...)
* Identifier 标识符，变量名、属性名、参数名等各种声明和引用的名字
* Statement 语句即独立执行的单位(if、for、return...)
* Declaration 声明语句，在作用域内声明一个变量、函数、class、import、export 等
* Expression 表达式(FunctionExpression、ArrayExpression、AssignmentExpression...)
* Class
* import 
    - default import => ImportDefaultSpecifier
    - named import => ImportSpecifier
    - namespaced import => ImportNamespaceSpecifier
* export 
    - default export => ExportDefaultDeclaration
    - named export => ExportNamedDeclaration
    - all export => ExportAllDeclaration 
* 公共属性
    - type 节点类型
    - loc 记录行号列号