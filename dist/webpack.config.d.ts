export let entry: string;
export namespace module {
    let rules: ({
        test: RegExp;
        use: string;
        exclude: RegExp;
    } | {
        test: RegExp;
        use: (string | {
            loader: string;
            options: {
                modules: boolean;
            };
        })[];
        exclude: RegExp;
    })[];
}
export namespace resolve {
    let extensions: string[];
}
export namespace output {
    let filename: string;
    let path: string;
    namespace library {
        let name: string;
        let type: string;
    }
}
export let mode: string;
export let externals: {
    react: string;
    'react-dom': string;
};
