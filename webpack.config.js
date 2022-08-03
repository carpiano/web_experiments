const path = require('path');
module.exports = {
    entry: [ './sense.js','./index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    resolve: {
        alias: {
            'node_modules': path.join(__dirname, 'node_modules'),
        }
    },
    devServer: {
	static: {
	    directory: path.join(__dirname, ''),
	},
	compress: true,
	port: 9000,
	https: true
    },
};
