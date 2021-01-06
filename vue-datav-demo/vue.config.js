// vue.config.js
const path = require("path");
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

const resolve = dir => path.join(__dirname, dir);
module.exports = {
  chainWebpack: config => {
    config.plugin("antd-dayjs").use(AntdDayjsWebpackPlugin, [
      {
        preset: "antdv3"
      }
    ]);
    config.resolve.alias // 添加别名
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))
      .set("@views", resolve("src/views"))
      .set("@store", resolve("src/store"))
      .set("@router", resolve("src/router"))
      .set("@ts", resolve("src/ts"))
      .set("@vhooks", resolve("src/vhooks"))
      .set("@plugins", resolve("src/plugins"));
  }
};
