import{_ as p,Y as o,Z as i,a1 as n,a2 as s,a3 as e,$ as c,a0 as a,E as l}from"./framework-6d304b95.js";const u={},d=n("h1",{id:"python-基础",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#python-基础","aria-hidden":"true"},"#"),s(" python 基础")],-1),r={href:"https://learnku.com/docs/pymotw/string-string-constants-and-templates/3360",target:"_blank",rel:"noopener noreferrer"},k=a(`<h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><p>指定脚本运行程序，和字符编码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/python</span>
<span class="token comment"># -*- coding: UTF-8 -*-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注释</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> a<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        :type a: int
        :type b: int
        :rtype: int
        &quot;&quot;&quot;</span>
        <span class="token keyword">return</span> a <span class="token operator">+</span> b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>扩展类型</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 枚举类型</span>
enum
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迭代器和生成器" tabindex="-1"><a class="header-anchor" href="#迭代器和生成器" aria-hidden="true">#</a> 迭代器和生成器</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># iter() 和 next() 迭代器</span>
<span class="token keyword">import</span> sys

<span class="token builtin">list</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
it <span class="token operator">=</span> <span class="token builtin">iter</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span>    <span class="token comment"># 创建迭代器对象</span>

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> StopIteration<span class="token punctuation">:</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Python 中，使用了 yield 的函数被称为生成器（generator）。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">def</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 生成器函数 - 斐波那契</span>
    a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>counter <span class="token operator">&gt;</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span>
        <span class="token keyword">yield</span> a
        a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a <span class="token operator">+</span> b
        counter <span class="token operator">+=</span> <span class="token number">1</span>
f <span class="token operator">=</span> fibonacci<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment"># f 是一个迭代器，由生成器返回生成</span>

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> StopIteration<span class="token punctuation">:</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h3>`,12),m={href:"https://www.runoob.com/python/python-func-open.html",target:"_blank",rel:"noopener noreferrer"},v=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 读写文件 文件名，mode(r，w，a，r+)</span>
f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;1.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r+&#39;</span>， encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 因为默认 gbk 有可能写不进去 unicode 编码</span>
string <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span>size<span class="token punctuation">)</span> <span class="token comment"># size 默认为负</span>
<span class="token comment"># 单行读取readline， 多行读取 readlines(sizehint)</span>
<span class="token comment"># 迭代 for line in f:</span>

f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>string<span class="token punctuation">)</span>     <span class="token comment"># 写入</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>           <span class="token comment"># 释放资源</span>
f<span class="token punctuation">.</span>tell<span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment"># 返回位置</span>
f<span class="token punctuation">.</span>seek<span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment"># 指定位置</span>
f<span class="token punctuation">.</span>flush<span class="token punctuation">(</span><span class="token punctuation">)</span>           <span class="token comment"># 刷新文件缓冲</span>

<span class="token comment"># 预定义清理行为</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;myfile.txt&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    <span class="token keyword">for</span> line <span class="token keyword">in</span> f<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>line<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>



<span class="token comment"># pickle 模块， 序列化和反序列化</span>
<span class="token keyword">import</span> pickle
f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;1.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span>
pickle<span class="token punctuation">.</span>dump<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;zahngsan&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span><span class="token string">&#39;hobby&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;sleeping&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 反序列化</span>
<span class="token keyword">import</span> pickle
f<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;1.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span>
data <span class="token operator">=</span> pickle<span class="token punctuation">.</span>load<span class="token punctuation">(</span>f<span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h3><p>os 模块</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 检测文件权限，os.access(&#39;1.txt&#39;, os.F_OK)是否存在path mode: xrwf</span>
os<span class="token punctuation">.</span>access<span class="token punctuation">(</span>path<span class="token punctuation">,</span> mode<span class="token punctuation">)</span>
os<span class="token punctuation">.</span>chdir<span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment"># 切换目录</span>
os<span class="token punctuation">.</span>system<span class="token punctuation">(</span>command<span class="token punctuation">)</span> <span class="token comment"># 执行脚本命令</span>
os<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># ... 有很多，具体看文档</span>

<span class="token comment"># 文件通配符 glob</span>
glob<span class="token punctuation">.</span>glob<span class="token punctuation">(</span><span class="token string">&#39;*.py&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sys 模块</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

sys<span class="token punctuation">.</span>argv
<span class="token comment"># sys 还有 stdin，stdout 和 stderr 属性，</span>
sys<span class="token punctuation">.</span>stderr<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;warnning!&#39;</span><span class="token punctuation">)</span>


还有许多模块，如 math<span class="token operator">/</span>random<span class="token operator">/</span>urllib 网路库<span class="token operator">/</span>smtplib 邮件库<span class="token operator">/</span>datetime<span class="token operator">/</span> zlib 数据压缩 <span class="token operator">/</span> timeit 性能度量
<span class="token operator">/</span>doctest 测试<span class="token operator">/</span> unittest 细粒度测试
<span class="token keyword">from</span> urllib<span class="token punctuation">.</span>request <span class="token keyword">import</span> urlopen
<span class="token keyword">for</span> line <span class="token keyword">in</span> urlopen<span class="token punctuation">(</span><span class="token string">&#39;http://www.baidu.com/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

t <span class="token operator">=</span> zlib<span class="token punctuation">.</span>compress<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token comment"># 压缩</span>
zlib<span class="token punctuation">.</span>decompress<span class="token punctuation">(</span>t<span class="token punctuation">)</span>   <span class="token comment"># 解压</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="错误和异常" tabindex="-1"><a class="header-anchor" href="#错误和异常" aria-hidden="true">#</a> 错误和异常</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        x <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Please enter a number: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    <span class="token keyword">except</span> ValueError<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Oops!  That was no valid number.  Try again   &quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># raise 可以再次抛出被捕获的异常</span>
        <span class="token keyword">raise</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;这句话将在没有捕获到异常时执行&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">finally</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;无论什么情况都会走到这里&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 处理多个异常时用元组，或省略通配所有类型的错误</span>
<span class="token keyword">except</span> <span class="token punctuation">(</span>RuntimeError<span class="token punctuation">,</span> TypeError<span class="token punctuation">,</span> NameError<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token comment"># 使用 raise 抛出异常</span>
<span class="token keyword">raise</span> NameError<span class="token punctuation">(</span><span class="token string">&#39;fuck&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输入和输出" tabindex="-1"><a class="header-anchor" href="#输入和输出" aria-hidden="true">#</a> 输入和输出</h3>`,9),b={href:"https://www.w3cschool.cn/python3/python3-inputoutput.html",target:"_blank",rel:"noopener noreferrer"},h=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 输出</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
sys<span class="token punctuation">.</span>stdout<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># str(), repr()显示特殊字符，参数可以是所有对象</span>
<span class="token comment"># 格式化输出 rjust ljust center zfill str.format</span>
<span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;{0:2d} {1:3d} {2:4d}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> x<span class="token operator">*</span>x<span class="token punctuation">,</span> x<span class="token operator">*</span>x<span class="token operator">*</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="系统模块" tabindex="-1"><a class="header-anchor" href="#系统模块" aria-hidden="true">#</a> 系统模块</h2><h3 id="re-模块" tabindex="-1"><a class="header-anchor" href="#re-模块" aria-hidden="true">#</a> re 模块</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> re
<span class="token comment"># 尝试从字符串的起始位置匹配一个模式</span>
<span class="token comment"># 参数分别是，模板，字符串，flags 标志位类似js里的img</span>
re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span>pattern<span class="token punctuation">,</span> string<span class="token punctuation">,</span> re<span class="token punctuation">.</span>M<span class="token operator">|</span>re<span class="token punctuation">.</span>I<span class="token punctuation">)</span>
<span class="token comment"># group     所有匹配到的组</span>
<span class="token comment"># groups    子匹配的元组</span>

<span class="token comment"># 多重匹配</span>
re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 扫描整个字符串并返回第一个成功的匹配。</span>
<span class="token comment"># 方法、参数同match， flags 标志位</span>
re<span class="token punctuation">.</span>search<span class="token punctuation">(</span>pattern<span class="token punctuation">,</span> string<span class="token punctuation">,</span> flags<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment"># 例：</span>
re<span class="token punctuation">.</span>search<span class="token punctuation">(</span> <span class="token string">r&#39;(.*) are (.*?) .*&#39;</span><span class="token punctuation">,</span> line<span class="token punctuation">,</span> re<span class="token punctuation">.</span>M<span class="token operator">|</span>re<span class="token punctuation">.</span>I<span class="token punctuation">)</span>

<span class="token comment"># 用于替换字符串中的匹配项。</span>
<span class="token comment"># repl 替换为的字符串， max最大替换次数，默认0所有</span>
re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span>pattern<span class="token punctuation">,</span> repl<span class="token punctuation">,</span> string<span class="token punctuation">,</span> <span class="token builtin">max</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment"># 将一个表达字符串转换为一个 RegexObject</span>
<span class="token comment"># 提前编译好，能减少运行时的开销</span>
<span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 正则表达式修饰符 - 标志位  -- flags</span>
re<span class="token punctuation">.</span>I  使匹配对大小写不敏感
re<span class="token punctuation">.</span>L  做本地化识别（locale<span class="token operator">-</span>aware）匹配
re<span class="token punctuation">.</span>M  多行匹配，影响 <span class="token operator">^</span> 和 $
re<span class="token punctuation">.</span>S  使 <span class="token punctuation">.</span> 匹配包括换行在内的所有字符
re<span class="token punctuation">.</span>U  根据Unicode字符集解析字符。这个标志影响 \\w<span class="token punctuation">,</span> \\W<span class="token punctuation">,</span> \\b<span class="token punctuation">,</span> \\B<span class="token punctuation">.</span>
re<span class="token punctuation">.</span>X  该标志通过给予你更灵活的格式以便你将正则表达式写得更易于理解。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>python 的匹配模式</p><table><thead><tr><th style="text-align:left;">模式</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">^</td><td style="text-align:left;">匹配字符串的开头</td></tr><tr><td style="text-align:left;">$</td><td style="text-align:left;">匹配字符串的末尾。</td></tr><tr><td style="text-align:left;">.</td><td style="text-align:left;">匹配任意字符，除了换行符，当 re.DOTALL 标记被指定时，则可以匹配包括换行符的任意字符。</td></tr><tr><td style="text-align:left;">[...]</td><td style="text-align:left;">用来表示一组字符,单独列出：[amk] 匹配 &#39;a&#39;，&#39;m&#39;或&#39;k&#39;</td></tr><tr><td style="text-align:left;">[^...]</td><td style="text-align:left;">不在[]中的字符：[^abc] 匹配除了 a,b,c 之外的字符。</td></tr><tr><td style="text-align:left;">re*</td><td style="text-align:left;">匹配 0 个或多个的表达式。</td></tr><tr><td style="text-align:left;">re+</td><td style="text-align:left;">匹配 1 个或多个的表达式。</td></tr><tr><td style="text-align:left;">re?</td><td style="text-align:left;">匹配 0 个或 1 个由前面的正则表达式定义的片段，非贪婪方式</td></tr><tr><td style="text-align:left;">re{ n}</td><td style="text-align:left;">匹配 n 个前面表达式。例如，&quot;o{2}&quot;不能匹配&quot;Bob&quot;中的&quot;o&quot;，但是能匹配&quot;food&quot;中的两个 o。</td></tr><tr><td style="text-align:left;">re{ n,}</td><td style="text-align:left;">精确匹配 n 个前面表达式。例如，&quot;o{2,}&quot;不能匹配&quot;Bob&quot;中的&quot;o&quot;，但能匹配&quot;foooood&quot;中的所有 o。&quot;o{1,}&quot;等价于&quot;o+&quot;。&quot;o{0,}&quot;则等价于&quot;o*&quot;。</td></tr><tr><td style="text-align:left;">re{ n, m}</td><td style="text-align:left;">匹配 n 到 m 次由前面的正则表达式定义的片段，贪婪方式</td></tr><tr><td style="text-align:left;">a| b</td><td style="text-align:left;">匹配 a 或 b</td></tr><tr><td style="text-align:left;">(re)</td><td style="text-align:left;">G 匹配括号内的表达式，也表示一个组</td></tr><tr><td style="text-align:left;">(?imx)</td><td style="text-align:left;">正则表达式包含三种可选标志：i, m, 或 x 。只影响括号中的区域。</td></tr><tr><td style="text-align:left;">(?-imx)</td><td style="text-align:left;">正则表达式关闭 i, m, 或 x 可选标志。只影响括号中的区域。</td></tr><tr><td style="text-align:left;">(?: re)</td><td style="text-align:left;">类似 (...), 但是不表示一个组</td></tr><tr><td style="text-align:left;">(?imx: re)</td><td style="text-align:left;">在括号中使用 i, m, 或 x 可选标志</td></tr><tr><td style="text-align:left;">(?-imx: re)</td><td style="text-align:left;">在括号中不使用 i, m, 或 x 可选标志</td></tr><tr><td style="text-align:left;">(?#...)</td><td style="text-align:left;">注释.</td></tr><tr><td style="text-align:left;">(?= re)</td><td style="text-align:left;">前向肯定界定符。如果所含正则表达式，以 ... 表示，在当前位置成功匹配时成功，否则失败。但一旦所含表达式已经尝试，匹配引擎根本没有提高；模式的剩余部分还要尝试界定符的右边。</td></tr><tr><td style="text-align:left;">(?! re)</td><td style="text-align:left;">前向否定界定符。与肯定界定符相反；当所含表达式不能在字符串当前位置匹配时成功</td></tr><tr><td style="text-align:left;">(?&gt; re)</td><td style="text-align:left;">匹配的独立模式，省去回溯。</td></tr><tr><td style="text-align:left;">\\w</td><td style="text-align:left;">匹配字母数字</td></tr><tr><td style="text-align:left;">\\W</td><td style="text-align:left;">匹配非字母数字</td></tr><tr><td style="text-align:left;">\\s</td><td style="text-align:left;">匹配任意空白字符，等价于 [\\t\\n\\r\\f].</td></tr><tr><td style="text-align:left;">\\S</td><td style="text-align:left;">匹配任意非空字符</td></tr><tr><td style="text-align:left;">\\d</td><td style="text-align:left;">匹配任意数字，等价于 [0-9].</td></tr><tr><td style="text-align:left;">\\D</td><td style="text-align:left;">匹配任意非数字</td></tr><tr><td style="text-align:left;">\\A</td><td style="text-align:left;">匹配字符串开始</td></tr><tr><td style="text-align:left;">\\Z</td><td style="text-align:left;">匹配字符串结束，如果是存在换行，只匹配到换行前的结束字符串。c</td></tr><tr><td style="text-align:left;">\\z</td><td style="text-align:left;">匹配字符串结束</td></tr><tr><td style="text-align:left;">\\G</td><td style="text-align:left;">匹配最后匹配完成的位置。</td></tr><tr><td style="text-align:left;">\\b</td><td style="text-align:left;">匹配一个单词边界，也就是指单词和空格间的位置。例如， &#39;er\\b&#39; 可以匹配&quot;never&quot; 中的 &#39;er&#39;，但不能匹配 &quot;verb&quot; 中的 &#39;er&#39;。</td></tr><tr><td style="text-align:left;">\\B</td><td style="text-align:left;">匹配非单词边界。&#39;er\\B&#39; 能匹配 &quot;verb&quot; 中的 &#39;er&#39;，但不能匹配 &quot;never&quot; 中的 &#39;er&#39;。</td></tr><tr><td style="text-align:left;">\\n, \\t, 等.</td><td style="text-align:left;">匹配一个换行符。匹配一个制表符。等</td></tr><tr><td style="text-align:left;">\\1...\\9</td><td style="text-align:left;">匹配第 n 个分组的子表达式。</td></tr><tr><td style="text-align:left;">\\10</td><td style="text-align:left;">匹配第 n 个分组的子表达式，如果它经匹配。否则指的是八进制字符码的表达式。</td></tr></tbody></table><h3 id="gui-编程" tabindex="-1"><a class="header-anchor" href="#gui-编程" aria-hidden="true">#</a> GUI 编程</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 使用 python 自带的服务器快速启动一个cgi服务</span>
<span class="token comment"># 启动目录即是根目录，cgi-bin/ 目录下放置cgi文件</span>
<span class="token comment"># 根路径默认会访问根目录的 index 文件</span>
python <span class="token operator">-</span>m http<span class="token punctuation">.</span>server <span class="token operator">-</span><span class="token operator">-</span>cgi <span class="token number">8000</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="连接数据库" tabindex="-1"><a class="header-anchor" href="#连接数据库" aria-hidden="true">#</a> 连接数据库</h3>`,9),y=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 安装、使用提供的驱动库</span>
pip install PyMySQL

<span class="token comment"># 对于支持事务的数据库， 在Python数据库编程中，当游标建立之时，就自动开始了一个隐形的数据库事务。</span>
<span class="token comment"># commit()方法游标的所有更新操作，rollback（）方法回滚当前游标的所有操作。每一个方法都开始了一个新的事务。</span>

<span class="token comment"># 该方法获取下一个查询结果集。结果集是一个对象</span>
fetchone<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 接收全部的返回结果行.</span>
fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 这是一个只读属性，并返回执行execute()方法后影响的行数。</span>
rowcount

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pymysql

db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;database&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 使用 cursor() 方法创建一个游标对象 cursor</span>
cursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 使用 execute()  方法执行 SQL 查询</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&quot;SELECT * from auth&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 使用 fetchone() 方法获取所有数据.</span>
data <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> item <span class="token keyword">in</span> data<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>

<span class="token comment"># 插入/更新/删除等改变数据操作时，需要提交到数据库执行 commit</span>
in_sql <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
    insert into auth(auth) values(&#39;{0}&#39;)
&quot;&quot;&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&#39;插入的值&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">try</span><span class="token punctuation">:</span>
    cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>in_sql<span class="token punctuation">)</span>
<span class="token comment"># 提交到数据库执行</span>
    db<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
<span class="token comment"># 回滚</span>
    db<span class="token punctuation">.</span>rollback<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 关闭数据库连接</span>
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网络编程" tabindex="-1"><a class="header-anchor" href="#网络编程" aria-hidden="true">#</a> 网络编程</h3>`,4),g={href:"https://www.w3cschool.cn/python3/python3-socket.html",target:"_blank",rel:"noopener noreferrer"},f=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Python 提供了两个级别访问的网络服务。</span>
<span class="token comment"># 低级别的网络服务支持基本的 Socket，它提供了标准的 BSD Sockets API，可以访问底层操作系统Socket接口的全部方法。</span>
<span class="token comment"># 高级别的网络服务模块 SocketServer， 它提供了服务器中心类，可以简化网络服务器的开发。</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="smtp-发送邮件" tabindex="-1"><a class="header-anchor" href="#smtp-发送邮件" aria-hidden="true">#</a> SMTP 发送邮件</h3><p>163 端口：</p><p><img src="http://img4.cache.netease.com/help/2011/2/1/201102010936447869c.png" alt="port"></p><p>QQ 端口：</p><table><thead><tr><th style="text-align:left;">邮箱</th><th style="text-align:left;">POP3 服务器（端口 995）</th><th style="text-align:left;">SMTP 服务器（端口 465 或 587）</th></tr></thead><tbody><tr><td style="text-align:left;">qq.com</td><td style="text-align:left;">pop.qq.com</td><td style="text-align:left;">smtp.qq.com</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/python3</span>

<span class="token keyword">import</span> smtplib
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>text <span class="token keyword">import</span> MIMEText
<span class="token keyword">from</span> email<span class="token punctuation">.</span>header <span class="token keyword">import</span> Header

mail_from <span class="token operator">=</span> <span class="token string">&#39;291825458@qq.com&#39;</span>
mail_to <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;285653184@qq.com&#39;</span><span class="token punctuation">]</span>

server_host <span class="token operator">=</span> <span class="token string">&#39;smtp.qq.com&#39;</span>
server_user <span class="token operator">=</span> <span class="token string">&#39;291825458@qq.com&#39;</span>
server_pass <span class="token operator">=</span> <span class="token string">&#39;password&#39;</span>

<span class="token comment"># 三个参数：第一个为文本内容，第二个 plain 设置文本格式，第三个 utf-8 设置编码</span>
message <span class="token operator">=</span> MIMEText<span class="token punctuation">(</span><span class="token string">&#39;这是一封邮件，邮件发送...&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;plain&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 发件人</span>
message<span class="token punctuation">[</span><span class="token string">&#39;From&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> Header<span class="token punctuation">(</span><span class="token string">&quot;明天就是周末&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 收件人</span>
message<span class="token punctuation">[</span><span class="token string">&#39;To&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> Header<span class="token punctuation">(</span><span class="token string">&quot;你好&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 标题</span>
subject <span class="token operator">=</span> <span class="token string">&#39;明天就是周末了&#39;</span>
message<span class="token punctuation">[</span><span class="token string">&#39;Subject&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> Header<span class="token punctuation">(</span>subject<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># try:</span>
smtpObj <span class="token operator">=</span> smtplib<span class="token punctuation">.</span>SMTP<span class="token punctuation">(</span>server_host<span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span>
smtpObj<span class="token punctuation">.</span>login<span class="token punctuation">(</span>server_user<span class="token punctuation">,</span> server_pass<span class="token punctuation">)</span>

smtpObj<span class="token punctuation">.</span>sendmail<span class="token punctuation">(</span>mail_from<span class="token punctuation">,</span> mail_to<span class="token punctuation">,</span> message<span class="token punctuation">.</span>as_string<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;邮件发送成功&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># except smtplib.SMTPException:</span>
<span class="token comment">#     print(&quot;Error: 无法发送邮件&quot;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多线程" tabindex="-1"><a class="header-anchor" href="#多线程" aria-hidden="true">#</a> 多线程</h3><p>Python3 通过两个标准库 _thread 和 threading 提供对线程的支持。 _thread 提供了低级别的、原始的线程以及一个简单的锁，它相比于 threading 模块的功能还是比较有限的。</p><h4 id="原始的多线程" tabindex="-1"><a class="header-anchor" href="#原始的多线程" aria-hidden="true">#</a> 原始的多线程</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/python3</span>

<span class="token keyword">import</span> _thread
<span class="token keyword">import</span> time

<span class="token comment"># 为线程定义一个函数</span>
<span class="token keyword">def</span> <span class="token function">print_time</span><span class="token punctuation">(</span> threadName<span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">:</span>
   count <span class="token operator">=</span> <span class="token number">0</span>
   <span class="token keyword">while</span> count <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
      time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>delay<span class="token punctuation">)</span>
      count <span class="token operator">+=</span> <span class="token number">1</span>
      <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;%s: %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span> threadName<span class="token punctuation">,</span> time<span class="token punctuation">.</span>ctime<span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 创建两个线程</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
   _thread<span class="token punctuation">.</span>start_new_thread<span class="token punctuation">(</span> print_time<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;Thread-1&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span>
   _thread<span class="token punctuation">.</span>start_new_thread<span class="token punctuation">(</span> print_time<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;Thread-2&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
   <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;Error: 无法启动线程&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token number">1</span><span class="token punctuation">:</span>
   <span class="token keyword">pass</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-threading-模块" tabindex="-1"><a class="header-anchor" href="#使用-threading-模块" aria-hidden="true">#</a> 使用 threading 模块</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># threading 模块</span>
run<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>          用以表示线程活动的方法。
start<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>        启动线程活动。
join<span class="token punctuation">(</span><span class="token punctuation">[</span>time<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>   等待至线程中止。这阻塞调用线程直至线程的join<span class="token punctuation">(</span><span class="token punctuation">)</span> 方法被调用中止<span class="token operator">-</span>正常退出或者抛出未处理的异常<span class="token operator">-</span>或者是可选的超时发生。
isAlive<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>      返回线程是否活动的。
getName<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>      返回线程名。
setName<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>      设置线程名。

可以通过直接从 threading<span class="token punctuation">.</span>Thread 继承创建一个新的子类，并实例化后调用 start<span class="token punctuation">(</span><span class="token punctuation">)</span> 方法启动新线程，即它调用了线程的 run<span class="token punctuation">(</span><span class="token punctuation">)</span> 方法：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/python3</span>

<span class="token keyword">import</span> threading
<span class="token keyword">import</span> time

exitFlag <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">class</span> <span class="token class-name">myThread</span> <span class="token punctuation">(</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> threadID<span class="token punctuation">,</span> name<span class="token punctuation">,</span> counter<span class="token punctuation">)</span><span class="token punctuation">:</span>
        threading<span class="token punctuation">.</span>Thread<span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>threadID <span class="token operator">=</span> threadID
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>counter <span class="token operator">=</span> counter
    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 该线程要执行的内容</span>
        <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;开始线程：&quot;</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
        print_time<span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>counter<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;退出线程：&quot;</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">print_time</span><span class="token punctuation">(</span>threadName<span class="token punctuation">,</span> counter<span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> counter<span class="token punctuation">:</span>
        <span class="token keyword">if</span> exitFlag<span class="token punctuation">:</span>
            threadName<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>delay<span class="token punctuation">)</span>
        <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;%s: %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>threadName<span class="token punctuation">,</span> time<span class="token punctuation">.</span>ctime<span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        counter <span class="token operator">-=</span> <span class="token number">1</span>

<span class="token comment"># 创建新线程</span>
thread1 <span class="token operator">=</span> myThread<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;Thread-1&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
thread2 <span class="token operator">=</span> myThread<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;Thread-2&quot;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>

<span class="token comment"># 开启新线程</span>
thread1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
thread2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
thread1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
thread2<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;退出主线程&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="线程同步" tabindex="-1"><a class="header-anchor" href="#线程同步" aria-hidden="true">#</a> 线程同步</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/python3</span>
<span class="token comment"># 如果多个线程共同对某个数据修改，则可能出现不可预料的结果，为了保证数据的正确性，需要对多个线程进行同步。</span>

<span class="token comment"># 使用 Thread 对象的 Lock 和 Rlock 可以实现简单的线程同步，这两个对象都有 acquire 方法和 release 方法，对于那些需要每次只允许一个线程操作的数据，可以将其操作放到 acquire 和 release 方法之间。如下：</span>

<span class="token keyword">import</span> threading
<span class="token keyword">import</span> time


<span class="token keyword">class</span> <span class="token class-name">myThread</span><span class="token punctuation">(</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> threadID<span class="token punctuation">,</span> name<span class="token punctuation">,</span> counter<span class="token punctuation">)</span><span class="token punctuation">:</span>
        threading<span class="token punctuation">.</span>Thread<span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>threadID <span class="token operator">=</span> threadID
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>counter <span class="token operator">=</span> counter

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;开启线程： &quot;</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
        <span class="token comment"># 获取锁，用于线程同步</span>
        threadLock<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
        print_time<span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>counter<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
        <span class="token comment"># 释放锁，开启下一个线程</span>
        threadLock<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">print_time</span><span class="token punctuation">(</span>threadName<span class="token punctuation">,</span> delay<span class="token punctuation">,</span> counter<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> counter<span class="token punctuation">:</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>delay<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%s: %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>threadName<span class="token punctuation">,</span> time<span class="token punctuation">.</span>ctime<span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        counter <span class="token operator">-=</span> <span class="token number">1</span>


threadLock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>
threads <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment"># 创建新线程</span>
thread1 <span class="token operator">=</span> myThread<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;Thread-1&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
thread2 <span class="token operator">=</span> myThread<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;Thread-2&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment"># 开启新线程</span>
thread1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
thread2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 添加线程到线程列表</span>
threads<span class="token punctuation">.</span>append<span class="token punctuation">(</span>thread1<span class="token punctuation">)</span>
threads<span class="token punctuation">.</span>append<span class="token punctuation">(</span>thread2<span class="token punctuation">)</span>

<span class="token comment"># 等待所有线程完成</span>
<span class="token keyword">for</span> t <span class="token keyword">in</span> threads<span class="token punctuation">:</span>
    t<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;退出主线程&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="线程优先级队列-queue" tabindex="-1"><a class="header-anchor" href="#线程优先级队列-queue" aria-hidden="true">#</a> 线程优先级队列（ Queue）</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/python3</span>

<span class="token keyword">import</span> queue
<span class="token keyword">import</span> threading
<span class="token keyword">import</span> time

exitFlag <span class="token operator">=</span> <span class="token number">0</span>


<span class="token keyword">class</span> <span class="token class-name">myThread</span><span class="token punctuation">(</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> threadID<span class="token punctuation">,</span> name<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">:</span>
        threading<span class="token punctuation">.</span>Thread<span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>threadID <span class="token operator">=</span> threadID
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>q <span class="token operator">=</span> q

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;开启线程：&quot;</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
        process_data<span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>q<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;退出线程：&quot;</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>name<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">process_data</span><span class="token punctuation">(</span>threadName<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token keyword">not</span> exitFlag<span class="token punctuation">:</span>
        queueLock<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> workQueue<span class="token punctuation">.</span>empty<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            data <span class="token operator">=</span> q<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span>
            queueLock<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%s processing %s \\n&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>threadName<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            queueLock<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


threadList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Thread-1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Thread-2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Thread-3&quot;</span><span class="token punctuation">]</span>
nameList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;One&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Two&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Three&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Four&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Five&quot;</span><span class="token punctuation">]</span>
queueLock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>
workQueue <span class="token operator">=</span> queue<span class="token punctuation">.</span>Queue<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
threads <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
threadID <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment"># 创建新线程</span>
<span class="token keyword">for</span> tName <span class="token keyword">in</span> threadList<span class="token punctuation">:</span>
    thread <span class="token operator">=</span> myThread<span class="token punctuation">(</span>threadID<span class="token punctuation">,</span> tName<span class="token punctuation">,</span> workQueue<span class="token punctuation">)</span>
    thread<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    threads<span class="token punctuation">.</span>append<span class="token punctuation">(</span>thread<span class="token punctuation">)</span>
    threadID <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token comment"># 填充队列</span>
queueLock<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> word <span class="token keyword">in</span> nameList<span class="token punctuation">:</span>
    workQueue<span class="token punctuation">.</span>put<span class="token punctuation">(</span>word<span class="token punctuation">)</span>
queueLock<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 等待队列清空</span>
<span class="token keyword">while</span> <span class="token keyword">not</span> workQueue<span class="token punctuation">.</span>empty<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token comment"># 通知线程是时候退出</span>
exitFlag <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment"># 等待所有线程完成</span>
<span class="token keyword">for</span> t <span class="token keyword">in</span> threads<span class="token punctuation">:</span>
    t<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;退出主线程&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-数据解析" tabindex="-1"><a class="header-anchor" href="#json-数据解析" aria-hidden="true">#</a> json 数据解析</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 对数据进行编码。</span>
json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 对数据进行解码。</span>
json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 写入 JSON 数据文件</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;data.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    json<span class="token punctuation">.</span>dump<span class="token punctuation">(</span>data<span class="token punctuation">,</span> f<span class="token punctuation">)</span>

<span class="token comment"># 读取数据文件</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;data.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    data <span class="token operator">=</span> json<span class="token punctuation">.</span>load<span class="token punctuation">(</span>f<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="时间函数" tabindex="-1"><a class="header-anchor" href="#时间函数" aria-hidden="true">#</a> 时间函数</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time

<span class="token comment"># 时间戳</span>
time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 时间元组, 对应年月日时分秒等9个数据</span>
time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span>timestamp<span class="token punctuation">)</span>

<span class="token comment"># 格式化的时间</span>
time<span class="token punctuation">.</span>asctime<span class="token punctuation">(</span>time_tuple<span class="token punctuation">)</span>

<span class="token comment"># time.strftime(&quot;%Y-%m-%d %H:%M:%S&quot;, time.localtime())</span>
time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token builtin">format</span><span class="token punctuation">,</span> time_tuple<span class="token punctuation">)</span>
time<span class="token punctuation">.</span>strptime<span class="token punctuation">(</span>string<span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token punctuation">)</span>

<span class="token comment"># 推迟调用线程的运行，secs指秒数。</span>
time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>secs<span class="token punctuation">)</span>

<span class="token comment"># 距离格林威治的偏移秒数，如 UTC-8 大于了世界时 8 小时，所以值为 -28800</span>
<span class="token comment"># time.time() + time.timezone 总是等于 世界时</span>
time<span class="token punctuation">.</span>timezone
time<span class="token punctuation">.</span>tzname     <span class="token comment"># 时区名</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function x(w,q){const t=l("ExternalLinkIcon");return o(),i("div",null,[d,n("p",null,[n("a",r,[s("常用系统模块"),e(t)])]),k,n("p",null,[n("a",m,[s("详解"),e(t)])]),v,n("p",null,[n("a",b,[s("详解"),e(t)])]),h,c(" 使用pycharm下载会有问题，建议你在pycharm里的File>setting>Project untitled>Project Interpreter>点击右边的+号  然后搜索PyMySQL然后点击左下角的Install 进行下载   "),y,n("p",null,[n("a",g,[s("网络编程模块"),e(t)])]),f])}const T=p(u,[["render",x],["__file","python基础.html.vue"]]);export{T as default};
