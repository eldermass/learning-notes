import{_ as e,Y as a,Z as r,a0 as d}from"./framework-6d304b95.js";const n={},c=d(`<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h1><h2 id="_1-全局安装-webpack" tabindex="-1"><a class="header-anchor" href="#_1-全局安装-webpack" aria-hidden="true">#</a> 1.全局安装 webpack</h2><pre><code>npm install webpack -g
4.0+版本需要安装脚手架 npm install --save-dev webpack-cli
</code></pre><h2 id="_2-初始化项目" tabindex="-1"><a class="header-anchor" href="#_2-初始化项目" aria-hidden="true">#</a> 2.初始化项目</h2><pre><code>1.npm init -y
2.npm install webpack webpack-cli --save-dev
</code></pre><h2 id="_3-编译打包应用" tabindex="-1"><a class="header-anchor" href="#_3-编译打包应用" aria-hidden="true">#</a> 3.编译打包应用</h2><pre><code>1.创建入口文件
    src/js/ entry.js
2.创建主页面，dist/index.html
    引入出口文件，bundle.js
3.编译js
    webpack src/js/enty.js dist/bundle.js
4.配置webpack.config.js
</code></pre><h2 id="_4-由于-webpack-只能识别-js-和-json-文件-所以需要下载-css-和-file-的-loader" tabindex="-1"><a class="header-anchor" href="#_4-由于-webpack-只能识别-js-和-json-文件-所以需要下载-css-和-file-的-loader" aria-hidden="true">#</a> 4.由于 webpack 只能识别 js 和 json 文件，所以需要下载 css 和 file 的 loader</h2><pre><code>1.npm install css-loader style-loader --save-dev
    npm install file-loader url-loader --save-dev
2.配置loader
    module里面配置
</code></pre><h2 id="_5-webpack-dev-server-服务器" tabindex="-1"><a class="header-anchor" href="#_5-webpack-dev-server-服务器" aria-hidden="true">#</a> 5.webpack-dev-server 服务器</h2><pre><code>1.安装 npm install webpack-dev-server --save-dev
2.配置devServer下的contentBase基础路径
</code></pre><h2 id="_6-插件" tabindex="-1"><a class="header-anchor" href="#_6-插件" aria-hidden="true">#</a> 6.插件</h2><pre><code>1.下载配置，
    npm install --save-dev html-webpack-plugin
    npm install --save-dev clean-webpack-plugin
</code></pre><h2 id="react-webpack-实例" tabindex="-1"><a class="header-anchor" href="#react-webpack-实例" aria-hidden="true">#</a> React webpack 实例</h2><pre><code>1.下载 react reacd-dom 包
2.下载babel 相关库 babel-core babel-preset-env babel-preset-react
3.下载相关loader加载器 babel-loader css-loader style-loader file-loader url-loader
4.**创建并配置.babelrc 文件
</code></pre><blockquote><p>node 的 script 配置 只有 test start 可以省略 run ，例 npm start<br> server 库 ，server -s build 可以矫正路径</p></blockquote>`,16),s=[c];function l(t,i){return a(),r("div",null,s)}const p=e(n,[["render",l],["__file","webpack笔记.html.vue"]]);export{p as default};
