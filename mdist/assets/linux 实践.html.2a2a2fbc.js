import{_ as l,r as c,o as d,c as t,a as s,e,d as i,b as n}from"./app.ddafede6.js";const o={},p=i(`<h1 id="linux-\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#linux-\u5B9E\u8DF5" aria-hidden="true">#</a> Linux \u5B9E\u8DF5</h1><h2 id="open-ssh-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#open-ssh-\u4F7F\u7528" aria-hidden="true">#</a> open-ssh \u4F7F\u7528</h2><blockquote><p>1.\u5B89\u88C5</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5\u670D\u52A1\u7AEF</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> openssh-server
<span class="token comment"># \u5B89\u88C5\u5BA2\u6237\u7AEF</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> openssh-client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>2.\u522B\u540D\u767B\u5F55</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># ~/.ssh/config \u4E2D\u6DFB\u52A0\u914D\u7F6E</span>
Host aliasName
HostName <span class="token number">192.168</span>.225.22
User root

<span class="token comment"># \u76F4\u63A5\u767B\u5F55 (-v \u8C03\u8BD5\u6A21\u5F0F)</span>
<span class="token function">ssh</span> user@ip -v
<span class="token comment"># \u901A\u8FC7\u522B\u540D\u767B\u5F55</span>
<span class="token function">ssh</span> aliasName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>3.\u514D\u5BC6\u767B\u5F55</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u751F\u6210\u975E\u5BF9\u79F0\u79D8\u94A5</span>
ssh-keygen -t <span class="token punctuation">[</span>rsa<span class="token operator">|</span>dsa<span class="token punctuation">]</span>

<span class="token comment"># \u5C06\u672C\u5730\u7684id_rsa.pub\uFF0C\u590D\u5236\u5230\u670D\u52A1\u5668 authorized_keys</span>
<span class="token comment"># \u53EF\u4EE5\u901A\u8FC7\u672C\u5730\u4F7F\u7528 ssh-copy-id \u5DE5\u5177</span>
ssh-copy-id aliasName

<span class="token comment"># \u6CE8\u9500</span>
<span class="token builtin class-name">logout</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>4.\u96A7\u9053</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u96A7\u9053\u793A\u4F8B\uFF0CNL \u662F\u6620\u5C04\u5230\u672C\u5730\uFF0CNR \u6620\u5C04\u5230\u8FDC\u7A0B\u505A\u8FDC\u7A0B\u4EE3\u7406</span>
<span class="token function">ssh</span> -NL <span class="token number">5000</span>:localhost:5000 aliasName

<span class="token comment"># \u96A7\u9053\u94FE\u63A5,\u542B\u4E49\u662F\uFF1A\u5728A\u4E0A\u8BBF\u95EE\u81EA\u5DF1\u76848888\u7AEF\u53E3\u76F8\u5F53\u4E8E\u901A\u8FC7\uFF08B\u7684\uFF09localhost\u76848080\u7AEF\u53E3\u3002</span>
<span class="token comment"># aliasName \u53EF\u4EE5\u5199\u4F5C user@ip</span>
<span class="token function">ssh</span> -NL <span class="token number">8888</span><span class="token punctuation">[</span>\u672C\u5730A<span class="token punctuation">]</span>:localhost:8080<span class="token punctuation">[</span>\u76EE\u6807B<span class="token punctuation">]</span> aliasName
    <span class="token comment"># \u521B\u5EFA\u96A7\u9053\u5E38\u7528\u7684\u53C2\u6570\u8BF4\u660E\uFF1A</span>
    <span class="token comment"># -C\uFF1A\u538B\u7F29\u4F20\u8F93\uFF0C\u63D0\u9AD8\u4F20\u8F93\u901F\u5EA6</span>
    <span class="token comment"># -f\uFF1A\u5C06ssh\u8F6C\u5165\u540E\u53F0\u6267\u884C\uFF0C\u4E0D\u5360\u7528\u5F53\u524D\u7684shell</span>
    <span class="token comment"># -N\uFF1A\u5EFA\u7ACB\u9759\u9ED8\u8FDE\u63A5\uFF08\u4E0D\u56DE\u663Essh\u9875\u9762\uFF09</span>
    <span class="token comment"># -g\uFF1A\u5141\u8BB8\u8FDC\u7A0B\u4E3B\u673A\u8FDE\u63A5\u672C\u5730\u7528\u4E8E\u7AEF\u53E3\u8F6C\u53D1\u7684\u7AEF\u53E3</span>
    <span class="token comment"># -L\uFF1A\u672C\u5730\u7AEF\u53E3\u8F6C\u53D1, \u6620\u5C04\u5230\u672C\u5730</span>
    <span class="token comment"># -R\uFF1A\u8FDC\u7A0B\u7AEF\u53E3\u8F6C\u53D1, \u6620\u5C04\u5230\u8FDC\u7A0B</span>
    <span class="token comment"># -D\uFF1A\u52A8\u6001\u7AEF\u53E3\u8F6C\u53D1\uFF08socket\u4EE3\u7406\uFF09</span>
    <span class="token comment"># -p\uFF1A\u6307\u5B9Assh\u7AEF\u53E3</span>

<span class="token comment"># \u901A\u8FC7 ssh \u6D4B\u8BD5\u7AEF\u53E3\u94FE\u63A5\u6210\u529F\u4E0E\u5426</span>
<span class="token function">ssh</span> -v -p <span class="token number">1521</span> oracle@192.168.150.168
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>5.\u7981\u7528\u5BC6\u7801\u767B\u5F55\uFF0C\u6216\u4F7F\u7528 man ssh config \u67E5\u770B\u5176\u4ED6\u914D\u7F6E</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7981\u7528\u5BC6\u7801\u767B\u5F55,\u7F16\u8F91\u670D\u52A1\u5668\u7AEF\u7684 /etc/ssh/sshd_config</span>

Host *
  PasswordAuthentication no

<span class="token comment"># \u9632\u65AD\u94FE</span>
<span class="token comment"># \u7F16\u8F91 ~/.ssh/config</span>

Host *
  ServerAliveInterval <span class="token number">30</span>
  TCPKeepAlive <span class="token function">yes</span>
  ServerAliveCountMax <span class="token number">6</span>
  Compression <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lrzsz-\u5C0F\u6587\u4EF6\u4F20\u8F93" tabindex="-1"><a class="header-anchor" href="#lrzsz-\u5C0F\u6587\u4EF6\u4F20\u8F93" aria-hidden="true">#</a> lrzsz \u5C0F\u6587\u4EF6\u4F20\u8F93</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> lrzsz

<span class="token comment"># \u4E0A\u4F20</span>
rz

<span class="token comment"># \u4E0B\u8F7D</span>
sz filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7F8E\u5316\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u7F8E\u5316\u5DE5\u5177" aria-hidden="true">#</a> \u7F8E\u5316\u5DE5\u5177</h2>`,15),v=n("\u4F7F\u7528 "),u={href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"},r=n("ohmyzsh"),m=n(" \u7F8E\u5316\u547D\u4EE4\u884C"),b=s("br",null,null,-1),k=n(" \u4F7F\u7528"),h=s("code",null,"solarized",-1),g=n("\u7F8E\u5316 vim"),f=s("br",null,null,-1),_={href:"https://github.com/neovim/neovim",target:"_blank",rel:"noopener noreferrer"},x=n("neovim"),N=n(" \u52A0\u5F3A\u7248 vim"),z=i(`<h2 id="grep-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#grep-\u547D\u4EE4" aria-hidden="true">#</a> grep \u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
    -c              \u53EA\u8F93\u51FA\u5339\u914D\u884C\u7684\u8BA1\u6570\u3002
    -h              \u67E5\u8BE2\u591A\u6587\u4EF6\u65F6\u4E0D\u663E\u793A\u6587\u4EF6\u540D\u3002
    -l              \u67E5\u8BE2\u591A\u6587\u4EF6\u65F6\u53EA\u8F93\u51FA\u5305\u542B\u5339\u914D\u5B57\u7B26\u7684\u6587\u4EF6\u540D\u3002
    -n              \u663E\u793A\u5339\u914D\u884C\u53CA\u884C\u53F7\u3002
    -s              \u4E0D\u663E\u793A\u4E0D\u5B58\u5728\u6216\u65E0\u5339\u914D\u6587\u672C\u7684\u9519\u8BEF\u4FE1\u606F\u3002
    -v              \u663E\u793A\u4E0D\u5305\u542B\u5339\u914D\u6587\u672C\u7684\u6240\u6709\u884C\u3002
    -i              \u5FFD\u7565\u5B57\u7B26\u7684\u5927\u5C0F\u5199
\u3000\u3000-o              \u4EC5\u663E\u793A\u5339\u914D\u5230\u7684\u5B57\u7B26\u4E32
\u3000\u3000-v              \u663E\u793A\u4E0D\u80FD\u88AB\u6A21\u5F0F\u5339\u914D\u5230\u7684\u884C
\u3000\u3000-E              \u652F\u6301\u4F7F\u7528\u6269\u5C55\u7684\u6B63\u5219\u8868\u8FBE\u5F0F
\u3000\u3000-q              \u9759\u9ED8\u6A21\u5F0F\uFF0C\u5373\u4E0D\u8F93\u51FA\u4EFB\u4F55\u4FE1\u606F
\u3000\u3000-A n            \u663E\u793A\u88AB\u6A21\u5F0F\u5339\u914D\u7684\u884C\u53CA\u5176\u540En\u884C
\u3000\u3000-B n            \u663E\u793A\u88AB\u6A21\u5F0F\u5339\u914D\u7684\u884C\u53CA\u5176\u524Dn\u884C
\u3000\u3000-C n            \u663E\u793A\u88AB\u6A21\u5F0F\u5339\u914D\u7684\u884C\u53CA\u5176\u524D\u540E\u5404n\u884C
    -G              \u652F\u6301\u57FA\u672C\u6B63\u5219\u8868\u8FBE\u5F0F
\u3000\u3000\u6CE8\uFF1A\u4F7F\u7528grep\u5339\u914D\u65F6\u9700\u4F7F\u7528\u53CC\u5F15\u53F7\u5F15\u8D77\u6765\uFF08\u5355\u5F15\u53F7\u4E3A\u5F3A\u5F15\u7528\uFF09\uFF0C\u9632\u6B62\u88AB\u7CFB\u7EDF\u8BEF\u8BA4\u4E3A\u53C2\u6570\u6216\u8005\u7279\u6B8A\u547D\u4EE4\u800C\u62A5\u9519\u3002


\u3000  <span class="token string">&#39;^&#39;</span>\uFF1A \u951A\u5B9A\u884C\u9996
\u3000\u3000<span class="token string">&#39;$&#39;</span>\uFF1A \u951A\u5B9A\u884C\u5C3E
\u3000\u3000<span class="token string">&#39;.&#39;</span>\uFF1A \u5339\u914D\u4EFB\u4E00\u4E00\u4E2A\u5B57\u7B26
\u3000\u3000<span class="token string">&#39;*&#39;</span>\uFF1A \u5339\u914D\u96F6\u4E2A\u6216\u591A\u4E2A\u5148\u524D\u5B57\u7B26
\u3000\u3000<span class="token string">&#39;\\?&#39;</span>\uFF1A\u5339\u914D\u5176\u524D\u9762\u7684\u5B57\u7B260\u6B21\u6216\u80051\u6B21\uFF1B
\u3000\u3000<span class="token string">&#39;\\+&#39;</span>\uFF1A\u5339\u914D\u5176\u524D\u9762\u7684\u5B57\u7B261\u6B21\u6216\u8005\u591A\u6B21\uFF1B
\u3000\u3000<span class="token string">&#39;\\{m\\}&#39;</span>\uFF1A\u5339\u914D\u5176\u524D\u9762\u7684\u5B57\u7B26m\u6B21\uFF08<span class="token punctuation">\\</span>\u4E3A\u8F6C\u4E49\u5B57\u7B26\uFF09
\u3000\u3000<span class="token string">&#39;\\{m,n\\}&#39;</span>\uFF1A\u5339\u914D\u5176\u524D\u9762\u7684\u5B57\u7B26\u81F3\u5C11m\u6B21\uFF0C\u81F3\u591An\u6B21
\u3000\u3000<span class="token string">&#39;[]&#39;</span>\uFF1A \u5339\u914D\u4E00\u4E2A\u6307\u5B9A\u8303\u56F4\u5185\u7684\u5B57\u7B26 <span class="token operator">|</span> <span class="token string">&#39;[^]&#39;</span>\u5339\u914D\u6307\u5B9A\u8303\u56F4\u5916\u7684\u4EFB\u610F\u5355\u4E2A\u5B57\u7B26
\u3000\u3000<span class="token string">&#39;\\&lt;&#39;</span>\u6216<span class="token string">&#39;\\b&#39;</span>\uFF1A\u951A\u5B9A\u8BCD\u9996\uFF0C<span class="token string">&#39;\\&gt;&#39;</span>\u6216<span class="token string">&#39;\\b&#39;</span>\uFF1A\u951A\u5B9A\u8BCD\u5C3E\uFF08\u53EF\u7528<span class="token punctuation">\\</span><span class="token operator">&lt;</span>PATTERN<span class="token punctuation">\\</span><span class="token operator">&gt;</span>\uFF1A\u5339\u914D\u5B8C\u6574\u5355\u8BCD\uFF09
\u3000\u3000<span class="token string">&#39;\\(\\)&#39;</span>\uFF1A\u5C06\u591A\u4E2A\u5B57\u7B26\u5F53\u505A\u4E00\u4E2A\u6574\u4F53\u8FDB\u884C\u5904\u7406

\u3000\u3000\u540E\u5411\u5F15\u7528\uFF1A\u5F15\u7528\u524D\u9762\u7684\u5206\u7EC4\u62EC\u53F7\u4E2D\u7684\u6A21\u5F0F\u6240\u5339\u914D\u5230\u7684\u5B57\u7B26
\u3000\u3000\u5206\u7EC4\u62EC\u53F7\u4E2D\u7684\u6A21\u5F0F\u5339\u914D\u5230\u7684\u5185\u5BB9\u6216\u88AB\u6B63\u5219\u8868\u8FBE\u5F0F\u5F15\u64CE\u81EA\u52A8\u8BB0\u5F55\u4E8E\u5185\u90E8\u7684\u53D8\u91CF\u4E2D\uFF1A
\u3000\u3000<span class="token punctuation">\\</span><span class="token number">1</span>\uFF1A\u6A21\u5F0F\u4ECE\u5DE6\u4FA7\u8D77\uFF0C\u7B2C\u4E00\u4E2A\u5DE6\u62EC\u53F7\u53CA\u4E0E\u4E4B\u5339\u914D\u7684\u53F3\u62EC\u53F7\u4E4B\u95F4\u6A21\u5F0F\u5339\u914D\u5230\u7684\u5185\u5BB9
\u3000\u3000<span class="token punctuation">\\</span><span class="token number">2</span>\uFF1A\u6A21\u5F0F\u4ECE\u5DE6\u4FA7\u8D77\uFF0C\u7B2C\u4E8C\u4E2A\u5DE6\u62EC\u53F7\u53CA\u4E0E\u4E4B\u5339\u914D\u7684\u53F3\u62EC\u53F7\u4E4B\u95F4\u6A21\u5F0F\u5339\u914D\u5230\u7684\u5185\u5BB9<span class="token punctuation">..</span>.

\u3000\u3000\u6269\u5C55\u6B63\u5219\u8868\u8FBE\u5F0F\u4E0E\u6B63\u5219\u8868\u8FBE\u5F0F\u7565\u6709\u4E0D\u540C\uFF1A

\u3000\u3000<span class="token string">&#39;[]&#39;</span>\uFF1A\u4F9D\u65E7\u5339\u914D\u6307\u5B9A\u8303\u56F4\u5185\u7684\u4EFB\u610F\u5355\u4E2A\u5B57\u7B26\uFF1B\u4F46\u662F\u6709\u5F88\u591A\u7279\u6B8A\u5339\u914D\u65B9\u5F0F\u3002
\u3000\u3000\u3000\u3000<span class="token punctuation">[</span>:digit:<span class="token punctuation">]</span> \u5339\u914D\u4EFB\u610F\u5355\u4E2A\u6570\u5B57
\u3000\u3000\u3000\u3000<span class="token punctuation">[</span>:lower:<span class="token punctuation">]</span> \u5339\u914D\u4EFB\u610F\u5355\u4E2A\u5C0F\u5199\u5B57\u6BCD
\u3000\u3000\u3000\u3000<span class="token punctuation">[</span>:upper:<span class="token punctuation">]</span> \u5339\u914D\u4EFB\u610F\u5355\u4E2A\u5927\u5199\u5B57\u6BCD
\u3000\u3000\u3000\u3000<span class="token punctuation">[</span>:alpha:<span class="token punctuation">]</span> \u5339\u914D\u4EFB\u610F\u5355\u4E2A\u5B57\u6BCD
\u3000\u3000\u3000\u3000<span class="token punctuation">[</span>:alnum:<span class="token punctuation">]</span> \u5339\u914D\u4EFB\u610F\u5355\u4E2A\u5B57\u6BCD\u6216\u6570\u5B57
\u3000\u3000\u3000\u3000<span class="token punctuation">[</span>:punct:<span class="token punctuation">]</span> \u5339\u914D\u4EFB\u610F\u5355\u4E2A\u7B26\u53F7
\u3000\u3000\u3000\u3000<span class="token punctuation">[</span>:space:<span class="token punctuation">]</span> \u5339\u914D\u5355\u4E2A\u7A7A\u683C

\u3000\u3000\u4E00\u4E9B\u5730\u65B9\u53D6\u6D88\u4E86\u8F6C\u4E49\u5B57\u7B26\u7684\u4F7F\u7528\uFF1A

\u3000\u3000<span class="token string">&#39;?&#39;</span>\uFF1A\u5339\u914D\u5176\u524D\u9762\u7684\u5B57\u7B260\u6B21\u6216\u80051\u6B21\uFF1B
\u3000\u3000<span class="token string">&#39;+&#39;</span>\uFF1A\u5339\u914D\u5176\u524D\u9762\u7684\u5B57\u7B261\u6B21\u6216\u8005\u591A\u6B21\uFF1B
\u3000\u3000<span class="token string">&#39;{m}&#39;</span>\uFF1A\u5339\u914D\u5176\u524D\u9762\u7684\u5B57\u7B26m\u6B21\uFF08<span class="token punctuation">\\</span>\u4E3A\u8F6C\u4E49\u5B57\u7B26\uFF09
\u3000\u3000<span class="token string">&#39;{m,n}&#39;</span>\uFF1A\u5339\u914D\u5176\u524D\u9762\u7684\u5B57\u7B26\u81F3\u5C11m\u6B21\uFF0C\u81F3\u591An\u6B21
\u3000\u3000<span class="token punctuation">(</span><span class="token punctuation">)</span>\uFF1A\u5C06\u4E00\u4E2A\u6216\u591A\u4E2A\u5B57\u7B26\u6346\u7ED1\u5728\u4E00\u8D77\uFF0C\u5F53\u505A\u4E00\u4E2A\u6574\u4F53\u8FDB\u884C\u5904\u7406\uFF0C\u53CD\u5411\u5F15\u7528\u7167\u5E38\u4F7F\u7528\u3002
\u3000\u3000<span class="token string">&#39;|&#39;</span>\uFF1A\u6216\uFF08\u6CE8\uFF1A<span class="token string">&#39;C|cat&#39;</span>\u4E3AC\u4E0Ecat\uFF0C<span class="token string">&#39;\uFF08C|c\uFF09at\u624D\u662FCat\u4E0Ecat&#39;</span>\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ping" tabindex="-1"><a class="header-anchor" href="#ping" aria-hidden="true">#</a> ping</h2><p>ttl\uFF1A \u5373 time to live\uFF0C\u6BCF\u7ECF\u8FC7\u4E00\u4E2A\u8DEF\u7531\u5C31\u4F1A\u51CF\u4E00\uFF0C\u5F53 ttl \u4E3A 0 \u65F6\u6570\u636E\u5305\u5C31\u4F1A\u88AB\u8DEF\u7531\u629B\u5F03\u3002\u4E00\u822C\u662F 64(mac)\u3001128(win)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># ping \u672C\u673A\u68C0\u67E5\u914D\u7F6E</span>
<span class="token function">ping</span> <span class="token number">127.0</span>.0.1
<span class="token comment"># ping \u5185\u7F51ip\uFF0C\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5</span>
<span class="token function">ping</span> <span class="token number">192.168</span>.0.101
<span class="token comment"># ping \u9ED8\u8BA4\u7F51\u5173(\u8DEF\u7531\u5668)</span>
<span class="token function">ping</span> <span class="token number">192.168</span>.0.1
<span class="token comment"># ping \u76EE\u6807ip\u5730\u5740</span>
<span class="token function">ping</span> <span class="token number">43.26</span>.1.47
<span class="token comment"># ping \u4E3B\u673A\u540D(\u57DF\u540D)</span>
<span class="token function">ping</span> facebook.com

    -t             <span class="token comment"># Ping \u6307\u5B9A\u7684\u4E3B\u673A\uFF0C\u76F4\u5230\u505C\u6B62\u3002</span>
    -a             <span class="token comment"># \u5C06\u5730\u5740\u89E3\u6790\u4E3A\u4E3B\u673A\u540D\u3002</span>
    -n count       <span class="token comment"># \u8981\u53D1\u9001\u7684\u56DE\u663E\u8BF7\u6C42\u6570\u3002</span>
    -l size        <span class="token comment"># \u53D1\u9001\u7F13\u51B2\u533A\u5927\u5C0F\u3002</span>
    -f             <span class="token comment"># \u5728\u6570\u636E\u5305\u4E2D\u8BBE\u7F6E\u201C\u4E0D\u5206\u6BB5\u201D\u6807\u8BB0(\u4EC5\u9002\u7528\u4E8E IPv4)\u3002</span>
    -i TTL         <span class="token comment"># \u751F\u5B58\u65F6\u95F4\u3002</span>
    -r count       <span class="token comment"># \u8BB0\u5F55\u8BA1\u6570\u8DC3\u70B9\u7684\u8DEF\u7531(\u4EC5\u9002\u7528\u4E8E IPv4)\u3002</span>
    -s count       <span class="token comment"># \u8BA1\u6570\u8DC3\u70B9\u7684\u65F6\u95F4\u6233(\u4EC5\u9002\u7528\u4E8E IPv4)\u3002</span>
    -j host-list   <span class="token comment"># \u4E0E\u4E3B\u673A\u5217\u8868\u4E00\u8D77\u4F7F\u7528\u7684\u677E\u6563\u6E90\u8DEF\u7531(\u4EC5\u9002\u7528\u4E8E IPv4)\u3002</span>
    -k host-list   <span class="token comment">#  \u4E0E\u4E3B\u673A\u5217\u8868\u4E00\u8D77\u4F7F\u7528\u7684\u4E25\u683C\u6E90\u8DEF\u7531(\u4EC5\u9002\u7528\u4E8E IPv4)\u3002</span>
    -w <span class="token function">timeout</span>     <span class="token comment"># \u7B49\u5F85\u6BCF\u6B21\u56DE\u590D\u7684\u8D85\u65F6\u65F6\u95F4(\u6BEB\u79D2)\u3002</span>
    -S srcaddr     <span class="token comment"># \u8981\u4F7F\u7528\u7684\u6E90\u5730\u5740\u3002</span>
    -c compartment <span class="token comment"># \u8DEF\u7531\u9694\u79BB\u8231\u6807\u8BC6\u7B26\u3002</span>
    -p             <span class="token comment"># Ping Hyper-V \u7F51\u7EDC\u865A\u62DF\u5316\u63D0\u4F9B\u7A0B\u5E8F\u5730\u5740\u3002</span>
    -4             <span class="token comment"># \u5F3A\u5236\u4F7F\u7528 IPv4\u3002</span>
    -6             <span class="token comment"># \u5F3A\u5236\u4F7F\u7528 IPv6\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="curl" tabindex="-1"><a class="header-anchor" href="#curl" aria-hidden="true">#</a> curl</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BF7\u6C42</span>
<span class="token function">curl</span> http://www.baidu.com

    -XPOST <span class="token comment"># \u4F7F\u7528post\u8BF7\u6C42</span>
    -d     <span class="token comment"># post\u7684\u6570\u636E</span>
    -H     <span class="token comment"># \u6DFB\u52A0\u5934\u90E8\u4FE1\u606F</span>
    -I     <span class="token comment"># \u663E\u793A\u5934\u90E8\u4FE1\u606F</span>
    -O     <span class="token comment"># \u4E0B\u8F7D\u6587\u4EF6</span>
    -o filename <span class="token comment"># \u540C\u4E0A</span>
    -L     <span class="token comment"># \u8DDF\u968F\u91CD\u5B9A\u5411</span>
    -V     <span class="token comment"># \u663E\u793A\u63E1\u624B\u53CA\u8FDE\u63A5\u4FE1\u606F</span>
    --proxy <span class="token string">&quot;\u534F\u8BAE://\u7528\u6237\u540D:\u5BC6\u7801@\u4EE3\u7406\u5730\u5740&quot;</span> URL

<span class="token comment"># \u5176\u4ED6\u7684 -help \u67E5\u770B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lsof-\u67E5\u770B\u5360\u7528" tabindex="-1"><a class="header-anchor" href="#lsof-\u67E5\u770B\u5360\u7528" aria-hidden="true">#</a> lsof \u67E5\u770B\u5360\u7528</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">lsof</span> -i:8080    \u67E5\u770B8080\u7AEF\u53E3\u5360\u7528
<span class="token function">lsof</span> abc.txt    \u663E\u793A\u5F00\u542F\u6587\u4EF6abc.txt\u7684\u8FDB\u7A0B
<span class="token function">lsof</span> -c abc     \u663E\u793Aabc\u8FDB\u7A0B\u73B0\u5728\u6253\u5F00\u7684\u6587\u4EF6
<span class="token function">lsof</span> -c -p <span class="token number">1234</span> \u5217\u51FA\u8FDB\u7A0B\u53F7\u4E3A1234\u7684\u8FDB\u7A0B\u6240\u6253\u5F00\u7684\u6587\u4EF6
<span class="token function">lsof</span> -g gid     \u663E\u793A\u5F52\u5C5Egid\u7684\u8FDB\u7A0B\u60C5\u51B5
<span class="token function">lsof</span> +d /usr/local/ \u663E\u793A\u76EE\u5F55\u4E0B\u88AB\u8FDB\u7A0B\u5F00\u542F\u7684\u6587\u4EF6
<span class="token function">lsof</span> +D /usr/local/ \u540C\u4E0A\uFF0C\u4F46\u662F\u4F1A\u641C\u7D22\u76EE\u5F55\u4E0B\u7684\u76EE\u5F55\uFF0C\u65F6\u95F4\u8F83\u957F
<span class="token function">lsof</span> -d <span class="token number">4</span>       \u663E\u793A\u4F7F\u7528fd\u4E3A4\u7684\u8FDB\u7A0B
<span class="token function">lsof</span> -i -U      \u663E\u793A\u6240\u6709\u6253\u5F00\u7684\u7AEF\u53E3\u548CUNIX domain\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ps-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#ps-\u547D\u4EE4" aria-hidden="true">#</a> ps \u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ps\u547D\u4EE4\u2014\u2014\u67E5\u770B\u9759\u6001\u7684\u8FDB\u7A0B\u7EDF\u8BA1\u4FE1\u606F\uFF08Processes Statistic\uFF09

\u5E38\u89C1\u7684\u9009\u9879\uFF1A
a\uFF1A\u663E\u793A\u5F53\u524D\u7EC8\u7AEF\u4E0B\u7684\u6240\u6709\u8FDB\u7A0B\u4FE1\u606F\uFF0C\u5305\u62EC\u5176\u4ED6\u7528\u6237\u7684\u8FDB\u7A0B\u3002
u\uFF1A\u4F7F\u7528\u4EE5\u7528\u6237\u4E3A\u4E3B\u7684\u683C\u5F0F\u8F93\u51FA\u8FDB\u7A0B\u4FE1\u606F\u3002
x\uFF1A\u663E\u793A\u5F53\u524D\u7528\u6237\u5728\u6240\u6709\u7EC8\u7AEF\u4E0B\u7684\u8FDB\u7A0B\u3002
-e\uFF1A\u663E\u793A\u7CFB\u7EDF\u5185\u7684\u6240\u6709\u8FDB\u7A0B\u4FE1\u606F\u3002
-l\uFF1A\u4F7F\u7528\u957F\uFF08long\uFF09\u683C\u5F0F\u663E\u793A\u8FDB\u7A0B\u4FE1\u606F\u3002
-f\uFF1A\u4F7F\u7528\u5B8C\u6574\u7684\uFF08full\uFF09\u683C\u5F0F\u663E\u793A\u8FDB\u7A0B\u4FE1\u606F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FDB\u7A0B\u3001\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B\u3001\u7AEF\u53E3" aria-hidden="true">#</a> \u8FDB\u7A0B\u3001\u7AEF\u53E3</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u901A\u8FC7\u6587\u4EF6\u7CFB\u7EDF\u67E5\u770B\u5360\u7528</span>
<span class="token function">lsof</span> -i:8000

<span class="token comment"># \u4F7F\u7528netstat\u547D\u4EE4\uFF0C\u4F8B\u5982</span>
<span class="token function">netstat</span> -tunlp
    -t              <span class="token punctuation">(</span>tcp<span class="token punctuation">)</span> \u4EC5\u663E\u793Atcp\u76F8\u5173\u9009\u9879
    -u              <span class="token punctuation">(</span>udp<span class="token punctuation">)</span>\u4EC5\u663E\u793Audp\u76F8\u5173\u9009\u9879
    -n              \u62D2\u7EDD\u663E\u793A\u522B\u540D\uFF0C\u80FD\u663E\u793A\u6570\u5B57\u7684\u5168\u90E8\u8F6C\u5316\u4E3A\u6570\u5B57
    -l              \u4EC5\u5217\u51FA\u5728Listen<span class="token punctuation">(</span>\u76D1\u542C<span class="token punctuation">)</span>\u7684\u670D\u52A1\u72B6\u6001
    -p              \u663E\u793A\u5EFA\u7ACB\u76F8\u5173\u94FE\u63A5\u7684\u7A0B\u5E8F\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function P(q,I){const a=c("ExternalLinkIcon");return d(),t("div",null,[p,s("p",null,[v,s("a",u,[r,e(a)]),m,b,k,h,g,f,s("a",_,[x,e(a)]),N]),z])}var L=l(o,[["render",P],["__file","linux \u5B9E\u8DF5.html.vue"]]);export{L as default};
