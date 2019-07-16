const path = require("path");


module.exports = {
    publicPath: 'maizuo',
    devServer: {
        open: true,
        proxy: {
            "/active": {
                target: "https://m.sdyxmall.com",
                changeOrigin: true,
                pathRewrite: {
                    "^/active": "gateway"
                }
            },


            "/gateway": {
                target: "https://m.maizuo.com",
                changeOrigin: true
            }


        }

    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
                "api": path.resolve(__dirname, "./src/api"),
                "common": path.resolve(__dirname, "./src/common"),
                "components": path.resolve(__dirname, "./src/components"),
                "router": path.resolve(__dirname, "./src/router"),
                "store": path.resolve(__dirname, "./src/store"),
                "utils": path.resolve(__dirname, "./src/utils"),
                "views": path.resolve(__dirname, "./src/views"),
                "static": path.resolve(__dirname, "./static"),
            }
        }
    }
}