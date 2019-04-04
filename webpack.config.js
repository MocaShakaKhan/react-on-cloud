var webpack =require('webpack')
var path = require('path')

module.exports = {
  entry: path.resolve(__dirname,'app'),
  output: {
	 path: __dirname + '/dist',
	 publicPath: '/',		
	 filename: 'bundle.js'
	},
  module: {
   rules: [ 
	   {
	     test: /\.(js|jsx)$/,
             exclude: /node_modules/,
	     use: { 
	      loader: "babel-loader"
	     }
	  }
	 ] 
   }
};
