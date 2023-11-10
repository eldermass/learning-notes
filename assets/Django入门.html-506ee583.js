import{_ as p,Y as i,Z as l,a1 as n,a2 as s,a3 as e,a0 as t,E as o}from"./framework-6d304b95.js";const c={},r=n("h1",{id:"django-基础",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#django-基础","aria-hidden":"true"},"#"),s(" Django 基础")],-1),u={href:"https://docs.djangoproject.com/zh-hans/4.1/intro/tutorial01/",target:"_blank",rel:"noopener noreferrer"},d=n("br",null,null,-1),k={href:"https://juejin.cn/post/6844904025888915470",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),m={href:"https://juejin.cn/post/6844904063687983112",target:"_blank",rel:"noopener noreferrer"},b=t(`<h2 id="一、初始化" tabindex="-1"><a class="header-anchor" href="#一、初始化" aria-hidden="true">#</a> 一、初始化</h2><ol><li>新建目录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> django_demo <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> django_demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>用 pipenv，创建虚拟环境</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> pipenv
<span class="token comment"># 切到虚拟环境</span>
pipenv shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时会生成一个 Pipfile 文件，记录了虚拟环境的状态，类似于 package.json</p><ol start="3"><li>安装 django</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 虚拟环境下安装时换源，修改 Pipfile 文件中的 [[source]] 为</span>
url <span class="token operator">=</span> <span class="token string">&quot;https://pypi.tuna.tsinghua.edu.cn/simple&quot;</span>

<span class="token comment"># 在虚拟环境中安装</span>
pipenv <span class="token function">install</span> django
<span class="token comment"># 安装 DFR 和 CORS，用于 api</span>
pipenv <span class="token function">install</span> django-rest-framework django-cors-headers

<span class="token comment"># 原来的安装方式</span>
pip <span class="token function">install</span> <span class="token parameter variable">-i</span> https://pypi.tuna.tsinghua.edu.cn/simple django
<span class="token comment"># 配置全局清华源</span>
pip <span class="token function">install</span> pip <span class="token parameter variable">-U</span> <span class="token comment"># 升级 pip</span>
pip config <span class="token builtin class-name">set</span> global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>使用脚手架创建项目</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>django-admin startproject mysite

<span class="token comment"># 进入项目目录，创建子应用</span>
<span class="token builtin class-name">cd</span> mysite
python manage.py startapp polls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>配置数据库后，进行数据库迁移，并创建管理用户</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在 mysite/settings.py 中，修改数据库配置，这里默认使用 sqlite3</span>
DATABASES <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;default&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;ENGINE&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;django.db.backends.sqlite3&#39;</span>,
        <span class="token string">&#39;NAME&#39;</span><span class="token builtin class-name">:</span> BASE_DIR / <span class="token string">&#39;db.sqlite3&#39;</span>,
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># 有表结构改动时，创建数据库迁移</span>
<span class="token comment"># python manage.py makemigrations polls</span>
<span class="token comment"># 执行数据库迁</span>
python manage.py migrate
<span class="token comment"># 创建管理用户</span>
python manage.py createsuperuser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>启动项目</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 默认127.0.0.1 是一个回环地址，不能通过外部访问，只能自己访问，如果想在docker外访问就要加上0.0.0.0</span>
python manage.py runserver <span class="token variable"><span class="token punctuation">((</span><span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token punctuation">(</span>port<span class="token punctuation">))</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、全局配置" tabindex="-1"><a class="header-anchor" href="#二、全局配置" aria-hidden="true">#</a> 二、全局配置</h2><h3 id="一-基础配置" tabindex="-1"><a class="header-anchor" href="#一-基础配置" aria-hidden="true">#</a> (一). 基础配置</h3><ol><li>在 INSTALLED_APPS 中添加应用 rest_framework、corsheaders 和 polls， <code>polls</code> 是刚创建的子应用</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>INSTALLED_APPS <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;rest_framework&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;corsheaders&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;polls&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在 MIDDLEWARE 中添加 corsheaders.middleware.CorsMiddleware，注册跨域请求中间件，放在最前面</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>MIDDLEWARE <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;corsheaders.middleware.CorsMiddleware&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>设置 CORS_ORIGIN_WHITELIST，添加跨域请求白名单</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>CORS_ORIGIN_WHITELIST <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;http://localhost:8080&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;http://localhost:8081&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>设置 LANGUAGE_CODE 为 zh-hans，设置为中文</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>LANGUAGE_CODE <span class="token operator">=</span> <span class="token string">&#39;zh-hans&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>设置 MEDIA_URL 和 MEDIA_ROOT，资源文件的访问</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>MEDIA_URL <span class="token operator">=</span> <span class="token string">&#39;/media/&#39;</span>
MEDIA_ROOT <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>BASE_DIR<span class="token punctuation">,</span> <span class="token string">&#39;media&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二-修改数据库配置" tabindex="-1"><a class="header-anchor" href="#二-修改数据库配置" aria-hidden="true">#</a> (二). 修改数据库配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装驱动</span>
pipenv <span class="token function">install</span> mysqlclient

<span class="token comment"># 在 mysite/settings.py 中，修改数据库配置</span>
DATABASES <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token comment"># &#39;default&#39;: {</span>
    <span class="token comment">#     &#39;ENGINE&#39;: &#39;django.db.backends.mysql&#39;,</span>
    <span class="token comment">#     &#39;NAME&#39;: &#39;cool_admin&#39;,</span>
    <span class="token comment">#     &#39;USER&#39;: &#39;root&#39;,</span>
    <span class="token comment">#     &#39;PASSWORD&#39;: &#39;root&#39;,</span>
    <span class="token comment">#     &#39;HOST&#39;: &#39;hostip&#39;,</span>
    <span class="token comment">#     &#39;PORT&#39;: &#39;3386&#39;</span>
    <span class="token comment"># }</span>
    <span class="token string">&#39;default&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;ENGINE&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;django.db.backends.postgresql&#39;</span>,
        <span class="token string">&#39;NAME&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;default&#39;</span>,
        <span class="token string">&#39;USER&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;default&#39;</span>,
        <span class="token string">&#39;PASSWORD&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;secret&#39;</span>,
        <span class="token string">&#39;HOST&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;hostip&#39;</span>,
        <span class="token string">&#39;PORT&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;5432&#39;</span>,
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三-使用-simpleui-美化界面" tabindex="-1"><a class="header-anchor" href="#三-使用-simpleui-美化界面" aria-hidden="true">#</a> (三). 使用 simpleui 美化界面</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
pipenv <span class="token function">install</span> django-simpleui

<span class="token comment"># 在 mysite/settings.py 中，INSTALLED_APPS 中添加 &#39;simpleui&#39;</span>
INSTALLED_APPS <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;simpleui&#39;</span>,
    <span class="token punctuation">..</span>.
<span class="token punctuation">]</span>

<span class="token comment"># 在 setting 中添加主题色</span>
SIMPLEUI_DEFAULT_THEME <span class="token operator">=</span> <span class="token string">&#39;green&#39;</span>

<span class="token comment"># 设置 logo</span>
SIMPLEUI_LOGO <span class="token operator">=</span> <span class="token string">&#39;https://avatars.githubusercontent.com/u/28778856?s=200&amp;v=4&#39;</span>

<span class="token comment"># 关闭广告和分析</span>
SIMPLEUI_HOME_INFO <span class="token operator">=</span> False
SIMPLEUI_ANALYSIS <span class="token operator">=</span> False


<span class="token comment"># 根据教程处理细节</span>
https://zhuanlan.zhihu.com/p/372185998
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四-使用-django-filter-过滤" tabindex="-1"><a class="header-anchor" href="#四-使用-django-filter-过滤" aria-hidden="true">#</a> (四). 使用 Django Filter 过滤</h3><h3 id="五-使用-django-debug-toolbar-调试" tabindex="-1"><a class="header-anchor" href="#五-使用-django-debug-toolbar-调试" aria-hidden="true">#</a> (五). 使用 Django Debug Toolbar 调试</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
pipenv <span class="token function">install</span> django-debug-toolbar

<span class="token comment"># 在 settings.py 中，INSTALLED_APPS 中添加 &#39;debug_toolbar&#39;</span>
INSTALLED_APPS <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;debug_toolbar&#39;</span>,
    <span class="token punctuation">..</span>.
<span class="token punctuation">]</span>
<span class="token comment"># 在 settings.py 中，MIDDLEWARE 中添加 &#39;debug_toolbar.middleware.DebugToolbarMiddleware&#39;</span>
MIDDLEWARE <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;debug_toolbar.middleware.DebugToolbarMiddleware&#39;</span>,
    <span class="token punctuation">..</span>.
<span class="token punctuation">]</span>
<span class="token comment"># 在 settings.py 中，添加配置</span>
DEBUG <span class="token operator">=</span> True
INTERNAL_IPS <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;127.0.0.1&#39;</span>,
    <span class="token string">&#39;localhost&#39;</span>,
<span class="token punctuation">]</span>

<span class="token comment"># 在 mysite/urls.py 中，添加配置</span>
urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">..</span>.
    path<span class="token punctuation">(</span><span class="token string">&#39;__debug__/&#39;</span>, include<span class="token punctuation">(</span><span class="token string">&#39;debug_toolbar.urls&#39;</span><span class="token punctuation">))</span>,
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、实现一个-polls-应用" tabindex="-1"><a class="header-anchor" href="#三、实现一个-polls-应用" aria-hidden="true">#</a> 三、实现一个 polls 应用</h2><p>如果不使用 rest_framework，只需要 1、2、7 步即可</p><h3 id="_1-创建模型" tabindex="-1"><a class="header-anchor" href="#_1-创建模型" aria-hidden="true">#</a> 1. 创建模型</h3><p>在 polls/models.py 中，创建模型</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>db <span class="token keyword">import</span> models

<span class="token keyword">class</span> <span class="token class-name">Question</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    question_text <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">200</span><span class="token punctuation">,</span> verbose_name<span class="token operator">=</span><span class="token string">&#39;问题文本&#39;</span><span class="token punctuation">)</span>
    pub_data <span class="token operator">=</span> models<span class="token punctuation">.</span>DateTimeField<span class="token punctuation">(</span><span class="token string">&#39;date published&#39;</span><span class="token punctuation">)</span>

    <span class="token comment"># 定义元素据，用于在后台管理中显示</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        verbose_name <span class="token operator">=</span> <span class="token string">&#39;问题&#39;</span>
        verbose_name_plural <span class="token operator">=</span> <span class="token string">&#39;问题&#39;</span>

    <span class="token comment"># 定义 __str__ 方法,用于字符串显示</span>
    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>question_text


<span class="token keyword">class</span> <span class="token class-name">Choice</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 处理关联关系时，注意处理 related_name</span>
    question <span class="token operator">=</span> models<span class="token punctuation">.</span>ForeignKey<span class="token punctuation">(</span>Question<span class="token punctuation">,</span> related_name<span class="token operator">=</span><span class="token string">&#39;choices&#39;</span><span class="token punctuation">,</span> on_delete<span class="token operator">=</span>models<span class="token punctuation">.</span>CASCADE<span class="token punctuation">)</span>
    choice_text <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">200</span><span class="token punctuation">)</span>
    votes <span class="token operator">=</span> models<span class="token punctuation">.</span>IntegerField<span class="token punctuation">(</span>default<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        verbose_name <span class="token operator">=</span> <span class="token string">&#39;选项&#39;</span>
        verbose_name_plural <span class="token operator">=</span> <span class="token string">&#39;选项&#39;</span>

    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>choice_text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-注册模型" tabindex="-1"><a class="header-anchor" href="#_2-注册模型" aria-hidden="true">#</a> 2. 注册模型</h3><p>在 polls/admin.py 中，注册模型</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>contrib <span class="token keyword">import</span> admin
<span class="token keyword">from</span> <span class="token punctuation">.</span>models <span class="token keyword">import</span> Question<span class="token punctuation">,</span> Choice

admin<span class="token punctuation">.</span>site<span class="token punctuation">.</span>register<span class="token punctuation">(</span>Question<span class="token punctuation">)</span>
admin<span class="token punctuation">.</span>site<span class="token punctuation">.</span>register<span class="token punctuation">(</span>Choice<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-定义序列化器" tabindex="-1"><a class="header-anchor" href="#_3-定义序列化器" aria-hidden="true">#</a> 3. 定义序列化器</h3><p>定义序列化器 polls/serializers.py, 序列化器是 Django Rest Framework 提供的功能，能够非常方便地将 Django 数据模型序列化成相应的 JSON 数据格式。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> serializers
<span class="token keyword">from</span> <span class="token punctuation">.</span>models <span class="token keyword">import</span> Question


<span class="token keyword">class</span> <span class="token class-name">PollSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 在 api 视图中使用关联关系，PrimaryKeyRelatedField 只会返回关联对象的主键</span>
    articles <span class="token operator">=</span> serializers<span class="token punctuation">.</span>PrimaryKeyRelatedField<span class="token punctuation">(</span>many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> queryset<span class="token operator">=</span>Article<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 但是如果直接传其他的序列化器，就会返回序列化后的数据</span>
    answer <span class="token operator">=</span> AnswerSerializer<span class="token punctuation">(</span>many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    <span class="token comment"># 处理关联关系时，还应注意要在model定义时，设置related_name</span>

    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> Question
        <span class="token comment"># fields = [&#39;id&#39;, &#39;question_text&#39;, &#39;pub_data&#39;, &#39;articles&#39;]</span>
        fields <span class="token operator">=</span> <span class="token string">&#39;__all__&#39;</span>
        depth <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment"># 找查外键的深度，articles 就会加入到返回中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-创建视图" tabindex="-1"><a class="header-anchor" href="#_4-创建视图" aria-hidden="true">#</a> 4. 创建视图</h3><p>在 polls/views.py 中，创建视图,使用 Django Rest Framework 提供的模型视图集，实现了增删改查的功能</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> viewsets
<span class="token keyword">from</span> <span class="token punctuation">.</span>serializers <span class="token keyword">import</span> PollSerializer
<span class="token keyword">from</span> <span class="token punctuation">.</span>models <span class="token keyword">import</span> Question


<span class="token comment"># Create your views here.</span>
<span class="token keyword">class</span> <span class="token class-name">PollViewSet</span><span class="token punctuation">(</span>viewsets<span class="token punctuation">.</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    serializer_class <span class="token operator">=</span> PollSerializer
    queryset <span class="token operator">=</span> Question<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>order_by<span class="token punctuation">(</span><span class="token string">&#39;pub_data&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-创建路由" tabindex="-1"><a class="header-anchor" href="#_5-创建路由" aria-hidden="true">#</a> 5. 创建路由</h3><p>在 polls/urls.py 中，用 DefaultRouter 自动创建路由</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>urls <span class="token keyword">import</span> path<span class="token punctuation">,</span> include
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> routers
<span class="token keyword">from</span> <span class="token punctuation">.</span> <span class="token keyword">import</span> views

router <span class="token operator">=</span> routers<span class="token punctuation">.</span>DefaultRouter<span class="token punctuation">(</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span>register<span class="token punctuation">(</span><span class="token string">&#39;polls&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>PollViewSet<span class="token punctuation">)</span>

urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    path<span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> include<span class="token punctuation">(</span>router<span class="token punctuation">.</span>urls<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-注册路由" tabindex="-1"><a class="header-anchor" href="#_6-注册路由" aria-hidden="true">#</a> 6. 注册路由</h3><ol start="6"><li>在 mysite/urls.py 中，注册应用的路由</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>contrib <span class="token keyword">import</span> admin
<span class="token keyword">from</span> django<span class="token punctuation">.</span>urls <span class="token keyword">import</span> include<span class="token punctuation">,</span> path

urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    path<span class="token punctuation">(</span><span class="token string">&#39;admin/&#39;</span><span class="token punctuation">,</span> admin<span class="token punctuation">.</span>site<span class="token punctuation">.</span>urls<span class="token punctuation">)</span><span class="token punctuation">,</span>
    path<span class="token punctuation">(</span><span class="token string">&#39;api/&#39;</span><span class="token punctuation">,</span> include<span class="token punctuation">(</span><span class="token string">&#39;polls.urls&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-创建并迁移数据库" tabindex="-1"><a class="header-anchor" href="#_7-创建并迁移数据库" aria-hidden="true">#</a> 7. 创建并迁移数据库</h3><p>创建并迁移数据库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># python manage.py makemigrations 全部应用/指定应用</span>
python manage.py makemigrations polls
python manage.py migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-启动项目" tabindex="-1"><a class="header-anchor" href="#_8-启动项目" aria-hidden="true">#</a> 8. 启动项目</h3><p><code>/api/polls/</code> 查看 restful api 的页面<br><code>/admin/polls/</code> 查看后台管理页面</p><h3 id="_9-添加权限" tabindex="-1"><a class="header-anchor" href="#_9-添加权限" aria-hidden="true">#</a> 9. 添加权限</h3><p>在 polls/views.py 中，添加权限</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> permissions

<span class="token comment"># 在 ViewSet 中添加 permission_classes 属性</span>
<span class="token keyword">class</span> <span class="token class-name">PollViewSet</span><span class="token punctuation">(</span>viewsets<span class="token punctuation">.</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    serializer_class <span class="token operator">=</span> PollSerializer
    queryset <span class="token operator">=</span> Question<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    permission_classes <span class="token operator">=</span> <span class="token punctuation">(</span>permissions<span class="token punctuation">.</span>IsAuthenticatedOrReadOnly<span class="token punctuation">,</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 mysite/urls.py 中，添加权限</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    path<span class="token punctuation">(</span><span class="token string">&#39;api-auth/&#39;</span><span class="token punctuation">,</span> include<span class="token punctuation">(</span><span class="token string">&#39;rest_framework.urls&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-生成依赖文件" tabindex="-1"><a class="header-anchor" href="#_10-生成依赖文件" aria-hidden="true">#</a> 10. 生成依赖文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pipenv run pip freeze <span class="token operator">&gt;</span> requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="四、部署" tabindex="-1"><a class="header-anchor" href="#四、部署" aria-hidden="true">#</a> 四、部署</h2><h3 id="使用-wsgi-部署" tabindex="-1"><a class="header-anchor" href="#使用-wsgi-部署" aria-hidden="true">#</a> 使用 wsgi 部署</h3><ol><li>安装 WSGI 服务器，gunicorn，uWSGI 等</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pipenv <span class="token function">install</span> gunicorn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>在 mysite 目录下，创建 wsgi.py 文件。脚手架会自动创建</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">from</span> django<span class="token punctuation">.</span>core<span class="token punctuation">.</span>wsgi <span class="token keyword">import</span> get_wsgi_application

os<span class="token punctuation">.</span>environ<span class="token punctuation">.</span>setdefault<span class="token punctuation">(</span><span class="token string">&#39;DJANGO_SETTINGS_MODULE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;myproject.settings&#39;</span><span class="token punctuation">)</span>

application <span class="token operator">=</span> get_wsgi_application<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在 mysite 目录下，创建 Procfile 文件，指定启动命令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>web: gunicorn mysite.wsgi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或使用 shell 启动，gunicorn myproject.wsgi:application</p><ol start="4"><li>在 mysite/settings.py 中配置</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 修改 DEBUG 为 False，设置 ALLOWED_HOSTS</span>
DEBUG <span class="token operator">=</span> <span class="token boolean">False</span>

ALLOWED_HOSTS <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">]</span>

<span class="token comment"># 设置静态文件的访问</span>
STATIC_URL <span class="token operator">=</span> <span class="token string">&#39;/static/&#39;</span>
STATIC_ROOT <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>BASE_DIR<span class="token punctuation">,</span> <span class="token string">&#39;static&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 设置数据库</span>

<span class="token comment"># 设置日志</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>配置 Nginx 或其他 Web 服务器以反向代理 Gunicorn 服务器。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location / <span class="token punctuation">{</span>
    proxy_pass http://127.0.0.1:8000<span class="token punctuation">;</span>
    proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
    proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
    proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-asgi-部署" tabindex="-1"><a class="header-anchor" href="#使用-asgi-部署" aria-hidden="true">#</a> 使用 asgi 部署</h3><ol><li>安装 ASGI 服务器，Daphne、Uvicorn、Hypercorn 等。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pipenv <span class="token function">install</span> daphne
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>在 mysite 目录下，创建 asgi.py 文件。脚手架会自动创建</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">from</span> django<span class="token punctuation">.</span>core<span class="token punctuation">.</span>asgi <span class="token keyword">import</span> get_asgi_application

os<span class="token punctuation">.</span>environ<span class="token punctuation">.</span>setdefault<span class="token punctuation">(</span><span class="token string">&#39;DJANGO_SETTINGS_MODULE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;myproject.settings&#39;</span><span class="token punctuation">)</span>

application <span class="token operator">=</span> get_asgi_application<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在 mysite 目录下，创建 Procfile 文件，指定启动命令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>web: daphne mysite.asgi:application
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或使用 shell 启动，daphne myproject.asgi:application</p><ol start="4"><li><p>在 mysite/settings.py 中配置</p></li><li><p>配置 Nginx 或其他 Web 服务器以反向代理 ASGI 服务器。</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    location / <span class="token punctuation">{</span>
    proxy_pass http://127.0.0.1:8000<span class="token punctuation">;</span>
    proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
    proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
    proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>

    <span class="token comment"># WebSocket support</span>
    proxy_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
    proxy_set_header Upgrade <span class="token variable">$http_upgrade</span><span class="token punctuation">;</span>
    proxy_set_header Connection <span class="token string">&quot;upgrade&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、数据库及迁移" tabindex="-1"><a class="header-anchor" href="#五、数据库及迁移" aria-hidden="true">#</a> 五、数据库及迁移</h2><h3 id="_1-数据库迁移命令" tabindex="-1"><a class="header-anchor" href="#_1-数据库迁移命令" aria-hidden="true">#</a> 1. 数据库迁移命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建迁移文件</span>
python manage.py makemigrations
<span class="token comment"># 查看迁移文件</span>
python manage.py sqlmigrate polls 0001
<span class="token comment"># 查看迁移状态</span>
python manage.py showmigrations polls
<span class="token comment"># 回滚迁移</span>
python manage.py migrate polls zero
<span class="token comment"># 回滚到指定迁移</span>
python manage.py migrate polls 0001
<span class="token comment"># 执行迁移</span>
python manage.py migrate polls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-模型关联关系" tabindex="-1"><a class="header-anchor" href="#_2-模型关联关系" aria-hidden="true">#</a> 2. 模型关联关系</h3>`,92),h={href:"https://docs.djangoproject.com/zh-hans/4.2/topics/db/examples/",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>一对一 用 OneToOneField<br> 一对多 用 ForeignKey<br> 多对多 用 ManyToManyField</p><h2 id="五、drf-关于数据处理" tabindex="-1"><a class="header-anchor" href="#五、drf-关于数据处理" aria-hidden="true">#</a> 五、DRF 关于数据处理</h2><h3 id="一-序列化器" tabindex="-1"><a class="header-anchor" href="#一-序列化器" aria-hidden="true">#</a> (一). 序列化器</h3><h4 id="_1-重写增删查改方法" tabindex="-1"><a class="header-anchor" href="#_1-重写增删查改方法" aria-hidden="true">#</a> 1. 重写增删查改方法</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> serializers
<span class="token keyword">from</span> <span class="token punctuation">.</span>models <span class="token keyword">import</span> Question


<span class="token keyword">class</span> <span class="token class-name">PollSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 在 api 视图中使用关联关系，PrimaryKeyRelatedField 只会返回关联对象的主键</span>
    articles <span class="token operator">=</span> serializers<span class="token punctuation">.</span>PrimaryKeyRelatedField<span class="token punctuation">(</span>many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> queryset<span class="token operator">=</span>Article<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 但是如果直接传其他的序列化器，就会返回序列化后的数据</span>
    answer <span class="token operator">=</span> AnswerSerializer<span class="token punctuation">(</span>many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    <span class="token comment"># 处理关联关系时，还应注意要在model定义时，设置related_name</span>

    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> Question
        <span class="token comment"># fields = [&#39;id&#39;, &#39;question_text&#39;, &#39;pub_data&#39;, &#39;articles&#39;]</span>
        fields <span class="token operator">=</span> <span class="token string">&#39;__all__&#39;</span>
        depth <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment"># 找查外键的深度，articles 就会加入到返回中</span>

    <span class="token comment"># 重写 create 方法，重写创建逻辑</span>
    <span class="token keyword">def</span> <span class="token function">create</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> validated_data<span class="token punctuation">)</span><span class="token punctuation">:</span>
        articles_data <span class="token operator">=</span> validated_data<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token string">&#39;articles&#39;</span><span class="token punctuation">)</span>
        question <span class="token operator">=</span> Question<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>create<span class="token punctuation">(</span><span class="token operator">**</span>validated_data<span class="token punctuation">)</span>
        <span class="token keyword">for</span> article_data <span class="token keyword">in</span> articles_data<span class="token punctuation">:</span>
            Article<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>create<span class="token punctuation">(</span>question<span class="token operator">=</span>question<span class="token punctuation">,</span> <span class="token operator">**</span>article_data<span class="token punctuation">)</span>
        <span class="token keyword">return</span> question

    <span class="token comment"># 重写 update 方法，重写更新逻辑</span>
    <span class="token keyword">def</span> <span class="token function">update</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> validated_data<span class="token punctuation">)</span><span class="token punctuation">:</span>
        articles_data <span class="token operator">=</span> validated_data<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token string">&#39;articles&#39;</span><span class="token punctuation">)</span>
        articles <span class="token operator">=</span> <span class="token punctuation">(</span>instance<span class="token punctuation">.</span>articles<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        articles <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span>articles<span class="token punctuation">)</span>
        instance<span class="token punctuation">.</span>question_text <span class="token operator">=</span> validated_data<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;question_text&#39;</span><span class="token punctuation">,</span> instance<span class="token punctuation">.</span>question_text<span class="token punctuation">)</span>
        instance<span class="token punctuation">.</span>pub_data <span class="token operator">=</span> validated_data<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;pub_data&#39;</span><span class="token punctuation">,</span> instance<span class="token punctuation">.</span>pub_data<span class="token punctuation">)</span>
        instance<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> article_data <span class="token keyword">in</span> articles_data<span class="token punctuation">:</span>
            article <span class="token operator">=</span> articles<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
            article<span class="token punctuation">.</span>article_text <span class="token operator">=</span> article_data<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;article_text&#39;</span><span class="token punctuation">,</span> article<span class="token punctuation">.</span>article_text<span class="token punctuation">)</span>
            article<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> instance

    <span class="token comment"># 重写 to_representation 方法，修改返回的数据</span>
    <span class="token keyword">def</span> <span class="token function">to_representation</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> instance<span class="token punctuation">)</span><span class="token punctuation">:</span>
        ret <span class="token operator">=</span> <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to_representation<span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
        ret<span class="token punctuation">[</span><span class="token string">&#39;articles&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> ArticleSerializer<span class="token punctuation">(</span>instance<span class="token punctuation">.</span>articles<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">.</span>data
        res<span class="token punctuation">[</span><span class="token string">&#39;current_url&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span>context<span class="token punctuation">[</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>build_absolute_uri<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> ret

    <span class="token comment"># 重写 to_internal_value 方法，用于处理关联关系</span>
    <span class="token keyword">def</span> <span class="token function">to_internal_value</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">:</span>
        articles_data <span class="token operator">=</span> data<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token string">&#39;articles&#39;</span><span class="token punctuation">)</span>
        validated_data <span class="token operator">=</span> <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to_internal_value<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
        validated_data<span class="token punctuation">[</span><span class="token string">&#39;articles&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> articles_data
        <span class="token keyword">return</span> validated_data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-使用-serializermethodfield-添加额外的数据" tabindex="-1"><a class="header-anchor" href="#_2-使用-serializermethodfield-添加额外的数据" aria-hidden="true">#</a> 2. 使用 SerializerMethodField 添加额外的数据</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">ModalInfoSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 添加的数据</span>
    external_data <span class="token operator">=</span> serializers<span class="token punctuation">.</span>SerializerMethodField<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> ModalInfo
        fields <span class="token operator">=</span> <span class="token string">&#39;__all__&#39;</span>

    <span class="token comment"># 请求外部的数据 external_data 为字段名， obj 是上次返回的数据</span>
    <span class="token keyword">def</span> <span class="token function">get_external_data</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token comment"># test_url = &#39;http://10.10.2.201:8336/api/menu/list&#39;</span>
            response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>obj<span class="token punctuation">.</span>data_url<span class="token punctuation">)</span>
            <span class="token keyword">return</span> response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token string">&#39;msg&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;获取数据失败&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">:</span> e<span class="token punctuation">.</span>__str__<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二-视图" tabindex="-1"><a class="header-anchor" href="#二-视图" aria-hidden="true">#</a> (二). 视图</h3><h4 id="_1-添加额外的接口" tabindex="-1"><a class="header-anchor" href="#_1-添加额外的接口" aria-hidden="true">#</a> 1. 添加额外的接口</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> viewsets
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>decorators <span class="token keyword">import</span> action
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>response <span class="token keyword">import</span> Response

<span class="token keyword">class</span> <span class="token class-name">MarkInfoViewSet</span><span class="token punctuation">(</span>viewsets<span class="token punctuation">.</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> MarkInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> MarkInfoSerializer

    <span class="token comment"># 添加额外的接口  /hello_world</span>
    <span class="token decorator annotation punctuation">@action</span><span class="token punctuation">(</span>detail<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">by_workshop</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        workshop_id <span class="token operator">=</span> request<span class="token punctuation">.</span>query_params<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;workshop_id&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> workshop_id<span class="token punctuation">:</span>
            <span class="token keyword">return</span> Response<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;请传入workshop_id&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment"># return Response(info_list) # 如果处理可以返回数据</span>
        <span class="token comment"># queryset 转 dict</span>
        markinfos <span class="token operator">=</span> MarkInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>workshop<span class="token operator">=</span>workshop_id<span class="token punctuation">)</span>
        info_list <span class="token operator">=</span> <span class="token punctuation">[</span>model_to_dict<span class="token punctuation">(</span>info<span class="token punctuation">)</span> <span class="token keyword">for</span> info <span class="token keyword">in</span> markinfos<span class="token punctuation">]</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>dict_key_to_camel<span class="token punctuation">(</span>info_list<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function _(y,f){const a=o("ExternalLinkIcon");return i(),l("div",null,[r,n("p",null,[n("a",u,[s("官方文档"),e(a)]),d,n("a",k,[s("快速体验"),e(a)]),v,n("a",m,[s("快速体验 api"),e(a)])]),b,n("p",null,[n("a",h,[s("文档"),e(a)])]),g])}const x=p(c,[["render",_],["__file","Django入门.html.vue"]]);export{x as default};
