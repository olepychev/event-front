module.exports = {
    devServer: {
      proxy: {
        '/todos': {
          target: 'http://164.92.67.121:9928',
          secure: false,
          headers: {
            'Content-Type': 'application/json'
          }
        },
      }
    },
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  }
