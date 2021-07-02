## Babel Plugin
### 名字
推荐格式 babel-plugin-xxx 这样引入插件 plugin 名字的时候就可以简写为xxx，由 babel 自动补充
### 格式
* 函数
    ```
    /**
    * 一般格式
    * @param api template、types等
    * @param options 传入的参数
    * @param dirname 目录名称
    */
    function plugin(api,options,dirname) {
        return {

        }
    }
    ```
    ```
    /**
    * 返回对象一般格式
    * @param inherits 继承某个插件
    * @param visitor traverse修改AST函数
    * @param pre 在遍历前调用
    * @param post 遍历后调用的函数
    * @param manipulateOptions 修改options
    */
    {
    　  inherits: ParentPlugin,
        visitor: {},
        pre(file) {

        },
        post(file) {

        },
        manipulateOptions(options,parserOptions) {}
    }
    ```
* 对象（无法处理参数）

