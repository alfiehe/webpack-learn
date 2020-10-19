// 去除空格
function trimSpace(str) {
    return str.replace(/\s+/g, '');
}

// 转为数字
function digitalize(str) {
    return Number(str) || 0;
}

export {
    trimSpace,
    digitalize
}