function stringfy(index) {
    let digits = 'abcdefghijklmnopqrstuvwxyz';
    return digits.charAt(index % digits.length)
}
module.exports = function(api,options,dirname) {
    return {
        pre(file) {
            file.set('uid', 0);
        },
        visitor: {
            Scopable: {
                exit(path,state) {
                    let uid = state.file.get('uid');
                    for(let [key, binding] of Object.entries(path.scope.bindings)) {
                        if(!binding.confused) {
                            binding.confused = true;
                            let newName = path.scope.generateUid(stringfy(uid++));
                            binding.path.scope.rename(key, newName)
                        }
                    };
                    state.file.set('uid', uid);
                }
            }
        }
    }
}