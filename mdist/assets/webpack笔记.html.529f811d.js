import{_ as e,o as a,c as r,d}from"./app.4b7e0070.js";const n={},c=d(`<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h1><h2 id="_1-\u5168\u5C40\u5B89\u88C5-webpack" tabindex="-1"><a class="header-anchor" href="#_1-\u5168\u5C40\u5B89\u88C5-webpack" aria-hidden="true">#</a> 1.\u5168\u5C40\u5B89\u88C5 webpack</h2><pre><code>npm install webpack -g
4.0+\u7248\u672C\u9700\u8981\u5B89\u88C5\u811A\u624B\u67B6 npm install --save-dev webpack-cli
</code></pre><h2 id="_2-\u521D\u59CB\u5316\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_2-\u521D\u59CB\u5316\u9879\u76EE" aria-hidden="true">#</a> 2.\u521D\u59CB\u5316\u9879\u76EE</h2><pre><code>1.npm init -y
2.npm install webpack webpack-cli --save-dev
</code></pre><h2 id="_3-\u7F16\u8BD1\u6253\u5305\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_3-\u7F16\u8BD1\u6253\u5305\u5E94\u7528" aria-hidden="true">#</a> 3.\u7F16\u8BD1\u6253\u5305\u5E94\u7528</h2><pre><code>1.\u521B\u5EFA\u5165\u53E3\u6587\u4EF6
    src/js/ entry.js
2.\u521B\u5EFA\u4E3B\u9875\u9762\uFF0Cdist/index.html
    \u5F15\u5165\u51FA\u53E3\u6587\u4EF6\uFF0Cbundle.js
3.\u7F16\u8BD1js
    webpack src/js/enty.js dist/bundle.js
4.\u914D\u7F6Ewebpack.config.js
</code></pre><h2 id="_4-\u7531\u4E8E-webpack-\u53EA\u80FD\u8BC6\u522B-js-\u548C-json-\u6587\u4EF6-\u6240\u4EE5\u9700\u8981\u4E0B\u8F7D-css-\u548C-file-\u7684-loader" tabindex="-1"><a class="header-anchor" href="#_4-\u7531\u4E8E-webpack-\u53EA\u80FD\u8BC6\u522B-js-\u548C-json-\u6587\u4EF6-\u6240\u4EE5\u9700\u8981\u4E0B\u8F7D-css-\u548C-file-\u7684-loader" aria-hidden="true">#</a> 4.\u7531\u4E8E webpack \u53EA\u80FD\u8BC6\u522B js \u548C json \u6587\u4EF6\uFF0C\u6240\u4EE5\u9700\u8981\u4E0B\u8F7D css \u548C file \u7684 loader</h2><pre><code>1.npm install css-loader style-loader --save-dev
    npm install file-loader url-loader --save-dev
2.\u914D\u7F6Eloader
    module\u91CC\u9762\u914D\u7F6E
</code></pre><h2 id="_5-webpack-dev-server-\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_5-webpack-dev-server-\u670D\u52A1\u5668" aria-hidden="true">#</a> 5.webpack-dev-server \u670D\u52A1\u5668</h2><pre><code>1.\u5B89\u88C5 npm install webpack-dev-server --save-dev
2.\u914D\u7F6EdevServer\u4E0B\u7684contentBase\u57FA\u7840\u8DEF\u5F84
</code></pre><h2 id="_6-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_6-\u63D2\u4EF6" aria-hidden="true">#</a> 6.\u63D2\u4EF6</h2><pre><code>1.\u4E0B\u8F7D\u914D\u7F6E\uFF0C
    npm install --save-dev html-webpack-plugin
    npm install --save-dev clean-webpack-plugin
</code></pre><h2 id="react-webpack-\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#react-webpack-\u5B9E\u4F8B" aria-hidden="true">#</a> React webpack \u5B9E\u4F8B</h2><pre><code>1.\u4E0B\u8F7D react reacd-dom \u5305
2.\u4E0B\u8F7Dbabel \u76F8\u5173\u5E93 babel-core babel-preset-env babel-preset-react
3.\u4E0B\u8F7D\u76F8\u5173loader\u52A0\u8F7D\u5668 babel-loader css-loader style-loader file-loader url-loader
4.**\u521B\u5EFA\u5E76\u914D\u7F6E.babelrc \u6587\u4EF6
</code></pre><blockquote><p>node \u7684 script \u914D\u7F6E \u53EA\u6709 test start \u53EF\u4EE5\u7701\u7565 run \uFF0C\u4F8B npm start<br> server \u5E93 \uFF0Cserver -s build \u53EF\u4EE5\u77EB\u6B63\u8DEF\u5F84</p></blockquote>`,16),s=[c];function l(t,i){return a(),r("div",null,s)}var p=e(n,[["render",l],["__file","webpack\u7B14\u8BB0.html.vue"]]);export{p as default};
