import CopyWebpackPlugin = require("copy-webpack-plugin");
export let entry: string;
export namespace output {
    let filename: string;
    let path: string;
    namespace library {
        let name: string;
        let type: string;
    }
    let clean: boolean;
}
export namespace module {
    let rules: ({
        test: RegExp;
        use: (string | {
            loader: string;
            options: {
                presets: string[];
            };
        })[];
        exclude: RegExp;
    } | {
        test: RegExp;
        use: (string | {
            loader: string;
            options: {
                importLoaders: number;
                modules: boolean;
            };
        })[];
        exclude?: undefined;
    })[];
}
export namespace resolve {
    let extensions: string[];
}
export let mode: string;
export let externals: any[];
export namespace stats {
    let errorDetails: boolean;
}
export let plugins: CopyWebpackPlugin[];
