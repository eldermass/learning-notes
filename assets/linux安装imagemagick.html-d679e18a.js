import{_ as n,Y as a,Z as s,a0 as e}from"./framework-6d304b95.js";const i={},l=e(`<h1 id="安装-imagemagick-和-php-imagick" tabindex="-1"><a class="header-anchor" href="#安装-imagemagick-和-php-imagick" aria-hidden="true">#</a> 安装 Imagemagick 和 php imagick</h1><ol><li><p>安装 imagemagick 软件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 获取源码包</span>
<span class="token function">wget</span> https://www.imagemagick.org/download/ImageMagick.tar.gz

<span class="token comment"># 解压源码包</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> ImageMagick.tar.gz
<span class="token builtin class-name">cd</span> ImageMagick-7.0.8-27

<span class="token comment"># 安装配置，这里可以看到支持的格式，和配置的内容</span>
./configure
<span class="token comment"># 指定安装目录，可以不指定 默认是 /usr/local/lib/ImageMagick-7.0.9</span>
<span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/ImageMagick

<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment"># 安装成功后，检查</span>
convert <span class="token parameter variable">-list</span> <span class="token function">format</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重新配置 imagick 扩展指向 imagemagick 软件</p><p>(1). 通过 pecl 安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
pecl <span class="token function">install</span> imagick

<span class="token comment"># 写入 imagemagick 安装路径， 在安装时配置，默认是以下路径</span>
/usr/local/lib/ImageMagick-7.0.9

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2). 通过源码包安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在 http://pecl.php.net 网站可搜到源码包下载连接</span>
<span class="token function">wget</span> http://pecl.php.net/get/imagick-3.4.4.tgz

<span class="token comment"># 解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> imagick-3.4.4.tar.gz
<span class="token builtin class-name">cd</span> imagick-3.4.4

<span class="token comment"># 指定 php-config 路径一般在 /usr/local/php/bin/ 目录，和 imagemagick 的路径</span>
./configure --with-php-config<span class="token operator">=</span>/usr/local/php/bin/php-config --with-imagick<span class="token operator">=</span>/usr/local/lib/ImageMagick-7.0.9

<span class="token comment"># 调用phpize程序生成编译配置文件</span>
/usr/local/php/bin/phpize

<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment"># 移入 生成的 .so 文件 到 php 扩展路径， php-config 里可查到</span>
<span class="token function">cp</span> modules/imagick.so /usr/local/php/lib/php/extensions/no-debug-zts-20170718/

<span class="token comment"># 打开扩展</span>
/usr/local/php/etc/php.ini 里 打开 <span class="token assign-left variable">extension</span><span class="token operator">=</span>imagick

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重启 php-fpm</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-aux</span> 找到 php-fpm 的 master 进程
<span class="token function">kill</span> <span class="token parameter variable">-USR2</span> pid 杀掉后就能重启
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>检测</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 convert -list format 查看是否支持 常见图片格式</span>
<span class="token comment"># php -m 查看扩展是否安装成功</span>

<span class="token comment"># 尝试转换图片</span>
convert arrow.jpg arrow.webp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在安装 imagemagick 时，./configure 后发现缺少支持格式，可能需要的库大概有以下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 可能缺少的 libwebp, 使用 yum 安装</span>
yum <span class="token function">install</span> libwebp-devel


<span class="token comment"># 以下库通过 yum 或 apt 装过 imagemagick 都应该已经装过</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),c=[l];function p(t,d){return a(),s("div",null,c)}const m=n(i,[["render",p],["__file","linux安装imagemagick.html.vue"]]);export{m as default};
