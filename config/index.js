module.exports = {
    // ...
    dev: {
        proxyTable: {
            // proxy all requests starting with /api to jsonplaceholder
            '/budget': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/event': {
                target: 'https://event-service-surprised-manatee-kj.cfapps.io',
                changeOrigin: true,
                pathRewrite: {
                    '^/event': ''
                }
            }
        }
    }
}
