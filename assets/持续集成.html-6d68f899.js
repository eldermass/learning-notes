import{_ as i,Y as t,Z as l,$ as c,a1 as n,a2 as s,a3 as e,a0 as p,E as o}from"./framework-6d304b95.js";const u={},d=n("h1",{id:"持续集成",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#持续集成","aria-hidden":"true"},"#"),s(" 持续集成")],-1),r={href:"http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://docs.travis-ci.com/",target:"_blank",rel:"noopener noreferrer"},m=p(`<h2 id="持续集成工具" tabindex="-1"><a class="header-anchor" href="#持续集成工具" aria-hidden="true">#</a> 持续集成工具</h2><blockquote><p>jenkins<br> travis<br> gitlab<br> buddybuild</p></blockquote><h2 id="ci-文件解释" tabindex="-1"><a class="header-anchor" href="#ci-文件解释" aria-hidden="true">#</a> ci 文件解释</h2><ol><li>生命周期</li></ol><blockquote><p>before_install<br> install before_script<br> script<br> aftersuccess or afterfailure<br> [OPTIONAL] before_deploy<br> [OPTIONAL] deploy<br> [OPTIONAL] after_deploy<br> after_script</p></blockquote><h3 id="安全列表-只构建或排除某些分支-可用正则" tabindex="-1"><a class="header-anchor" href="#安全列表-只构建或排除某些分支-可用正则" aria-hidden="true">#</a> 安全列表,只构建或排除某些分支(可用正则)</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># blocklist</span>
<span class="token key atrule">branches</span><span class="token punctuation">:</span>
  <span class="token key atrule">except</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> legacy
  <span class="token punctuation">-</span> /^deploy<span class="token punctuation">-</span>.<span class="token important">*$/</span>

<span class="token comment"># safelist</span>
<span class="token key atrule">branches</span><span class="token punctuation">:</span>
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> master
  <span class="token punctuation">-</span> stable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行不同环境的变量矩阵-exclude-include" tabindex="-1"><a class="header-anchor" href="#运行不同环境的变量矩阵-exclude-include" aria-hidden="true">#</a> 运行不同环境的变量矩阵(exclude/include)</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">language</span><span class="token punctuation">:</span> python
<span class="token key atrule">matrix</span><span class="token punctuation">:</span>
    <span class="token key atrule">include</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;3.5 Unit Test&quot;</span>
          <span class="token key atrule">python</span><span class="token punctuation">:</span> <span class="token string">&quot;3.5&quot;</span>
          <span class="token key atrule">env</span><span class="token punctuation">:</span> TEST_SUITE=suite_3_5_unit
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;3.5 Integration Tests&quot;</span>
          <span class="token key atrule">python</span><span class="token punctuation">:</span> <span class="token string">&quot;3.5&quot;</span>
          <span class="token key atrule">env</span><span class="token punctuation">:</span> TEST_SUITE=suite_3_5_integration
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;pypy Unit Tests&quot;</span>
          <span class="token key atrule">python</span><span class="token punctuation">:</span> <span class="token string">&quot;pypy&quot;</span>
          <span class="token key atrule">env</span><span class="token punctuation">:</span> TEST_SUITE=suite_pypy_unit
<span class="token key atrule">script</span><span class="token punctuation">:</span> ./test.py $TEST_SUITE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于 Jobs(exclude/include)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>language: ruby
rvm:
- <span class="token number">1.9</span>.3
- <span class="token number">2.0</span>.0
- <span class="token number">2.1</span>.0
env:
- <span class="token assign-left variable">DB</span><span class="token operator">=</span>mongodb
- <span class="token assign-left variable">DB</span><span class="token operator">=</span>redis
- <span class="token assign-left variable">DB</span><span class="token operator">=</span>mysql
gemfile:
- Gemfile
- gemfiles/rails4.gemfile
- gemfiles/rails31.gemfile
- gemfiles/rails32.gemfile
<span class="token comment"># 以上会得到3*3*4个构建环境,以下能让你排除包含指定rvm和gemfile的文件</span>
matrix:
  exclude:
  - rvm: <span class="token number">2.0</span>.0
    gemfile: Gemfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">env</span><span class="token punctuation">:</span>
    <span class="token key atrule">global</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> SECRET_VAR1=SECRET1
    <span class="token key atrule">matrix</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> SECRET_VAR2=SECRET2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 指定语言</span>
<span class="token key atrule">language</span><span class="token punctuation">:</span> node_js

<span class="token key atrule">node_js</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token number">12</span>
<span class="token comment"># 指定服务</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> docker
<span class="token comment"># 缓存目录、程序等</span>
<span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">directories</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> node_modules
    <span class="token key atrule">npm</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment"># 安装前执行</span>
<span class="token key atrule">before_install</span><span class="token punctuation">:</span>
    <span class="token comment"># travis 加密的文件</span>
    <span class="token punctuation">-</span> openssl aes<span class="token punctuation">-</span>256<span class="token punctuation">-</span>cbc <span class="token punctuation">-</span>K $encrypted_8027c236d573_key <span class="token punctuation">-</span>iv $encrypted_8027c236d573_iv <span class="token punctuation">-</span>in id_rsa.enc <span class="token punctuation">-</span>out id_rsa <span class="token punctuation">-</span>d
<span class="token comment"># 执行安装脚本</span>
<span class="token key atrule">install</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> npm install
    <span class="token comment"># - docker run -d -p 8020:8020 --name blog blog</span>

<span class="token key atrule">before_script</span><span class="token punctuation">:</span>

<span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> npm run build
    <span class="token punctuation">-</span> cd musicserver
    <span class="token punctuation">-</span> npm install
    <span class="token punctuation">-</span> cd ../
    <span class="token comment"># - docker ps | grep -q music</span>

<span class="token key atrule">after_script</span><span class="token punctuation">:</span>
    <span class="token comment"># docker打包</span>
    <span class="token punctuation">-</span> echo &quot;$DOCKER_PASSWORD&quot; <span class="token punctuation">|</span> docker login <span class="token punctuation">-</span>u &quot;$DOCKER_USERNAME&quot; <span class="token punctuation">-</span><span class="token punctuation">-</span>password<span class="token punctuation">-</span>stdin
    <span class="token punctuation">-</span> docker build <span class="token punctuation">-</span>t asd285653184/music .
    <span class="token punctuation">-</span> docker push asd285653184/music
    <span class="token comment"># 触发服务端更新</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;which ssh-agent || ( apk update &amp;&amp; apk add openssh-client bash -y )&quot;</span>
    <span class="token punctuation">-</span> eval $(ssh<span class="token punctuation">-</span>agent <span class="token punctuation">-</span>s)
    <span class="token punctuation">-</span> mkdir <span class="token punctuation">-</span>p ~/.ssh
    <span class="token punctuation">-</span> ssh<span class="token punctuation">-</span>keyscan $SERVER_HOST <span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span> ~/.ssh/known_hosts
    <span class="token comment"># - bash -c &quot;ssh-add &lt;(echo $SERVER_SSH_KEY)&quot;</span>
    <span class="token comment"># 添加加密文件的服务器私钥</span>
    <span class="token punctuation">-</span> bash <span class="token punctuation">-</span>c &quot;ssh<span class="token punctuation">-</span>add &lt;(cat id_rsa)&quot;
    <span class="token punctuation">-</span> ssh <span class="token punctuation">-</span>o StrictHostKeyChecking=no $SERVER_USER@$SERVER_HOST &#39;cd ~ <span class="token important">&amp;&amp;</span> bash deploy.sh&#39;

    <span class="token comment"># - cd ./dist</span>
    <span class="token comment"># - git init</span>
    <span class="token comment"># - git config user.name &quot;\${U_NAME}&quot;</span>
    <span class="token comment"># - git config user.email &quot;\${U_EMAIL}&quot;</span>
    <span class="token comment"># - git add .</span>
    <span class="token comment"># - git commit -m &quot;update_tools&quot;</span>
    <span class="token comment"># - git push --force --quiet &quot;https://\${TOKEN}@\${REPO_URL}&quot; master:\${REPO_BRANCH}</span>

<span class="token comment">#指定分支，只有指定的分支提交时才会运行脚本</span>
<span class="token key atrule">branches</span><span class="token punctuation">:</span>
    <span class="token key atrule">only</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> master

<span class="token key atrule">env</span><span class="token punctuation">:</span>
    <span class="token key atrule">global</span><span class="token punctuation">:</span>
        <span class="token comment"># 我将其添加到了travis-ci的环境变量中, 以下是用travis-cli生成的加密变量</span>
        <span class="token key atrule">secure</span><span class="token punctuation">:</span> kP9qZVtSnc83ipIkP0/8Mj8AkEj6PWu7hMz6c+hzi33ijvfkVHL8ZkapVuS1aA3RLv/nd942mEBDDX/vzlecxNDv2QJ/zKHuXkq5yGcKv6mhkOD+quhlyYMKMcrHN91yId0xmLJnsQ08LxUq3I7sI4syEe9GnxSlXKI5+I5BpIM5VpnKpFeYqVfJzPyTe/oFtiuYQAtCiuatds8LHqWhMWLn2khhgwgbgU/Uwg91Env1BTXipZYsOD/EYSVJ5I6NTvIvCt2CdXvuquRBLAqfG/fIUyMzoXF4QTHG6p8bZbMYKpbflE+pzW0VvrgJB7DvFQY2JVK7SB/FWR/RHdVsE3dSsTG6p6Na4k1fPWQVoSJ0KHQehYLRcZgVtG8hBX/P0eYUCGr+6pK4+iuww+itDi7Ab5VPZP95NzgRR00qGz1de99+wtzX+kIKWRmdX9PVNk2X4D2ZJhcjBHBIF5iAhUm3fmuOrcKKSFEYAW7AzSXXg4yxqbPa+fta2xS1sZQ+zqw/LM1zLMqa/znlfIbiCRjzUG33u3CbiNAxuK9vX0eYGZb1DZexLzTpiOWSGYZ3F/kSYb60Z//gyn8bC/iBIgNUm1FrZLfr1QmxDru1x/4+aqFOldteWH8UQu06qGQyIRhDMgmuNMlEiNbf5Z3d2RsAVkpR9953nMcf42CYWyw=
<span class="token comment"># deploy:</span>
<span class="token comment">#   provider: page</span>
<span class="token comment">#   skip_cleanup: true</span>
<span class="token comment">#   github_token: $GITHUB_TOKEN</span>
<span class="token comment">#   on:</span>
<span class="token comment">#     branch: master</span>

<span class="token comment"># env:</span>
<span class="token comment">#   - DB=postgres</span>
<span class="token comment">#   - SH=bash</span>
<span class="token comment">#   - PACKAGE_VERSION=&#39;1.0.*&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function k(b,h){const a=o("ExternalLinkIcon");return t(),l("div",null,[d,c(" [基础入门](https://www.cnblogs.com/morang/p/7228488.html) "),n("p",null,[n("a",r,[s("入门"),e(a)]),n("a",v,[s("文档"),e(a)])]),m])}const y=i(u,[["render",k],["__file","持续集成.html.vue"]]);export{y as default};
