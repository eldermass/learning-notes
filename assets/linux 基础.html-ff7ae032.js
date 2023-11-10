import{_ as l,Y as c,Z as d,a1 as n,a2 as s,a3 as e,a0 as i,E as r}from"./framework-6d304b95.js";const t={},p=i(`<h1 id="linux-基础知识" tabindex="-1"><a class="header-anchor" href="#linux-基础知识" aria-hidden="true">#</a> Linux 基础知识</h1><h2 id="一-开关机" tabindex="-1"><a class="header-anchor" href="#一-开关机" aria-hidden="true">#</a> 一. 开关机</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 关机、重启</span>
<span class="token function">shutdown</span>
    <span class="token parameter variable">-h</span> now          立即关机
    <span class="token parameter variable">-h</span> <span class="token number">1</span>            一小时后关机
    <span class="token parameter variable">-r</span> now          立即重启
<span class="token function">halt</span>                直接关机
<span class="token function">reboot</span>              直接重启
<span class="token function">sync</span>                同步内存到磁盘上
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-用户管理" tabindex="-1"><a class="header-anchor" href="#二-用户管理" aria-hidden="true">#</a> 二. 用户管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 用户 -&gt; 用户组 -&gt; 家目录</span>
/etc/passwd             放着所有的用户信息
/etc/shadow             放着密码相关信息

<span class="token function">useradd</span> username        添加用户
    <span class="token parameter variable">-m</span>                  自动构建相关目录
    <span class="token parameter variable">-d</span> /home/tiger      指定家目录
    <span class="token parameter variable">-g</span> groupname        添加到组

<span class="token function">passwd</span> username         修改某账户密码

<span class="token function">userdel</span> username        删除用户
    <span class="token parameter variable">-r</span>                  同时删除根目录

<span class="token function">id</span>                      查询用户信息
    username            查询指定用户信息

<span class="token function">su</span> - username           切换用户

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、组和权限管理" tabindex="-1"><a class="header-anchor" href="#三、组和权限管理" aria-hidden="true">#</a> 三、组和权限管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 用户组</span>
/etc/sudoers            放着各个组或组员对应的权限（可以针对指令设置无权限）
                        cy      <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL:ALL<span class="token punctuation">)</span> /bin/mkdir,/usr/bin/vim
/etc/group              放着所有的组。及其成员

<span class="token function">groups</span>                  查看当前用户属于哪些组
        user            查看user属于哪些组


<span class="token function">groupadd</span> groupname      添加组
<span class="token function">groupdel</span> groupname      删除组
<span class="token function">usermod</span> <span class="token parameter variable">-g</span> groupname username   修改用户的组
        <span class="token parameter variable">-G</span> groupname     修改附加组群，逗号隔开

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、文件权限管理" tabindex="-1"><a class="header-anchor" href="#四、文件权限管理" aria-hidden="true">#</a> 四、文件权限管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-l</span>                    r是可读，w可写,x 可执行
文件属性    连接数 文件拥有者 所属群组 文件大小 文件修改时间    文件名
drwxr-xr-x    <span class="token number">7</span>     cy      cy      <span class="token number">4096</span>    Jun  <span class="token number">7</span> <span class="token number">11</span>:46   <span class="token function">dir</span>
文件属性：
    首字母,    - 普通文件  d 目录文件 l 链接文件  c 字符设备【键盘】  b 块文件【硬盘】
    其他9个,   r 可读  w 可写  x 可执行 - 没有权限 <span class="token punctuation">(</span>每3个一组，所有者，组权限，其他权限<span class="token punctuation">)</span>


<span class="token function">chmod</span> <span class="token number">700</span> /home/dir         改变文件、目录权限 <span class="token number">4</span><span class="token punctuation">(</span>读<span class="token punctuation">)</span>、2<span class="token punctuation">(</span>写<span class="token punctuation">)</span>、1<span class="token punctuation">(</span>执行<span class="token punctuation">)</span>
    u 拥有者，g组成员，o其他人，a所有人

<span class="token function">chmod</span> <span class="token number">751</span> <span class="token function">file</span>              分配file所有者7，所属组5，其他1的权限
<span class="token function">chmod</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>rwx,g<span class="token operator">=</span>rx,o<span class="token operator">=</span>x <span class="token function">file</span>   上例的另一种形式

<span class="token function">chmod</span> +x <span class="token function">file</span>               给组都加上执行权限
<span class="token function">chmod</span> o+w   <span class="token function">file</span>            给o<span class="token punctuation">(</span>其他组<span class="token punctuation">)</span>加上可写权限

<span class="token function">chown</span> user <span class="token function">file</span>             改变文件所有者
<span class="token function">chown</span> user:group  <span class="token function">file</span>      同事改变所属组
            <span class="token parameter variable">-R</span>              递归生效

<span class="token function">chgrp</span> group <span class="token function">file</span>            改变文件的组

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、压缩解压" tabindex="-1"><a class="header-anchor" href="#五、压缩解压" aria-hidden="true">#</a> 五、压缩解压</h2><p>1、 gzip，gunzip 压缩解压缩，不保留源文件</p><blockquote><p>gzip a.txt 压缩<br> gunzip a.txt.gz 解压</p></blockquote><p>2、 zip，unzip 压缩，解压</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">zip</span> dest_name 目录或文件
        <span class="token parameter variable">-r</span>        递归压缩

    <span class="token function">unzip</span> 压缩包
        <span class="token parameter variable">-d</span>        目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、 tar 打包指令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#  压缩</span>
<span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> a.tar.gz a.txt b.txt
    <span class="token parameter variable">-c</span>              产生压缩文件
    <span class="token parameter variable">-v</span>              显示详细信息
    <span class="token parameter variable">-f</span>              指定压缩文件名
    <span class="token parameter variable">-z</span>              打包同时压缩
    <span class="token parameter variable">-x</span>              解压zxvf  <span class="token parameter variable">-C</span> 指定目录

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、任务调度" tabindex="-1"><a class="header-anchor" href="#六、任务调度" aria-hidden="true">#</a> 六、任务调度</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/etc/crontab            数据存放地

<span class="token function">crontab</span>                 定时任务
    <span class="token parameter variable">-l</span>                  列表
    <span class="token parameter variable">-e</span>                  编辑例：1 * * <span class="token number">1,5</span> * <span class="token function">ls</span> <span class="token parameter variable">-l</span> /home/cy <span class="token operator">&gt;&gt;</span> /home/cy/b.txt
                        *每  <span class="token number">1</span>-5连续  <span class="token number">1,5</span>不连续   */5 每隔5个单位时间
    <span class="token parameter variable">-r</span>                  删除

编辑内容
    第一个*             第几分钟0-59
    第二个*             每天的第几小时0-23
    第三个*             每月的第几天1-31
    第四个*             每年的第几月1-12
    第五个*             每周的周几  <span class="token number">0</span>-7

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、磁盘分区和挂载" tabindex="-1"><a class="header-anchor" href="#七、磁盘分区和挂载" aria-hidden="true">#</a> 七、磁盘分区和挂载</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lsblk   <span class="token parameter variable">-f</span>            查看分区和挂载情况 sdx~   x分区块，~第几部分

<span class="token comment"># 如何增加一块硬盘</span>
<span class="token function">fdisk</span>   /dev/sdb                <span class="token number">1</span>分区
<span class="token function">mkfs</span>    <span class="token parameter variable">-t</span> ext4  /dev/sdb1      <span class="token number">2</span>格式化
<span class="token function">mount</span>   /dev/sdb1  /home/newdisk    <span class="token number">3</span>挂载分区
<span class="token number">4</span>永久挂载
/etc/fstab      文件里添加磁盘信息,/dev/sda1磁盘   /home/cy挂载点
然后输入 <span class="token function">mount</span> <span class="token parameter variable">-a</span> 挂载

<span class="token function">umount</span> /dev/sda1            取消挂载

<span class="token comment"># 查看磁盘情况</span>
<span class="token function">df</span> <span class="token parameter variable">-l</span>
<span class="token comment"># 查看目录占用磁盘</span>
<span class="token function">du</span> /home
    <span class="token parameter variable">-s</span>                      显示总量
    <span class="token parameter variable">-a</span>  隐藏   <span class="token parameter variable">-h</span>  单位  <span class="token parameter variable">-c</span> 统计
    --max-depth<span class="token operator">=</span><span class="token number">1</span>           显示深度

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、进程管理" tabindex="-1"><a class="header-anchor" href="#八、进程管理" aria-hidden="true">#</a> 八、进程管理</h2>`,21),v={href:"https://www.cnblogs.com/kaituorensheng/p/3980334.html",target:"_blank",rel:"noopener noreferrer"},u=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#  查看进程 ps -aux</span>
    <span class="token function">ps</span>
        <span class="token parameter variable">-a</span>  所有  <span class="token parameter variable">-u</span> 用户界面    <span class="token parameter variable">-x</span>  显示后台运行参数
        <span class="token parameter variable">-ef</span>         显示父进程<span class="token punctuation">(</span>ppid<span class="token punctuation">)</span>

<span class="token comment"># 杀死进程</span>
    <span class="token function">kill</span>    pid     杀死进程
        <span class="token parameter variable">-9</span>          强制杀死

    <span class="token function">killall</span>         进程名称<span class="token punctuation">(</span>可以使用通配符<span class="token punctuation">)</span> 用于一组进程

    pstree
        <span class="token parameter variable">-p</span>          pid的进程树
        <span class="token parameter variable">-u</span>          用户的进程树


查看后台有多少挂起的命令
<span class="token function">jobs</span>                    查看
    <span class="token operator">&amp;</span>                   末尾加<span class="token operator">&amp;</span>该命令会在后台运行 <span class="token function">node</span> index.js <span class="token operator">&amp;</span> <span class="token parameter variable">-n</span> <span class="token number">10</span>
        <span class="token parameter variable">-n</span> <span class="token number">10</span>               <span class="token number">10</span>秒后就挂到后台
    ctrl + z            挂起当前命令
    <span class="token function">fg</span>  %num            把第num命令调至前台
    <span class="token function">bg</span>  %num            将后台第num停止状态改为运行状态
    <span class="token function">kill</span> %num           杀死第num个命令，类似kill pid
    <span class="token function">nohup</span>               挂到进程，ps <span class="token parameter variable">-aux</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;test.sh&quot;</span>查看



进程监控指令
top/atop            即时监控进程
        <span class="token parameter variable">-d</span>          刷新间隔
        <span class="token parameter variable">-i</span>          不显示闲置和僵死进程
        <span class="token parameter variable">-p</span>          按pid显示
    交互输入
        u   筛选user    k   杀死进程    q   退出


网络进程监控
    <span class="token function">netstat</span>         查看网络服务进程
        <span class="token parameter variable">-tunlp</span> <span class="token operator">|</span> <span class="token function">grep</span> 端口号

查看文件系统的端口占用
    <span class="token function">lsof</span> -i<span class="token punctuation">(</span>:端口号<span class="token punctuation">)</span>    列出当前系统打开文件

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九、服务管理" tabindex="-1"><a class="header-anchor" href="#九、服务管理" aria-hidden="true">#</a> 九、服务管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看全部服务</span>
    <span class="token function">service</span> --status-all

<span class="token comment"># 查看服务详情</span>
    <span class="token function">service</span> mysql status

<span class="token comment"># 启动</span>
    <span class="token function">service</span> mysql stop

<span class="token comment"># 管里启动服务</span>
    setup               指令
    /etc/init.d         启动服务目录

    <span class="token function">chkconfig</span> <span class="token parameter variable">--list</span>    查看各个运行级别的服务启动情况
            <span class="token parameter variable">-level</span> <span class="token number">5</span> serve_name on、off     开关启动运行
<span class="token comment"># 管理系统</span>
    systemctl

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十、apt-相关命令" tabindex="-1"><a class="header-anchor" href="#十、apt-相关命令" aria-hidden="true">#</a> 十、apt 相关命令</h2>`,4),o={href:"https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://jingyan.baidu.com/article/22a299b51648e09e19376ae7.html",target:"_blank",rel:"noopener noreferrer"},b=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update                  更新源

<span class="token function">apt-cache</span> search package        找查包

<span class="token function">apt-get</span> <span class="token function">install</span> package         安装包
    <span class="token parameter variable">-y</span>                          跳过确认
    <span class="token parameter variable">--reinstall</span>                 重新安装

<span class="token function">apt-get</span> remove package          移除包
    <span class="token parameter variable">--purge</span>                     同时清理配置

<span class="token function">apt-get</span> <span class="token parameter variable">-f</span> <span class="token function">install</span>              修复安装

<span class="token function">apt-get</span> build-dep package       安装相关编译环境
<span class="token function">apt-get</span> upgrade                 更新安装的包
<span class="token function">apt-get</span> dist-upgrade            系统升级

<span class="token function">apt-get</span> <span class="token builtin class-name">source</span> package          下载其源代码

<span class="token function">apt-get</span> show package            显示包详情
<span class="token function">apt-get</span> depends package         查看依赖了哪些包
<span class="token function">apt-get</span> rdepends package        查看被哪些包依赖了

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十一、其他" tabindex="-1"><a class="header-anchor" href="#十一、其他" aria-hidden="true">#</a> 十一、其他</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
init <span class="token punctuation">[</span><span class="token number">0</span>-6<span class="token punctuation">]</span>              指定运行级别
/etx/inittab            修改启动级别

select-editor           切换默认编辑器
/etc/profile            环境变量位置

tree                    打印目录结构
telnet <span class="token function">ip</span> port          测试网络

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function k(h,f){const a=r("ExternalLinkIcon");return c(),d("div",null,[p,n("p",null,[n("a",v,[s("任务管理"),e(a)])]),u,n("p",null,[s("/etc/apt/source.list 可以切换为 "),n("a",o,[s("清华镜像源"),e(a)])]),n("p",null,[n("a",m,[s("apt-cache 使用"),e(a)])]),b])}const x=l(t,[["render",k],["__file","linux 基础.html.vue"]]);export{x as default};
