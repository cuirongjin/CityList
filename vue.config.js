var path = require('path');
function  resolve (dir){
  return  path.join(__dirname,dir);
}
module.exports={
  chainWebpack: config => {
    config.resolve.alias
      .set("styles",resolve("src/assets/stylus/"))
      .set("common",resolve("src/common/"))
  }
}