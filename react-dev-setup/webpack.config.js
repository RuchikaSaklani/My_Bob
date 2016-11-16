// const path= require('path');
module.exports ={
	devtool: 'cheap-eval-source-map',
	entry: './client/app',
	output: {
		publicPath:'/assets/',
		path: './client/assets',
		filename: 'bundle.js'
	},
	module: {
		loaders:[{
			loader: 'babel',
			test: /\.jsx$/,
			query:{
				presets:['es2015', 'react','stage-1']

			}}

		]
		
	},
	resolve:{extensions:['','.js','.jsx','/index','/index.js','/index.jsx']}
};