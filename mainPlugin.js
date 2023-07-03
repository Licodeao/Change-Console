const CustomPlugin = require("./plugin");
const { transformFileSync } = require("@babel/core");
const path = require("path");

const { code } = transformFileSync(path.join(__dirname, "./index.js"), {
  plugins: [CustomPlugin],
  parserOpts: {
    sourceType: "unambiguous",
    plugins: ["jsx"],
  },
});

console.log(code);
