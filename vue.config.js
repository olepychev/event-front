// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      "/budgets": {
        target: "http://164.92.67.121:9929",
        secure: false,
      },
      "/expenses": {
        target: "http://164.92.67.121:9929",
        secure: false,
      },
      
      '/todos': {
        target: 'http://164.92.67.121:9928',
        secure: false,
        headers: {
          'Content-Type': 'application/json'
        }
      },

      "/events": {
        target: "http://164.92.67.121:9921",
        secure: false,
      },
      "/business": {
        target: "http://164.92.67.121:9923",
        secure: false,
      },

      "/guests": {
        target: "http://164.92.67.121:9922",
        changeOrigin: true,
      },

      "/maps": {
        target: "https://maps.googleapis.com",
        changeOrigin: true,
      },
      
      
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
};
