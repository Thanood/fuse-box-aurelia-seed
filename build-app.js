const fsbx = require("fuse-box");
const FuseBox = fsbx.FuseBox;

const fuseBox = FuseBox.init({
    homeDir: "src",
    outFile: "bundle.js",
    sourceMap: {
        bundleReference: "bundle.js.map",
        outFile: "bundle.js.map",
    },
    shim: {
        jquery: {
            source: "node_modules/jquery/dist/jquery.js",
            exports: "$"
        }
    },
    plugins: [
        fsbx.CSSPlugin(),
        fsbx.HTMLPlugin({ useDefault: true }),
        fsbx.TypeScriptHelpers(),
        fsbx.SourceMapPlainJsPlugin()
    ]
});

fuseBox.devServer(`>main.ts 
                   + **/*.ts                   
                   + **/*.html 
                   + **/*.css
                   + bluebird
                   + whatwg-fetch
                   + aurelia-pal
                   + aurelia-pal-browser
                   + aurelia-framework 
                   + aurelia-logging-console 
                   + aurelia-templating-binding 
                   + aurelia-templating-resources 
                   + aurelia-event-aggregator 
                   + aurelia-history-browser 
                   + aurelia-templating-router`,
    { port: 7775 });
