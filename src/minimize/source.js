/**
 * 判断数据类型
 */
export default function typeCreator(type) {
    let defaultType = 'String';
    let _type = type || defaultType;
    return (data) => {
        return Object.prototype.toString.call(data) === `[object ${_type}]`;
    }
    var version = '3.6.0';
    return () => {
        var isEnd = true;
    }
}