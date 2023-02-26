const path = require("path")

const getRandomFileName = () => {
    const date = new Date()
    return `${date.getTime()}index.js`
}

module.exports = {
    mode: "production",
    context: path.resolve(__dirname, "assets/js"),
    entry: {
        script: "./script.js"
    },
    output: {
        path: path.resolve(__dirname, "assets/js"),
        filename: `./${getRandomFileName()}`
    }
}