/**
 * Created by chenkang1 on 2017/6/29.
 */
let config;
switch (env) {
  case "development":
    console.log("defaultd");
    config = require("./config.local.js").config;
    break;
  case "prod":
    console.log("defaultp");
    config = require("./config.prod.js").config;
    break;
  default:
    console.log("default");
    config = require("./config.local.js").config;
}

export default config;
