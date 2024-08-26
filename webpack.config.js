const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.module\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    ],
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: './dist/index.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'webpack-test-project-rita',
            type: 'umd',
        }
    },
    mode: 'development',
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },
};