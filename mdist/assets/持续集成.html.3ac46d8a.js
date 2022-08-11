import{_ as i,r as t,o as l,c,a as n,e,b as s,d as p}from"./app.ddafede6.js";const o={},u=n("h1",{id:"\u6301\u7EED\u96C6\u6210",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6301\u7EED\u96C6\u6210","aria-hidden":"true"},"#"),s(" \u6301\u7EED\u96C6\u6210")],-1),d={href:"http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html",target:"_blank",rel:"noopener noreferrer"},r=s("\u5165\u95E8"),v={href:"https://docs.travis-ci.com/",target:"_blank",rel:"noopener noreferrer"},m=s("\u6587\u6863"),k=p(`<h2 id="\u6301\u7EED\u96C6\u6210\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u6301\u7EED\u96C6\u6210\u5DE5\u5177" aria-hidden="true">#</a> \u6301\u7EED\u96C6\u6210\u5DE5\u5177</h2><blockquote><p>jenkins<br> travis<br> gitlab<br> buddybuild</p></blockquote><h2 id="ci-\u6587\u4EF6\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#ci-\u6587\u4EF6\u89E3\u91CA" aria-hidden="true">#</a> ci \u6587\u4EF6\u89E3\u91CA</h2><ol><li>\u751F\u547D\u5468\u671F</li></ol><blockquote><p>before_install<br> install before_script<br> script<br> aftersuccess or afterfailure<br> [OPTIONAL] before_deploy<br> [OPTIONAL] deploy<br> [OPTIONAL] after_deploy<br> after_script</p></blockquote><h3 id="\u5B89\u5168\u5217\u8868-\u53EA\u6784\u5EFA\u6216\u6392\u9664\u67D0\u4E9B\u5206\u652F-\u53EF\u7528\u6B63\u5219" tabindex="-1"><a class="header-anchor" href="#\u5B89\u5168\u5217\u8868-\u53EA\u6784\u5EFA\u6216\u6392\u9664\u67D0\u4E9B\u5206\u652F-\u53EF\u7528\u6B63\u5219" aria-hidden="true">#</a> \u5B89\u5168\u5217\u8868,\u53EA\u6784\u5EFA\u6216\u6392\u9664\u67D0\u4E9B\u5206\u652F(\u53EF\u7528\u6B63\u5219)</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># blocklist</span>
<span class="token key atrule">branches</span><span class="token punctuation">:</span>
  <span class="token key atrule">except</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> legacy
  <span class="token punctuation">-</span> /^deploy<span class="token punctuation">-</span>.<span class="token important">*$/</span>

<span class="token comment"># safelist</span>
<span class="token key atrule">branches</span><span class="token punctuation">:</span>
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> master
  <span class="token punctuation">-</span> stable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FD0\u884C\u4E0D\u540C\u73AF\u5883\u7684\u53D8\u91CF\u77E9\u9635-exclude-include" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u4E0D\u540C\u73AF\u5883\u7684\u53D8\u91CF\u77E9\u9635-exclude-include" aria-hidden="true">#</a> \u8FD0\u884C\u4E0D\u540C\u73AF\u5883\u7684\u53D8\u91CF\u77E9\u9635(exclude/include)</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">language</span><span class="token punctuation">:</span> python
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5173\u4E8E Jobs(exclude/include)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>language: ruby
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
<span class="token comment"># \u4EE5\u4E0A\u4F1A\u5F97\u52303*3*4\u4E2A\u6784\u5EFA\u73AF\u5883,\u4EE5\u4E0B\u80FD\u8BA9\u4F60\u6392\u9664\u5305\u542B\u6307\u5B9Arvm\u548Cgemfile\u7684\u6587\u4EF6</span>
matrix:
  exclude:
  - rvm: <span class="token number">2.0</span>.0
    gemfile: Gemfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">env</span><span class="token punctuation">:</span>
    <span class="token key atrule">global</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> SECRET_VAR1=SECRET1
    <span class="token key atrule">matrix</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> SECRET_VAR2=SECRET2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u6307\u5B9A\u8BED\u8A00</span>
<span class="token key atrule">language</span><span class="token punctuation">:</span> node_js

<span class="token key atrule">node_js</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token number">12</span>
<span class="token comment"># \u6307\u5B9A\u670D\u52A1</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> docker
<span class="token comment"># \u7F13\u5B58\u76EE\u5F55\u3001\u7A0B\u5E8F\u7B49</span>
<span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">directories</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> node_modules
    <span class="token key atrule">npm</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment"># \u5B89\u88C5\u524D\u6267\u884C</span>
<span class="token key atrule">before_install</span><span class="token punctuation">:</span>
    <span class="token comment"># travis \u52A0\u5BC6\u7684\u6587\u4EF6</span>
    <span class="token punctuation">-</span> openssl aes<span class="token punctuation">-</span>256<span class="token punctuation">-</span>cbc <span class="token punctuation">-</span>K $encrypted_8027c236d573_key <span class="token punctuation">-</span>iv $encrypted_8027c236d573_iv <span class="token punctuation">-</span>in id_rsa.enc <span class="token punctuation">-</span>out id_rsa <span class="token punctuation">-</span>d
<span class="token comment"># \u6267\u884C\u5B89\u88C5\u811A\u672C</span>
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
    <span class="token comment"># docker\u6253\u5305</span>
    <span class="token punctuation">-</span> echo &quot;$DOCKER_PASSWORD&quot; <span class="token punctuation">|</span> docker login <span class="token punctuation">-</span>u &quot;$DOCKER_USERNAME&quot; <span class="token punctuation">-</span><span class="token punctuation">-</span>password<span class="token punctuation">-</span>stdin
    <span class="token punctuation">-</span> docker build <span class="token punctuation">-</span>t asd285653184/music .
    <span class="token punctuation">-</span> docker push asd285653184/music
    <span class="token comment"># \u89E6\u53D1\u670D\u52A1\u7AEF\u66F4\u65B0</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;which ssh-agent || ( apk update &amp;&amp; apk add openssh-client bash -y )&quot;</span>
    <span class="token punctuation">-</span> eval $(ssh<span class="token punctuation">-</span>agent <span class="token punctuation">-</span>s)
    <span class="token punctuation">-</span> mkdir <span class="token punctuation">-</span>p ~/.ssh
    <span class="token punctuation">-</span> ssh<span class="token punctuation">-</span>keyscan $SERVER_HOST <span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span> ~/.ssh/known_hosts
    <span class="token comment"># - bash -c &quot;ssh-add &lt;(echo $SERVER_SSH_KEY)&quot;</span>
    <span class="token comment"># \u6DFB\u52A0\u52A0\u5BC6\u6587\u4EF6\u7684\u670D\u52A1\u5668\u79C1\u94A5</span>
    <span class="token punctuation">-</span> bash <span class="token punctuation">-</span>c &quot;ssh<span class="token punctuation">-</span>add &lt;(cat id_rsa)&quot;
    <span class="token punctuation">-</span> ssh <span class="token punctuation">-</span>o StrictHostKeyChecking=no $SERVER_USER@$SERVER_HOST &#39;cd ~ <span class="token important">&amp;&amp;</span> bash deploy.sh&#39;

    <span class="token comment"># - cd ./dist</span>
    <span class="token comment"># - git init</span>
    <span class="token comment"># - git config user.name &quot;\${U_NAME}&quot;</span>
    <span class="token comment"># - git config user.email &quot;\${U_EMAIL}&quot;</span>
    <span class="token comment"># - git add .</span>
    <span class="token comment"># - git commit -m &quot;update_tools&quot;</span>
    <span class="token comment"># - git push --force --quiet &quot;https://\${TOKEN}@\${REPO_URL}&quot; master:\${REPO_BRANCH}</span>

<span class="token comment">#\u6307\u5B9A\u5206\u652F\uFF0C\u53EA\u6709\u6307\u5B9A\u7684\u5206\u652F\u63D0\u4EA4\u65F6\u624D\u4F1A\u8FD0\u884C\u811A\u672C</span>
<span class="token key atrule">branches</span><span class="token punctuation">:</span>
    <span class="token key atrule">only</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> master

<span class="token key atrule">env</span><span class="token punctuation">:</span>
    <span class="token key atrule">global</span><span class="token punctuation">:</span>
        <span class="token comment"># \u6211\u5C06\u5176\u6DFB\u52A0\u5230\u4E86travis-ci\u7684\u73AF\u5883\u53D8\u91CF\u4E2D, \u4EE5\u4E0B\u662F\u7528travis-cli\u751F\u6210\u7684\u52A0\u5BC6\u53D8\u91CF</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function b(h,y){const a=t("ExternalLinkIcon");return l(),c("div",null,[u,n("p",null,[n("a",d,[r,e(a)]),n("a",v,[m,e(a)])]),k])}var _=i(o,[["render",b],["__file","\u6301\u7EED\u96C6\u6210.html.vue"]]);export{_ as default};
