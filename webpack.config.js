var webpack = require('webpack');

const
nodeEnv = process.env.NODE_ENV || 'development';
const
isProd = nodeEnv === 'production';
const
path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
		context : path.join(__dirname, './client'),

		entry: {
		   
		    js : [ './index.js' ],
			vendor: ["react","react-router","react-bootstrap","react-document-meta","firebase","react-star-rating"],
		  },
   output: {
		path : path.join(__dirname, './static'),
		filename : 'bundle.js',
		publicPath : '/' 
   },
   module: {
	   
     loaders: [
       { test: /\.js$/, loader: 'babel', exclude: [/node_modules/]  },
       { test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[ext]' },
       {
			test : /\.html$/,
			loader : 'file',
			query : {
				name : '[name].[ext]'
			}
		}
      ]
   },
	plugins : [ new webpack.optimize.CommonsChunkPlugin({
		name : 'vendor',
		minChunks : Infinity,
		filename : 'vendor.bundle.js'
	}), new webpack.DefinePlugin({
		'process.env' : {
			NODE_ENV : JSON.stringify(nodeEnv)
		}
	}),
	
	new CopyWebpackPlugin([

	                   	{
	                   		from : './img/**/*'
	                   	},
	                   	{
	                   		from : './styles/**/*'
	                   	},
	                   	{
	                   		from : './fonts/**/*'
	                   	},	                   	
	                   	{
	                   		from : './jobs.json'
	                   	},
	                   	{
	                   		from : './mazurov_cv.pdf'
	                   	},
	                   	{
	                   		from : './favicon.ico'
	                   	},
	                   	// {
	                   	// context: 'bootstrap-sass/assets/fonts',
	                   	// from: '**/*',
	                   	// to: '/fonts'
	                   	// },
	                   	])
	
	
	
	
	
	
	],
	

	devServer : {
		contentBase : './client'
//	 hot: true
	}

};