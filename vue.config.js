// vue.config.js

const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

// // 加载 stylus 文件，可以是多个
// function importStylus (rule) {
//   rule.use('style-resource')
//       .loader('style-resources-loader')
//       .options({
//         patterns: [
//           path.resolve(__dirname, 'src/assets/stylus/global.styl')
//         ]
//       })
// }

module.exports = {
    publicPath:'./',
    css: {
        extract: false
    },
    // 它支持webPack-dev-server的所有选项
    devServer: {
        host: 'localhost',// ip
        port: 8086, // 端口号
        https: false,
        open: true //配置自动启动浏览器
    },
    chainWebpack: config => {
        // 引入 stylus
        //const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        // types.forEach(type => importStylus(config.module.rule('stylus').oneOf(type)));
        // 别名设置
        config.resolve.alias // 添加别名
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@views', resolve('src/views'))
            .set('@store', resolve('src/store'))
            .set('@utils', resolve('src/utils'))
    }
};