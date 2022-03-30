module.exports = {
    plugins: {
        //...
        'autoprefixer': {
            browsers: ['Android >= 4.0', 'iOS >= 7']
        },
        'postcss-pxtorem': {
            rootValue: 50, //vant-UI的官方根字体大小是37.5
            propList: ['*']
        }
    }
}