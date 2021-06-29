## @babel/traverse 
```
function traverse(AST,visitor) {
    ...
}
```

### visitor函数或对象

* 函数 enter时调用的函数
* 对象 可以指定enter或exit函数（enter 函数执行完，再遍历当前节点的子节点，最后调用exit函数）。

```
{
    Identifier (path, state) {},
    StringLiteral: {
        enter (path, state) {},
        exit (path, state) {}
    }
}
```
#### 函数参数
* path 遍历过程的路径并保留上下文信息
    - path.node 当前节点
    - path.get、path.set 获取和设置当前节点属性的 path
    - path.parent 指向父级 AST 节点
    - path.getSibling、path.getNextSibling、path.getPrevSibling 获取兄弟节点
    - path.isXxx 判断当前节点类型
    - path.insertBefore、path.insertAfter、path.replaceWith、path.replaceWithMultiple、path.replaceWithSourceString、path.remove 对节点增删改查
    - path.skip 跳过对子节点遍历
    - path.stop 停止对节点遍历
* state 传递共享数据


