import{_ as c,r as l,o as d,c as o,a as n,e as a,b as s,d as i}from"./app.4b7e0070.js";const r={},t=n("h1",{id:"docker-\u5165\u95E8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-\u5165\u95E8","aria-hidden":"true"},"#"),s(" docker \u5165\u95E8")],-1),p={href:"https://www.docker.com",target:"_blank",rel:"noopener noreferrer"},u=s("docker \u5B98\u7F51"),v=n("br",null,null,-1),m={href:"https://www.runoob.com/docker/docker-command-manual.html",target:"_blank",rel:"noopener noreferrer"},b=s("\u547D\u4EE4\u5927\u5168"),k=n("h2",{id:"docker-\u547D\u4EE4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-\u547D\u4EE4","aria-hidden":"true"},"#"),s(" docker \u547D\u4EE4")],-1),h=n("h3",{id:"\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B89\u88C5","aria-hidden":"true"},"#"),s(" \u5B89\u88C5")],-1),f={href:"https://juejin.cn/post/6999962316439552030",target:"_blank",rel:"noopener noreferrer"},g=s("\u624B\u52A8\u5B89\u88C5"),_=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4F7F\u7528\u5B98\u65B9\u81EA\u52A8\u5B89\u88C5\u811A\u672C</span>
<span class="token function">curl</span> -fsSL https://get.docker.com <span class="token operator">|</span> <span class="token function">bash</span> -s <span class="token function">docker</span> --mirror Aliyun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7528\u6237\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u76F8\u5173" aria-hidden="true">#</a> \u7528\u6237\u76F8\u5173</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u767B\u5F55\u5230docker\u5B98\u65B9</span>
<span class="token function">docker</span> login -u <span class="token string">&quot;<span class="token variable">$DOCKER_USERNAME</span>&quot;</span> --password-stdin <span class="token comment"># \u7136\u540E\u8F93\u5165\u5BC6\u7801</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u955C\u50CF\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF\u76F8\u5173" aria-hidden="true">#</a> \u955C\u50CF\u76F8\u5173</h3><h4 id="\u67E5\u627E\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E\u955C\u50CF" aria-hidden="true">#</a> \u67E5\u627E\u955C\u50CF</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u627E\u67E5\u955C\u50CF</span>
<span class="token function">docker</span> search image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u62C9\u53D6\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6\u955C\u50CF" aria-hidden="true">#</a> \u62C9\u53D6\u955C\u50CF</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u62C9\u53D6\u955C\u50CF</span>
<span class="token function">docker</span> pull image:tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8FD0\u884C\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u955C\u50CF" aria-hidden="true">#</a> \u8FD0\u884C\u955C\u50CF</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FD0\u884C\u955C\u50CF</span>
<span class="token function">docker</span> run <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> IMAGE <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span> <span class="token punctuation">[</span>ARG<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
          -P                    \u662F\u5BB9\u5668\u5185\u90E8\u7AEF\u53E3\u968F\u673A\u6620\u5C04\u5230\u4E3B\u673A\u7684\u9AD8\u7AEF\u53E3<span class="token punctuation">(</span>\u65E0\u53C2\u6570<span class="token punctuation">))</span>
          -p ip:\u7AEF\u53E3:\u5BB9\u5668\u7AEF\u53E3    \u6307\u5B9A\u6620\u5C04\u7AEF\u53E3
          -d                    \u540E\u53F0\u8FD0\u884C
          -it                   \u4EA4\u4E92\u5F0F,\u4F2A\u7EC8\u7AEF
          -v                    \u6620\u5C04\u6587\u4EF6\u76EE\u5F55,linux\u91CC\u7684\u8DEF\u5F84
          --network <span class="token function">host</span>        \u6307\u5B9A\u5BB9\u5668\u7684\u7F51\u7EDC\u8FDE\u63A5\u7C7B\u578B\uFF0C
                                \u652F\u6301\u56DB\u79CD\u7C7B\u578B bridge/host/none/container
          --link<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>             \u6DFB\u52A0\u94FE\u63A5\u5230\u53E6\u4E00\u4E2A\u5BB9\u5668
          --expose<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>           \u5F00\u653E\u4E00\u4E2A\u7AEF\u53E3\u6216\u4E00\u7EC4\u7AEF\u53E3
<span class="token comment"># \u4F8B\u5982</span>
<span class="token function">docker</span> run -d -p <span class="token number">80</span>:80  ubuntu <span class="token function">ping</span> <span class="token number">127.0</span>.0.1
<span class="token comment"># \u53EF\u7528sh\u6267\u884C\u591A\u6761\u547D\u4EE4 (sh -c &#39;... &amp;&amp; ...&#39;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6784\u5EFA\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u955C\u50CF" aria-hidden="true">#</a> \u6784\u5EFA\u955C\u50CF</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6784\u5EFA\u955C\u50CF</span>
<span class="token comment"># dockerfile\u6784\u5EFA\u955C\u50CF, docker build [\u9009\u9879] &lt;\u4E0A\u4E0B\u6587\u8DEF\u5F84/URL/-&gt;</span>
<span class="token function">docker</span> build -t image:tag <span class="token builtin class-name">.</span>
          -f          \u6307\u5B9A Dockerfile \u6587\u4EF6
<span class="token comment"># \u4F7F\u7528Git repo\u8DEF\u5F84\u65F6\uFF0C\u6307\u5B9A\u9ED8\u8BA4\u7684 master \u5206\u652F\uFF0C\u6784\u5EFA\u76EE\u5F55\u4E3A url#path \u3002</span>
<span class="token comment"># \u8FD8\u53EF\u4F7F\u7528tar\u8DEF\u5F84 docker build http://server/context.tar.gz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u751F\u6210\u53D1\u5E03\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u53D1\u5E03\u955C\u50CF" aria-hidden="true">#</a> \u751F\u6210\u53D1\u5E03\u955C\u50CF</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5BB9\u5668\u751F\u6210\u955C\u50CF</span>
<span class="token function">docker</span> commit container_id image:tag
        -a        \u4F5C\u8005
        -m        \u63CF\u8FF0

<span class="token comment"># \u8BBE\u7F6E\u955C\u50CF\u6807\u7B7E</span>
<span class="token function">docker</span> tag image runoob/centos:dev

<span class="token comment"># \u955C\u50CF\u5217\u8868</span>
<span class="token function">docker</span> image <span class="token function">ls</span>
<span class="token function">docker</span> images

<span class="token comment"># \u53D1\u5E03\u955C\u50CF</span>
<span class="token function">docker</span> push image

<span class="token comment"># \u79FB\u9664\u955C\u50CF</span>
<span class="token function">docker</span> rmi image

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BB9\u5668\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u76F8\u5173" aria-hidden="true">#</a> \u5BB9\u5668\u76F8\u5173</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># container \u53EF\u4EE5\u662F\u5BB9\u5668\u540D\uFF0C\u4E5F\u53EF\u4EE5\u662F4\u4F4D\u4EE5\u4E0A\u7684id</span>
<span class="token comment"># \u67E5\u770B\u5BB9\u5668\u5217\u8868</span>
  <span class="token function">docker</span> <span class="token function">ps</span>         \u8FD0\u884C\u4E2D\u7684
          -a        \u5168\u90E8
          -l        \u6700\u8FD1\u4FEE\u6539

<span class="token comment"># \u67E5\u770B\u5BB9\u5668\u7684\u8BE6\u60C5</span>
  <span class="token function">docker</span> inspect container
          -f        \u6309\u6A21\u677F\u627E\u67E5 <span class="token punctuation">{</span><span class="token punctuation">{</span>.NetworkSettings.Ports<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># \u67E5\u770B\u6620\u5C04\u7AEF\u53E3</span>
  <span class="token function">docker</span> port container

<span class="token comment"># \u67E5\u770B\u5BB9\u5668\u91CC\u7684\u8FDB\u7A0B</span>
  <span class="token function">docker</span> <span class="token function">top</span> container

<span class="token comment"># \u505C/\u542F\u5BB9\u5668</span>
  <span class="token function">docker</span> stop/start container

<span class="token comment"># \u79FB\u9664\u5BB9\u5668</span>
  <span class="token function">docker</span> <span class="token function">rm</span> container

<span class="token comment"># \u8FDB\u5165\u5BB9\u5668</span>
  <span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it container /bin/bash

<span class="token comment"># \u67E5\u770B\u5BB9\u5668\u65E5\u5FD7</span>
  <span class="token function">docker</span> logs container

<span class="token comment"># \u5C06\u5BB9\u5668\u7684\u5185\u5BB9\u62F7\u8D1D\u5230\u5BBF\u4E3B</span>
  <span class="token function">docker</span> <span class="token function">cp</span> mysql:/var/lib/mysql /www/docker/mysql/data

<span class="token comment"># \u67E5\u770B\u5BB9\u5668\u7684\u7F51\u7EDC\u60C5\u51B5</span>
  <span class="token function">docker</span> network <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dockfile-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#dockfile-\u6587\u4EF6" aria-hidden="true">#</a> Dockfile \u6587\u4EF6</h2>`,17),x={href:"https://www.cnblogs.com/lighten/p/6900556.html",target:"_blank",rel:"noopener noreferrer"},D=s("Dockfile \u6587\u4EF6\u6307\u4EE4"),w=n("h2",{id:"docker-compose",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-compose","aria-hidden":"true"},"#"),s(" docker-compose")],-1),y=n("h3",{id:"docker-compose-\u547D\u4EE4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-compose-\u547D\u4EE4","aria-hidden":"true"},"#"),s(" docker-compose \u547D\u4EE4")],-1),R={href:"https://www.jianshu.com/p/658911a8cff3",target:"_blank",rel:"noopener noreferrer"},N=s("docker-compose.yml \u7684\u4F7F\u7528"),A=n("br",null,null,-1),q={href:"https://blog.csdn.net/qq_36148847/article/details/79427878",target:"_blank",rel:"noopener noreferrer"},E=s("\u5404\u4E2A\u53C2\u6570\u7684\u89E3\u91CA"),O=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u68C0\u67E5\u914D\u7F6E\u662F\u5426ok</span>
<span class="token function">docker-compose</span> config  -q

<span class="token comment"># \u8FD0\u884C</span>
  <span class="token function">docker-compose</span> up       \u6267\u884C\u5F53\u524D\u76EE\u5F55\u7684.yml\u6587\u4EF6
              -d        \u540E\u53F0\u8FD0\u884C
              --force-recreate \u53EF\u4EE5\u5F3A\u5236\u91CD\u5EFA\u5BB9

  <span class="token function">docker-compose</span> down \u505C\u6B62\u6240\u6709\u5BB9\u5668\uFF0C\u5E76\u5220\u9664\u5BB9\u5668

<span class="token comment"># \u5217\u51FA\u6240\u8FD0\u884C\u7684\u5BB9\u5668</span>
  <span class="token function">docker-compose</span> <span class="token function">ps</span>

<span class="token comment"># \u67E5\u770B\u670D\u52A1\u65E5\u5FD7</span>
  <span class="token function">docker-compose</span> logs

<span class="token comment"># \u67D0\u670D\u52A1\u91CC3000\u7AEF\u53E3\uFF0C\u6620\u5C04\u7684\u516C\u5171\u7AEF\u53E3</span>
  <span class="token function">docker-compose</span> port service_name <span class="token number">3000</span>

<span class="token comment"># \u6784\u5EFA\u6216\u91CD\u6784\u67D0\u670D\u52A1</span>
  <span class="token function">docker-compose</span> build service_name

<span class="token comment"># \u542F\u52A8/\u505C\u6B62/\u5220\u9664/\u6307\u4EE4\u505C\u6B62 \u670D\u52A1</span>
<span class="token function">docker-compose</span> start/stop/rm/kill service_name

<span class="token comment"># \u5728\u4E00\u4E2A\u670D\u52A1\u4E0A\u6267\u884C\u547D\u4EE4</span>
<span class="token function">docker-compose</span> run service_name <span class="token builtin class-name">command</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-compose-yaml-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#docker-compose-yaml-\u6587\u4EF6" aria-hidden="true">#</a> docker-compose.yaml \u6587\u4EF6</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2><h3 id="\u6570\u636E\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u62F7\u8D1D" aria-hidden="true">#</a> \u6570\u636E\u62F7\u8D1D</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4ECE\u5BB9\u5668\u91CC\u62F7\u8D1D\u6570\u636E\u5230\u4E3B\u673A</span>
  <span class="token function">docker</span> <span class="token function">cp</span> container:/var/www/html /var/www/

<span class="token comment"># \u4E3B\u673A\u62F7\u8D1D\u5230\u5BB9\u5668\u91CC</span>
  <span class="token function">cp</span> docker/docker-start.sh /var/lib/docker/aufs/mnt/a77a72ac178c1e35708d2af446197c10239b0b1bd8932104578e334b83eb93a2/root/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="_1-docker-\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-docker-\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> 1.docker \u7B80\u5355\u4F7F\u7528</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6839\u636E\u76EE\u5F55\u4E0Bdockerfile\u6784\u5EFA\u955C\u50CF</span>
  <span class="token function">docker</span> build -t image_name <span class="token builtin class-name">.</span>

<span class="token comment"># -p ip:\u7AEF\u53E3:\u5BB9\u5668\u7AEF\u53E3, -d \u540E\u53F0\u8FD0\u884C -P\u6620\u5C04\u8DEF\u7531 it: \u53EF\u547D\u4EE4\u884C\u4EA4\u4E92 -v \u6620\u5C04\u76EE\u5F55</span>
  <span class="token function">docker</span> run -it -d -P --name tag -v /www:/var image_name <span class="token function">node</span> index

<span class="token comment"># \u67E5\u770B\u65E5\u5FD7</span>
  <span class="token function">docker</span> logs container

<span class="token comment"># \u8FDB\u5165\u5BB9\u5668</span>
  <span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it container /bin/bash     <span class="token function">bash</span> \u6216 <span class="token function">sh</span>
<span class="token comment"># \u67E5\u770B\u6620\u5C04\u7AEF\u53E3</span>
  <span class="token function">docker</span> port containerId

  <span class="token function">docker</span> images   \u67E5\u770B\u955C\u50CF
  <span class="token function">docker</span> <span class="token function">ps</span>       \u67E5\u770B\u5BB9\u5668
  <span class="token function">docker</span> <span class="token function">rm</span>       \u79FB\u9664\u5BB9\u5668
  <span class="token function">docker</span> rmi      \u79FB\u9664\u955C\u50CF
  <span class="token function">docker</span> stop <span class="token function">id</span>  \u505C\u6B62\u5BB9\u5668
  <span class="token function">docker</span> start -i containerName <span class="token comment">#\u91CD\u542F\u542F\u52A8\u4E00\u4E2A\u8FD0\u884C\u8FC7\u7684\u5BB9\u5668</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u4F7F\u7528-dockerfile-\u90E8\u7F72\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528-dockerfile-\u90E8\u7F72\u9879\u76EE" aria-hidden="true">#</a> 2.\u4F7F\u7528 Dockerfile \u90E8\u7F72\u9879\u76EE</h3><p>1.\u7F16\u5199 dockerfile \u6587\u4EF6</p><div class="language-Dockerfile ext-Dockerfile line-numbers-mode"><pre class="language-Dockerfile"><code># \u9009\u62E9\u4E00\u4E2A\u4F53\u79EF\u5C0F\u7684\u955C\u50CF (~5MB)
FROM node:16-alpine

# \u8BBE\u7F6E\u4E3A\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u4EE5\u4E0B RUN/CMD \u547D\u4EE4\u90FD\u662F\u5728\u5DE5\u4F5C\u76EE\u5F55\u4E2D\u8FDB\u884C\u6267\u884C
WORKDIR /code

# \u628A\u5BBF\u4E3B\u673A\u7684\u4EE3\u7801\u6DFB\u52A0\u5230\u955C\u50CF\u4E2D
ADD . /code

# \u5B89\u88C5\u4F9D\u8D56
RUN yarn

EXPOSE 3000

# \u542F\u52A8 Node Server
CMD npm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u6839\u636E dockerfile \u751F\u6210\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6784\u5EFA\u4E00\u4E2A\u540D\u4E3A simple-app \u7684\u955C\u50CF</span>
<span class="token comment"># -t: &quot;name:tag&quot; \u6784\u5EFA\u955C\u50CF\u540D\u79F0</span>
$ <span class="token function">docker</span> build -t simple-app <span class="token builtin class-name">.</span>

<span class="token comment"># git rev-parse --short HEAD: \u5217\u51FA\u5F53\u524D\u4ED3\u5E93\u7684 CommitId</span>
<span class="token comment"># \u4E5F\u53EF\u5C06\u5F53\u524D Commit \u4F5C\u4E3A\u955C\u50CF\u7684 Tag</span>
<span class="token comment"># \u5982\u679C\u8BE5\u524D\u7AEF\u9879\u76EE\u4F7F\u7528 git tag \u4EE5\u53CA package.json \u4E2D\u7684 version \u8FDB\u884C\u7248\u672C\u7EF4\u62A4\uFF0C\u4E5F\u53EF\u5C06 version \u4F5C\u4E3A\u751F\u4EA7\u73AF\u5883\u955C\u50CF\u7684 Tag</span>
$ <span class="token function">docker</span> build -t simple-app:<span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> rev-parse --short HEAD<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.\u8FD0\u884C\u5BB9\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run --rm -p <span class="token number">3000</span>:3000 simple-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-\u4F7F\u7528-docker-compose-\u90E8\u7F72\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528-docker-compose-\u90E8\u7F72\u9879\u76EE" aria-hidden="true">#</a> 3.\u4F7F\u7528 docker-compose \u90E8\u7F72\u9879\u76EE</h3><p>dockerfile \u6587\u4EF6</p><div class="language-Dockerfile ext-Dockerfile line-numbers-mode"><pre class="language-Dockerfile"><code>FROM node:16-alpine as builder

WORKDIR /code

# \u5355\u72EC\u5206\u79BB package.json\uFF0C\u662F\u4E3A\u4E86 yarn \u53EF\u6700\u5927\u9650\u5EA6\u5229\u7528\u7F13\u5B58
ADD package.json yarn.lock /code/
RUN yarn

# \u5355\u72EC\u5206\u79BB public/src\uFF0C\u662F\u4E3A\u4E86\u907F\u514D ADD . /code \u65F6\uFF0C\u56E0\u4E3A Readme/nginx.conf \u7684\u66F4\u6539\u907F\u514D\u7F13\u5B58\u751F\u6548
# \u4E5F\u662F\u4E3A\u4E86 npm run build \u53EF\u6700\u5927\u9650\u5EA6\u5229\u7528\u7F13\u5B58
ADD public /code/public
ADD src /code/src
RUN npm run build

# \u9009\u62E9\u66F4\u5C0F\u4F53\u79EF\u7684\u57FA\u7840\u955C\u50CF\uFF0C\u8FDB\u884C\u591A\u9636\u6BB5\u6784\u5EFA
FROM nginx:alpine
ADD nginx.conf /etc/nginx/conf.d/default.conf
# \u5C06node\u955C\u50CF\u751F\u6210\u7684build\u6587\u4EF6\u62F7\u8D1D\u5230nginx\u955C\u50CF\uFF0C\u8FD0\u884C\u66F4\u5C0F\u7684nginx\u955C\u50CF\u6765\u670D\u52A1
COPY --from=builder code/build /usr/share/nginx/html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker-compose.yaml \u6587\u4EF6</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token key atrule">nginx-app</span><span class="token punctuation">:</span>
        <span class="token key atrule">build</span><span class="token punctuation">:</span>
            <span class="token key atrule">context</span><span class="token punctuation">:</span> .
            <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> 3000<span class="token punctuation">:</span><span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function M(C,I){const e=l("ExternalLinkIcon");return d(),o("div",null,[t,n("p",null,[n("a",p,[u,a(e)]),v,n("a",m,[b,a(e)])]),k,h,n("p",null,[n("a",f,[g,a(e)])]),_,n("p",null,[n("a",x,[D,a(e)])]),w,y,n("p",null,[n("a",R,[N,a(e)]),A,n("a",q,[E,a(e)])]),O])}var S=c(r,[["render",M],["__file","docker \u547D\u4EE4.html.vue"]]);export{S as default};
