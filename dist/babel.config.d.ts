export let presets: string[];
export let sourceMaps: boolean;
export let plugins: (string | {
    lodash: {
        transform: string;
        preventFullImport: boolean;
    };
})[][];
