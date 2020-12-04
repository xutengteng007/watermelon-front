const resolve = dir => require('path').join(__dirname, dir);
// 定义@连接
module.exports = {
    resolve: {
        alias: {
            '@': resolve('src')
        }
    }
};
