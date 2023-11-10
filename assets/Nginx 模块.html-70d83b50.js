import{_ as e,Y as i,Z as l,a1 as n,a2 as s,a3 as t,a0 as o,E as c}from"./framework-6d304b95.js";const d={},r=n("h1",{id:"nginx-模块安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx-模块安装","aria-hidden":"true"},"#"),s(" Nginx 模块安装")],-1),p=n("h2",{id:"headers-more-nginx-module",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#headers-more-nginx-module","aria-hidden":"true"},"#"),s(" headers-more-nginx-module")],-1),u={href:"https://github.com/openresty/headers-more-nginx-module/",target:"_blank",rel:"noopener noreferrer"},m=o(`<h3 id="安装方式" tabindex="-1"><a class="header-anchor" href="#安装方式" aria-hidden="true">#</a> 安装方式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token string">&#39;http://nginx.org/download/nginx-1.17.8.tar.gz&#39;</span>
 <span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> nginx-1.17.8.tar.gz
 <span class="token builtin class-name">cd</span> nginx-1.17.8/

 <span class="token comment"># Here we assume you would install you nginx under /opt/nginx/.</span>
 ./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/opt/nginx <span class="token punctuation">\\</span>
     --add-module<span class="token operator">=</span>/path/to/headers-more-nginx-module

 <span class="token function">make</span>
 <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何在已有的nginx中添加模块" tabindex="-1"><a class="header-anchor" href="#如何在已有的nginx中添加模块" aria-hidden="true">#</a> 如何在已有的nginx中添加模块</h3><ol><li>下载扩展模块</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 找到一个目录，下载扩展模块</span>
<span class="token builtin class-name">cd</span> /data/software/ 
<span class="token function">git</span> clone https://github.com/openresty/headers-more-nginx-module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>获取原有配置</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输入 nginx -V 查看原有配置</span>
nginx version: nginx/1.15.3
built by gcc <span class="token number">6.3</span>.0 <span class="token number">20170516</span> <span class="token punctuation">(</span>Debian <span class="token number">6.3</span>.0-18+deb9u1<span class="token punctuation">)</span>
built with OpenSSL <span class="token number">1.1</span>.0f  <span class="token number">25</span> May <span class="token number">2017</span>
TLS SNI support enabled
configure arguments: <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx --with-http_ssl_module <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>

<span class="token comment"># configure arguments: 后面的就是原有配置, 复制出来</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>编译安装新模块</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将 add-module= 加入到原有配置中</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx --with-http_ssl_module <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span> --add-module<span class="token operator">=</span>/data/software/headers-more-nginx-module
<span class="token function">make</span>   
<span class="token comment">#千万不要make install，不然就真的覆盖了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>替换启动文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 替换文件时需要先关闭服务</span>
systemctl stop nginx
<span class="token comment"># 备份旧文件，替换新文件</span>
<span class="token function">cp</span> /usr/local/nginx/sbin/nginx /usr/local/nginx/sbin/nginx.bak
<span class="token comment"># 用which命令查看nginx的启动路径</span>
<span class="token function">cp</span> ./objs/nginx /usr/local/nginx/sbin/
<span class="token comment"># 重新启动服务</span>
systemctl start nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function v(b,g){const a=c("ExternalLinkIcon");return i(),l("div",null,[r,p,n("p",null,[s("用于修改 HTTP 头部的模块，可以用来添加、修改、删除 HTTP 头部的模块。 "),n("a",u,[s("源码"),t(a)])]),m])}const k=e(d,[["render",v],["__file","Nginx 模块.html.vue"]]);export{k as default};
