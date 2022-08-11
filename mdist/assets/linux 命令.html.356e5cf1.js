import{_ as l,r as d,o as c,c as t,a as n,e as a,d as i,b as s}from"./app.ddafede6.js";const r={},u=i(`<h1 id="linux-\u547D\u4EE4\u884C" tabindex="-1"><a class="header-anchor" href="#linux-\u547D\u4EE4\u884C" aria-hidden="true">#</a> Linux \u547D\u4EE4\u884C</h1><h2 id="\u4E00-\u5F00\u5173\u673A" tabindex="-1"><a class="header-anchor" href="#\u4E00-\u5F00\u5173\u673A" aria-hidden="true">#</a> \u4E00. \u5F00\u5173\u673A</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5173\u673A\u3001\u91CD\u542F</span>
<span class="token function">shutdown</span>
    -h now          \u7ACB\u5373\u5173\u673A
    -h <span class="token number">1</span>            \u4E00\u5C0F\u65F6\u540E\u5173\u673A
    -r now          \u7ACB\u5373\u91CD\u542F
<span class="token function">halt</span>                \u76F4\u63A5\u5173\u673A
<span class="token function">reboot</span>              \u76F4\u63A5\u91CD\u542F
<span class="token function">sync</span>                \u540C\u6B65\u5185\u5B58\u5230\u78C1\u76D8\u4E0A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C-\u7528\u6237\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E8C-\u7528\u6237\u7BA1\u7406" aria-hidden="true">#</a> \u4E8C. \u7528\u6237\u7BA1\u7406</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7528\u6237 -&gt; \u7528\u6237\u7EC4 -&gt; \u5BB6\u76EE\u5F55</span>
/etc/passwd             \u653E\u7740\u6240\u6709\u7684\u7528\u6237\u4FE1\u606F
/etc/shadow             \u653E\u7740\u5BC6\u7801\u76F8\u5173\u4FE1\u606F

<span class="token function">useradd</span> username        \u6DFB\u52A0\u7528\u6237
    -m                  \u81EA\u52A8\u6784\u5EFA\u76F8\u5173\u76EE\u5F55
    -d /home/tiger      \u6307\u5B9A\u5BB6\u76EE\u5F55
    -g groupname        \u6DFB\u52A0\u5230\u7EC4

<span class="token function">passwd</span> username         \u4FEE\u6539\u67D0\u8D26\u6237\u5BC6\u7801

<span class="token function">userdel</span> username        \u5220\u9664\u7528\u6237
    -r                  \u540C\u65F6\u5220\u9664\u6839\u76EE\u5F55

<span class="token function">id</span>                      \u67E5\u8BE2\u7528\u6237\u4FE1\u606F
    username            \u67E5\u8BE2\u6307\u5B9A\u7528\u6237\u4FE1\u606F

<span class="token function">su</span> - username           \u5207\u6362\u7528\u6237

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u3001\u7EC4\u548C\u6743\u9650\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u7EC4\u548C\u6743\u9650\u7BA1\u7406" aria-hidden="true">#</a> \u4E09\u3001\u7EC4\u548C\u6743\u9650\u7BA1\u7406</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7528\u6237\u7EC4</span>
/etc/sudoers            \u653E\u7740\u5404\u4E2A\u7EC4\u6216\u7EC4\u5458\u5BF9\u5E94\u7684\u6743\u9650\uFF08\u53EF\u4EE5\u9488\u5BF9\u6307\u4EE4\u8BBE\u7F6E\u65E0\u6743\u9650\uFF09
                        cy      <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL:ALL<span class="token punctuation">)</span> /bin/mkdir,/usr/bin/vim
/etc/group              \u653E\u7740\u6240\u6709\u7684\u7EC4\u3002\u53CA\u5176\u6210\u5458

<span class="token function">groups</span>                  \u67E5\u770B\u5F53\u524D\u7528\u6237\u5C5E\u4E8E\u54EA\u4E9B\u7EC4
        user            \u67E5\u770Buser\u5C5E\u4E8E\u54EA\u4E9B\u7EC4


<span class="token function">groupadd</span> groupname      \u6DFB\u52A0\u7EC4
<span class="token function">groupdel</span> groupname      \u5220\u9664\u7EC4
<span class="token function">usermod</span> -g groupname username   \u4FEE\u6539\u7528\u6237\u7684\u7EC4
        -G groupname     \u4FEE\u6539\u9644\u52A0\u7EC4\u7FA4\uFF0C\u9017\u53F7\u9694\u5F00

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u56DB\u3001\u6587\u4EF6\u6743\u9650\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u6587\u4EF6\u6743\u9650\u7BA1\u7406" aria-hidden="true">#</a> \u56DB\u3001\u6587\u4EF6\u6743\u9650\u7BA1\u7406</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> -l                    r\u662F\u53EF\u8BFB\uFF0Cw\u53EF\u5199,x \u53EF\u6267\u884C
\u6587\u4EF6\u5C5E\u6027    \u8FDE\u63A5\u6570 \u6587\u4EF6\u62E5\u6709\u8005 \u6240\u5C5E\u7FA4\u7EC4 \u6587\u4EF6\u5927\u5C0F \u6587\u4EF6\u4FEE\u6539\u65F6\u95F4    \u6587\u4EF6\u540D
drwxr-xr-x    <span class="token number">7</span>     cy      cy      <span class="token number">4096</span>    Jun  <span class="token number">7</span> <span class="token number">11</span>:46   <span class="token function">dir</span>
\u6587\u4EF6\u5C5E\u6027\uFF1A
    \u9996\u5B57\u6BCD,    - \u666E\u901A\u6587\u4EF6  d \u76EE\u5F55\u6587\u4EF6 l \u94FE\u63A5\u6587\u4EF6  c \u5B57\u7B26\u8BBE\u5907\u3010\u952E\u76D8\u3011  b \u5757\u6587\u4EF6\u3010\u786C\u76D8\u3011
    \u5176\u4ED69\u4E2A,   r \u53EF\u8BFB  w \u53EF\u5199  x \u53EF\u6267\u884C - \u6CA1\u6709\u6743\u9650 <span class="token punctuation">(</span>\u6BCF3\u4E2A\u4E00\u7EC4\uFF0C\u6240\u6709\u8005\uFF0C\u7EC4\u6743\u9650\uFF0C\u5176\u4ED6\u6743\u9650<span class="token punctuation">)</span>


<span class="token function">chmod</span> <span class="token number">700</span> /home/dir         \u6539\u53D8\u6587\u4EF6\u3001\u76EE\u5F55\u6743\u9650 <span class="token number">4</span><span class="token punctuation">(</span>\u8BFB<span class="token punctuation">)</span>\u30012<span class="token punctuation">(</span>\u5199<span class="token punctuation">)</span>\u30011<span class="token punctuation">(</span>\u6267\u884C<span class="token punctuation">)</span>
    u \u62E5\u6709\u8005\uFF0Cg\u7EC4\u6210\u5458\uFF0Co\u5176\u4ED6\u4EBA\uFF0Ca\u6240\u6709\u4EBA

<span class="token function">chmod</span> <span class="token number">751</span> <span class="token function">file</span>              \u5206\u914Dfile\u6240\u6709\u80057\uFF0C\u6240\u5C5E\u7EC45\uFF0C\u5176\u4ED61\u7684\u6743\u9650
<span class="token function">chmod</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>rwx,g<span class="token operator">=</span>rx,o<span class="token operator">=</span>x <span class="token function">file</span>   \u4E0A\u4F8B\u7684\u53E6\u4E00\u79CD\u5F62\u5F0F

<span class="token function">chmod</span> +x <span class="token function">file</span>               \u7ED9\u7EC4\u90FD\u52A0\u4E0A\u6267\u884C\u6743\u9650
<span class="token function">chmod</span> o+w   <span class="token function">file</span>            \u7ED9o<span class="token punctuation">(</span>\u5176\u4ED6\u7EC4<span class="token punctuation">)</span>\u52A0\u4E0A\u53EF\u5199\u6743\u9650

<span class="token function">chown</span> user <span class="token function">file</span>             \u6539\u53D8\u6587\u4EF6\u6240\u6709\u8005
<span class="token function">chown</span> user:group  <span class="token function">file</span>      \u540C\u4E8B\u6539\u53D8\u6240\u5C5E\u7EC4
            -R              \u9012\u5F52\u751F\u6548

<span class="token function">chgrp</span> group <span class="token function">file</span>            \u6539\u53D8\u6587\u4EF6\u7684\u7EC4

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E94\u3001\u538B\u7F29\u89E3\u538B" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u538B\u7F29\u89E3\u538B" aria-hidden="true">#</a> \u4E94\u3001\u538B\u7F29\u89E3\u538B</h2><p>1\u3001 gzip\uFF0Cgunzip \u538B\u7F29\u89E3\u538B\u7F29\uFF0C\u4E0D\u4FDD\u7559\u6E90\u6587\u4EF6</p><blockquote><p>gzip a.txt \u538B\u7F29<br> gunzip a.txt.gz \u89E3\u538B</p></blockquote><p>2\u3001 zip\uFF0Cunzip \u538B\u7F29\uFF0C\u89E3\u538B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token function">zip</span> dest_name \u76EE\u5F55\u6216\u6587\u4EF6
        -r        \u9012\u5F52\u538B\u7F29

    <span class="token function">unzip</span> \u538B\u7F29\u5305
        -d        \u76EE\u5F55
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001 tar \u6253\u5305\u6307\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#  \u538B\u7F29</span>
<span class="token function">tar</span> -zcvf a.tar.gz a.txt b.txt
    -c              \u4EA7\u751F\u538B\u7F29\u6587\u4EF6
    -v              \u663E\u793A\u8BE6\u7EC6\u4FE1\u606F
    -f              \u6307\u5B9A\u538B\u7F29\u6587\u4EF6\u540D
    -z              \u6253\u5305\u540C\u65F6\u538B\u7F29
    -x              \u89E3\u538Bzxvf  -C \u6307\u5B9A\u76EE\u5F55

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u516D\u3001\u4EFB\u52A1\u8C03\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001\u4EFB\u52A1\u8C03\u5EA6" aria-hidden="true">#</a> \u516D\u3001\u4EFB\u52A1\u8C03\u5EA6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/etc/crontab            \u6570\u636E\u5B58\u653E\u5730

<span class="token function">crontab</span>                 \u5B9A\u65F6\u4EFB\u52A1
    -l                  \u5217\u8868
    -e                  \u7F16\u8F91\u4F8B\uFF1A1 * * <span class="token number">1,5</span> * <span class="token function">ls</span> -l /home/cy <span class="token operator">&gt;&gt;</span> /home/cy/b.txt
                        *\u6BCF  <span class="token number">1</span>-5\u8FDE\u7EED  <span class="token number">1,5</span>\u4E0D\u8FDE\u7EED   */5 \u6BCF\u96945\u4E2A\u5355\u4F4D\u65F6\u95F4
    -r                  \u5220\u9664

\u7F16\u8F91\u5185\u5BB9
    \u7B2C\u4E00\u4E2A*             \u7B2C\u51E0\u5206\u949F0-59
    \u7B2C\u4E8C\u4E2A*             \u6BCF\u5929\u7684\u7B2C\u51E0\u5C0F\u65F60-23
    \u7B2C\u4E09\u4E2A*             \u6BCF\u6708\u7684\u7B2C\u51E0\u59291-31
    \u7B2C\u56DB\u4E2A*             \u6BCF\u5E74\u7684\u7B2C\u51E0\u67081-12
    \u7B2C\u4E94\u4E2A*             \u6BCF\u5468\u7684\u5468\u51E0  <span class="token number">0</span>-7

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E03\u3001\u78C1\u76D8\u5206\u533A\u548C\u6302\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u4E03\u3001\u78C1\u76D8\u5206\u533A\u548C\u6302\u8F7D" aria-hidden="true">#</a> \u4E03\u3001\u78C1\u76D8\u5206\u533A\u548C\u6302\u8F7D</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>lsblk   -f            \u67E5\u770B\u5206\u533A\u548C\u6302\u8F7D\u60C5\u51B5 sdx~   x\u5206\u533A\u5757\uFF0C~\u7B2C\u51E0\u90E8\u5206

<span class="token comment"># \u5982\u4F55\u589E\u52A0\u4E00\u5757\u786C\u76D8</span>
<span class="token function">fdisk</span>   /dev/sdb                <span class="token number">1</span>\u5206\u533A
<span class="token function">mkfs</span>    -t ext4  /dev/sdb1      <span class="token number">2</span>\u683C\u5F0F\u5316
<span class="token function">mount</span>   /dev/sdb1  /home/newdisk    <span class="token number">3</span>\u6302\u8F7D\u5206\u533A
<span class="token number">4</span>\u6C38\u4E45\u6302\u8F7D
/etc/fstab      \u6587\u4EF6\u91CC\u6DFB\u52A0\u78C1\u76D8\u4FE1\u606F,/dev/sda1\u78C1\u76D8   /home/cy\u6302\u8F7D\u70B9
\u7136\u540E\u8F93\u5165 <span class="token function">mount</span> -a \u6302\u8F7D

<span class="token function">umount</span> /dev/sda1            \u53D6\u6D88\u6302\u8F7D

<span class="token comment"># \u67E5\u770B\u78C1\u76D8\u60C5\u51B5</span>
<span class="token function">df</span> -l
<span class="token comment"># \u67E5\u770B\u76EE\u5F55\u5360\u7528\u78C1\u76D8</span>
<span class="token function">du</span> /home
    -s                      \u663E\u793A\u603B\u91CF
    -a  \u9690\u85CF   -h  \u5355\u4F4D  -c \u7EDF\u8BA1
    --max-depth<span class="token operator">=</span><span class="token number">1</span>           \u663E\u793A\u6DF1\u5EA6

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u516B\u3001\u8FDB\u7A0B\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u516B\u3001\u8FDB\u7A0B\u7BA1\u7406" aria-hidden="true">#</a> \u516B\u3001\u8FDB\u7A0B\u7BA1\u7406</h2>`,21),v={href:"https://www.cnblogs.com/kaituorensheng/p/3980334.html",target:"_blank",rel:"noopener noreferrer"},p=s("\u4EFB\u52A1\u7BA1\u7406"),o=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#  \u67E5\u770B\u8FDB\u7A0B ps -aux</span>
    <span class="token function">ps</span>
        -a  \u6240\u6709  -u \u7528\u6237\u754C\u9762    -x  \u663E\u793A\u540E\u53F0\u8FD0\u884C\u53C2\u6570
        -ef         \u663E\u793A\u7236\u8FDB\u7A0B<span class="token punctuation">(</span>ppid<span class="token punctuation">)</span>

<span class="token comment"># \u6740\u6B7B\u8FDB\u7A0B</span>
    <span class="token function">kill</span>    pid     \u6740\u6B7B\u8FDB\u7A0B
        -9          \u5F3A\u5236\u6740\u6B7B

    <span class="token function">killall</span>         \u8FDB\u7A0B\u540D\u79F0<span class="token punctuation">(</span>\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26<span class="token punctuation">)</span> \u7528\u4E8E\u4E00\u7EC4\u8FDB\u7A0B

    pstree
        -p          pid\u7684\u8FDB\u7A0B\u6811
        -u          \u7528\u6237\u7684\u8FDB\u7A0B\u6811


\u67E5\u770B\u540E\u53F0\u6709\u591A\u5C11\u6302\u8D77\u7684\u547D\u4EE4
<span class="token function">jobs</span>                    \u67E5\u770B
    <span class="token operator">&amp;</span>                   \u672B\u5C3E\u52A0<span class="token operator">&amp;</span>\u8BE5\u547D\u4EE4\u4F1A\u5728\u540E\u53F0\u8FD0\u884C <span class="token function">node</span> index.js <span class="token operator">&amp;</span> -n <span class="token number">10</span>
        -n <span class="token number">10</span>               <span class="token number">10</span>\u79D2\u540E\u5C31\u6302\u5230\u540E\u53F0
    ctrl + z            \u6302\u8D77\u5F53\u524D\u547D\u4EE4
    <span class="token function">fg</span>  %num            \u628A\u7B2Cnum\u547D\u4EE4\u8C03\u81F3\u524D\u53F0
    <span class="token function">bg</span>  %num            \u5C06\u540E\u53F0\u7B2Cnum\u505C\u6B62\u72B6\u6001\u6539\u4E3A\u8FD0\u884C\u72B6\u6001
    <span class="token function">kill</span> %num           \u6740\u6B7B\u7B2Cnum\u4E2A\u547D\u4EE4\uFF0C\u7C7B\u4F3Ckill pid
    <span class="token function">nohup</span>               \u6302\u5230\u8FDB\u7A0B\uFF0Cps -aux <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;test.sh&quot;</span>\u67E5\u770B



\u8FDB\u7A0B\u76D1\u63A7\u6307\u4EE4
top/atop            \u5373\u65F6\u76D1\u63A7\u8FDB\u7A0B
        -d          \u5237\u65B0\u95F4\u9694
        -i          \u4E0D\u663E\u793A\u95F2\u7F6E\u548C\u50F5\u6B7B\u8FDB\u7A0B
        -p          \u6309pid\u663E\u793A
    \u4EA4\u4E92\u8F93\u5165
        u   \u7B5B\u9009user    k   \u6740\u6B7B\u8FDB\u7A0B    q   \u9000\u51FA


\u7F51\u7EDC\u8FDB\u7A0B\u76D1\u63A7
    <span class="token function">netstat</span>         \u67E5\u770B\u7F51\u7EDC\u670D\u52A1\u8FDB\u7A0B
        -tunlp <span class="token operator">|</span> <span class="token function">grep</span> \u7AEF\u53E3\u53F7

\u67E5\u770B\u6587\u4EF6\u7CFB\u7EDF\u7684\u7AEF\u53E3\u5360\u7528
    <span class="token function">lsof</span> -i<span class="token punctuation">(</span>:\u7AEF\u53E3\u53F7<span class="token punctuation">)</span>    \u5217\u51FA\u5F53\u524D\u7CFB\u7EDF\u6253\u5F00\u6587\u4EF6

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E5D\u3001\u670D\u52A1\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E5D\u3001\u670D\u52A1\u7BA1\u7406" aria-hidden="true">#</a> \u4E5D\u3001\u670D\u52A1\u7BA1\u7406</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5168\u90E8\u670D\u52A1</span>
    <span class="token function">service</span> --status-all

<span class="token comment"># \u67E5\u770B\u670D\u52A1\u8BE6\u60C5</span>
    <span class="token function">service</span> mysql status

<span class="token comment"># \u542F\u52A8</span>
    <span class="token function">service</span> mysql stop

<span class="token comment"># \u7BA1\u91CC\u542F\u52A8\u670D\u52A1</span>
    setup               \u6307\u4EE4
    /etc/init.d         \u542F\u52A8\u670D\u52A1\u76EE\u5F55

    <span class="token function">chkconfig</span> --list    \u67E5\u770B\u5404\u4E2A\u8FD0\u884C\u7EA7\u522B\u7684\u670D\u52A1\u542F\u52A8\u60C5\u51B5
            -level <span class="token number">5</span> serve_name on\u3001off     \u5F00\u5173\u542F\u52A8\u8FD0\u884C
<span class="token comment"># \u7BA1\u7406\u7CFB\u7EDF</span>
    systemctl

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5341\u3001apt-\u76F8\u5173\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5341\u3001apt-\u76F8\u5173\u547D\u4EE4" aria-hidden="true">#</a> \u5341\u3001apt \u76F8\u5173\u547D\u4EE4</h2>`,4),m=s("/etc/apt/source.list \u53EF\u4EE5\u5207\u6362\u4E3A "),b={href:"https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/",target:"_blank",rel:"noopener noreferrer"},k=s("\u6E05\u534E\u955C\u50CF\u6E90"),h={href:"https://jingyan.baidu.com/article/22a299b51648e09e19376ae7.html",target:"_blank",rel:"noopener noreferrer"},f=s("apt-cache \u4F7F\u7528"),g=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt-get</span> update                  \u66F4\u65B0\u6E90

<span class="token function">apt-cache</span> search package        \u627E\u67E5\u5305

<span class="token function">apt-get</span> <span class="token function">install</span> package         \u5B89\u88C5\u5305
    -y                          \u8DF3\u8FC7\u786E\u8BA4
    --reinstall                 \u91CD\u65B0\u5B89\u88C5

<span class="token function">apt-get</span> remove package          \u79FB\u9664\u5305
    --purge                     \u540C\u65F6\u6E05\u7406\u914D\u7F6E

<span class="token function">apt-get</span> -f <span class="token function">install</span>              \u4FEE\u590D\u5B89\u88C5

<span class="token function">apt-get</span> build-dep package       \u5B89\u88C5\u76F8\u5173\u7F16\u8BD1\u73AF\u5883
<span class="token function">apt-get</span> upgrade                 \u66F4\u65B0\u5B89\u88C5\u7684\u5305
<span class="token function">apt-get</span> dist-upgrade            \u7CFB\u7EDF\u5347\u7EA7

<span class="token function">apt-get</span> <span class="token builtin class-name">source</span> package          \u4E0B\u8F7D\u5176\u6E90\u4EE3\u7801

<span class="token function">apt-get</span> show package            \u663E\u793A\u5305\u8BE6\u60C5
<span class="token function">apt-get</span> depends package         \u67E5\u770B\u4F9D\u8D56\u4E86\u54EA\u4E9B\u5305
<span class="token function">apt-get</span> rdepends package        \u67E5\u770B\u88AB\u54EA\u4E9B\u5305\u4F9D\u8D56\u4E86

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5341\u4E00\u3001\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5341\u4E00\u3001\u5176\u4ED6" aria-hidden="true">#</a> \u5341\u4E00\u3001\u5176\u4ED6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
init <span class="token punctuation">[</span><span class="token number">0</span>-6<span class="token punctuation">]</span>              \u6307\u5B9A\u8FD0\u884C\u7EA7\u522B
/etx/inittab            \u4FEE\u6539\u542F\u52A8\u7EA7\u522B

select-editor           \u5207\u6362\u9ED8\u8BA4\u7F16\u8F91\u5668
/etc/profile            \u73AF\u5883\u53D8\u91CF\u4F4D\u7F6E

tree                    \u6253\u5370\u76EE\u5F55\u7ED3\u6784
telnet <span class="token function">ip</span> port          \u6D4B\u8BD5\u7F51\u7EDC

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function x(_,w){const e=d("ExternalLinkIcon");return c(),t("div",null,[u,n("p",null,[n("a",v,[p,a(e)])]),o,n("p",null,[m,n("a",b,[k,a(e)])]),n("p",null,[n("a",h,[f,a(e)])]),g])}var y=l(r,[["render",x],["__file","linux \u547D\u4EE4.html.vue"]]);export{y as default};
