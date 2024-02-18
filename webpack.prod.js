const path = require('path');
var webpack = require('webpack');


const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = env => {

	return  {  
	  mode: 'production',
	  resolve: {
		modules: [__dirname, 'node_modules'],
		alias:{
		   "/js": path.resolve(__dirname, 'src/js/'),
		   "/jsx": path.resolve(__dirname, 'src/jsx/'),
		   "/assets": path.resolve(__dirname, 'src/assets/'),
		   "reducer": path.resolve(__dirname, 'src/js/reducer'),
		   "order": path.resolve(__dirname, 'src/js/order'),
		   "list": path.resolve(__dirname, 'src/jsx/common/list/List.jsx'),
		   "form": path.resolve(__dirname, 'src/jsx/common/form/Form.jsx'),
		   "stepbar": path.resolve(__dirname, 'src/jsx/common/stepbar/StepBar.jsx'),
		   '$': "jquery"
		},
		extensions: ['*','.js','.jsx']
	  },  
	  plugins: [
		//new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 3 }),	
		new CleanWebpackPlugin(),
	//	new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 3 }),	
		new webpack.ProvidePlugin({   $: "jquery", jQuery: "jquery", _: 'lodash' }) ,
	    new CopyPlugin({
	      patterns: [
		    { from: path.resolve('./config'), to: '' },
	        { from: path.resolve('./src/assets/'), to: 'assets/' },
	        { from: path.resolve('./src/favicon.ico'), to: '' },
		    { from: path.resolve('src/index.html'), to: '' }
	      ]
	     })		

	  ], 
	  entry: {	index: './src/index.js'  },

	  output: {path: path.resolve(__dirname, 'dist'), chunkFilename:'[name].[fullhash].js',  filename: '[name].js'  },

	  module: {
		rules: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test:/\.(s*)css$/, use:['style-loader','css-loader', 'sass-loader']  },			
			{
			    test: /\.(png|jpe?g|gif)$/i, exclude: /node_modules/, 
				use: [{  loader: 'file-loader',  options: {  name: '[name].[ext]'}} ]
			},
			{
				test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
				loader: 'url-loader'
			}			
		]
	  }
	}

}


