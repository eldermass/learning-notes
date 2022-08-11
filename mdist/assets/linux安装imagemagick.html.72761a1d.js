import{_ as n,o as s,c as a,d as e}from"./app.ddafede6.js";const i={},l=e(`<h1 id="\u5B89\u88C5-imagemagick-\u548C-php-imagick" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-imagemagick-\u548C-php-imagick" aria-hidden="true">#</a> \u5B89\u88C5 Imagemagick \u548C php imagick</h1><ol><li><p>\u5B89\u88C5 imagemagick \u8F6F\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u83B7\u53D6\u6E90\u7801\u5305</span>
<span class="token function">wget</span> https://www.imagemagick.org/download/ImageMagick.tar.gz

<span class="token comment"># \u89E3\u538B\u6E90\u7801\u5305</span>
<span class="token function">tar</span> -zxvf ImageMagick.tar.gz
<span class="token builtin class-name">cd</span> ImageMagick-7.0.8-27

<span class="token comment"># \u5B89\u88C5\u914D\u7F6E\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u770B\u5230\u652F\u6301\u7684\u683C\u5F0F\uFF0C\u548C\u914D\u7F6E\u7684\u5185\u5BB9</span>
./configure
<span class="token comment"># \u6307\u5B9A\u5B89\u88C5\u76EE\u5F55\uFF0C\u53EF\u4EE5\u4E0D\u6307\u5B9A \u9ED8\u8BA4\u662F /usr/local/lib/ImageMagick-7.0.9</span>
--prefix<span class="token operator">=</span>/usr/local/ImageMagick

<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment"># \u5B89\u88C5\u6210\u529F\u540E\uFF0C\u68C0\u67E5</span>
convert -list <span class="token function">format</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u91CD\u65B0\u914D\u7F6E imagick \u6269\u5C55\u6307\u5411 imagemagick \u8F6F\u4EF6</p><p>(1). \u901A\u8FC7 pecl \u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5</span>
pecl <span class="token function">install</span> imagick

<span class="token comment"># \u5199\u5165 imagemagick \u5B89\u88C5\u8DEF\u5F84\uFF0C \u5728\u5B89\u88C5\u65F6\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u662F\u4EE5\u4E0B\u8DEF\u5F84</span>
/usr/local/lib/ImageMagick-7.0.9

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2). \u901A\u8FC7\u6E90\u7801\u5305\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728 http://pecl.php.net \u7F51\u7AD9\u53EF\u641C\u5230\u6E90\u7801\u5305\u4E0B\u8F7D\u8FDE\u63A5</span>
<span class="token function">wget</span> http://pecl.php.net/get/imagick-3.4.4.tgz

<span class="token comment"># \u89E3\u538B</span>
<span class="token function">tar</span> -zxvf imagick-3.4.4.tar.gz
<span class="token builtin class-name">cd</span> imagick-3.4.4

<span class="token comment"># \u6307\u5B9A php-config \u8DEF\u5F84\u4E00\u822C\u5728 /usr/local/php/bin/ \u76EE\u5F55\uFF0C\u548C imagemagick \u7684\u8DEF\u5F84</span>
./configure --with-php-config<span class="token operator">=</span>/usr/local/php/bin/php-config --with-imagick<span class="token operator">=</span>/usr/local/lib/ImageMagick-7.0.9

<span class="token comment"># \u8C03\u7528phpize\u7A0B\u5E8F\u751F\u6210\u7F16\u8BD1\u914D\u7F6E\u6587\u4EF6</span>
/usr/local/php/bin/phpize

<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment"># \u79FB\u5165 \u751F\u6210\u7684 .so \u6587\u4EF6 \u5230 php \u6269\u5C55\u8DEF\u5F84\uFF0C php-config \u91CC\u53EF\u67E5\u5230</span>
<span class="token function">cp</span> modules/imagick.so /usr/local/php/lib/php/extensions/no-debug-zts-20170718/

<span class="token comment"># \u6253\u5F00\u6269\u5C55</span>
/usr/local/php/etc/php.ini \u91CC \u6253\u5F00 <span class="token assign-left variable">extension</span><span class="token operator">=</span>imagick

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u91CD\u542F php-fpm</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ps</span> -aux \u627E\u5230 php-fpm \u7684 master \u8FDB\u7A0B
<span class="token function">kill</span> -USR2 pid \u6740\u6389\u540E\u5C31\u80FD\u91CD\u542F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u68C0\u6D4B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4F7F\u7528 convert -list format \u67E5\u770B\u662F\u5426\u652F\u6301 \u5E38\u89C1\u56FE\u7247\u683C\u5F0F</span>
<span class="token comment"># php -m \u67E5\u770B\u6269\u5C55\u662F\u5426\u5B89\u88C5\u6210\u529F</span>

<span class="token comment"># \u5C1D\u8BD5\u8F6C\u6362\u56FE\u7247</span>
convert arrow.jpg arrow.webp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5728\u5B89\u88C5 imagemagick \u65F6\uFF0C./configure \u540E\u53D1\u73B0\u7F3A\u5C11\u652F\u6301\u683C\u5F0F\uFF0C\u53EF\u80FD\u9700\u8981\u7684\u5E93\u5927\u6982\u6709\u4EE5\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u53EF\u80FD\u7F3A\u5C11\u7684 libwebp, \u4F7F\u7528 yum \u5B89\u88C5</span>
yum <span class="token function">install</span> libwebp-devel


<span class="token comment"># \u4EE5\u4E0B\u5E93\u901A\u8FC7 yum \u6216 apt \u88C5\u8FC7 imagemagick \u90FD\u5E94\u8BE5\u5DF2\u7ECF\u88C5\u8FC7</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),c=[l];function p(t,d){return s(),a("div",null,c)}var m=n(i,[["render",p],["__file","linux\u5B89\u88C5imagemagick.html.vue"]]);export{m as default};
