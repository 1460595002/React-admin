const { override, addWebpackAlias, fixBabelImports, addLessLoader} = require('customize-cra');
const path = require('path')

 module.exports = override(
 //针对ant按需打包  根据import来打包(使用balel-)
  fixBabelImports('import',{
    libraryName:'antd',
    libraryDirectory:'es',
    style:true,//自动打包相关的样式
  }),
  // 使用less-loader对源码重的less的变量进行重新制定，设置antd自定义主题
addLessLoader({
  javascriptEnabled: true,
  modifyVars:{'@primary-color':'#1DA57A'},
})
  
);