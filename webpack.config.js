const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'webpack-test-project-rita',
            type: 'umd',
        },
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                // use: 'ts-loader',
                // use: 'babel-loader',
                use:  'babel-loader',
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
                            importLoaders: 1,
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
        extensions: ['.tsx', '.ts', '.js'],
    },
    mode: 'development',
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/component/*.css', to: '[name][ext]' },
            ],
        }),
    ],
};