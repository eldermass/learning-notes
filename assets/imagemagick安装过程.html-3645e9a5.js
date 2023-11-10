import{_ as n,Y as a,Z as s,a0 as e}from"./framework-6d304b95.js";const i={},l=e(`<h1 id="linux-安装-imagemagick" tabindex="-1"><a class="header-anchor" href="#linux-安装-imagemagick" aria-hidden="true">#</a> linux 安装 ImageMagick</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装软件</span>
<span class="token function">wget</span> https://www.imagemagick.org/download/ImageMagick.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> ImageMagick.tar.gz

<span class="token builtin class-name">cd</span> ImageMagick-7.0.8-27
./configure --with-webp // 查看是否支持需要的格式
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

convert <span class="token parameter variable">-list</span> <span class="token function">format</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装扩展</span>
<span class="token comment"># 如果 imagemagick 有改动就重装一下</span>
pecl <span class="token function">install</span> imagick

<span class="token comment"># 写入 imagemagick 安装路径</span>
/usr/local/lib/ImageMagick-版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 还要格式支持需要的库</span>
./configure --enable-shared --enable-lzw --without-perl --with-modules


libwebp
libjpeg-turbo
libpng

libjpeg-dev/stable,now <span class="token number">1</span>:1.5.2-2 all <span class="token punctuation">[</span>installed<span class="token punctuation">]</span>
libjpeg62-turbo/stable,now <span class="token number">1</span>:1.5.2-2+b1 amd64 <span class="token punctuation">[</span>installed,automatic<span class="token punctuation">]</span>
libjpeg62-turbo-dev/stable,now <span class="token number">1</span>:1.5.2-2+b1 amd64 <span class="token punctuation">[</span>installed,automatic<span class="token punctuation">]</span>

libpng-dev/stable,now <span class="token number">1.6</span>.36-6 amd64 <span class="token punctuation">[</span>installed<span class="token punctuation">]</span>
libpng16-16/stable,now <span class="token number">1.6</span>.36-6 amd64 <span class="token punctuation">[</span>installed,automatic<span class="token punctuation">]</span>

libwebp-dev
libwebp6/stable,now <span class="token number">0.6</span>.1-2 amd64 <span class="token punctuation">[</span>installed,automatic<span class="token punctuation">]</span>
libwebpmux3/stable,now <span class="token number">0.6</span>.1-2 amd64 <span class="token punctuation">[</span>installed,automatic<span class="token punctuation">]</span>

libtiff-dev/stable,now <span class="token number">4.0</span>.10-4 amd64 <span class="token punctuation">[</span>installed,automatic<span class="token punctuation">]</span>
libtiff5/stable,now <span class="token number">4.0</span>.10-4 amd64 <span class="token punctuation">[</span>installed,automatic<span class="token punctuation">]</span>
libtiffxx5/stable,now <span class="token number">4.0</span>.10-4 amd64 <span class="token punctuation">[</span>installed,automatic<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解决 convert 执行时找不到文件</span>
ldconfig /usr/local/lib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-yum" tabindex="-1"><a class="header-anchor" href="#使用-yum" aria-hidden="true">#</a> 使用 yum</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>libwebp
libwebp-devel

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[l];function c(d,u){return a(),s("div",null,t)}const o=n(i,[["render",c],["__file","imagemagick安装过程.html.vue"]]);export{o as default};
