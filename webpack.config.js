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
      }
    };
