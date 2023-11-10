import{_ as l,Y as c,Z as t,a1 as n,a2 as s,a3 as e,a0 as i,E as p}from"./framework-6d304b95.js";const o={},d=n("h1",{id:"docker-基础",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-基础","aria-hidden":"true"},"#"),s(" Docker 基础")],-1),r={href:"https://www.docker.com",target:"_blank",rel:"noopener noreferrer"},u=n("br",null,null,-1),v={href:"https://www.runoob.com/docker/docker-command-manual.html",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"docker-命令",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-命令","aria-hidden":"true"},"#"),s(" docker 命令")],-1),k=n("h3",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),s(" 安装")],-1),b={href:"https://juejin.cn/post/6999962316439552030",target:"_blank",rel:"noopener noreferrer"},h=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用官方自动安装脚本</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> <span class="token function">docker</span> <span class="token parameter variable">--mirror</span> Aliyun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户相关" tabindex="-1"><a class="header-anchor" href="#用户相关" aria-hidden="true">#</a> 用户相关</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 登录到docker官方</span>
<span class="token function">docker</span> login <span class="token parameter variable">-u</span> <span class="token string">&quot;<span class="token variable">$DOCKER_USERNAME</span>&quot;</span> --password-stdin <span class="token comment"># 然后输入密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="镜像相关" tabindex="-1"><a class="header-anchor" href="#镜像相关" aria-hidden="true">#</a> 镜像相关</h3><h4 id="查找镜像" tabindex="-1"><a class="header-anchor" href="#查找镜像" aria-hidden="true">#</a> 查找镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 找查镜像</span>
<span class="token function">docker</span> search image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="拉取镜像" tabindex="-1"><a class="header-anchor" href="#拉取镜像" aria-hidden="true">#</a> 拉取镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拉取镜像</span>
<span class="token function">docker</span> pull image:tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="运行镜像" tabindex="-1"><a class="header-anchor" href="#运行镜像" aria-hidden="true">#</a> 运行镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 运行镜像</span>
<span class="token function">docker</span> run <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> IMAGE <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span> <span class="token punctuation">[</span>ARG<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
          <span class="token parameter variable">-P</span>                    是容器内部端口随机映射到主机的高端口<span class="token punctuation">(</span>无参数<span class="token punctuation">))</span>
          <span class="token parameter variable">-p</span> ip:端口:容器端口    指定映射端口
          <span class="token parameter variable">-d</span>                    后台运行
          <span class="token parameter variable">-it</span>                   交互式,伪终端
          <span class="token parameter variable">-v</span>                    映射文件目录,linux里的路径
          <span class="token parameter variable">--network</span> <span class="token function">host</span>        指定容器的网络连接类型，
                                支持四种类型 bridge/host/none/container
          <span class="token parameter variable">--link</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>             添加链接到另一个容器
          <span class="token parameter variable">--expose</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>           开放一个端口或一组端口
<span class="token comment"># 例如</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80  ubuntu <span class="token function">ping</span> <span class="token number">127.0</span>.0.1
<span class="token comment"># 可用sh执行多条命令 (sh -c &#39;... &amp;&amp; ...&#39;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="构建镜像" tabindex="-1"><a class="header-anchor" href="#构建镜像" aria-hidden="true">#</a> 构建镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 构建镜像</span>
<span class="token comment"># dockerfile构建镜像, docker build [选项] &lt;上下文路径/URL/-&gt;</span>
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> image:tag <span class="token builtin class-name">.</span>
          <span class="token parameter variable">-f</span>          指定 Dockerfile 文件
<span class="token comment"># 使用Git repo路径时，指定默认的 master 分支，构建目录为 url#path 。</span>
<span class="token comment"># 还可使用tar路径 docker build http://server/context.tar.gz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="生成发布镜像" tabindex="-1"><a class="header-anchor" href="#生成发布镜像" aria-hidden="true">#</a> 生成发布镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 容器生成镜像</span>
<span class="token function">docker</span> commit container_id image:tag
        <span class="token parameter variable">-a</span>        作者
        <span class="token parameter variable">-m</span>        描述

<span class="token comment"># 设置镜像标签</span>
<span class="token function">docker</span> tag image runoob/centos:dev

<span class="token comment"># 镜像列表</span>
<span class="token function">docker</span> image <span class="token function">ls</span>
<span class="token function">docker</span> images

<span class="token comment"># 发布镜像</span>
<span class="token function">docker</span> push image

<span class="token comment"># 移除镜像</span>
<span class="token function">docker</span> rmi image

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器相关" tabindex="-1"><a class="header-anchor" href="#容器相关" aria-hidden="true">#</a> 容器相关</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># container 可以是容器名，也可以是4位以上的id</span>
<span class="token comment"># 查看容器列表</span>
  <span class="token function">docker</span> <span class="token function">ps</span>         运行中的
          <span class="token parameter variable">-a</span>        全部
          <span class="token parameter variable">-l</span>        最近修改

<span class="token comment"># 查看容器的详情</span>
  <span class="token function">docker</span> inspect container
          <span class="token parameter variable">-f</span>        按模板找查 <span class="token punctuation">{</span><span class="token punctuation">{</span>.NetworkSettings.Ports<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># 查看映射端口</span>
  <span class="token function">docker</span> port container

<span class="token comment"># 查看容器里的进程</span>
  <span class="token function">docker</span> <span class="token function">top</span> container

<span class="token comment"># 停/启容器</span>
  <span class="token function">docker</span> stop/start container

<span class="token comment"># 移除容器</span>
  <span class="token function">docker</span> <span class="token function">rm</span> container

<span class="token comment"># 进入容器</span>
  <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> container /bin/bash

<span class="token comment"># 查看容器日志</span>
  <span class="token function">docker</span> logs container

<span class="token comment"># 将容器的内容拷贝到宿主</span>
  <span class="token function">docker</span> <span class="token function">cp</span> mysql:/var/lib/mysql /www/docker/mysql/data

<span class="token comment"># 查看容器的网络情况</span>
  <span class="token function">docker</span> network <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dockfile-文件" tabindex="-1"><a class="header-anchor" href="#dockfile-文件" aria-hidden="true">#</a> Dockfile 文件</h2>`,17),f={href:"https://www.cnblogs.com/lighten/p/6900556.html",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"docker-compose",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-compose","aria-hidden":"true"},"#"),s(" docker-compose")],-1),y=n("h3",{id:"docker-compose-命令",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-compose-命令","aria-hidden":"true"},"#"),s(" docker-compose 命令")],-1),_={href:"https://www.jianshu.com/p/658911a8cff3",target:"_blank",rel:"noopener noreferrer"},x=n("br",null,null,-1),w={href:"https://blog.csdn.net/qq_36148847/article/details/79427878",target:"_blank",rel:"noopener noreferrer"},q=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 检查配置是否ok</span>
<span class="token function">docker-compose</span> config  <span class="token parameter variable">-q</span>

<span class="token comment"># 运行</span>
  <span class="token function">docker-compose</span> up       执行当前目录的.yml文件
              <span class="token parameter variable">-d</span>          后台运行,以分离模式<span class="token punctuation">(</span>-d<span class="token punctuation">)</span>启动所有服务<span class="token punctuation">(</span>您不会在分离模式下看到任何日志<span class="token punctuation">)</span>
              --force-recreate 可以强制重建容

  <span class="token function">docker-compose</span> down 停止所有容器，并删除容器

<span class="token comment"># 列出所运行的容器</span>
  <span class="token function">docker-compose</span> <span class="token function">ps</span>

<span class="token comment"># 查看服务日志</span>
  <span class="token function">docker-compose</span> logs
  <span class="token function">docker-compose</span> logs <span class="token parameter variable">-f</span> <span class="token parameter variable">-t</span> 重视自己的日志中所有正在运行的服务,而-f意味着你跟随日志输出和-t选项使您的时间戳

<span class="token comment"># 某服务里3000端口，映射的公共端口</span>
  <span class="token function">docker-compose</span> port service_name <span class="token number">3000</span>

<span class="token comment"># 构建或重构某服务</span>
  <span class="token function">docker-compose</span> build service_name

<span class="token comment"># 启动/停止/删除/指令停止 服务</span>
<span class="token function">docker-compose</span> start/stop/rm/kill service_name

<span class="token comment"># 在一个服务上执行命令</span>
<span class="token function">docker-compose</span> run service_name <span class="token builtin class-name">command</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-compose-yaml-文件示例" tabindex="-1"><a class="header-anchor" href="#docker-compose-yaml-文件示例" aria-hidden="true">#</a> docker-compose.yaml 文件示例</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">3.5</span>
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">frontend</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
  <span class="token key atrule">backend</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> local
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> local

<span class="token key atrule">services</span><span class="token punctuation">:</span>

<span class="token comment">### NGINX Server #########################################</span>
  <span class="token key atrule">nginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> ./nginx
      <span class="token key atrule">args</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> CHANGE_SOURCE=true
        <span class="token punctuation">-</span> PHP_UPSTREAM_CONTAINER=php<span class="token punctuation">-</span>fpm
        <span class="token punctuation">-</span> PHP_UPSTREAM_PORT=9000
        <span class="token punctuation">-</span> http_proxy
        <span class="token punctuation">-</span> https_proxy
        <span class="token punctuation">-</span> no_proxy
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ../www/<span class="token punctuation">:</span>/var/www<span class="token punctuation">:</span>cached
      <span class="token punctuation">-</span> ./logs/nginx/<span class="token punctuation">:</span>/var/log/nginx
      <span class="token punctuation">-</span> ./nginx/sites/<span class="token punctuation">:</span>/etc/nginx/sites<span class="token punctuation">-</span>available
      <span class="token punctuation">-</span> ./nginx/ssl/<span class="token punctuation">:</span>/etc/nginx/ssl
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;443:443&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;81:81&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">frontend</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> nginx_frontend
          <span class="token comment"># 使用别名有利于在容器内部使用别名相互访问</span>
      <span class="token key atrule">backend</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> nginx_backend

<span class="token comment">### MySQL ################################################</span>
  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> ./mysql
      <span class="token key atrule">args</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> MYSQL_VERSION=latest
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> MYSQL_DATABASE=default
      <span class="token punctuation">-</span> MYSQL_USER=test
      <span class="token punctuation">-</span> MYSQL_PASSWORD=test
      <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD=test
      <span class="token punctuation">-</span> TZ=UTC
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ~/.laradock/data/mysql<span class="token punctuation">:</span>/var/lib/mysql
      <span class="token punctuation">-</span> ./mysql/docker<span class="token punctuation">-</span>entrypoint<span class="token punctuation">-</span>initdb.d<span class="token punctuation">:</span>/docker<span class="token punctuation">-</span>entrypoint<span class="token punctuation">-</span>initdb.d
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3306:3306&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> backend

<span class="token comment">### Redis ################################################</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> ./redis
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ~/.laradock/data/redis<span class="token punctuation">:</span>/data
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>requirepass secret_redis
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;6379:6379&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> backend

<span class="token comment">### 前端端 ################################################</span>
  <span class="token key atrule">frontend</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> ../frontend
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8001:3000&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> frontend
      <span class="token punctuation">-</span> backend

<span class="token comment">### 后端 ################################################</span>
  <span class="token key atrule">backend</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> ../backend
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8002:8001&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> frontend
      <span class="token punctuation">-</span> backend

<span class="token comment">### 后端管理台 ################################################</span>
  <span class="token key atrule">backend_desk</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> ../backend_desk
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8003:80&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> frontend
      <span class="token punctuation">-</span> backend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可以使用-portainer-来管理-docker" tabindex="-1"><a class="header-anchor" href="#可以使用-portainer-来管理-docker" aria-hidden="true">#</a> 可以使用 portainer 来管理 docker</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 通过 docker-compose 安装</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
<span class="token comment">### portainer 是一个docker的web管理工具，可以用来管理docker的容器，镜像，网络，数据卷等</span>
  <span class="token key atrule">portainer</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> portainer/portainer
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9000:9000&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock
      <span class="token punctuation">-</span> /data/docker/portainer/data<span class="token punctuation">:</span>/data

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h3 id="数据拷贝" tabindex="-1"><a class="header-anchor" href="#数据拷贝" aria-hidden="true">#</a> 数据拷贝</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 从容器里拷贝数据到主机</span>
  <span class="token function">docker</span> <span class="token function">cp</span> container:/var/www/html /var/www/

<span class="token comment"># 主机拷贝到容器里</span>
  <span class="token function">cp</span> docker/docker-start.sh /var/lib/docker/aufs/mnt/a77a72ac178c1e35708d2af446197c10239b0b1bd8932104578e334b83eb93a2/root/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h3 id="_1-docker-简单使用" tabindex="-1"><a class="header-anchor" href="#_1-docker-简单使用" aria-hidden="true">#</a> 1.docker 简单使用</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 根据目录下dockerfile构建镜像</span>
  <span class="token function">docker</span> build <span class="token parameter variable">-t</span> image_name <span class="token builtin class-name">.</span>

<span class="token comment"># -p ip:端口:容器端口, -d 后台运行 -P映射路由 it: 可命令行交互 -v 映射目录</span>
  <span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> <span class="token parameter variable">--name</span> tag <span class="token parameter variable">-v</span> /www:/var image_name <span class="token function">node</span> index

<span class="token comment"># 查看日志</span>
  <span class="token function">docker</span> logs container

<span class="token comment"># 进入容器</span>
  <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> container /bin/bash     <span class="token function">bash</span> 或 <span class="token function">sh</span>
<span class="token comment"># 查看映射端口</span>
  <span class="token function">docker</span> port containerId

  <span class="token function">docker</span> images   查看镜像
  <span class="token function">docker</span> <span class="token function">ps</span>       查看容器
  <span class="token function">docker</span> <span class="token function">rm</span>       移除容器
  <span class="token function">docker</span> rmi      移除镜像
  <span class="token function">docker</span> stop <span class="token function">id</span>  停止容器
  <span class="token function">docker</span> start <span class="token parameter variable">-i</span> containerName <span class="token comment">#重启启动一个运行过的容器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-使用-dockerfile-部署项目" tabindex="-1"><a class="header-anchor" href="#_2-使用-dockerfile-部署项目" aria-hidden="true">#</a> 2.使用 Dockerfile 部署项目</h3><p>1.编写 dockerfile 文件</p><div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile"><pre class="language-Dockerfile"><code># 选择一个体积小的镜像 (~5MB)
FROM node:16-alpine

# 设置为工作目录，以下 RUN/CMD 命令都是在工作目录中进行执行
WORKDIR /code

# 把宿主机的代码添加到镜像中
ADD . /code

# 安装依赖
RUN yarn

EXPOSE 3000

# 启动 Node Server
CMD npm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.根据 dockerfile 生成镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 构建一个名为 simple-app 的镜像</span>
<span class="token comment"># -t: &quot;name:tag&quot; 构建镜像名称</span>
$ <span class="token function">docker</span> build <span class="token parameter variable">-t</span> simple-app <span class="token builtin class-name">.</span>

<span class="token comment"># git rev-parse --short HEAD: 列出当前仓库的 CommitId</span>
<span class="token comment"># 也可将当前 Commit 作为镜像的 Tag</span>
<span class="token comment"># 如果该前端项目使用 git tag 以及 package.json 中的 version 进行版本维护，也可将 version 作为生产环境镜像的 Tag</span>
$ <span class="token function">docker</span> build <span class="token parameter variable">-t</span> simple-app:<span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> rev-parse <span class="token parameter variable">--short</span> HEAD<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.运行容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-p</span> <span class="token number">3000</span>:3000 simple-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-使用-docker-compose-部署项目" tabindex="-1"><a class="header-anchor" href="#_3-使用-docker-compose-部署项目" aria-hidden="true">#</a> 3.使用 docker-compose 部署项目</h3><p>dockerfile 文件</p><div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile"><pre class="language-Dockerfile"><code>FROM node:16-alpine as builder

WORKDIR /code

# 单独分离 package.json，是为了 yarn 可最大限度利用缓存
ADD package.json yarn.lock /code/
RUN yarn

# 单独分离 public/src，是为了避免 ADD . /code 时，因为 Readme/nginx.conf 的更改避免缓存生效
# 也是为了 npm run build 可最大限度利用缓存
ADD public /code/public
ADD src /code/src
RUN npm run build

# 选择更小体积的基础镜像，进行多阶段构建
FROM nginx:alpine
ADD nginx.conf /etc/nginx/conf.d/default.conf
# 将node镜像生成的build文件拷贝到nginx镜像，运行更小的nginx镜像来服务
COPY --from=builder code/build /usr/share/nginx/html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker-compose.yaml 文件</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token key atrule">nginx-app</span><span class="token punctuation">:</span>
        <span class="token key atrule">build</span><span class="token punctuation">:</span>
            <span class="token key atrule">context</span><span class="token punctuation">:</span> .
            <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> 3000<span class="token punctuation">:</span><span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function D(R,S){const a=p("ExternalLinkIcon");return c(),t("div",null,[d,n("p",null,[n("a",r,[s("docker 官网"),e(a)]),u,n("a",v,[s("命令大全"),e(a)])]),m,k,n("p",null,[n("a",b,[s("手动安装"),e(a)])]),h,n("p",null,[n("a",f,[s("Dockfile 文件指令"),e(a)])]),g,y,n("p",null,[n("a",_,[s("docker-compose.yml 的使用"),e(a)]),x,n("a",w,[s("各个参数的解释"),e(a)])]),q])}const E=l(o,[["render",D],["__file","docker 命令.html.vue"]]);export{E as default};
