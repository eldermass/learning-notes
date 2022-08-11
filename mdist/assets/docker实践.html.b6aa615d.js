import{_ as l,r as t,o,c,a as n,e as a,b as s,d as i}from"./app.ddafede6.js";const d={},r=n("h1",{id:"docker-\u5B9E\u8DF5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-\u5B9E\u8DF5","aria-hidden":"true"},"#"),s(" docker \u5B9E\u8DF5")],-1),u={href:"https://blog.csdn.net/bskfnvjtlyzmv867/article/details/81044217",target:"_blank",rel:"noopener noreferrer"},v=s("\u4ECE 0 \u5F00\u59CB"),p=n("br",null,null,-1),m={href:"https://www.jianshu.com/p/b20bcfba52a8",target:"_blank",rel:"noopener noreferrer"},b=s("github\u81EA\u52A8\u6784\u5EFA\u5230docker-hub"),k=n("br",null,null,-1),h={href:"https://www.cnblogs.com/brock0624/p/9788710.html",target:"_blank",rel:"noopener noreferrer"},g=s("docker\u7F51\u7EDC\u6620\u5C04\u5173\u7CFB"),_=n("br",null,null,-1),q={href:"https://www.cnblogs.com/freefei/p/7904165.html",target:"_blank",rel:"noopener noreferrer"},f=s("php-fmp+nginx\u7EC4\u5408\u73AF\u5883"),x=n("br",null,null,-1),A={href:"https://segmentfault.com/a/1190000013020851",target:"_blank",rel:"noopener noreferrer"},w=s("laravel\u90E8\u7F72\u5B9E\u8DF5"),y=i(`<h2 id="docker-\u4F7F\u7528\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#docker-\u4F7F\u7528\u6D41\u7A0B" aria-hidden="true">#</a> docker \u4F7F\u7528\u6D41\u7A0B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># ubuntu\u4E0B\u5B89\u88C5</span>
<span class="token function">apt-get</span> <span class="token function">install</span> docker.io

<span class="token comment"># \u6839\u636E\u76EE\u5F55\u4E0Bdockerfile\u6784\u5EFA\u955C\u50CF</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>\u7F16\u5199 dockerfile \u6587\u4EF6</p></li><li><p>\u6839\u636E dockerfile \u6253\u5305\u955C\u50CF</p></li><li><p>\u672C\u5730\u8FD0\u884C,\u5E76\u6620\u5C04\u7AEF\u53E3 (\u8BBF\u95EE docker \u5730\u5740:\u7AEF\u53E3,\u5373\u8BBF\u95EE\u5BB9\u5668\u5185\u7684\u4E1C\u897F)</p></li></ol>`,3),O=s("\u4F7F\u7528 webhook \u6765\u5B9E\u73B0\u670D\u52A1\u7AEF docker \u7684\u81EA\u52A8 pull"),S=n("br",null,null,-1),T={href:"https://www.jianshu.com/p/e4cacd775e5b",target:"_blank",rel:"noopener noreferrer"},N=s("\u53C2\u8003"),C=n("br",null,null,-1),E={href:"https://blog.csdn.net/auv1107/article/details/51999592",target:"_blank",rel:"noopener noreferrer"},P=s("\u53C2\u8003 2"),L=s(" npm github-webhook-handler"),G=i(`<h2 id="linux-\u4E0A\u90E8\u7F72\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#linux-\u4E0A\u90E8\u7F72\u793A\u4F8B" aria-hidden="true">#</a> linux \u4E0A\u90E8\u7F72\u793A\u4F8B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">LOG_PATH</span><span class="token operator">=~</span>/logs/deploy_logs.txt<span class="token punctuation">;</span>
<span class="token assign-left variable">FLAG</span><span class="token operator">=</span>deploying<span class="token punctuation">;</span>
<span class="token function">date</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$LOG_PATH</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5F00\u59CB\u91CD\u65B0\u90E8\u7F72<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$LOG_PATH</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -e <span class="token variable">$FLAG</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token function">touch</span> <span class="token variable">$FLAG</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u62C9\u53D6\u6700\u65B0\u955C\u50CF&quot;</span><span class="token punctuation">;</span>
    <span class="token function">docker</span> pull asd285653184/music<span class="token punctuation">;</span>

    <span class="token comment">#echo &quot;\u505C\u6B62\u5BB9\u5668&quot;;</span>
    <span class="token comment">#CONTAINERS=\`docker ps -a -q\`;</span>
    <span class="token comment">#docker stop $CONTAINERS;</span>

    <span class="token comment">#echo &quot;\u6E05\u7A7A\u5BB9\u5668&quot;;</span>
    <span class="token comment">#docker rm $CONTAINERS;</span>

    <span class="token comment">#echo &quot;\u6E05\u9664docker\u955C\u50CF&quot;;</span>
    <span class="token comment">#docker rmi \`docker images -a -q\`;</span>

    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u91CD\u65B0\u90E8\u7F72\u9879\u76EE&quot;</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">cd</span> ~/project/music<span class="token punctuation">;</span>

    <span class="token function">git</span> pull<span class="token punctuation">;</span>
    <span class="token function">docker-compose</span> up -d<span class="token punctuation">;</span>

    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u6E05\u7A7A\u60AC\u7A7A\u955C\u50CF\u6216\u8005\u5BB9\u5668&quot;</span><span class="token punctuation">;</span>

    <span class="token function">docker</span> image prune -a -f<span class="token punctuation">;</span>
    <span class="token function">docker</span> container prune -f<span class="token punctuation">;</span>

    <span class="token builtin class-name">cd</span> ~<span class="token punctuation">;</span>
    <span class="token function">rm</span> <span class="token variable">$FLAG</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u90E8\u7F72\u6210\u529F<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$LOG_PATH</span><span class="token punctuation">;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u6B63\u5728\u91CD\u65B0\u90E8\u7F72\u4E2D......&quot;</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5DF2\u5728\u91CD\u65B0\u90E8\u7F72\u4E2D......<span class="token entity" title="\\n">\\n</span>\u505C\u6B62\u90E8\u7F72<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$LOG_PATH</span><span class="token punctuation">;</span>
<span class="token keyword">fi</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-desktop" tabindex="-1"><a class="header-anchor" href="#docker-desktop" aria-hidden="true">#</a> docker-desktop</h2><ol><li>docker \u5728 win10 \u4E0B\u5173\u673A\u540E\u5BB9\u5668\u4F1A\u5931\u6548\uFF0C\u4E00\u822C\u6765\u8BF4\u91CD\u542F\u4E00\u4E0B desktop\uFF0C\u7136\u540E\u5728\u91CD\u542F\u5BB9\u5668\u5C31\u4F1A\u597D\u4E86\u3002\u7136\u800C\u6709\u4E9B\u65F6\u5019 \u5FC5\u987B\u8981\u91CD\u542F docker \u7684\u670D\u52A1\u624D\u80FD\u6062\u590D\u6B63\u5E38\uFF0C\u867D\u7136\u6CA1\u627E\u5230\u539F\u56E0\uFF0C\u4F46\u662F\u5199\u4E86\u4E00\u4E2A\u811A\u672C\u6765\u7B80\u5316\u91CD\u542F\u670D\u52A1\u7684\u8FC7\u7A0B\u3002\uFF08\u8FD9\u662F\u5F88\u4E45\u4EE5\u524D\u7684\u95EE\u9898\u4E86\uFF0C\u4E0D\u9700\u8981\u4E86\u89E3\uFF09</li></ol><blockquote><p>\u91CD\u542F docker \u670D\u52A1\u7684\u811A\u672C</p></blockquote><div class="language-bat ext-bat line-numbers-mode"><pre class="language-bat"><code>@echo off
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

:: \u91CD\u542Fdocker \u670D\u52A1
net stop com.docker.service
net start com.docker.service

:: \u542F\u52A8docker\u5E94\u7528
start &quot;&quot; &quot;C:\\Program Files\\Docker\\Docker\\Docker Desktop.exe&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u542F\u52A8 docker \u5BB9\u5668\u7684\u811A\u672C</p></blockquote><div class="language-bat ext-bat line-numbers-mode"><pre class="language-bat"><code>@echo off
&gt;nul 2&gt;&amp;1 &quot;%SYSTEMROOT%\\system32\\cacls.exe&quot; &quot;%SYSTEMROOT%\\system32\\config\\system&quot;

if &#39;%errorlevel%&#39; NEQ &#39;0&#39; (

goto UACPrompt

) else ( goto gotAdmin )


:: \u83B7\u53D6\u767B\u5F55\u6743\u9650
:UACPrompt

echo Set UAC = CreateObject^(&quot;Shell.Application&quot;^) &gt; &quot;%temp%\\getadmin.vbs&quot;

echo UAC.ShellExecute &quot;%~s0&quot;, &quot;&quot;, &quot;&quot;, &quot;runas&quot;, 1 &gt;&gt; &quot;%temp%\\getadmin.vbs&quot;

&quot;%temp%\\getadmin.vbs&quot;

exit /B



:gotAdmin

:: \u67E5\u770B\u670D\u52A1\u662F\u5426\u5F00\u542F

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function U($,R){const e=t("ExternalLinkIcon");return o(),c("div",null,[r,n("p",null,[n("a",u,[v,a(e)]),p,n("a",m,[b,a(e)]),k,n("a",h,[g,a(e)]),_,n("a",q,[f,a(e)]),x,n("a",A,[w,a(e)])]),y,n("p",null,[O,S,n("a",T,[N,a(e)]),C,n("a",E,[P,a(e)]),L]),G])}var I=l(d,[["render",U],["__file","docker\u5B9E\u8DF5.html.vue"]]);export{I as default};
