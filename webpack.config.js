const path = require('path')

module.exports = {
    mode : 'development',
    devtool : 'eval-source-map',
    entry : {
        login : './src/loginpage.js',
        signup : './src/signuppage.js'
    },
    output: {
        filename : '[name].js',
        path : __dirname + '/dist'
        
    },
    watch: true
}