const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require("webpack-node-externals");
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
                test: /\.(ts|tsx)?$/,
                // use: 'ts-loader',
                // use: 'babel-loader',
                // use:  'babel-loader',
                use: [
                    {
                        loader: "babel-loader",
                        options: { presets: ["@babel/preset-react"] },
                    },
                    "ts-loader",
                ],
                exclude: /node_modules/,
            },
            // {
            //     test: /\.module\.css$/,
            //     use: [
            //         'style-loader',
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 modules: true,
            //                 importLoaders: 1,
            //             },
            //         },
            //         ],
            //     exclude: /node_modules/,
            // },
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader',
            //     ],
            //     exclude: /\.module\.css$/,
            // },
            {
                test: /\.css$/i,
                use: [
                    "style-loader","babel-loader",
                    {
                        loader: "css-loader",
                        // options: {
                        //     importLoaders: 1,
                        //     modules: true,
                        // },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js',".css"],
    },
    mode: 'development',
    // externals: {
    //     react: 'react',
    //     'react-dom': 'react-dom',
    // },
    externals: [nodeExternals()],
    stats: { errorDetails: true },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                // { from: 'src/component/*.css', to: '[name][ext]' },
                { from: 'src/component/Test.module.css', to: 'Test.module.css' },

            ],
        }),
    ],
};