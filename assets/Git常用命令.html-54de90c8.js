import{_ as t,Y as c,Z as r,a1 as n,a2 as s,a3 as e,$ as l,a0 as i,E as d}from"./framework-6d304b95.js";const o={},p=n("h1",{id:"git-常用命令",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git-常用命令","aria-hidden":"true"},"#"),s(" Git 常用命令")],-1),u=n("h2",{id:"常用命令",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#常用命令","aria-hidden":"true"},"#"),s(" 常用命令")],-1),v={href:"https://learngitbranching.js.org/?locale=zh_CN",target:"_blank",rel:"noopener noreferrer"},m=i(`<h3 id="基础操作" tabindex="-1"><a class="header-anchor" href="#基础操作" aria-hidden="true">#</a> 基础操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">git</span> <span class="token parameter variable">--version</span>    查看安装的版本
    <span class="token function">git</span> init         初始化
    <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&#39;cherry&#39;</span>
    <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&#39;285653184@qq.com&#39;</span>

    <span class="token function">git</span> status  获取队列状态
    <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>   添加所有文件到队列
    <span class="token function">git</span> <span class="token function">add</span> *.html   添加所有html文件到队列
    <span class="token function">git</span> <span class="token function">add</span> index.html 添加到队列
    <span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> index.html 移除队列中的

    <span class="token function">git</span> commit  提交队列中的文件到 仓库  “vim操作流程” 写完备注后，按esc  冒号  wq 退出
            <span class="token parameter variable">-m</span> <span class="token string">&#39;备注&#39;</span>       直接提交
    分支中的所有操作都不会影响到主线
    <span class="token function">git</span> branch login  创建分支
    <span class="token function">git</span> checkout login  跳转到某个分支
    <span class="token function">git</span> merge login    合并某个分支

    忽略一些文件或者文件夹
    创建.gitignore文件，并在里面写入要忽略的文件名

    <span class="token function">git</span> clone https filename                克隆分支
    <span class="token function">git</span> push --set-upstream origin master   第一次提交线上仓库
    <span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/<span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span> barnch_local 创建本地分支与远程分支的关联


    <span class="token function">git</span> checkout -- <span class="token function">file</span>    移除改动的文件
    <span class="token function">git</span> clean <span class="token parameter variable">-n</span>
                <span class="token parameter variable">-df</span>         清理追踪的变化
    <span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> <span class="token builtin class-name">.</span>    清理缓存文件


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分支管理" tabindex="-1"><a class="header-anchor" href="#分支管理" aria-hidden="true">#</a> 分支管理</h3>`,3),b={href:"https://git-scm.com/book/zh/v1/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E7%AE%A1%E7%90%86",target:"_blank",rel:"noopener noreferrer"},h=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch 显示本地分支
    <span class="token parameter variable">-a</span> 带上远程
    <span class="token parameter variable">-v</span> 分支版本信息
    <span class="token parameter variable">-vv</span> 查看分支跟踪状态
    <span class="token parameter variable">-d</span> 删除
    <span class="token parameter variable">--merged</span> 已经合并
    --no-merged 查看没有合并

<span class="token function">git</span> checkout 切换分支
    <span class="token parameter variable">-b</span> 创建并切换

    <span class="token function">git</span> clean <span class="token parameter variable">-df</span> <span class="token comment">#返回到某个节点</span>
<span class="token function">git</span> clean 参数
    <span class="token parameter variable">-n</span> 显示 将要 删除的 文件 和  目录
    <span class="token parameter variable">-f</span> 删除 文件
    <span class="token parameter variable">-df</span> 删除 文件 和 目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="远程分支" tabindex="-1"><a class="header-anchor" href="#远程分支" aria-hidden="true">#</a> 远程分支</h3>`,2),g={href:"https://git-scm.com/book/zh/v1/Git-%E5%88%86%E6%94%AF-%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF",target:"_blank",rel:"noopener noreferrer"},k=i(`<p>在本地命名为 origin/master，就是远程分支，只有标记不可操作，fetch 可得到远程指针标记</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">git</span> remote      查看当前的远程仓库链接情况
            <span class="token parameter variable">-v</span>      详情
    <span class="token function">git</span> remote update origin <span class="token parameter variable">-p</span> 刷新远程分支列表

    创建远程仓库链接
    <span class="token function">git</span> remote <span class="token function">add</span> branch_name https
    <span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master 新分支第一次提交

    推送到某分支 本地：远程
    <span class="token function">git</span> push origin serverfix
    <span class="token function">git</span> push origin localfix:serverfix

    远程分支的内容合并到当前分支
    <span class="token function">git</span> merge origin/serverfix

    创建/切换并拷贝远程分支内容
    <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> serverfix origin/serverfix
    <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> local_name origin/serverfix

    追踪某个远程分支 可以简化使用git pull/git push
    <span class="token function">git</span> checkout <span class="token parameter variable">--track</span> origin/serverfix

    <span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/<span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span> barnch_local

    删除远程分支
    <span class="token function">git</span> push origin :serverfix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重写历史" tabindex="-1"><a class="header-anchor" href="#重写历史" aria-hidden="true">#</a> 重写历史</h3>`,3),f={href:"https://git-scm.com/book/zh/v1/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E5%86%99%E5%8E%86%E5%8F%B2",target:"_blank",rel:"noopener noreferrer"},_=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">--amend</span>          重写最近的一次提交<span class="token punctuation">(</span>推送后提交会有冲突<span class="token punctuation">)</span>

<span class="token function">git</span> rebase <span class="token parameter variable">-i</span> HEAD~3        重写最近3次的历史,<span class="token punctuation">(</span>修改提交历史，重拍提交记录<span class="token punctuation">)</span>
    解释：进入编辑器后，将需要改的版本对应的pick改为edit。编辑完成后git会重播历史提交，当进入到edit的版本时就会暂停，
        你可以选rebase --continue跳过，或者commit --amend重写那一次提交然后在--continue

压制<span class="token punctuation">(</span>Squashing<span class="token punctuation">)</span>提交 squash， 可以将提交合并到前一个记录中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x={href:"https://git-scm.com/book/zh/v1/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E5%8F%98%E5%9F%BA",target:"_blank",rel:"noopener noreferrer"},E=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rebase branch   将branch分支当成补丁,打入到本分支，按时间顺序重播，变基,结果融入当前分支

<span class="token function">git</span> rebase <span class="token punctuation">[</span>主分支<span class="token punctuation">]</span> <span class="token punctuation">[</span>特性分支<span class="token punctuation">]</span>  主分支做重播基底，打入特性分支，最终结果融入特性分支
<span class="token function">git</span> rebase <span class="token parameter variable">--onto</span> master server client  多分支变基，指定基底，

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分支比较" tabindex="-1"><a class="header-anchor" href="#分支比较" aria-hidden="true">#</a> 分支比较</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">git</span> <span class="token function">diff</span> <span class="token builtin class-name">local</span> origin/baranch
            <span class="token parameter variable">--stat</span>      <span class="token comment"># 只显示文件列表</span>

<span class="token comment"># 指定单个文件</span>
    <span class="token function">git</span> <span class="token function">diff</span> <span class="token builtin class-name">local</span> origin/baranch filepath
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本修订" tabindex="-1"><a class="header-anchor" href="#版本修订" aria-hidden="true">#</a> 版本修订</h3>`,4),A={href:"https://git-scm.com/book/zh/v1/Git-%E5%B7%A5%E5%85%B7-%E4%BF%AE%E8%AE%A2%E7%89%88%E6%9C%AC%EF%BC%88Revision%EF%BC%89%E9%80%89%E6%8B%A9",target:"_blank",rel:"noopener noreferrer"},B=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">git</span> log
        <span class="token parameter variable">-n</span>          查看最近 n 个提交
        <span class="token parameter variable">--stat</span>      查看修改的状态
        <span class="token parameter variable">--online</span>    单行显示

    <span class="token function">git</span> reflog  查看最近的操作
        <span class="token parameter variable">-n</span>      显示条数

    查看HEAD中有,远程master里不同的内容
    <span class="token function">git</span> show origin/master<span class="token punctuation">..</span>HEAD

    查看refB中有,远程refA里没有的提交
    <span class="token function">git</span> log refA<span class="token punctuation">..</span>refB
    <span class="token function">git</span> log ^refA refB
    <span class="token function">git</span> log refB <span class="token parameter variable">--not</span> refA

    交互式添加
    <span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-i</span>

    储藏工作状态
    <span class="token function">git</span> stash                   把现有的修改藏起来
        <span class="token function">git</span> stash save “desc”   把现有的修改藏起来，并且添加一个注释
        stash list              查看储藏列表
        stash apply stash@版本   不跟版本就应用最近的，不删除
                    <span class="token parameter variable">--index</span>     回到之前的位置,如 保留add追踪状态
        stash drop              移除apply遗留在栈上的版本

        <span class="token function">git</span> stash pop           可以在应用的同时移除栈上的版本
                stash@<span class="token punctuation">{</span>index<span class="token punctuation">}</span>   指定版本

    <span class="token function">git</span> stash <span class="token function">clear</span> 清除所有修改

    <span class="token function">git</span> stash show shash@<span class="token punctuation">{</span>index<span class="token punctuation">}</span> 查看储藏修改了什么文件
                <span class="token parameter variable">-p</span>              查看里面修改了什么内容

    从储藏中创建分支
    <span class="token function">git</span> stash branch name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>git cherry-pick</p>`,2),q=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 取出某一次提交版本，然后追加为当前分支的最后一次提交，貌似只能取本地commit的</span>
<span class="token function">git</span> cherry-pick 版本号

<span class="token comment"># 当有冲突的时候，cherry-pick会中断</span>
<span class="token comment"># 解决冲突后，git add  然后 git cherry-pick --continue</span>
<span class="token comment"># 或者使用git cherry-pick --abort 放弃操作</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tag标签" tabindex="-1"><a class="header-anchor" href="#tag标签" aria-hidden="true">#</a> Tag标签</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打印标签列表</span>
<span class="token function">git</span> tag
<span class="token comment"># 打印符合检索条件的标签</span>
<span class="token function">git</span> tag <span class="token parameter variable">-l</span> <span class="token string">&quot;v1.8.5*&quot;</span>
<span class="token comment"># 查看对应标签状态</span>
<span class="token function">git</span> show v1.4

<span class="token comment"># 创建轻量标签</span>
<span class="token function">git</span> tag v1.0 <span class="token parameter variable">-light</span>
<span class="token comment"># 创建带附注标签</span>
<span class="token function">git</span> tag <span class="token parameter variable">-a</span> v1.0 <span class="token string">&quot;版本1.0&quot;</span> <span class="token parameter variable">-m</span> 版本号
<span class="token comment"># 使用特定commit创建标签</span>
<span class="token function">git</span> tag <span class="token parameter variable">-a</span> <span class="token operator">&lt;</span>版本号<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>SHA值<span class="token operator">&gt;</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;&lt;备注信息&gt;&quot;</span>

<span class="token comment"># 删除本地标签</span>
<span class="token function">git</span> tag <span class="token parameter variable">-d</span> v1.0
<span class="token comment"># 删除远程标签</span>
<span class="token function">git</span> push origin :refs/tags/v1.0

<span class="token comment"># 推送所有标签</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--tags</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本回退" tabindex="-1"><a class="header-anchor" href="#版本回退" aria-hidden="true">#</a> 版本回退</h3><p>git reset</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset HEAD~1            回到上1个版本
<span class="token function">git</span> reset 版本号            切换到某个时态git reflog 查看
        <span class="token parameter variable">--hard</span>              add之前,并不保留提交前的更改
        <span class="token parameter variable">--soft</span>              更新add 和 commit 之间,保留更新
        --mixed/默认        更新 add变更前,保留更新

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>git revert</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将指的提交版本，从当前分支中移除，然后在把结果当成一次新的提交</span>
<span class="token function">git</span> revert <span class="token parameter variable">-n</span> 版本          重做分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子模块" tabindex="-1"><a class="header-anchor" href="#子模块" aria-hidden="true">#</a> 子模块</h3><blockquote><p>带有子模块的项目在根目录下会有.gitsubmodule 文件，记录着各个子模块的信息。文件示例</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>submodule <span class="token string">&quot;houduan&quot;</span><span class="token punctuation">]</span>
    path <span class="token operator">=</span> code/backend
    url <span class="token operator">=</span> https://gitee.com/sixtylate/houduan.git
    branch <span class="token operator">=</span> master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),F={href:"http://git-scm.com/docs/git-submodule",target:"_blank",rel:"noopener noreferrer"},y=n("br",null,null,-1),w={href:"http://blog.jqian.net/post/git-submodule.html",target:"_blank",rel:"noopener noreferrer"},C=i(`<h4 id="新增" tabindex="-1"><a class="header-anchor" href="#新增" aria-hidden="true">#</a> 新增</h4><p>该命令实际会做三件事情：首先，clone lib.git 到本地；然后，创建一个 .gitsubmodule 文件标记 submodule 的具体信息；同时，更新.git/config 文件，增加 submodule 的地址</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 新增子模块，local path 是放子项目的目录</span>
<span class="token function">git</span> submodule <span class="token function">add</span> <span class="token operator">&lt;</span>git@repo<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>local path<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="克隆" tabindex="-1"><a class="header-anchor" href="#克隆" aria-hidden="true">#</a> 克隆</h4><p>克隆，主项目并不会自动拉取子项目，需要手动拉取</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> submodule init
<span class="token function">git</span> submodule update
<span class="token comment"># 或使用组合命令</span>
<span class="token function">git</span> submodule update <span class="token parameter variable">--init</span> <span class="token parameter variable">--recursive</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="更新-修改" tabindex="-1"><a class="header-anchor" href="#更新-修改" aria-hidden="true">#</a> 更新/修改</h4><p>可能稍微违反直觉的是，如果 submodule 有更新，默认在本地父项目里执行 git pull 是不会更新 submodule 的。因为执行 git submodule add xxx 的时候，只是把 submodule 的当前 commit id 加入到本地父项目的索引里，如果你期望 submodule 的 commit id 同步到最新 HEAD，则你还需要重新执行 git add 然后重新提交。</p><p>此后，其他开发成员需要执行 git submodule update 更新你刚才的这个 submodule commit。这里一个需要注意的地方是，每次在父项目执行 git pull 后，应该执行 git status 查看一下 submodule 是否有更新；如果 submodule 有更新，则应该立刻执行 git submodule update，否则你有可能把 submodule 的旧依赖提交到仓库里去。一个建议是，尽量不要执行 git commit -a，它会让你忽略对 staged 文件的确认过程。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># foreach可以管理多个子分支</span>
<span class="token function">git</span> submodule foreach <span class="token string">&#39;git checkout -b &lt;branch_name&gt;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h4><p>首先，需要删除 .git/config 和 .gitsubmodle 文件里 submodule 相关的部分，然后执行以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> <span class="token operator">&lt;</span>local path<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="gitignore-文件" tabindex="-1"><a class="header-anchor" href="#gitignore-文件" aria-hidden="true">#</a> .gitignore 文件</h3>`,14),G={href:"https://git-scm.com/docs/gitignore",target:"_blank",rel:"noopener noreferrer"},z=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&#39;#&#39;</span>     表示注释，使用<span class="token string">&#39;\\&#39;</span>转义

<span class="token string">&#39;!&#39;</span>     表示否定，前面忽略的文件/目录将会被重新包含。如果父级目录被忽略，则子文件不能被再次包含。

<span class="token string">&#39;/&#39;</span>     如果结尾有/，则表示只匹配目录。比如，a/表示a是目录。
        如果不包含/，则会全局匹配。比如a，匹配任何目录下的a。
        如果开头有/，则表示匹配根目录。比如，/a表示根目录下的a

<span class="token string">&#39;*&#39;</span>     通配符*不能跨目录。
<span class="token string">&#39;**&#39;</span>    如 **/a，表示任何目录下的a。
        如 abc/**，递归匹配abc下的所有文件和目录。
        如 a/**/b，其中的**表示0到多层目录。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token number">1</span>. 切换到新的分支开始工作
        <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> branchname

    <span class="token number">2</span>. 当有紧急问题来了,需要提交/回到主干/切换到新的分支
        <span class="token function">git</span> add/commit
        <span class="token function">git</span> checkout master
        <span class="token function">git</span> branch <span class="token parameter variable">-b</span> hotbranch

    <span class="token number">3</span>. 当修复完紧急事件可以提前提交
        <span class="token function">git</span> add/commit
        <span class="token function">git</span> checkout master
        <span class="token function">git</span> merge hotbranch
        <span class="token function">git</span> branch <span class="token parameter variable">-d</span> hotbranch
        <span class="token function">git</span> push

    <span class="token number">4</span>. 继续回到之前的分支继续
        <span class="token function">git</span> checkout branchname

    <span class="token number">5</span>. 完成之前的事情之后,提交合并
        <span class="token function">git</span> add/commit
        <span class="token function">git</span> checkout master
        <span class="token function">git</span> merge branchname

    <span class="token number">6</span>. 解决冲突之后上传代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function D(H,N){const a=d("ExternalLinkIcon");return c(),r("div",null,[p,u,n("p",null,[s("有点意思的"),n("a",v,[s("学习网站"),e(a)])]),m,n("p",null,[n("a",b,[s("分支管理"),e(a)])]),h,n("p",null,[n("a",g,[s("远程分支"),e(a)])]),k,n("p",null,[n("a",f,[s("重写历史"),e(a)])]),_,n("p",null,[n("a",x,[s("变基操作"),e(a)])]),E,n("p",null,[n("a",A,[s("版本修订"),e(a)])]),B,l(" https://www.jianshu.com/p/723ed1326964 "),q,n("p",null,[n("a",F,[s("官方文档"),e(a)]),y,n("a",w,[s("submoudle 使用"),e(a)])]),C,n("p",null,[n("a",G,[s("参考文档"),e(a)])]),l(" https://blog.csdn.net/wozaixiaoximen/article/details/78647508 "),z])}const j=t(o,[["render",D],["__file","Git常用命令.html.vue"]]);export{j as default};
