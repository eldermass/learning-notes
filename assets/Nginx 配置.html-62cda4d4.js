import{_ as e,Y as l,Z as d,$ as c,a1 as n,a2 as s,a3 as i,a0 as r,E as t}from"./framework-6d304b95.js";const v={},o=n("h1",{id:"nginx-配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx-配置","aria-hidden":"true"},"#"),s(" Nginx 配置")],-1),u={href:"http://www.nginx.cn/doc/index.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.cnblogs.com/donghui521/p/10334776.html",target:"_blank",rel:"noopener noreferrer"},m=r(`<h2 id="一-控制命令" tabindex="-1"><a class="header-anchor" href="#一-控制命令" aria-hidden="true">#</a> 一. 控制命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 检测配置是否正确</span>
nginx <span class="token parameter variable">-t</span>
<span class="token comment"># 重新加载配置</span>
nginx <span class="token parameter variable">-s</span> reload
<span class="token comment"># 立即停止</span>
nginx <span class="token parameter variable">-s</span> stop
<span class="token comment"># 优雅停止，会等待现有连接都断掉</span>
nginx <span class="token parameter variable">-s</span> quit
<span class="token comment"># 重新打开日志，如：log日志文件换名字，文件资源依然连接,所以要重新链接文件资源</span>
nginx <span class="token parameter variable">-s</span> reopen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、-nginx-配置" tabindex="-1"><a class="header-anchor" href="#二、-nginx-配置" aria-hidden="true">#</a> 二、 nginx 配置</h2><h3 id="_1-路径重写" tabindex="-1"><a class="header-anchor" href="#_1-路径重写" aria-hidden="true">#</a> 1. 路径重写</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置</span>
看nginx.conf 注释
<span class="token comment"># url重写</span>
rewirte  <span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$  /index.php<span class="token variable">$1</span><span class="token punctuation">;</span>
<span class="token comment"># 先尝试文件路径，不行就重写路径</span>
try_files <span class="token variable">$uri</span> /index.php?<span class="token variable">$uri</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-反向代理" tabindex="-1"><a class="header-anchor" href="#_2-反向代理" aria-hidden="true">#</a> 2. 反向代理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 代理到某个地址</span>
proxy_pass <span class="token number">192.168</span>.0.1:80<span class="token punctuation">;</span>
<span class="token comment"># 人为在头信息挂上用户真实地址</span>
proxy_set_headr X_Forwarded_For <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、-集群和负载均衡" tabindex="-1"><a class="header-anchor" href="#三、-集群和负载均衡" aria-hidden="true">#</a> 三、 集群和负载均衡</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 集群，申明上游服务器组</span>
upstream servers_name <span class="token punctuation">{</span>
  server <span class="token number">192.168</span>.0.1:80 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>30s<span class="token punctuation">;</span>
  server <span class="token number">192.168</span>.0.2:80 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>30s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment"># 通过proxy_pass 代理到服务器组</span>
proxy_pass http://servers_name<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="location-语法" tabindex="-1"><a class="header-anchor" href="#location-语法" aria-hidden="true">#</a> Location 语法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>匹配符 匹配规则 优先级
<span class="token operator">=</span>    精确匹配    <span class="token number">1</span>
^~    以某个字符串开头    <span class="token number">2</span>
~    区分大小写的正则匹配    <span class="token number">3</span>
~*    不区分大小写的正则匹配    <span class="token number">4</span>
<span class="token operator">!</span>~    区分大小写不匹配的正则    <span class="token number">5</span>
<span class="token operator">!</span>~*    不区分大小写不匹配的正则    <span class="token number">6</span>
/    通用匹配，任何请求都会匹配到    <span class="token number">7</span>

server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name pythonav.cn<span class="token punctuation">;</span>

    <span class="token comment">#优先级1,精确匹配，根路径</span>
    location <span class="token operator">=</span> / <span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> <span class="token number">400</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#优先级2,以某个字符串开头,以av开头的，优先匹配这里，区分大小写</span>
    location ^~ /av <span class="token punctuation">{</span>
       root /data/av/<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#优先级3，区分大小写的正则匹配，匹配/media*****路径</span>
    location ~ /media <span class="token punctuation">{</span>
          <span class="token builtin class-name">alias</span> /data/static/<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#优先级4 ，不区分大小写的正则匹配，所有的****.jpg|gif|png 都走这里</span>
    location ~* .*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>jpg<span class="token operator">|</span>gif<span class="token operator">|</span>png<span class="token operator">|</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
       root  /data/av/<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token comment">#优先7，通用匹配</span>
    location / <span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> <span class="token number">403</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>nginx 指定文件路径有 root 和 alias 两种方法，区别在方法和作用域：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>方法：

root
语法  root  路径<span class="token punctuation">;</span>
默认值 root   html<span class="token punctuation">;</span>
配置块  http<span class="token punctuation">{</span><span class="token punctuation">}</span>   server <span class="token punctuation">{</span><span class="token punctuation">}</span>   location<span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token builtin class-name">alias</span>
语法： <span class="token builtin class-name">alias</span>  路径
配置块  location<span class="token punctuation">{</span><span class="token punctuation">}</span>


root和alias区别在nginx如何解释location后面的url，这会使得两者分别以不同的方式讲请求映射到服务器文件上

root参数是root路径 + location位置

root实例：

    location ^~ /av <span class="token punctuation">{</span>
        root /data/av<span class="token punctuation">;</span>   注意这里可有可无结尾的   /
    <span class="token punctuation">}</span>
请求url是pythonav.cn/av/index.html时
web服务器会返回服务器上的/data/av/av/index.html

root实例2：
location ~* .*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>jpg<span class="token operator">|</span>gif<span class="token operator">|</span>png<span class="token operator">|</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
       root  /data/static/<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

请求url是pythonav.cn/girl.gif时
web服务器会返回服务器上的/data/static/girl.gif


alias实例：
alias参数是使用alias路径替换location路径
alias是一个目录的别名
注意alias必须有 <span class="token string">&quot;/&quot;</span>  结束！
alias只能位于location块中


请求url是pythonav.cn/av/index.html时
web服务器会返回服务器上的/data/static/index.html

location ^~ /av <span class="token punctuation">{</span>
    <span class="token builtin class-name">alias</span> /data/static/<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例-conf-文件" tabindex="-1"><a class="header-anchor" href="#示例-conf-文件" aria-hidden="true">#</a> 示例 conf 文件</h3><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>
user  nginx;
# 工作进程 一般cpu数 * 核数
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

# 一个work能保持的链接数
events {
    worker_connections  1024;
}
# 集群，申明上游服务器组, 通过proxy_pass 代理到本服务器组
upstream servers_name {
  server 192.168.0.1:80 weight=1 max_fails=2 fail_timeout=30s;
  server 192.168.0.2:80 weight=1 max_fails=2 fail_timeout=30s;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    # 日志的格式
    # http_x_forwarded_for 被代理用户的真实ip
    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    # access_log 日志写入路径 使用的格式
    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    # gzip 相关配置
    gzip  on;
    gzip_min_length 1k;
    gzip_buffers 4 16k;

    gzip_comp_level 2;
    gzip_types text/plain application/x-javascript application/javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    gzip_vary on;
    gzip_disable &quot;MSIE [1-6]\\.&quot;;

    # 一个虚拟主机， 以上配置均可单独写入以下虚拟主机配置
    server {
      listen 80;
      # 可以放多个域名
      server_name test.com bb.com;
      #charset koi8-r;

      location / {
        root   /www;
        index   index.html index.php;

        # 不存在这个文件时， url重写到index.php
        if ( !-e $request_filename) {
          rewirte (.*)$ /index.php$1;
        }
        # 先尝试文件路径，不行就重写路径
        try_files $uri /index.php?$uri;

        # 代理到某个地址
        proxy_pass 192.168.0.1:80;

        # 人为在头信息挂上用户真实地址
        proxy_set_headr X_Forwarded_For $remote_addr;

      }

      location ~.*\\.(js|css)?$ {
        # 过期时间
        expires 1h;
        proxy_pass http://127.0.0.1;
      }
      #error_page  404              /404.html;

      # 重定向到静态错误页 /50x.html
      error_page   500 502 503 504  /50x.html;
      location = /50x.html {
          root   html;
      }

      # proxy the PHP scripts to Apache listening on 127.0.0.1:80
      #
      # location ~ \\.php$ {
      #     proxy_pass   http://127.0.0.1;
      # }

      #  pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
      #
      # location ~ \\.php$ {
      #     root           html;
      #     fastcgi_pass   127.0.0.1:9000;
      #     fastcgi_index  index.php;

      #     反向引用传参    SCRIPT_FILENAME 一般是 $document_root$fastcgi_script_name;
      #
      #     fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
      #     fastcgi_param  PATH_INFO $1;

      #     引入参数配置文件
      #     include        fastcgi_params;
      # }

      #  deny access to .htaccess files, if Apache&#39;s document root
      #  concurs with nginx&#39;s one
      #
      # location ~ /\\.ht {
      #     deny  all;
      # }

      # HTTPS server
      #
      # server {
      #    listen       443 ssl;
      #    server_name  localhost;

      #    ssl_certificate      cert.pem;
      #    ssl_certificate_key  cert.key;

      #    ssl_session_cache    shared:SSL:1m;
      #    ssl_session_timeout  5m;

      #    ssl_ciphers  HIGH:!aNULL:!MD5;
      #    ssl_prefer_server_ciphers  on;

      #    location / {
      #        root   html;
      #        index  index.html index.htm;
      #    }
      # }
    }

    include /etc/nginx/conf.d/*.conf;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function b(h,k){const a=t("ExternalLinkIcon");return l(),d("div",null,[o,c(" [location 匹配语法](https://www.cnblogs.com/pyyu/p/10085444.html) "),n("p",null,[n("a",u,[s("nginx 文档"),i(a)]),n("a",p,[s("nginx 与 php-cgi"),i(a)])]),m])}const g=e(v,[["render",b],["__file","Nginx 配置.html.vue"]]);export{g as default};
