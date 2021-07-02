module.exports = function(api,options,dirname) {
    return {
        visitor: {
            BlockStatement: {
                enter(path,state) {
                    let statements = path.get('body');
                    let isCompletion = false;
                    for (let statement of statements) {
                        if (!isCompletion && statement.isCompletionStatement()) {
                            isCompletion = true;
                            continue;
                        }
                        
                        if (isCompletion && !(statement.isFunctionDeclaration() || statement.isVariableDeclaration({ kind: "var" }))) {
                            statement.remove();
                        } 
                    }
                }
            }
        }
    }
}