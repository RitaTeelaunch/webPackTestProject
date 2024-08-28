import CopyWebpackPlugin = require("copy-webpack-plugin");
import CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import TerserPlugin = require("terser-webpack-plugin");
export let entry: string;
export namespace output {
    let filename: string;
    let path: string;
    let library: string;
    let clean: boolean;
    let libraryTarget: string;
    let globalObject: string;
}
export namespace module {
    let rules: ({
        test: RegExp;
        use: string[];
        exclude: RegExp;
    } | {
        test: RegExp;
        use: (string | {
            loader: string;
            options: {
                modules: boolean;
                importLoaders: number;
            };
        })[];
        exclude?: undefined;
    })[];
}
export namespace resolve {
    let extensions: string[];
}
export let mode: string;
export let externals: {
    react: string;
    'react-dom': string;
}[];
export let target: string;
export namespace stats {
    let errorDetails: boolean;
}
export let plugins: (CopyWebpackPlugin | CssMinimizerPlugin<CssMinimizerPlugin.CssNanoOptionsExtended> | CleanWebpackPlugin)[];
export namespace optimization {
    let minimize: boolean;
    let minimizer: (CssMinimizerPlugin<CssMinimizerPlugin.CssNanoOptionsExtended> | TerserPlugin<import("terser").MinifyOptions>)[];
}
