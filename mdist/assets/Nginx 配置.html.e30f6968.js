import{_ as a,r as l,o as d,c,a as n,e,b as s,d as r}from"./app.4b7e0070.js";const v={},t=n("h1",{id:"nginx-\u7B14\u8BB0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx-\u7B14\u8BB0","aria-hidden":"true"},"#"),s(" nginx \u7B14\u8BB0")],-1),o={href:"http://www.nginx.cn/doc/index.html",target:"_blank",rel:"noopener noreferrer"},u=s("nginx \u6587\u6863"),p={href:"https://www.cnblogs.com/donghui521/p/10334776.html",target:"_blank",rel:"noopener noreferrer"},m=s("nginx \u4E0E php-cgi"),b=r(`<h2 id="\u4E00-\u63A7\u5236\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4E00-\u63A7\u5236\u547D\u4EE4" aria-hidden="true">#</a> \u4E00. \u63A7\u5236\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u68C0\u6D4B\u914D\u7F6E\u662F\u5426\u6B63\u786E</span>
nginx -t
<span class="token comment"># \u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E</span>
nginx -s reload
<span class="token comment"># \u7ACB\u5373\u505C\u6B62</span>
nginx -s stop
<span class="token comment"># \u4F18\u96C5\u505C\u6B62\uFF0C\u4F1A\u7B49\u5F85\u73B0\u6709\u8FDE\u63A5\u90FD\u65AD\u6389</span>
nginx -s quit
<span class="token comment"># \u91CD\u65B0\u6253\u5F00\u65E5\u5FD7\uFF0C\u5982\uFF1Alog\u65E5\u5FD7\u6587\u4EF6\u6362\u540D\u5B57\uFF0C\u6587\u4EF6\u8D44\u6E90\u4F9D\u7136\u8FDE\u63A5,\u6240\u4EE5\u8981\u91CD\u65B0\u94FE\u63A5\u6587\u4EF6\u8D44\u6E90</span>
nginx -s reopen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C\u3001-nginx-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001-nginx-\u914D\u7F6E" aria-hidden="true">#</a> \u4E8C\u3001 nginx \u914D\u7F6E</h2><h3 id="_1-\u8DEF\u5F84\u91CD\u5199" tabindex="-1"><a class="header-anchor" href="#_1-\u8DEF\u5F84\u91CD\u5199" aria-hidden="true">#</a> 1. \u8DEF\u5F84\u91CD\u5199</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u914D\u7F6E</span>
\u770Bnginx.conf \u6CE8\u91CA
<span class="token comment"># url\u91CD\u5199</span>
rewirte  <span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$  /index.php<span class="token variable">$1</span><span class="token punctuation">;</span>
<span class="token comment"># \u5148\u5C1D\u8BD5\u6587\u4EF6\u8DEF\u5F84\uFF0C\u4E0D\u884C\u5C31\u91CD\u5199\u8DEF\u5F84</span>
try_files <span class="token variable">$uri</span> /index.php?<span class="token variable">$uri</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u53CD\u5411\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#_2-\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a> 2. \u53CD\u5411\u4EE3\u7406</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4EE3\u7406\u5230\u67D0\u4E2A\u5730\u5740</span>
proxy_pass <span class="token number">192.168</span>.0.1:80<span class="token punctuation">;</span>
<span class="token comment"># \u4EBA\u4E3A\u5728\u5934\u4FE1\u606F\u6302\u4E0A\u7528\u6237\u771F\u5B9E\u5730\u5740</span>
proxy_set_headr X_Forwarded_For <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u3001-\u96C6\u7FA4\u548C\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001-\u96C6\u7FA4\u548C\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> \u4E09\u3001 \u96C6\u7FA4\u548C\u8D1F\u8F7D\u5747\u8861</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u96C6\u7FA4\uFF0C\u7533\u660E\u4E0A\u6E38\u670D\u52A1\u5668\u7EC4</span>
upstream servers_name <span class="token punctuation">{</span>
  server <span class="token number">192.168</span>.0.1:80 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>30s<span class="token punctuation">;</span>
  server <span class="token number">192.168</span>.0.2:80 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>30s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment"># \u901A\u8FC7proxy_pass \u4EE3\u7406\u5230\u670D\u52A1\u5668\u7EC4</span>
proxy_pass http://servers_name<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="location-\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#location-\u8BED\u6CD5" aria-hidden="true">#</a> Location \u8BED\u6CD5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u5339\u914D\u7B26 \u5339\u914D\u89C4\u5219 \u4F18\u5148\u7EA7
<span class="token operator">=</span>    \u7CBE\u786E\u5339\u914D    <span class="token number">1</span>
^~    \u4EE5\u67D0\u4E2A\u5B57\u7B26\u4E32\u5F00\u5934    <span class="token number">2</span>
~    \u533A\u5206\u5927\u5C0F\u5199\u7684\u6B63\u5219\u5339\u914D    <span class="token number">3</span>
~*    \u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684\u6B63\u5219\u5339\u914D    <span class="token number">4</span>
<span class="token operator">!</span>~    \u533A\u5206\u5927\u5C0F\u5199\u4E0D\u5339\u914D\u7684\u6B63\u5219    <span class="token number">5</span>
<span class="token operator">!</span>~*    \u4E0D\u533A\u5206\u5927\u5C0F\u5199\u4E0D\u5339\u914D\u7684\u6B63\u5219    <span class="token number">6</span>
/    \u901A\u7528\u5339\u914D\uFF0C\u4EFB\u4F55\u8BF7\u6C42\u90FD\u4F1A\u5339\u914D\u5230    <span class="token number">7</span>

server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name pythonav.cn<span class="token punctuation">;</span>

    <span class="token comment">#\u4F18\u5148\u7EA71,\u7CBE\u786E\u5339\u914D\uFF0C\u6839\u8DEF\u5F84</span>
    location <span class="token operator">=</span>/ <span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> <span class="token number">400</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#\u4F18\u5148\u7EA72,\u4EE5\u67D0\u4E2A\u5B57\u7B26\u4E32\u5F00\u5934,\u4EE5av\u5F00\u5934\u7684\uFF0C\u4F18\u5148\u5339\u914D\u8FD9\u91CC\uFF0C\u533A\u5206\u5927\u5C0F\u5199</span>
    location ^~ /av <span class="token punctuation">{</span>
       root /data/av/<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#\u4F18\u5148\u7EA73\uFF0C\u533A\u5206\u5927\u5C0F\u5199\u7684\u6B63\u5219\u5339\u914D\uFF0C\u5339\u914D/media*****\u8DEF\u5F84</span>
    location ~ /media <span class="token punctuation">{</span>
          <span class="token builtin class-name">alias</span> /data/static/<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#\u4F18\u5148\u7EA74 \uFF0C\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684\u6B63\u5219\u5339\u914D\uFF0C\u6240\u6709\u7684****.jpg|gif|png \u90FD\u8D70\u8FD9\u91CC</span>
    location ~* .*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>jpg<span class="token operator">|</span>gif<span class="token operator">|</span>png<span class="token operator">|</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
       root  /data/av/<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token comment">#\u4F18\u51487\uFF0C\u901A\u7528\u5339\u914D</span>
    location / <span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> <span class="token number">403</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>nginx \u6307\u5B9A\u6587\u4EF6\u8DEF\u5F84\u6709 root \u548C alias \u4E24\u79CD\u65B9\u6CD5\uFF0C\u533A\u522B\u5728\u65B9\u6CD5\u548C\u4F5C\u7528\u57DF\uFF1A</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u65B9\u6CD5\uFF1A

root
\u8BED\u6CD5  root  \u8DEF\u5F84<span class="token punctuation">;</span>
\u9ED8\u8BA4\u503C root   html<span class="token punctuation">;</span>
\u914D\u7F6E\u5757  http<span class="token punctuation">{</span><span class="token punctuation">}</span>   server <span class="token punctuation">{</span><span class="token punctuation">}</span>   location<span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token builtin class-name">alias</span>
\u8BED\u6CD5\uFF1A <span class="token builtin class-name">alias</span>  \u8DEF\u5F84
\u914D\u7F6E\u5757  location<span class="token punctuation">{</span><span class="token punctuation">}</span>


root\u548Calias\u533A\u522B\u5728nginx\u5982\u4F55\u89E3\u91CAlocation\u540E\u9762\u7684url\uFF0C\u8FD9\u4F1A\u4F7F\u5F97\u4E24\u8005\u5206\u522B\u4EE5\u4E0D\u540C\u7684\u65B9\u5F0F\u8BB2\u8BF7\u6C42\u6620\u5C04\u5230\u670D\u52A1\u5668\u6587\u4EF6\u4E0A

root\u53C2\u6570\u662Froot\u8DEF\u5F84 + location\u4F4D\u7F6E

root\u5B9E\u4F8B\uFF1A

    location ^~ /av <span class="token punctuation">{</span>
        root /data/av<span class="token punctuation">;</span>   \u6CE8\u610F\u8FD9\u91CC\u53EF\u6709\u53EF\u65E0\u7ED3\u5C3E\u7684   /
    <span class="token punctuation">}</span>
\u8BF7\u6C42url\u662Fpythonav.cn/av/index.html\u65F6
web\u670D\u52A1\u5668\u4F1A\u8FD4\u56DE\u670D\u52A1\u5668\u4E0A\u7684/data/av/av/index.html

root\u5B9E\u4F8B2\uFF1A
location ~* .*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>jpg<span class="token operator">|</span>gif<span class="token operator">|</span>png<span class="token operator">|</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
       root  /data/static/<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

\u8BF7\u6C42url\u662Fpythonav.cn/girl.gif\u65F6
web\u670D\u52A1\u5668\u4F1A\u8FD4\u56DE\u670D\u52A1\u5668\u4E0A\u7684/data/static/girl.gif


alias\u5B9E\u4F8B\uFF1A
alias\u53C2\u6570\u662F\u4F7F\u7528alias\u8DEF\u5F84\u66FF\u6362location\u8DEF\u5F84
alias\u662F\u4E00\u4E2A\u76EE\u5F55\u7684\u522B\u540D
\u6CE8\u610Falias\u5FC5\u987B\u6709 <span class="token string">&quot;/&quot;</span>  \u7ED3\u675F\uFF01
alias\u53EA\u80FD\u4F4D\u4E8Elocation\u5757\u4E2D


\u8BF7\u6C42url\u662Fpythonav.cn/av/index.html\u65F6
web\u670D\u52A1\u5668\u4F1A\u8FD4\u56DE\u670D\u52A1\u5668\u4E0A\u7684/data/static/index.html

location ^~ /av <span class="token punctuation">{</span>
    <span class="token builtin class-name">alias</span> /data/static/<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u793A\u4F8B-conf-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-conf-\u6587\u4EF6" aria-hidden="true">#</a> \u793A\u4F8B conf \u6587\u4EF6</h3><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>
user  nginx;
# \u5DE5\u4F5C\u8FDB\u7A0B \u4E00\u822Ccpu\u6570 * \u6838\u6570
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

# \u4E00\u4E2Awork\u80FD\u4FDD\u6301\u7684\u94FE\u63A5\u6570
events {
    worker_connections  1024;
}
# \u96C6\u7FA4\uFF0C\u7533\u660E\u4E0A\u6E38\u670D\u52A1\u5668\u7EC4, \u901A\u8FC7proxy_pass \u4EE3\u7406\u5230\u672C\u670D\u52A1\u5668\u7EC4
upstream servers_name {
  server 192.168.0.1:80 weight=1 max_fails=2 fail_timeout=30s;
  server 192.168.0.2:80 weight=1 max_fails=2 fail_timeout=30s;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    # \u65E5\u5FD7\u7684\u683C\u5F0F
    # http_x_forwarded_for \u88AB\u4EE3\u7406\u7528\u6237\u7684\u771F\u5B9Eip
    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    # access_log \u65E5\u5FD7\u5199\u5165\u8DEF\u5F84 \u4F7F\u7528\u7684\u683C\u5F0F
    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    # gzip \u76F8\u5173\u914D\u7F6E
    gzip  on;
    gzip_min_length 1k;
    gzip_buffers 4 16k;

    gzip_comp_level 2;
    gzip_types text/plain application/x-javascript application/javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    gzip_vary on;
    gzip_disable &quot;MSIE [1-6]\\.&quot;;

    # \u4E00\u4E2A\u865A\u62DF\u4E3B\u673A\uFF0C \u4EE5\u4E0A\u914D\u7F6E\u5747\u53EF\u5355\u72EC\u5199\u5165\u4EE5\u4E0B\u865A\u62DF\u4E3B\u673A\u914D\u7F6E
    server {
      listen 80;
      # \u53EF\u4EE5\u653E\u591A\u4E2A\u57DF\u540D
      server_name test.com bb.com;
      #charset koi8-r;

      location / {
        root   /www;
        index   index.html index.php;

        # \u4E0D\u5B58\u5728\u8FD9\u4E2A\u6587\u4EF6\u65F6\uFF0C url\u91CD\u5199\u5230index.php
        if ( !-e $request_filename) {
          rewirte (.*)$ /index.php$1;
        }
        # \u5148\u5C1D\u8BD5\u6587\u4EF6\u8DEF\u5F84\uFF0C\u4E0D\u884C\u5C31\u91CD\u5199\u8DEF\u5F84
        try_files $uri /index.php?$uri;

        # \u4EE3\u7406\u5230\u67D0\u4E2A\u5730\u5740
        proxy_pass 192.168.0.1:80;

        # \u4EBA\u4E3A\u5728\u5934\u4FE1\u606F\u6302\u4E0A\u7528\u6237\u771F\u5B9E\u5730\u5740
        proxy_set_headr X_Forwarded_For $remote_addr;

      }

      location ~.*\\.(js|css)?$ {
        # \u8FC7\u671F\u65F6\u95F4
        expires 1h;
        proxy_pass http://127.0.0.1;
      }
      #error_page  404              /404.html;

      # \u91CD\u5B9A\u5411\u5230\u9759\u6001\u9519\u8BEF\u9875 /50x.html
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

      #     \u53CD\u5411\u5F15\u7528\u4F20\u53C2    SCRIPT_FILENAME \u4E00\u822C\u662F $document_root$fastcgi_script_name;
      #
      #     fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
      #     fastcgi_param  PATH_INFO $1;

      #     \u5F15\u5165\u53C2\u6570\u914D\u7F6E\u6587\u4EF6
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function h(k,_){const i=l("ExternalLinkIcon");return d(),c("div",null,[t,n("p",null,[n("a",o,[u,e(i)]),n("a",p,[m,e(i)])]),b])}var x=a(v,[["render",h],["__file","Nginx \u914D\u7F6E.html.vue"]]);export{x as default};
