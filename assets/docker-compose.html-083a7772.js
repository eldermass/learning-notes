import{_ as i,Y as t,Z as c,a1 as n,a2 as s,a3 as e,a0 as l,E as o}from"./framework-6d304b95.js";const p={},u=n("h1",{id:"docker-compose-使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-compose-使用","aria-hidden":"true"},"#"),s(" docker-compose 使用")],-1),d={href:"https://www.jianshu.com/p/658911a8cff3",target:"_blank",rel:"noopener noreferrer"},r=n("br",null,null,-1),k=n("a",{href:"https:#blog.csdn.net/qq_36148847/article/details/79427878"},"各个参数的解释",-1),m=n("br",null,null,-1),v={href:"https://www.cnblogs.com/moxiaoan/p/9299404.html",target:"_blank",rel:"noopener noreferrer"},b=l(`<h2 id="docker-compose-命令" tabindex="-1"><a class="header-anchor" href="#docker-compose-命令" aria-hidden="true">#</a> docker-compose 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 检查配置是否ok</span>
  <span class="token function">docker-compose</span> config  <span class="token parameter variable">-q</span>

<span class="token comment"># 运行</span>
  <span class="token function">docker-compose</span> up           执行当前目录的.yml文件
            <span class="token parameter variable">-d</span>                后台运行
            --force-recreate  可以强制重建容

  <span class="token function">docker-compose</span> down         停止所有容器，并删除容器

<span class="token comment"># 列出所运行的容器</span>
  <span class="token function">docker-compose</span> <span class="token function">ps</span>

<span class="token comment"># 查看服务日志</span>
  <span class="token function">docker-compose</span> logs

<span class="token comment"># 某服务里3000端口，映射的公共端口</span>
  <span class="token function">docker-compose</span> port service_name <span class="token number">3000</span>

<span class="token comment"># 构建或重构某服务</span>
  <span class="token function">docker-compose</span> build service_name

<span class="token comment"># 启动/停止/删除/指令停止 服务</span>
  <span class="token function">docker-compose</span> start/stop/rm/kill service_name

<span class="token comment"># 在一个服务上执行命令</span>
  <span class="token function">docker-compose</span> run service_name <span class="token builtin class-name">command</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dockerfile-文件" tabindex="-1"><a class="header-anchor" href="#dockerfile-文件" aria-hidden="true">#</a> Dockerfile 文件</h2>`,3),h={href:"https://my.oschina.net/jack088/blog/3006794",target:"_blank",rel:"noopener noreferrer"},y=l(`<p>docker build 命令会将该目录下的内容打包交给 Docker 引擎以帮助构建镜像构建时传给 Docker 引擎。为避免传输上下文目录过大，可以用 .gitignore 一样的语法写一个 .dockerignore ，该文件是用于剔除不需要作为上下文传递给 Docker 引擎的。</p><div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile"><pre class="language-Dockerfile"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker-compose-yml-文件" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml-文件" aria-hidden="true">#</a> docker-compose.yml 文件</h2>`,3),_=n("br",null,null,-1),f={href:"https://blog.csdn.net/qq_36148847/article/details/79427878",target:"_blank",rel:"noopener noreferrer"},g=l(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 格式的版本</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token comment"># 服务名</span>
  <span class="token key atrule">service_nginx</span><span class="token punctuation">:</span>
    <span class="token comment"># 生成的容器名</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nginx
    <span class="token comment"># 重启策略，默认no， always表示报错总会重启</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token comment"># 指定使用镜像，如果你还指定了build，它将使用指定的build选项构建它，并使用image指定的名字和标记对其进行标记。</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>stable
    <span class="token comment"># 从Dockerfile 构建镜像，参数可以在Dockerfile中通过$buildno访问</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> ./dir
      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile
      <span class="token key atrule">args</span><span class="token punctuation">:</span>
          <span class="token key atrule">buildno</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token comment"># 映射网路 （HOST:CONTAINER）</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;127.0.0.1:8080:8080&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;127.0.0.1:3000-3010:3000-3010&quot;</span>
    <span class="token comment"># 卷挂载路径设置，win下 e盘对应 /e/, HOST:CONTAINER:ro，最后一个参数 ro：只读， rw：读写</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /e/test/docker<span class="token punctuation">:</span>/etc/nginx/conf.d
    <span class="token comment"># 链接到指定服务名称和链接别名  SERVICE：ALIAS</span>
    <span class="token comment"># /etc/hosts 通过 服务名或别名 能访问到node服务暴露的网络</span>
    <span class="token key atrule">links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> node<span class="token punctuation">:</span>node
    <span class="token comment"># 链接到非docker-compose管理的容器</span>
    <span class="token key atrule">external_links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mysql
      <span class="token punctuation">-</span> redis_1<span class="token punctuation">:</span>redis
    <span class="token comment"># 桥接时在容器里访问宿主网络，会在/etc/hosts 里写入 域名解析到宿主 172.21.0.1  api.firmoo.test</span>
    <span class="token comment"># 容器里通过 ip addr 可查看到宿主网络</span>
    <span class="token key atrule">extra_hosts</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;api.firmoo.test:172.21.0.1&quot;</span>
    <span class="token comment"># 覆盖容器启动后默认执行的命令</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> sh <span class="token punctuation">-</span>c &#39;ping www.baidu.com&#39;
    <span class="token comment"># 环境变量</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> SECRET=development
    <span class="token comment"># 读取env文件作为环境变量</span>
    <span class="token key atrule">env_file</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./web.env
    <span class="token comment"># 暴露端口，但不映射到宿主机，只被连接的服务访问。</span>
    <span class="token key atrule">expose</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;443&quot;</span>
    <span class="token comment"># 共享容器与主机之间的PID地址空间，容器将能够访问和操作主机的命名空间中的其他容器</span>
    <span class="token key atrule">pid</span><span class="token punctuation">:</span> <span class="token string">&quot;host&quot;</span>
    <span class="token comment"># dns也可以是一个值</span>
    <span class="token key atrule">dns</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8.8.8.8
      <span class="token punctuation">-</span> 9.9.9.9
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">lnmp-network</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> service_nginx
    <span class="token comment"># 是否以最高权限开启容器</span>
    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token comment"># 本服务依赖的服务，顺序在其后启动</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> node
    <span class="token key atrule">ulimits</span><span class="token punctuation">:</span>
      <span class="token key atrule">nproc</span><span class="token punctuation">:</span> <span class="token number">65535</span>
      <span class="token key atrule">nofile</span><span class="token punctuation">:</span>
        <span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">20000</span>
        <span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">40000</span>
  <span class="token key atrule">node</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> node
    <span class="token key atrule">build</span><span class="token punctuation">:</span> .
    <span class="token key atrule">expose</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3000&quot;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3000:3000&quot;</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> npm start
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">lnmp-network</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> node
    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">ulimits</span><span class="token punctuation">:</span>
      <span class="token key atrule">nproc</span><span class="token punctuation">:</span> <span class="token number">65535</span>
      <span class="token key atrule">nofile</span><span class="token punctuation">:</span>
        <span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">20000</span>
        <span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">40000</span>
<span class="token comment"># 网络别名</span>
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">lnmp-network</span><span class="token punctuation">:</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function q(x,w){const a=o("ExternalLinkIcon");return t(),c("div",null,[u,n("p",null,[n("a",d,[s("docker-compose.yml 的使用"),e(a)]),r,k,m,n("a",v,[s("启动命令"),e(a)])]),b,n("p",null,[n("a",h,[s("php-fpm的拓展"),e(a)]),s(" [Dockerfile语法]](https://blog.csdn.net/wo18237095579/article/details/80540571)")]),y,n("p",null,[s("长语法表示展开表示"),_,n("a",f,[s("语法参数详解"),e(a)])]),g])}const E=i(p,[["render",q],["__file","docker-compose.html.vue"]]);export{E as default};
