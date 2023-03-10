
const webpack = require('webpack')
module.exports = {
    mode : 'development',
    devtool : 'eval-source-map',
    entry : {
        login : './public/auth/loginpage.js',
        signup : './public/auth/signuppage.js',
        adminSignUp: './src/views/adminSignUp.js',
        adminlogin : './public/auth/adminlogin.js',
        forgotpassword : './public/auth/forgotpassword.js',
    },
    output: {
        filename : '[name].js',
        path : __dirname + '/dist'
        
    },
    watch: true,
    
}