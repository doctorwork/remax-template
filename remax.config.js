const target = (process.env.PLAT_FORM = "wechat");

module.exports = {
  output: `dist/${target}`,
  progress: true,
  alias: {
    "remax/base": `./node_modules/remax/${target}`,
    "brush-ui": "brush-ui"
  }
};
