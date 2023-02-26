const path = require("path")

module.exports = {
    mode: "production",
    context: path.resolve(__dirname, "assets/js"),
    entry: {
        script: "./script.js"
    },
    output: {
        path: path.resolve(__dirname, "assets/js"),
        filename: "./index.js"
    }
}