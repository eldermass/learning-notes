import{_ as l,Y as t,Z as c,a1 as n,a2 as s,a3 as a,a0 as i,E as o}from"./framework-6d304b95.js";const d={},r=n("h1",{id:"docker-实践",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-实践","aria-hidden":"true"},"#"),s(" docker 实践")],-1),u={href:"https://blog.csdn.net/bskfnvjtlyzmv867/article/details/81044217",target:"_blank",rel:"noopener noreferrer"},p=n("br",null,null,-1),v={href:"https://www.jianshu.com/p/b20bcfba52a8",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),b={href:"https://www.cnblogs.com/brock0624/p/9788710.html",target:"_blank",rel:"noopener noreferrer"},k=n("br",null,null,-1),h={href:"https://www.cnblogs.com/freefei/p/7904165.html",target:"_blank",rel:"noopener noreferrer"},g=n("br",null,null,-1),q={href:"https://segmentfault.com/a/1190000013020851",target:"_blank",rel:"noopener noreferrer"},f=i(`<h2 id="docker-使用流程" tabindex="-1"><a class="header-anchor" href="#docker-使用流程" aria-hidden="true">#</a> docker 使用流程</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ubuntu下安装</span>
<span class="token function">apt-get</span> <span class="token function">install</span> docker.io

<span class="token comment"># 根据目录下dockerfile构建镜像</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>编写 dockerfile 文件</p></li><li><p>根据 dockerfile 打包镜像</p></li><li><p>本地运行,并映射端口 (访问 docker 地址:端口,即访问容器内的东西)</p></li></ol>`,3),_=n("br",null,null,-1),x={href:"https://www.jianshu.com/p/e4cacd775e5b",target:"_blank",rel:"noopener noreferrer"},A=n("br",null,null,-1),w={href:"https://blog.csdn.net/auv1107/article/details/51999592",target:"_blank",rel:"noopener noreferrer"},y=i(`<h2 id="linux-上部署示例" tabindex="-1"><a class="header-anchor" href="#linux-上部署示例" aria-hidden="true">#</a> linux 上部署示例</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">LOG_PATH</span><span class="token operator">=~</span>/logs/deploy_logs.txt<span class="token punctuation">;</span>
<span class="token assign-left variable">FLAG</span><span class="token operator">=</span>deploying<span class="token punctuation">;</span>
<span class="token function">date</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$LOG_PATH</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;开始重新部署<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$LOG_PATH</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-e</span> <span class="token variable">$FLAG</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token function">touch</span> <span class="token variable">$FLAG</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;拉取最新镜像&quot;</span><span class="token punctuation">;</span>
    <span class="token function">docker</span> pull asd285653184/music<span class="token punctuation">;</span>

    <span class="token comment">#echo &quot;停止容器&quot;;</span>
    <span class="token comment">#CONTAINERS=\`docker ps -a -q\`;</span>
    <span class="token comment">#docker stop $CONTAINERS;</span>

    <span class="token comment">#echo &quot;清空容器&quot;;</span>
    <span class="token comment">#docker rm $CONTAINERS;</span>

    <span class="token comment">#echo &quot;清除docker镜像&quot;;</span>
    <span class="token comment">#docker rmi \`docker images -a -q\`;</span>

    <span class="token builtin class-name">echo</span> <span class="token string">&quot;重新部署项目&quot;</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">cd</span> ~/project/music<span class="token punctuation">;</span>

    <span class="token function">git</span> pull<span class="token punctuation">;</span>
    <span class="token function">docker-compose</span> up -d<span class="token punctuation">;</span>

    <span class="token builtin class-name">echo</span> <span class="token string">&quot;清空悬空镜像或者容器&quot;</span><span class="token punctuation">;</span>

    <span class="token function">docker</span> image prune <span class="token parameter variable">-a</span> -f<span class="token punctuation">;</span>
    <span class="token function">docker</span> container prune -f<span class="token punctuation">;</span>

    <span class="token builtin class-name">cd</span> ~<span class="token punctuation">;</span>
    <span class="token function">rm</span> <span class="token variable">$FLAG</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;部署成功<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$LOG_PATH</span><span class="token punctuation">;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;正在重新部署中......&quot;</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;已在重新部署中......<span class="token entity" title="\\n">\\n</span>停止部署<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$LOG_PATH</span><span class="token punctuation">;</span>
<span class="token keyword">fi</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-desktop" tabindex="-1"><a class="header-anchor" href="#docker-desktop" aria-hidden="true">#</a> docker-desktop</h2><ol><li>docker 在 win10 下关机后容器会失效，一般来说重启一下 desktop，然后在重启容器就会好了。然而有些时候 必须要重启 docker 的服务才能恢复正常，虽然没找到原因，但是写了一个脚本来简化重启服务的过程。（这是很久以前的问题了，不需要了解）</li></ol><blockquote><p>重启 docker 服务的脚本</p></blockquote><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
&gt;nul 2&gt;&amp;1 &quot;%SYSTEMROOT%\\system32\\cacls.exe&quot; &quot;%SYSTEMROOT%\\system32\\config\\system&quot;

if &#39;%errorlevel%&#39; NEQ &#39;0&#39; (

goto UACPrompt

) else ( goto gotAdmin )



:UACPrompt

echo Set UAC = CreateObject^(&quot;Shell.Application&quot;^) &gt; &quot;%temp%\\getadmin.vbs&quot;

echo UAC.ShellExecute &quot;%~s0&quot;, &quot;&quot;, &quot;&quot;, &quot;runas&quot;, 1 &gt;&gt; &quot;%temp%\\getadmin.vbs&quot;

&quot;%temp%\\getadmin.vbs&quot;

exit /B



:gotAdmin

:: 重启docker 服务
net stop com.docker.service
net start com.docker.service

:: 启动docker应用
start &quot;&quot; &quot;C:\\Program Files\\Docker\\Docker\\Docker Desktop.exe&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>启动 docker 容器的脚本</p></blockquote><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
&gt;nul 2&gt;&amp;1 &quot;%SYSTEMROOT%\\system32\\cacls.exe&quot; &quot;%SYSTEMROOT%\\system32\\config\\system&quot;

if &#39;%errorlevel%&#39; NEQ &#39;0&#39; (

goto UACPrompt

) else ( goto gotAdmin )


:: 获取登录权限
:UACPrompt

echo Set UAC = CreateObject^(&quot;Shell.Application&quot;^) &gt; &quot;%temp%\\getadmin.vbs&quot;

echo UAC.ShellExecute &quot;%~s0&quot;, &quot;&quot;, &quot;&quot;, &quot;runas&quot;, 1 &gt;&gt; &quot;%temp%\\getadmin.vbs&quot;

&quot;%temp%\\getadmin.vbs&quot;

exit /B



:gotAdmin

:: 查看服务是否开启

for /f &quot;skip=3 tokens=4&quot; %%i in (&#39;sc query com.docker.service&#39;) do set &quot;zt=%%i&quot; &amp;goto :next
:next
if /i &quot;%zt%&quot;==&quot;RUNNING&quot; (
    echo &#39;service is running, start container&#39;
    goto :running
) else (
    echo &#39;service is stopping, start com.docker.service&#39;
    goto :stopping
)


:stopping
net start com.docker.service
exit /B

:running
e:

cd E:\\project\\laradock

docker-compose up -d nginx mysql redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function O(S,T){const e=o("ExternalLinkIcon");return t(),c("div",null,[r,n("p",null,[n("a",u,[s("从 0 开始"),a(e)]),p,n("a",v,[s("github自动构建到docker-hub"),a(e)]),m,n("a",b,[s("docker网络映射关系"),a(e)]),k,n("a",h,[s("php-fmp+nginx组合环境"),a(e)]),g,n("a",q,[s("laravel部署实践"),a(e)])]),f,n("p",null,[s("使用 webhook 来实现服务端 docker 的自动 pull"),_,n("a",x,[s("参考"),a(e)]),A,n("a",w,[s("参考 2"),a(e)]),s(" npm github-webhook-handler")]),y])}const N=l(d,[["render",O],["__file","docker实践.html.vue"]]);export{N as default};
