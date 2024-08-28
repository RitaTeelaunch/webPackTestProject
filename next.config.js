const path = require('path');

module.exports = {
    webpack(config, options) {
        config.module.rules.push({
            test: /\.module\.css$/,
            use: [
                options.defaultLoaders.babel,
                {
                    loader: [require('styled-jsx/webpack').loader, 'style-loader'],
                    options: {
                        type: 'scoped',
                        injectType: 'styleTag',
                    },
                },
                'css-loader',
            ],
        },
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            });
        // Add rule for regular CSS files
        config.module.rules.push({
            test: /\.css$/,
            include: [
                path.resolve(__dirname, 'node_modules/webpack-test-project-rita'),
            ],            use: [
                'style-loader',
                'css-loader',
            ],
        });

        return config;
    },
};