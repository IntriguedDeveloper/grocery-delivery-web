const path = require('path')

module.exports = {
    mode : 'development',
    devtool : 'eval-source-map',
    entry : {
        login : './public/auth/loginpage.js',
        signup : './public/auth/signuppage.js'
    },
    output: {
        filename : '[name].js',
        path : __dirname + '/dist'
        
    },
    watch: true
}