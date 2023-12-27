const {devConfig} = require("./dev.config.js");
const { prodConfig } = require("./prod.config.js");

module.exports = (env,argv) => {
    if (argv.mode === "development") {
        return devConfig;
    }
    else if (argv.mode === "production") {
        return prodConfig;
    }
};
