import{_ as n,o as a,c as s,d as e}from"./app.ddafede6.js";const i={},l=e(`<h1 id="linux-\u5B89\u88C5-imagemagick" tabindex="-1"><a class="header-anchor" href="#linux-\u5B89\u88C5-imagemagick" aria-hidden="true">#</a> linux \u5B89\u88C5 ImageMagick</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5\u8F6F\u4EF6</span>
<span class="token function">wget</span> https://www.imagemagick.org/download/ImageMagick.tar.gz
<span class="token function">tar</span> -zxvf ImageMagick.tar.gz

<span class="token builtin class-name">cd</span> ImageMagick-7.0.8-27
./configure --with-webp // \u67E5\u770B\u662F\u5426\u652F\u6301\u9700\u8981\u7684\u683C\u5F0F
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

convert -list <span class="token function">format</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5\u6269\u5C55</span>
<span class="token comment"># \u5982\u679C imagemagick \u6709\u6539\u52A8\u5C31\u91CD\u88C5\u4E00\u4E0B</span>
pecl <span class="token function">install</span> imagick

<span class="token comment"># \u5199\u5165 imagemagick \u5B89\u88C5\u8DEF\u5F84</span>
/usr/local/lib/ImageMagick-\u7248\u672C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FD8\u8981\u683C\u5F0F\u652F\u6301\u9700\u8981\u7684\u5E93</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u89E3\u51B3 convert \u6267\u884C\u65F6\u627E\u4E0D\u5230\u6587\u4EF6</span>
ldconfig /usr/local/lib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528-yum" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-yum" aria-hidden="true">#</a> \u4F7F\u7528 yum</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>libwebp
libwebp-devel

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[l];function t(d,u){return a(),s("div",null,c)}var p=n(i,[["render",t],["__file","imagemagick\u5B89\u88C5\u8FC7\u7A0B.html.vue"]]);export{p as default};
