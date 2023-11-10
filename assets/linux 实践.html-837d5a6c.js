import{_ as l,Y as c,Z as t,a1 as s,a2 as n,a3 as e,a0 as i,E as p}from"./framework-6d304b95.js";const r={},d=i(`<h1 id="linux-操作实践" tabindex="-1"><a class="header-anchor" href="#linux-操作实践" aria-hidden="true">#</a> Linux 操作实践</h1><h2 id="open-ssh-使用" tabindex="-1"><a class="header-anchor" href="#open-ssh-使用" aria-hidden="true">#</a> open-ssh 使用</h2><blockquote><p>1.安装</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装服务端</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> openssh-server
<span class="token comment"># 安装客户端</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> openssh-client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>2.别名登录</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ~/.ssh/config 中添加配置</span>
Host aliasName
HostName <span class="token number">192.168</span>.225.22
User root

<span class="token comment"># 直接登录 (-v 调试模式)</span>
<span class="token function">ssh</span> user@ip <span class="token parameter variable">-v</span>
<span class="token comment"># 通过别名登录</span>
<span class="token function">ssh</span> aliasName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>3.免密登录</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成非对称秘钥</span>
ssh-keygen <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>rsa<span class="token operator">|</span>dsa<span class="token punctuation">]</span>

<span class="token comment"># 将本地的id_rsa.pub，复制到服务器 authorized_keys</span>
<span class="token comment"># 可以通过本地使用 ssh-copy-id 工具</span>
ssh-copy-id aliasName

<span class="token comment"># 注销</span>
<span class="token builtin class-name">logout</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>4.隧道</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 隧道示例，NL 是映射到本地，NR 映射到远程做远程代理</span>
<span class="token function">ssh</span> <span class="token parameter variable">-NL</span> <span class="token number">5000</span>:localhost:5000 aliasName

<span class="token comment"># 隧道链接,含义是：在A上访问自己的8888端口相当于通过（B的）localhost的8080端口。</span>
<span class="token comment"># aliasName 可以写作 user@ip</span>
<span class="token function">ssh</span> <span class="token parameter variable">-NL</span> <span class="token number">8888</span><span class="token punctuation">[</span>本地A<span class="token punctuation">]</span>:localhost:8080<span class="token punctuation">[</span>目标B<span class="token punctuation">]</span> aliasName
    <span class="token comment"># 创建隧道常用的参数说明：</span>
    <span class="token comment"># -C：压缩传输，提高传输速度</span>
    <span class="token comment"># -f：将ssh转入后台执行，不占用当前的shell</span>
    <span class="token comment"># -N：建立静默连接（不回显ssh页面）</span>
    <span class="token comment"># -g：允许远程主机连接本地用于端口转发的端口</span>
    <span class="token comment"># -L：本地端口转发, 映射到本地</span>
    <span class="token comment"># -R：远程端口转发, 映射到远程</span>
    <span class="token comment"># -D：动态端口转发（socket代理）</span>
    <span class="token comment"># -p：指定ssh端口</span>

<span class="token comment"># 通过 ssh 测试端口链接成功与否</span>
<span class="token function">ssh</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-p</span> <span class="token number">1521</span> oracle@192.168.150.168
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>5.禁用密码登录，或使用 man ssh config 查看其他配置</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 禁用密码登录,编辑服务器端的 /etc/ssh/sshd_config</span>

Host *
  PasswordAuthentication no

<span class="token comment"># 防断链</span>
<span class="token comment"># 编辑 ~/.ssh/config</span>

Host *
  ServerAliveInterval <span class="token number">30</span>
  TCPKeepAlive <span class="token function">yes</span>
  ServerAliveCountMax <span class="token number">6</span>
  Compression <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lrzsz-小文件传输" tabindex="-1"><a class="header-anchor" href="#lrzsz-小文件传输" aria-hidden="true">#</a> lrzsz 小文件传输</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> lrzsz

<span class="token comment"># 上传</span>
rz

<span class="token comment"># 下载</span>
sz filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="美化工具" tabindex="-1"><a class="header-anchor" href="#美化工具" aria-hidden="true">#</a> 美化工具</h2>`,15),o={href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"},v=s("br",null,null,-1),m=s("code",null,"solarized",-1),u=s("br",null,null,-1),b={href:"https://github.com/neovim/neovim",target:"_blank",rel:"noopener noreferrer"},k=i(`<h2 id="grep-命令" tabindex="-1"><a class="header-anchor" href="#grep-命令" aria-hidden="true">#</a> grep 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
    <span class="token parameter variable">-c</span>              只输出匹配行的计数。
    <span class="token parameter variable">-h</span>              查询多文件时不显示文件名。
    <span class="token parameter variable">-l</span>              查询多文件时只输出包含匹配字符的文件名。
    <span class="token parameter variable">-n</span>              显示匹配行及行号。
    <span class="token parameter variable">-s</span>              不显示不存在或无匹配文本的错误信息。
    <span class="token parameter variable">-v</span>              显示不包含匹配文本的所有行。
    <span class="token parameter variable">-i</span>              忽略字符的大小写
　　<span class="token parameter variable">-o</span>              仅显示匹配到的字符串
　　<span class="token parameter variable">-v</span>              显示不能被模式匹配到的行
　　<span class="token parameter variable">-E</span>              支持使用扩展的正则表达式
　　<span class="token parameter variable">-q</span>              静默模式，即不输出任何信息
　　<span class="token parameter variable">-A</span> n            显示被模式匹配的行及其后n行
　　<span class="token parameter variable">-B</span> n            显示被模式匹配的行及其前n行
　　<span class="token parameter variable">-C</span> n            显示被模式匹配的行及其前后各n行
    <span class="token parameter variable">-G</span>              支持基本正则表达式
　　注：使用grep匹配时需使用双引号引起来（单引号为强引用），防止被系统误认为参数或者特殊命令而报错。


　  <span class="token string">&#39;^&#39;</span>： 锚定行首
　　<span class="token string">&#39;$&#39;</span>： 锚定行尾
　　<span class="token string">&#39;.&#39;</span>： 匹配任一一个字符
　　<span class="token string">&#39;*&#39;</span>： 匹配零个或多个先前字符
　　<span class="token string">&#39;\\?&#39;</span>：匹配其前面的字符0次或者1次；
　　<span class="token string">&#39;\\+&#39;</span>：匹配其前面的字符1次或者多次；
　　<span class="token string">&#39;\\{m\\}&#39;</span>：匹配其前面的字符m次（<span class="token punctuation">\\</span>为转义字符）
　　<span class="token string">&#39;\\{m,n\\}&#39;</span>：匹配其前面的字符至少m次，至多n次
　　<span class="token string">&#39;[]&#39;</span>： 匹配一个指定范围内的字符 <span class="token operator">|</span> <span class="token string">&#39;[^]&#39;</span>匹配指定范围外的任意单个字符
　　<span class="token string">&#39;\\&lt;&#39;</span>或<span class="token string">&#39;\\b&#39;</span>：锚定词首，<span class="token string">&#39;\\&gt;&#39;</span>或<span class="token string">&#39;\\b&#39;</span>：锚定词尾（可用<span class="token punctuation">\\</span><span class="token operator">&lt;</span>PATTERN<span class="token punctuation">\\</span><span class="token operator">&gt;</span>：匹配完整单词）
　　<span class="token string">&#39;\\(\\)&#39;</span>：将多个字符当做一个整体进行处理

　　后向引用：引用前面的分组括号中的模式所匹配到的字符
　　分组括号中的模式匹配到的内容或被正则表达式引擎自动记录于内部的变量中：
　　<span class="token punctuation">\\</span><span class="token number">1</span>：模式从左侧起，第一个左括号及与之匹配的右括号之间模式匹配到的内容
　　<span class="token punctuation">\\</span><span class="token number">2</span>：模式从左侧起，第二个左括号及与之匹配的右括号之间模式匹配到的内容<span class="token punctuation">..</span>.

　　扩展正则表达式与正则表达式略有不同：

　　<span class="token string">&#39;[]&#39;</span>：依旧匹配指定范围内的任意单个字符；但是有很多特殊匹配方式。
　　　　<span class="token punctuation">[</span>:digit:<span class="token punctuation">]</span> 匹配任意单个数字
　　　　<span class="token punctuation">[</span>:lower:<span class="token punctuation">]</span> 匹配任意单个小写字母
　　　　<span class="token punctuation">[</span>:upper:<span class="token punctuation">]</span> 匹配任意单个大写字母
　　　　<span class="token punctuation">[</span>:alpha:<span class="token punctuation">]</span> 匹配任意单个字母
　　　　<span class="token punctuation">[</span>:alnum:<span class="token punctuation">]</span> 匹配任意单个字母或数字
　　　　<span class="token punctuation">[</span>:punct:<span class="token punctuation">]</span> 匹配任意单个符号
　　　　<span class="token punctuation">[</span>:space:<span class="token punctuation">]</span> 匹配单个空格

　　一些地方取消了转义字符的使用：

　　<span class="token string">&#39;?&#39;</span>：匹配其前面的字符0次或者1次；
　　<span class="token string">&#39;+&#39;</span>：匹配其前面的字符1次或者多次；
　　<span class="token string">&#39;{m}&#39;</span>：匹配其前面的字符m次（<span class="token punctuation">\\</span>为转义字符）
　　<span class="token string">&#39;{m,n}&#39;</span>：匹配其前面的字符至少m次，至多n次
　　<span class="token punctuation">(</span><span class="token punctuation">)</span>：将一个或多个字符捆绑在一起，当做一个整体进行处理，反向引用照常使用。
　　<span class="token string">&#39;|&#39;</span>：或（注：<span class="token string">&#39;C|cat&#39;</span>为C与cat，<span class="token string">&#39;（C|c）at才是Cat与cat&#39;</span>）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ping" tabindex="-1"><a class="header-anchor" href="#ping" aria-hidden="true">#</a> ping</h2><p>ttl： 即 time to live，每经过一个路由就会减一，当 ttl 为 0 时数据包就会被路由抛弃。一般是 64(mac)、128(win)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ping 本机检查配置</span>
<span class="token function">ping</span> <span class="token number">127.0</span>.0.1
<span class="token comment"># ping 内网ip，检查网络连接</span>
<span class="token function">ping</span> <span class="token number">192.168</span>.0.101
<span class="token comment"># ping 默认网关(路由器)</span>
<span class="token function">ping</span> <span class="token number">192.168</span>.0.1
<span class="token comment"># ping 目标ip地址</span>
<span class="token function">ping</span> <span class="token number">43.26</span>.1.47
<span class="token comment"># ping 主机名(域名)</span>
<span class="token function">ping</span> facebook.com

    <span class="token parameter variable">-t</span>             <span class="token comment"># Ping 指定的主机，直到停止。</span>
    <span class="token parameter variable">-a</span>             <span class="token comment"># 将地址解析为主机名。</span>
    <span class="token parameter variable">-n</span> count       <span class="token comment"># 要发送的回显请求数。</span>
    <span class="token parameter variable">-l</span> size        <span class="token comment"># 发送缓冲区大小。</span>
    <span class="token parameter variable">-f</span>             <span class="token comment"># 在数据包中设置“不分段”标记(仅适用于 IPv4)。</span>
    <span class="token parameter variable">-i</span> TTL         <span class="token comment"># 生存时间。</span>
    <span class="token parameter variable">-r</span> count       <span class="token comment"># 记录计数跃点的路由(仅适用于 IPv4)。</span>
    <span class="token parameter variable">-s</span> count       <span class="token comment"># 计数跃点的时间戳(仅适用于 IPv4)。</span>
    <span class="token parameter variable">-j</span> host-list   <span class="token comment"># 与主机列表一起使用的松散源路由(仅适用于 IPv4)。</span>
    <span class="token parameter variable">-k</span> host-list   <span class="token comment">#  与主机列表一起使用的严格源路由(仅适用于 IPv4)。</span>
    <span class="token parameter variable">-w</span> <span class="token function">timeout</span>     <span class="token comment"># 等待每次回复的超时时间(毫秒)。</span>
    <span class="token parameter variable">-S</span> srcaddr     <span class="token comment"># 要使用的源地址。</span>
    <span class="token parameter variable">-c</span> compartment <span class="token comment"># 路由隔离舱标识符。</span>
    <span class="token parameter variable">-p</span>             <span class="token comment"># Ping Hyper-V 网络虚拟化提供程序地址。</span>
    <span class="token parameter variable">-4</span>             <span class="token comment"># 强制使用 IPv4。</span>
    <span class="token parameter variable">-6</span>             <span class="token comment"># 强制使用 IPv6。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="curl" tabindex="-1"><a class="header-anchor" href="#curl" aria-hidden="true">#</a> curl</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 请求</span>
<span class="token function">curl</span> http://www.baidu.com

    <span class="token parameter variable">-XPOST</span> <span class="token comment"># 使用post请求</span>
    <span class="token parameter variable">-d</span>     <span class="token comment"># post的数据</span>
    <span class="token parameter variable">-H</span>     <span class="token comment"># 添加头部信息</span>
    <span class="token parameter variable">-I</span>     <span class="token comment"># 显示头部信息</span>
    <span class="token parameter variable">-O</span>     <span class="token comment"># 下载文件</span>
    <span class="token parameter variable">-o</span> filename <span class="token comment"># 同上</span>
    <span class="token parameter variable">-L</span>     <span class="token comment"># 跟随重定向</span>
    <span class="token parameter variable">-V</span>     <span class="token comment"># 显示握手及连接信息</span>
    <span class="token parameter variable">--proxy</span> <span class="token string">&quot;协议://用户名:密码@代理地址&quot;</span> URL

<span class="token comment"># 其他的 -help 查看</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lsof-查看占用" tabindex="-1"><a class="header-anchor" href="#lsof-查看占用" aria-hidden="true">#</a> lsof 查看占用</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">lsof</span> <span class="token parameter variable">-i:8080</span>    查看8080端口占用
<span class="token function">lsof</span> abc.txt    显示开启文件abc.txt的进程
<span class="token function">lsof</span> <span class="token parameter variable">-c</span> abc     显示abc进程现在打开的文件
<span class="token function">lsof</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-p</span> <span class="token number">1234</span> 列出进程号为1234的进程所打开的文件
<span class="token function">lsof</span> <span class="token parameter variable">-g</span> gid     显示归属gid的进程情况
<span class="token function">lsof</span> +d /usr/local/ 显示目录下被进程开启的文件
<span class="token function">lsof</span> +D /usr/local/ 同上，但是会搜索目录下的目录，时间较长
<span class="token function">lsof</span> <span class="token parameter variable">-d</span> <span class="token number">4</span>       显示使用fd为4的进程
<span class="token function">lsof</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-U</span>      显示所有打开的端口和UNIX domain文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ps-命令" tabindex="-1"><a class="header-anchor" href="#ps-命令" aria-hidden="true">#</a> ps 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ps命令——查看静态的进程统计信息（Processes Statistic）

常见的选项：
a：显示当前终端下的所有进程信息，包括其他用户的进程。
u：使用以用户为主的格式输出进程信息。
x：显示当前用户在所有终端下的进程。
-e：显示系统内的所有进程信息。
-l：使用长（long）格式显示进程信息。
-f：使用完整的（full）格式显示进程信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进程、端口" tabindex="-1"><a class="header-anchor" href="#进程、端口" aria-hidden="true">#</a> 进程、端口</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 通过文件系统查看占用</span>
<span class="token function">lsof</span> <span class="token parameter variable">-i:8000</span>

<span class="token comment"># 使用netstat命令，例如</span>
<span class="token function">netstat</span> <span class="token parameter variable">-tunlp</span>
    <span class="token parameter variable">-t</span>              <span class="token punctuation">(</span>tcp<span class="token punctuation">)</span> 仅显示tcp相关选项
    <span class="token parameter variable">-u</span>              <span class="token punctuation">(</span>udp<span class="token punctuation">)</span>仅显示udp相关选项
    <span class="token parameter variable">-n</span>              拒绝显示别名，能显示数字的全部转化为数字
    <span class="token parameter variable">-l</span>              仅列出在Listen<span class="token punctuation">(</span>监听<span class="token punctuation">)</span>的服务状态
    <span class="token parameter variable">-p</span>              显示建立相关链接的程序名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function h(g,f){const a=p("ExternalLinkIcon");return c(),t("div",null,[d,s("p",null,[n("使用 "),s("a",o,[n("ohmyzsh"),e(a)]),n(" 美化命令行"),v,n(" 使用"),m,n("美化 vim"),u,s("a",b,[n("neovim"),e(a)]),n(" 加强版 vim")]),k])}const _=l(r,[["render",h],["__file","linux 实践.html.vue"]]);export{_ as default};
