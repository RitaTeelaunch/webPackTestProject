module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    sourceMaps: true,
    plugins: [
        // "transform-imports",
        //  {
        //      css: {
        //          "transform": "css-loader",
        //          "preventFullImport": true
        //      }
        //  },
        "babel-plugin-transform-imports",
        // css: {
        //     "transform": "css-loader",
        //     "preventFullImport": true
        // },

    ]
};