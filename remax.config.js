const target = (process.env.PLAT_FORM = "wechat");
const root = process.cwd();
const path = require("path");

module.exports = {
  output: `dist/${target}`,
  progress: true,
  postcss: {
    options: {
      use: [
        [
          "less",
          {
            paths: [path.resolve(root, "src/assets/less")]
          }
        ]
      ]
    }
  },
  alias: {
    "remax/base": `./node_modules/remax/${target}`,
    "brush-ui": "brush-ui"
  }
};
