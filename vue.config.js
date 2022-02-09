module.exports = {
    devServer: {

        proxy: {
            '/api': {
                target: 'http://192.168.0.171:8086',
                pathRewrite: {
                    '^/api':''
                }
            }
        }
    }
}