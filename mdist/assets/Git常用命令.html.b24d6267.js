import{_ as l,r as c,o as t,c as d,a as n,e as a,b as s,d as i}from"./app.ddafede6.js";const r={},o=n("h1",{id:"git-\u5E38\u7528\u547D\u4EE4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git-\u5E38\u7528\u547D\u4EE4","aria-hidden":"true"},"#"),s(" Git \u5E38\u7528\u547D\u4EE4")],-1),u=n("h2",{id:"\u5E38\u7528\u547D\u4EE4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5E38\u7528\u547D\u4EE4","aria-hidden":"true"},"#"),s(" \u5E38\u7528\u547D\u4EE4")],-1),v=s("\u6709\u70B9\u610F\u601D\u7684"),p={href:"https://learngitbranching.js.org/?locale=zh_CN",target:"_blank",rel:"noopener noreferrer"},m=s("\u5B66\u4E60\u7F51\u7AD9"),b=i(`<h3 id="\u57FA\u7840\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u64CD\u4F5C" aria-hidden="true">#</a> \u57FA\u7840\u64CD\u4F5C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token function">git</span> --version    \u67E5\u770B\u5B89\u88C5\u7684\u7248\u672C
    <span class="token function">git</span> init         \u521D\u59CB\u5316
    <span class="token function">git</span> config --global user.name <span class="token string">&#39;cherry&#39;</span>
    <span class="token function">git</span> config --global user.email <span class="token string">&#39;285653184@qq.com&#39;</span>

    <span class="token function">git</span> status  \u83B7\u53D6\u961F\u5217\u72B6\u6001
    <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>   \u6DFB\u52A0\u6240\u6709\u6587\u4EF6\u5230\u961F\u5217
    <span class="token function">git</span> <span class="token function">add</span> *.html   \u6DFB\u52A0\u6240\u6709html\u6587\u4EF6\u5230\u961F\u5217
    <span class="token function">git</span> <span class="token function">add</span> index.html \u6DFB\u52A0\u5230\u961F\u5217
    <span class="token function">git</span> <span class="token function">rm</span> --cached index.html \u79FB\u9664\u961F\u5217\u4E2D\u7684

    <span class="token function">git</span> commit  \u63D0\u4EA4\u961F\u5217\u4E2D\u7684\u6587\u4EF6\u5230 \u4ED3\u5E93  \u201Cvim\u64CD\u4F5C\u6D41\u7A0B\u201D \u5199\u5B8C\u5907\u6CE8\u540E\uFF0C\u6309esc  \u5192\u53F7  wq \u9000\u51FA
            -m <span class="token string">&#39;\u5907\u6CE8&#39;</span>       \u76F4\u63A5\u63D0\u4EA4
    \u5206\u652F\u4E2D\u7684\u6240\u6709\u64CD\u4F5C\u90FD\u4E0D\u4F1A\u5F71\u54CD\u5230\u4E3B\u7EBF
    <span class="token function">git</span> branch login  \u521B\u5EFA\u5206\u652F
    <span class="token function">git</span> checkout login  \u8DF3\u8F6C\u5230\u67D0\u4E2A\u5206\u652F
    <span class="token function">git</span> merge login    \u5408\u5E76\u67D0\u4E2A\u5206\u652F

    \u5FFD\u7565\u4E00\u4E9B\u6587\u4EF6\u6216\u8005\u6587\u4EF6\u5939
    \u521B\u5EFA.gitignore\u6587\u4EF6\uFF0C\u5E76\u5728\u91CC\u9762\u5199\u5165\u8981\u5FFD\u7565\u7684\u6587\u4EF6\u540D

    <span class="token function">git</span> clone https filename                \u514B\u9686\u5206\u652F
    <span class="token function">git</span> push --set-upstream origin master   \u7B2C\u4E00\u6B21\u63D0\u4EA4\u7EBF\u4E0A\u4ED3\u5E93
    <span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/<span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span> barnch_local \u521B\u5EFA\u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u7684\u5173\u8054


    <span class="token function">git</span> checkout -- <span class="token function">file</span>    \u79FB\u9664\u6539\u52A8\u7684\u6587\u4EF6
    <span class="token function">git</span> clean -n
                -df         \u6E05\u7406\u8FFD\u8E2A\u7684\u53D8\u5316
    <span class="token function">git</span> <span class="token function">rm</span> -r --cached <span class="token builtin class-name">.</span>    \u6E05\u7406\u7F13\u5B58\u6587\u4EF6


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5206\u652F\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u7BA1\u7406" aria-hidden="true">#</a> \u5206\u652F\u7BA1\u7406</h3>`,3),h={href:"https://git-scm.com/book/zh/v1/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E7%AE%A1%E7%90%86",target:"_blank",rel:"noopener noreferrer"},g=s("\u5206\u652F\u7BA1\u7406"),k=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch \u663E\u793A\u672C\u5730\u5206\u652F
    -a \u5E26\u4E0A\u8FDC\u7A0B
    -v \u5206\u652F\u7248\u672C\u4FE1\u606F
    -vv \u67E5\u770B\u5206\u652F\u8DDF\u8E2A\u72B6\u6001
    -d \u5220\u9664
    --merged \u5DF2\u7ECF\u5408\u5E76
    --no-merged \u67E5\u770B\u6CA1\u6709\u5408\u5E76

<span class="token function">git</span> checkout \u5207\u6362\u5206\u652F
    -b \u521B\u5EFA\u5E76\u5207\u6362

    <span class="token function">git</span> clean -df <span class="token comment">#\u8FD4\u56DE\u5230\u67D0\u4E2A\u8282\u70B9</span>
<span class="token function">git</span> clean \u53C2\u6570
    -n \u663E\u793A \u5C06\u8981 \u5220\u9664\u7684 \u6587\u4EF6 \u548C  \u76EE\u5F55
    -f \u5220\u9664 \u6587\u4EF6
    -df \u5220\u9664 \u6587\u4EF6 \u548C \u76EE\u5F55
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FDC\u7A0B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a> \u8FDC\u7A0B\u5206\u652F</h3>`,2),f={href:"https://git-scm.com/book/zh/v1/Git-%E5%88%86%E6%94%AF-%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF",target:"_blank",rel:"noopener noreferrer"},_=s("\u8FDC\u7A0B\u5206\u652F"),x=i(`<p>\u5728\u672C\u5730\u547D\u540D\u4E3A origin/master\uFF0C\u5C31\u662F\u8FDC\u7A0B\u5206\u652F\uFF0C\u53EA\u6709\u6807\u8BB0\u4E0D\u53EF\u64CD\u4F5C\uFF0Cfetch \u53EF\u5F97\u5230\u8FDC\u7A0B\u6307\u9488\u6807\u8BB0</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token function">git</span> remote      \u67E5\u770B\u5F53\u524D\u7684\u8FDC\u7A0B\u4ED3\u5E93\u94FE\u63A5\u60C5\u51B5
            -v      \u8BE6\u60C5
    <span class="token function">git</span> remote update origin -p \u5237\u65B0\u8FDC\u7A0B\u5206\u652F\u5217\u8868

    \u521B\u5EFA\u8FDC\u7A0B\u4ED3\u5E93\u94FE\u63A5
    <span class="token function">git</span> remote <span class="token function">add</span> branch_name https
    <span class="token function">git</span> push -u origin master \u65B0\u5206\u652F\u7B2C\u4E00\u6B21\u63D0\u4EA4

    \u63A8\u9001\u5230\u67D0\u5206\u652F \u672C\u5730\uFF1A\u8FDC\u7A0B
    <span class="token function">git</span> push origin serverfix
    <span class="token function">git</span> push origin localfix:serverfix

    \u8FDC\u7A0B\u5206\u652F\u7684\u5185\u5BB9\u5408\u5E76\u5230\u5F53\u524D\u5206\u652F
    <span class="token function">git</span> merge origin/serverfix

    \u521B\u5EFA/\u5207\u6362\u5E76\u62F7\u8D1D\u8FDC\u7A0B\u5206\u652F\u5185\u5BB9
    <span class="token function">git</span> checkout -b serverfix origin/serverfix
    <span class="token function">git</span> checkout -b local_name origin/serverfix

    \u8FFD\u8E2A\u67D0\u4E2A\u8FDC\u7A0B\u5206\u652F \u53EF\u4EE5\u7B80\u5316\u4F7F\u7528git pull/git push
    <span class="token function">git</span> checkout --track origin/serverfix

    <span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/<span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span> barnch_local

    \u5220\u9664\u8FDC\u7A0B\u5206\u652F
    <span class="token function">git</span> push origin :serverfix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u91CD\u5199\u5386\u53F2" tabindex="-1"><a class="header-anchor" href="#\u91CD\u5199\u5386\u53F2" aria-hidden="true">#</a> \u91CD\u5199\u5386\u53F2</h3>`,3),E={href:"https://git-scm.com/book/zh/v1/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E5%86%99%E5%8E%86%E5%8F%B2",target:"_blank",rel:"noopener noreferrer"},A=s("\u91CD\u5199\u5386\u53F2"),B=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> commit --amend          \u91CD\u5199\u6700\u8FD1\u7684\u4E00\u6B21\u63D0\u4EA4<span class="token punctuation">(</span>\u63A8\u9001\u540E\u63D0\u4EA4\u4F1A\u6709\u51B2\u7A81<span class="token punctuation">)</span>

<span class="token function">git</span> rebase -i HEAD~3        \u91CD\u5199\u6700\u8FD13\u6B21\u7684\u5386\u53F2,<span class="token punctuation">(</span>\u4FEE\u6539\u63D0\u4EA4\u5386\u53F2\uFF0C\u91CD\u62CD\u63D0\u4EA4\u8BB0\u5F55<span class="token punctuation">)</span>
    \u89E3\u91CA\uFF1A\u8FDB\u5165\u7F16\u8F91\u5668\u540E\uFF0C\u5C06\u9700\u8981\u6539\u7684\u7248\u672C\u5BF9\u5E94\u7684pick\u6539\u4E3Aedit\u3002\u7F16\u8F91\u5B8C\u6210\u540Egit\u4F1A\u91CD\u64AD\u5386\u53F2\u63D0\u4EA4\uFF0C\u5F53\u8FDB\u5165\u5230edit\u7684\u7248\u672C\u65F6\u5C31\u4F1A\u6682\u505C\uFF0C\u4F60\u53EF\u4EE5\u9009rebase --continue\u8DF3\u8FC7\uFF0C\u6216\u8005commit --amend\u91CD\u5199\u90A3\u4E00\u6B21\u63D0\u4EA4\u7136\u540E\u5728--continue

\u538B\u5236<span class="token punctuation">(</span>Squashing<span class="token punctuation">)</span>\u63D0\u4EA4 squash\uFF0C \u53EF\u4EE5\u5C06\u63D0\u4EA4\u5408\u5E76\u5230\u524D\u4E00\u4E2A\u8BB0\u5F55\u4E2D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),F={href:"https://git-scm.com/book/zh/v1/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E5%8F%98%E5%9F%BA",target:"_blank",rel:"noopener noreferrer"},q=s("\u53D8\u57FA\u64CD\u4F5C"),y=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> rebase branch   \u5C06branch\u5206\u652F\u5F53\u6210\u8865\u4E01,\u6253\u5165\u5230\u672C\u5206\u652F\uFF0C\u6309\u65F6\u95F4\u987A\u5E8F\u91CD\u64AD\uFF0C\u53D8\u57FA,\u7ED3\u679C\u878D\u5165\u5F53\u524D\u5206\u652F

<span class="token function">git</span> rebase <span class="token punctuation">[</span>\u4E3B\u5206\u652F<span class="token punctuation">]</span> <span class="token punctuation">[</span>\u7279\u6027\u5206\u652F<span class="token punctuation">]</span>  \u4E3B\u5206\u652F\u505A\u91CD\u64AD\u57FA\u5E95\uFF0C\u6253\u5165\u7279\u6027\u5206\u652F\uFF0C\u6700\u7EC8\u7ED3\u679C\u878D\u5165\u7279\u6027\u5206\u652F
<span class="token function">git</span> rebase --onto master server client  \u591A\u5206\u652F\u53D8\u57FA\uFF0C\u6307\u5B9A\u57FA\u5E95\uFF0C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5206\u652F\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u6BD4\u8F83" aria-hidden="true">#</a> \u5206\u652F\u6BD4\u8F83</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token function">git</span> <span class="token function">diff</span> <span class="token builtin class-name">local</span> origin/baranch
            --stat      <span class="token comment"># \u53EA\u663E\u793A\u6587\u4EF6\u5217\u8868</span>

<span class="token comment"># \u6307\u5B9A\u5355\u4E2A\u6587\u4EF6</span>
    <span class="token function">git</span> <span class="token function">diff</span> <span class="token builtin class-name">local</span> origin/baranch filepath
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7248\u672C\u4FEE\u8BA2" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C\u4FEE\u8BA2" aria-hidden="true">#</a> \u7248\u672C\u4FEE\u8BA2</h3>`,4),G={href:"https://git-scm.com/book/zh/v1/Git-%E5%B7%A5%E5%85%B7-%E4%BF%AE%E8%AE%A2%E7%89%88%E6%9C%AC%EF%BC%88Revision%EF%BC%89%E9%80%89%E6%8B%A9",target:"_blank",rel:"noopener noreferrer"},C=s("\u7248\u672C\u4FEE\u8BA2"),z=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token function">git</span> log
        -n          \u67E5\u770B\u6700\u8FD1 n \u4E2A\u63D0\u4EA4
        --stat      \u67E5\u770B\u4FEE\u6539\u7684\u72B6\u6001
        --online    \u5355\u884C\u663E\u793A

    <span class="token function">git</span> reflog  \u67E5\u770B\u6700\u8FD1\u7684\u64CD\u4F5C
        -n      \u663E\u793A\u6761\u6570

    \u67E5\u770BHEAD\u4E2D\u6709,\u8FDC\u7A0Bmaster\u91CC\u4E0D\u540C\u7684\u5185\u5BB9
    <span class="token function">git</span> show origin/master<span class="token punctuation">..</span>HEAD

    \u67E5\u770BrefB\u4E2D\u6709,\u8FDC\u7A0BrefA\u91CC\u6CA1\u6709\u7684\u63D0\u4EA4
    <span class="token function">git</span> log refA<span class="token punctuation">..</span>refB
    <span class="token function">git</span> log ^refA refB
    <span class="token function">git</span> log refB --not refA

    \u4EA4\u4E92\u5F0F\u6DFB\u52A0
    <span class="token function">git</span> <span class="token function">add</span> -i

    \u50A8\u85CF\u5DE5\u4F5C\u72B6\u6001
    <span class="token function">git</span> stash                   \u628A\u73B0\u6709\u7684\u4FEE\u6539\u85CF\u8D77\u6765
        <span class="token function">git</span> stash save \u201Cdesc\u201D   \u628A\u73B0\u6709\u7684\u4FEE\u6539\u85CF\u8D77\u6765\uFF0C\u5E76\u4E14\u6DFB\u52A0\u4E00\u4E2A\u6CE8\u91CA
        stash list              \u67E5\u770B\u50A8\u85CF\u5217\u8868
        stash apply stash@\u7248\u672C   \u4E0D\u8DDF\u7248\u672C\u5C31\u5E94\u7528\u6700\u8FD1\u7684\uFF0C\u4E0D\u5220\u9664
                    --index     \u56DE\u5230\u4E4B\u524D\u7684\u4F4D\u7F6E,\u5982 \u4FDD\u7559add\u8FFD\u8E2A\u72B6\u6001
        stash drop              \u79FB\u9664apply\u9057\u7559\u5728\u6808\u4E0A\u7684\u7248\u672C

        <span class="token function">git</span> stash pop           \u53EF\u4EE5\u5728\u5E94\u7528\u7684\u540C\u65F6\u79FB\u9664\u6808\u4E0A\u7684\u7248\u672C
                stash@<span class="token punctuation">{</span>index<span class="token punctuation">}</span>   \u6307\u5B9A\u7248\u672C

    <span class="token function">git</span> stash <span class="token function">clear</span> \u6E05\u9664\u6240\u6709\u4FEE\u6539

    <span class="token function">git</span> stash show shash@<span class="token punctuation">{</span>index<span class="token punctuation">}</span> \u67E5\u770B\u50A8\u85CF\u4FEE\u6539\u4E86\u4EC0\u4E48\u6587\u4EF6
                -p              \u67E5\u770B\u91CC\u9762\u4FEE\u6539\u4E86\u4EC0\u4E48\u5185\u5BB9

    \u4ECE\u50A8\u85CF\u4E2D\u521B\u5EFA\u5206\u652F
    <span class="token function">git</span> stash branch name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>git cherry-pick</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u53D6\u51FA\u67D0\u4E00\u6B21\u63D0\u4EA4\u7248\u672C\uFF0C\u7136\u540E\u8FFD\u52A0\u4E3A\u5F53\u524D\u5206\u652F\u7684\u6700\u540E\u4E00\u6B21\u63D0\u4EA4\uFF0C\u8C8C\u4F3C\u53EA\u80FD\u53D6\u672C\u5730commit\u7684</span>
<span class="token function">git</span> cherry-pick \u7248\u672C\u53F7

<span class="token comment"># \u5F53\u6709\u51B2\u7A81\u7684\u65F6\u5019\uFF0Ccherry-pick\u4F1A\u4E2D\u65AD</span>
<span class="token comment"># \u89E3\u51B3\u51B2\u7A81\u540E\uFF0Cgit add  \u7136\u540E git cherry-pick --continue</span>
<span class="token comment"># \u6216\u8005\u4F7F\u7528git cherry-pick --abort \u653E\u5F03\u64CD\u4F5C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7248\u672C\u56DE\u9000" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C\u56DE\u9000" aria-hidden="true">#</a> \u7248\u672C\u56DE\u9000</h3><p>git reset</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reset HEAD~1            \u56DE\u5230\u4E0A1\u4E2A\u7248\u672C
<span class="token function">git</span> reset \u7248\u672C\u53F7            \u5207\u6362\u5230\u67D0\u4E2A\u65F6\u6001git reflog \u67E5\u770B
        --hard              add\u4E4B\u524D,\u5E76\u4E0D\u4FDD\u7559\u63D0\u4EA4\u524D\u7684\u66F4\u6539
        --soft              \u66F4\u65B0add \u548C commit \u4E4B\u95F4,\u4FDD\u7559\u66F4\u65B0
        --mixed/\u9ED8\u8BA4        \u66F4\u65B0 add\u53D8\u66F4\u524D,\u4FDD\u7559\u66F4\u65B0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>git revert</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5C06\u6307\u7684\u63D0\u4EA4\u7248\u672C\uFF0C\u4ECE\u5F53\u524D\u5206\u652F\u4E2D\u79FB\u9664\uFF0C\u7136\u540E\u5728\u628A\u7ED3\u679C\u5F53\u6210\u4E00\u6B21\u65B0\u7684\u63D0\u4EA4</span>
<span class="token function">git</span> revert -n \u7248\u672C          \u91CD\u505A\u5206\u652F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B50\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u5B50\u6A21\u5757" aria-hidden="true">#</a> \u5B50\u6A21\u5757</h3><blockquote><p>\u5E26\u6709\u5B50\u6A21\u5757\u7684\u9879\u76EE\u5728\u6839\u76EE\u5F55\u4E0B\u4F1A\u6709.gitsubmodule \u6587\u4EF6\uFF0C\u8BB0\u5F55\u7740\u5404\u4E2A\u5B50\u6A21\u5757\u7684\u4FE1\u606F\u3002\u6587\u4EF6\u793A\u4F8B</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>submodule <span class="token string">&quot;houduan&quot;</span><span class="token punctuation">]</span>
    path <span class="token operator">=</span> code/backend
    url <span class="token operator">=</span> https://gitee.com/sixtylate/houduan.git
    branch <span class="token operator">=</span> master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),D={href:"http://git-scm.com/docs/git-submodule",target:"_blank",rel:"noopener noreferrer"},H=s("\u5B98\u65B9\u6587\u6863"),N=n("br",null,null,-1),V={href:"http://blog.jqian.net/post/git-submodule.html",target:"_blank",rel:"noopener noreferrer"},w=s("submoudle \u4F7F\u7528"),j=i(`<h4 id="\u65B0\u589E" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E" aria-hidden="true">#</a> \u65B0\u589E</h4><p>\u8BE5\u547D\u4EE4\u5B9E\u9645\u4F1A\u505A\u4E09\u4EF6\u4E8B\u60C5\uFF1A\u9996\u5148\uFF0Cclone lib.git \u5230\u672C\u5730\uFF1B\u7136\u540E\uFF0C\u521B\u5EFA\u4E00\u4E2A .gitsubmodule \u6587\u4EF6\u6807\u8BB0 submodule \u7684\u5177\u4F53\u4FE1\u606F\uFF1B\u540C\u65F6\uFF0C\u66F4\u65B0.git/config \u6587\u4EF6\uFF0C\u589E\u52A0 submodule \u7684\u5730\u5740</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u65B0\u589E\u5B50\u6A21\u5757\uFF0Clocal path \u662F\u653E\u5B50\u9879\u76EE\u7684\u76EE\u5F55</span>
<span class="token function">git</span> submodule <span class="token function">add</span> <span class="token operator">&lt;</span>git@repo<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>local path<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u514B\u9686" tabindex="-1"><a class="header-anchor" href="#\u514B\u9686" aria-hidden="true">#</a> \u514B\u9686</h4><p>\u514B\u9686\uFF0C\u4E3B\u9879\u76EE\u5E76\u4E0D\u4F1A\u81EA\u52A8\u62C9\u53D6\u5B50\u9879\u76EE\uFF0C\u9700\u8981\u624B\u52A8\u62C9\u53D6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> submodule init
<span class="token function">git</span> submodule update
<span class="token comment"># \u6216\u4F7F\u7528\u7EC4\u5408\u547D\u4EE4</span>
<span class="token function">git</span> submodule update --init --recursive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u66F4\u65B0-\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0-\u4FEE\u6539" aria-hidden="true">#</a> \u66F4\u65B0/\u4FEE\u6539</h4><p>\u53EF\u80FD\u7A0D\u5FAE\u8FDD\u53CD\u76F4\u89C9\u7684\u662F\uFF0C\u5982\u679C submodule \u6709\u66F4\u65B0\uFF0C\u9ED8\u8BA4\u5728\u672C\u5730\u7236\u9879\u76EE\u91CC\u6267\u884C git pull \u662F\u4E0D\u4F1A\u66F4\u65B0 submodule \u7684\u3002\u56E0\u4E3A\u6267\u884C git submodule add xxx \u7684\u65F6\u5019\uFF0C\u53EA\u662F\u628A submodule \u7684\u5F53\u524D commit id \u52A0\u5165\u5230\u672C\u5730\u7236\u9879\u76EE\u7684\u7D22\u5F15\u91CC\uFF0C\u5982\u679C\u4F60\u671F\u671B submodule \u7684 commit id \u540C\u6B65\u5230\u6700\u65B0 HEAD\uFF0C\u5219\u4F60\u8FD8\u9700\u8981\u91CD\u65B0\u6267\u884C git add \u7136\u540E\u91CD\u65B0\u63D0\u4EA4\u3002</p><p>\u6B64\u540E\uFF0C\u5176\u4ED6\u5F00\u53D1\u6210\u5458\u9700\u8981\u6267\u884C git submodule update \u66F4\u65B0\u4F60\u521A\u624D\u7684\u8FD9\u4E2A submodule commit\u3002\u8FD9\u91CC\u4E00\u4E2A\u9700\u8981\u6CE8\u610F\u7684\u5730\u65B9\u662F\uFF0C\u6BCF\u6B21\u5728\u7236\u9879\u76EE\u6267\u884C git pull \u540E\uFF0C\u5E94\u8BE5\u6267\u884C git status \u67E5\u770B\u4E00\u4E0B submodule \u662F\u5426\u6709\u66F4\u65B0\uFF1B\u5982\u679C submodule \u6709\u66F4\u65B0\uFF0C\u5219\u5E94\u8BE5\u7ACB\u523B\u6267\u884C git submodule update\uFF0C\u5426\u5219\u4F60\u6709\u53EF\u80FD\u628A submodule \u7684\u65E7\u4F9D\u8D56\u63D0\u4EA4\u5230\u4ED3\u5E93\u91CC\u53BB\u3002\u4E00\u4E2A\u5EFA\u8BAE\u662F\uFF0C\u5C3D\u91CF\u4E0D\u8981\u6267\u884C git commit -a\uFF0C\u5B83\u4F1A\u8BA9\u4F60\u5FFD\u7565\u5BF9 staged \u6587\u4EF6\u7684\u786E\u8BA4\u8FC7\u7A0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># foreach\u53EF\u4EE5\u7BA1\u7406\u591A\u4E2A\u5B50\u5206\u652F</span>
<span class="token function">git</span> submodule foreach <span class="token string">&#39;git checkout -b &lt;branch_name&gt;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a> \u5220\u9664</h4><p>\u9996\u5148\uFF0C\u9700\u8981\u5220\u9664 .git/config \u548C .gitsubmodle \u6587\u4EF6\u91CC submodule \u76F8\u5173\u7684\u90E8\u5206\uFF0C\u7136\u540E\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> --cached <span class="token operator">&lt;</span>local path<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="gitignore-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#gitignore-\u6587\u4EF6" aria-hidden="true">#</a> .gitignore \u6587\u4EF6</h3>`,14),I={href:"https://git-scm.com/docs/gitignore",target:"_blank",rel:"noopener noreferrer"},L=s("\u53C2\u8003\u6587\u6863"),S=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&#39;#&#39;</span>     \u8868\u793A\u6CE8\u91CA\uFF0C\u4F7F\u7528<span class="token string">&#39;\\&#39;</span>\u8F6C\u4E49

<span class="token string">&#39;!&#39;</span>     \u8868\u793A\u5426\u5B9A\uFF0C\u524D\u9762\u5FFD\u7565\u7684\u6587\u4EF6/\u76EE\u5F55\u5C06\u4F1A\u88AB\u91CD\u65B0\u5305\u542B\u3002\u5982\u679C\u7236\u7EA7\u76EE\u5F55\u88AB\u5FFD\u7565\uFF0C\u5219\u5B50\u6587\u4EF6\u4E0D\u80FD\u88AB\u518D\u6B21\u5305\u542B\u3002

<span class="token string">&#39;/&#39;</span>     \u5982\u679C\u7ED3\u5C3E\u6709/\uFF0C\u5219\u8868\u793A\u53EA\u5339\u914D\u76EE\u5F55\u3002\u6BD4\u5982\uFF0Ca/\u8868\u793Aa\u662F\u76EE\u5F55\u3002
        \u5982\u679C\u4E0D\u5305\u542B/\uFF0C\u5219\u4F1A\u5168\u5C40\u5339\u914D\u3002\u6BD4\u5982a\uFF0C\u5339\u914D\u4EFB\u4F55\u76EE\u5F55\u4E0B\u7684a\u3002
        \u5982\u679C\u5F00\u5934\u6709/\uFF0C\u5219\u8868\u793A\u5339\u914D\u6839\u76EE\u5F55\u3002\u6BD4\u5982\uFF0C/a\u8868\u793A\u6839\u76EE\u5F55\u4E0B\u7684a

<span class="token string">&#39;*&#39;</span>     \u901A\u914D\u7B26*\u4E0D\u80FD\u8DE8\u76EE\u5F55\u3002
<span class="token string">&#39;**&#39;</span>    \u5982 **/a\uFF0C\u8868\u793A\u4EFB\u4F55\u76EE\u5F55\u4E0B\u7684a\u3002
        \u5982 abc/**\uFF0C\u9012\u5F52\u5339\u914Dabc\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u548C\u76EE\u5F55\u3002
        \u5982 a/**/b\uFF0C\u5176\u4E2D\u7684**\u8868\u793A0\u5230\u591A\u5C42\u76EE\u5F55\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token number">1</span>. \u5207\u6362\u5230\u65B0\u7684\u5206\u652F\u5F00\u59CB\u5DE5\u4F5C
        <span class="token function">git</span> checkout -b branchname

    <span class="token number">2</span>. \u5F53\u6709\u7D27\u6025\u95EE\u9898\u6765\u4E86,\u9700\u8981\u63D0\u4EA4/\u56DE\u5230\u4E3B\u5E72/\u5207\u6362\u5230\u65B0\u7684\u5206\u652F
        <span class="token function">git</span> add/commit
        <span class="token function">git</span> checkout master
        <span class="token function">git</span> branch -b hotbranch

    <span class="token number">3</span>. \u5F53\u4FEE\u590D\u5B8C\u7D27\u6025\u4E8B\u4EF6\u53EF\u4EE5\u63D0\u524D\u63D0\u4EA4
        <span class="token function">git</span> add/commit
        <span class="token function">git</span> checkout master
        <span class="token function">git</span> merge hotbranch
        <span class="token function">git</span> branch -d hotbranch
        <span class="token function">git</span> push

    <span class="token number">4</span>. \u7EE7\u7EED\u56DE\u5230\u4E4B\u524D\u7684\u5206\u652F\u7EE7\u7EED
        <span class="token function">git</span> checkout branchname

    <span class="token number">5</span>. \u5B8C\u6210\u4E4B\u524D\u7684\u4E8B\u60C5\u4E4B\u540E,\u63D0\u4EA4\u5408\u5E76
        <span class="token function">git</span> add/commit
        <span class="token function">git</span> checkout master
        <span class="token function">git</span> merge branchname

    <span class="token number">6</span>. \u89E3\u51B3\u51B2\u7A81\u4E4B\u540E\u4E0A\u4F20\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function R(T,J){const e=c("ExternalLinkIcon");return t(),d("div",null,[o,u,n("p",null,[v,n("a",p,[m,a(e)])]),b,n("p",null,[n("a",h,[g,a(e)])]),k,n("p",null,[n("a",f,[_,a(e)])]),x,n("p",null,[n("a",E,[A,a(e)])]),B,n("p",null,[n("a",F,[q,a(e)])]),y,n("p",null,[n("a",G,[C,a(e)])]),z,n("p",null,[n("a",D,[H,a(e)]),N,n("a",V,[w,a(e)])]),j,n("p",null,[n("a",I,[L,a(e)])]),S])}var M=l(r,[["render",R],["__file","Git\u5E38\u7528\u547D\u4EE4.html.vue"]]);export{M as default};
