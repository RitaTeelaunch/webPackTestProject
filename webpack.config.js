const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'webPackTestProject',
            type: 'umd',
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)?$/,
                // use: 'ts-loader',
                // use: 'babel-loader',
                use: {
                    loader: 'babel-loader',
                },
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
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
                exclude: /\.module\.css$/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    mode: 'development',
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },
};