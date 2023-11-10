import{_ as n,Y as s,Z as a,a0 as e}from"./framework-6d304b95.js";const p={},t=e(`<h1 id="python-入门" tabindex="-1"><a class="header-anchor" href="#python-入门" aria-hidden="true">#</a> python 入门</h1><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><h3 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>运算符 <span class="token operator">+</span> <span class="token operator">-</span> <span class="token operator">*</span> <span class="token operator">/</span>除法 <span class="token operator">//</span>除整 <span class="token operator">%</span>模 <span class="token operator">**</span>幂
赋值运算符 <span class="token operator">+=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>   同上
比较运算符 <span class="token operator">&gt;</span> <span class="token operator">&lt;</span> <span class="token operator">!=</span> <span class="token operator">==</span> <span class="token operator">&lt;=</span> <span class="token operator">&gt;=</span>
逻辑运算符 <span class="token keyword">and</span> <span class="token operator">/</span> <span class="token keyword">or</span> <span class="token operator">/</span> <span class="token keyword">not</span>
成员运算符 <span class="token keyword">in</span> <span class="token operator">/</span> <span class="token keyword">not</span> <span class="token keyword">in</span>
身份运算符<span class="token punctuation">(</span>比较内存地址<span class="token punctuation">)</span>
          <span class="token keyword">is</span> <span class="token operator">/</span> <span class="token keyword">is</span> <span class="token keyword">not</span>
位运算符
    <span class="token operator">&amp;</span> 按位与 <span class="token number">2</span> <span class="token operator">&amp;</span> <span class="token number">3</span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">(</span><span class="token number">0b10</span> 与 <span class="token number">0b11</span> 得 <span class="token number">0b10</span><span class="token punctuation">)</span>
    <span class="token operator">|</span> 按位或
    <span class="token operator">^</span> 按位异或
    <span class="token operator">~</span> 按位取反
    <span class="token operator">&lt;&lt;</span> 按位左移
    <span class="token operator">&gt;&gt;</span> 按位右移

判断是否是某类型
<span class="token builtin">isinstance</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
<span class="token builtin">isinstance</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">float</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数字类型" tabindex="-1"><a class="header-anchor" href="#数字类型" aria-hidden="true">#</a> 数字类型</h3><p>int float bool complex</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 整型浮点型</span>
a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1.1</span>
<span class="token comment"># 二进制 八进制 十六进制</span>
<span class="token number">0b10</span> <span class="token number">0o10</span> <span class="token number">0x10</span>

<span class="token comment"># bool 类型</span>
<span class="token comment"># 空值都是False</span>
<span class="token builtin">bool</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">False</span>

<span class="token comment"># complex 复数 类型</span>
n <span class="token operator">=</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">4j</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>n <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment"># 32 + 16j + 16j + 32j^2  = 32j</span>

<span class="token comment"># 进制转换</span>
<span class="token builtin">bin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">oct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">hex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token comment"># 整除</span>
<span class="token number">1</span><span class="token operator">//</span><span class="token number">2</span> <span class="token operator">=</span> <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组" tabindex="-1"><a class="header-anchor" href="#组" aria-hidden="true">#</a> 组</h3><p>有序序列(sequence)：str list tuple (可通过下标访问，可以[0:3]切片操作) 集合：set (无序，没有索引，不能切片) 字典：dict (key: value 的概念)</p><p>list[0:length:步长]， 切片操作 list[start, end, step] hex(id(a)), a 的内存地址</p><h4 id="字符串-str" tabindex="-1"><a class="header-anchor" href="#字符串-str" aria-hidden="true">#</a> 字符串 str</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 单引号 双引号 三引号</span>
<span class="token comment"># 三引号可以指定多行字符串</span>

<span class="token comment"># r 表示 原始字符串 \\n 不转义</span>
a <span class="token operator">=</span> <span class="token string">r&#39;abc\\nbcd&#39;</span>

<span class="token comment"># unicode 相互转换</span>
<span class="token builtin">chr</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span>
<span class="token builtin">ord</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
<span class="token comment"># \\d：十进制；\\o：八进制；\\x 十六进制</span>
<span class="token comment"># \\u unicode码</span>
<span class="token comment"># \\xaa ⇒ chr(0xaa) ⇒ chr(16*a+a)</span>

<span class="token comment"># 字符串可以直接运算</span>
b <span class="token operator">=</span><span class="token string">&#39;python&#39;</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token comment"># &#39;pythonpython&#39;</span>

<span class="token comment"># 从前至后，和从后至前的索引方式</span>
<span class="token comment"># 字符串不可改变，不可通过索引赋值, 如 b[0] = &#39;h&#39;</span>
b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment"># p</span>
b<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment"># n</span>

<span class="token comment"># 字符串切片，变量[头下标:尾下标]， 前闭后开</span>
<span class="token string">&#39;hello world&#39;</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token comment"># &#39;ll&#39;</span>

<span class="token comment"># 格式占位符%s，这是老的格式化，现在一般用str.format()</span>
<span class="token comment"># https://blog.csdn.net/jiangbo721/article/details/78468571</span>
c <span class="token operator">=</span> <span class="token string">&#39;place %s&#39;</span> <span class="token operator">%</span> <span class="token string">&#39;holder&#39;</span> <span class="token comment"># 传入单值</span>
c <span class="token operator">=</span> <span class="token string">&#39;i am %s, age is %s}&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;23&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 传入元组</span>
c <span class="token operator">=</span> <span class="token string">&quot;I&#39;m %(name)s. I&#39;m %(age)d year old&quot;</span> <span class="token operator">%</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;Vamei&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span><span class="token number">99</span><span class="token punctuation">}</span> <span class="token comment"># 传入字典</span>
e <span class="token operator">=</span> <span class="token string">&#39;i am {0}, age is {1}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&#39;z3&#39;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span>
e <span class="token operator">=</span> <span class="token string">&#39;i am {}, age is {}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token string">&#39;z3&#39;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 传入元组</span>
e <span class="token operator">=</span> <span class="token string">&#39;i am {name:s}, age is {age:d}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token operator">**</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">23</span><span class="token punctuation">}</span><span class="token punctuation">)</span>       <span class="token comment"># 传入字典</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="列表-list" tabindex="-1"><a class="header-anchor" href="#列表-list" aria-hidden="true">#</a> 列表 list</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 引用类型</span>
a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">,</span> true<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token comment"># 选取列表，前闭后开区间</span>
a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>
a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment"># return [1, &#39;two&#39;]</span>

<span class="token comment"># 运算</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">2</span>      <span class="token comment"># [1, 2, 1, 2]</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>    <span class="token comment"># [1, 2, 3]</span>

<span class="token comment"># 修改区间的值</span>
a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span> <span class="token comment"># 插入</span>
a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>     <span class="token comment"># 删除</span>

<span class="token comment"># 方法</span>
a<span class="token punctuation">.</span>append<span class="token punctuation">(</span>val<span class="token punctuation">)</span>   <span class="token comment"># 入栈一个值，push</span>
a<span class="token punctuation">.</span>extend<span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span>  <span class="token comment"># 扩展数组，concat</span>
a<span class="token punctuation">.</span>insert<span class="token punctuation">(</span>i<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token comment"># 插入值到i位置</span>
a<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>n<span class="token punctuation">)</span>     <span class="token comment"># 移除第n个元素</span>
a<span class="token punctuation">.</span>pop<span class="token punctuation">(</span>n<span class="token punctuation">)</span>        <span class="token comment"># pop出第n个值</span>
a<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>index<span class="token punctuation">(</span>val<span class="token punctuation">)</span>    <span class="token comment"># 找出value值的index</span>
a<span class="token punctuation">.</span>count<span class="token punctuation">(</span>val<span class="token punctuation">)</span>    <span class="token comment"># val出现次数</span>
a<span class="token punctuation">.</span>reverse<span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment"># 倒序</span>
a<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># 排序</span>
a<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># 复制</span>

<span class="token comment"># 列表推导式</span>
a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
a1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">]</span>
b <span class="token operator">=</span> <span class="token punctuation">[</span>x<span class="token operator">*</span><span class="token number">3</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> a<span class="token punctuation">]</span> <span class="token comment"># [3, 6, 9, 12]</span>
c <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>x<span class="token punctuation">,</span> x<span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> a <span class="token punctuation">]</span> <span class="token comment"># [[1, 3], [2, 6], [3, 9], [4, 12]]</span>
<span class="token comment"># 使用 if 过滤</span>
d <span class="token operator">=</span> <span class="token punctuation">[</span>x<span class="token operator">*</span><span class="token number">3</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> a <span class="token keyword">if</span> x <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment"># [12]</span>
e <span class="token operator">=</span> <span class="token punctuation">[</span>x<span class="token operator">+</span>y <span class="token keyword">for</span> x <span class="token keyword">in</span> a <span class="token keyword">for</span> y <span class="token keyword">in</span> a1<span class="token punctuation">]</span> <span class="token comment"># [6, 11, 7, 12, 8, 13, 9, 14]</span>

<span class="token comment"># 例：3*4 矩阵替换为4*3</span>
matrix <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>

b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>row<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">for</span> row <span class="token keyword">in</span> matrix<span class="token punctuation">]</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>队列</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> collections <span class="token keyword">import</span> deque

q <span class="token operator">=</span> deque<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

q<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

q<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="元组-tuple" tabindex="-1"><a class="header-anchor" href="#元组-tuple" aria-hidden="true">#</a> 元组 tuple</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 值类型，不可修改</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># tu 会自己成为元组(1, 2, 3)</span>
tu <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span>
a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> tu

<span class="token comment"># 元组 可以切片(同上),可以相加</span>
tu <span class="token operator">+</span> tu <span class="token comment"># (1,2,3,1,2,3)</span>

<span class="token comment"># 方法</span>
<span class="token builtin">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">tuple</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 把列表转化为元组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="集合-set" tabindex="-1"><a class="header-anchor" href="#集合-set" aria-hidden="true">#</a> 集合 set</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 引用类型，无序、不重复的</span>
<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span> <span class="token operator">==</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span>，<span class="token number">2</span>，<span class="token number">1</span><span class="token punctuation">}</span>

<span class="token comment"># 集合的比较</span>
a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span>
b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span>

<span class="token comment"># 差集</span>
a <span class="token operator">-</span> b <span class="token comment"># {1,2}</span>
<span class="token comment"># 并集</span>
a <span class="token operator">|</span> b <span class="token comment"># {1, 2, 3, 4, 5, 6}</span>
<span class="token comment"># 交集</span>
a <span class="token operator">&amp;</span> b <span class="token comment"># {3, 4}</span>
<span class="token comment"># 不同时存在</span>
a <span class="token operator">^</span> b <span class="token comment"># {1, 2, 5, 6}</span>

<span class="token comment"># 支持 列表推导式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字典-dict" tabindex="-1"><a class="header-anchor" href="#字典-dict" aria-hidden="true">#</a> 字典 dict</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 引用类型</span>
users <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">:</span> <span class="token number">1320</span><span class="token punctuation">,</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">:</span> <span class="token number">1557</span><span class="token punctuation">,</span> <span class="token string">&#39;Rose&#39;</span><span class="token punctuation">:</span> <span class="token number">1886</span><span class="token punctuation">}</span>
<span class="token comment"># 删除</span>
<span class="token keyword">del</span> users<span class="token punctuation">[</span><span class="token string">&#39;Rose&#39;</span><span class="token punctuation">]</span>

<span class="token comment"># 可以从sequence中构建字典</span>
<span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;sape&#39;</span><span class="token punctuation">,</span> <span class="token number">4139</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;guido&#39;</span><span class="token punctuation">,</span> <span class="token number">4127</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;jack&#39;</span><span class="token punctuation">,</span> <span class="token number">4098</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 内置方法</span>
<span class="token builtin">dict</span><span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># keys 的 list</span>
<span class="token builtin">dict</span><span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">dict</span><span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># 返回 (key, value) 元组</span>
<span class="token builtin">dict</span><span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token builtin">dict</span><span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># 浅拷贝</span>
<span class="token builtin">dict</span><span class="token punctuation">.</span>fromkeys<span class="token punctuation">(</span>seq<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token comment"># 根据序列生成字典</span>
<span class="token builtin">dict</span><span class="token punctuation">.</span>get<span class="token punctuation">(</span>key<span class="token punctuation">,</span> default<span class="token punctuation">)</span>    <span class="token comment"># 获取指定字段，没有返回默认值</span>
<span class="token builtin">dict</span><span class="token punctuation">.</span>setdefault<span class="token punctuation">(</span>key<span class="token punctuation">,</span> default<span class="token punctuation">)</span>
<span class="token builtin">dict</span><span class="token punctuation">.</span>update<span class="token punctuation">(</span>dict2<span class="token punctuation">)</span> <span class="token comment"># 把dict2 更新到dict</span>

<span class="token comment"># 成员测试</span>
<span class="token string">&quot;Tom&quot;</span> <span class="token keyword">in</span> users <span class="token comment"># True</span>

<span class="token comment"># 方法</span>
<span class="token builtin">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">str</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 支持 列表推导式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="枚举类型" tabindex="-1"><a class="header-anchor" href="#枚举类型" aria-hidden="true">#</a> 枚举类型</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 继承自类, 并不是单独的类型</span>
<span class="token keyword">from</span> enum <span class="token keyword">import</span> Enum

<span class="token keyword">class</span> <span class="token class-name">VIP</span><span class="token punctuation">(</span>Enum<span class="token punctuation">)</span><span class="token punctuation">:</span>
    yellow <span class="token operator">=</span> <span class="token number">1</span>
    yellow_alias <span class="token operator">=</span> <span class="token number">1</span>
    green <span class="token operator">=</span> <span class="token number">2</span>
    black <span class="token operator">=</span> <span class="token number">3</span>
<span class="token comment"># 使用for in 遍历</span>
<span class="token comment"># 使用VIP.__members__遍历别名</span>
VIP<span class="token punctuation">.</span>yellow VIP<span class="token punctuation">[</span>VIP<span class="token punctuation">.</span>yellow<span class="token punctuation">.</span>name<span class="token punctuation">]</span> VIP<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment"># 限制标签类型， 并唯一</span>
<span class="token keyword">from</span> enum <span class="token keyword">import</span> IntEnum<span class="token punctuation">,</span> unique

<span class="token decorator annotation punctuation">@unique</span>
<span class="token keyword">class</span> <span class="token class-name">VIP</span><span class="token punctuation">(</span>IntEnum<span class="token punctuation">)</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="表达式" tabindex="-1"><a class="header-anchor" href="#表达式" aria-hidden="true">#</a> 表达式</h2><p>表达式(Expression)：预算符(operator)和操作数(operand)构成的序列</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 单行注释</span>
<span class="token string">&#39;&#39;</span>&#39;
多行注释
<span class="token string">&#39;&#39;</span>&#39;
<span class="token string">&quot;&quot;</span>&quot;
多行注释
<span class="token string">&quot;&quot;</span>&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 可用pass保留结构完整</span>

<span class="token comment"># 获取输入值</span>
value <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 判断</span>
<span class="token keyword">if</span> condition<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;something&#39;</span><span class="token punctuation">,</span> end <span class="token operator">=</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> condition<span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># while循环</span>
<span class="token keyword">while</span> counter<span class="token punctuation">:</span>
    counter <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">else</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>EOF<span class="token punctuation">)</span>

<span class="token comment"># range(start, end, step))</span>
<span class="token comment"># for循环</span>
<span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
    <span class="token keyword">if</span> x <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>

<span class="token keyword">for</span> item <span class="token keyword">in</span> l<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;遍历完了&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="包与模块" tabindex="-1"><a class="header-anchor" href="#包与模块" aria-hidden="true">#</a> 包与模块</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 模块 会找查sys.path的路径</span>
<span class="token comment"># 引入模块全部内容</span>
<span class="token keyword">import</span> module_name <span class="token comment"># 使用 module_name.var</span>
<span class="token comment"># 部分引入，var可使用 *(不含_开头的属性)</span>
<span class="token keyword">from</span> module_name <span class="token keyword">import</span> var <span class="token comment"># 直接使用 var</span>

<span class="token comment"># 模块中 __name__ 判断是否是引入调用，__main__为自己执行</span>
<span class="token builtin">dir</span><span class="token punctuation">(</span>module_name<span class="token punctuation">)</span> <span class="token comment"># 获取模块所定义的名称</span>

<span class="token comment"># 别名</span>
<span class="token keyword">import</span> module_name <span class="token keyword">as</span> alias


<span class="token comment"># 包是一种管理 Python 模块命名空间的形式，采用&quot;点模块名称&quot;。</span>
<span class="token comment"># 目录下有__init__.py文件，就会被 python 当做包</span>
sound<span class="token operator">/</span>                          顶层包
      __init__<span class="token punctuation">.</span>py               初始化 sound 包
      formats<span class="token operator">/</span>                  文件格式转换子包
              __init__<span class="token punctuation">.</span>py
              wavread<span class="token punctuation">.</span>py
              wavwrite<span class="token punctuation">.</span>py

<span class="token comment"># 引入同模块， 可以直接引入模块或变量</span>
<span class="token keyword">from</span> sound<span class="token punctuation">.</span>formats <span class="token keyword">import</span> wavread

<span class="token comment"># __init__.py 文件下一般写 __all__ = [&#39;需要导出的模块&#39;]， 对应使用时的ipmort *</span>
<span class="token comment"># 包名.文件名（__init__.py模块的模块名就是包名）</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>__package__<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>__doc__<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>__file__<span class="token punctuation">)</span>

<span class="token comment"># 其他方式引入</span>
<span class="token keyword">from</span> module_name <span class="token keyword">import</span> var<span class="token operator">/</span>mod<span class="token operator">/</span><span class="token operator">*</span>
<span class="token comment"># 导出时使用模块内置属性 __all__ = [&#39;a&#39;], 可以控制import * 时需要引入的变量</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><h3 id="函数申明" tabindex="-1"><a class="header-anchor" href="#函数申明" aria-hidden="true">#</a> 函数申明</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">funcname</span><span class="token punctuation">(</span>parameter_list<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token comment"># 可变参数</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># args is a tuple 剩余参数，当做元组</span>
    <span class="token keyword">for</span> x <span class="token keyword">in</span> args<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 关键字参数</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">**</span>kargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># karg is type of dict 指定关键字的参数，如：x=1</span>
    <span class="token keyword">pass</span>

<span class="token comment"># 可以返回多个参数构成元祖</span>
<span class="token keyword">return</span> res1<span class="token punctuation">,</span> res2<span class="token punctuation">,</span> res3

<span class="token comment"># 解构元组</span>
r1<span class="token punctuation">,</span> r2<span class="token punctuation">,</span> r3 <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 函数参数为必须参数 def add(x, y)</span>
<span class="token comment"># 形参任意赋值对应,可以切换传参顺序</span>
add<span class="token punctuation">(</span>y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> x <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="局部变量" tabindex="-1"><a class="header-anchor" href="#局部变量" aria-hidden="true">#</a> 局部变量</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 局部可以访问上级的变量，但是不能像js那样修改</span>
<span class="token comment"># 闭包变量被赋值时就会被认为是局部变量</span>
<span class="token keyword">def</span> <span class="token function">curve_pre</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 使用global关键字可以改变全局变量</span>
  <span class="token keyword">global</span> name
  name <span class="token operator">=</span> <span class="token string">&#39;curve_pre&#39;</span>
  <span class="token keyword">def</span> <span class="token function">curve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 申明非本地变量</span>
    <span class="token keyword">nonlocal</span> name
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;i am curve and &#39;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span>
  <span class="token keyword">return</span> curve

curve_pre<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类与对象" tabindex="-1"><a class="header-anchor" href="#类与对象" aria-hidden="true">#</a> 类与对象</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Stu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token comment"># 私有属性、方法,以__开头, 将被改名_Stu__private</span>
    __private <span class="token operator">=</span> <span class="token string">&#39;私有属性，只是改了个名字而已，并没法阻止访问&#39;</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 构造函数</span>
        <span class="token keyword">pass</span>
        <span class="token comment"># 访问类属性(静态属性)</span>
        self<span class="token punctuation">.</span>__class__<span class="token punctuation">.</span>name

    <span class="token comment"># 装饰器，静态函数，可以不要参数</span>
    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">funcname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token comment"># 类方法</span>
    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">funname</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
<span class="token comment"># 实例化</span>
s <span class="token operator">=</span> Stu<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 类似js，直接添加属性</span>
s<span class="token punctuation">.</span>newattr <span class="token operator">=</span> <span class="token string">&#39;新属性&#39;</span>
s<span class="token punctuation">.</span>say<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 打印实例的字典</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>__dict__<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>继承</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 继承</span>
<span class="token keyword">class</span> <span class="token class-name">Stu</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 调用父类构造函数 1</span>
        Person<span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span>
        <span class="token comment"># 调用父类构造函数 2</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>Stu<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>name<span class="token punctuation">)</span>

<span class="token comment"># 多重继承</span>
<span class="token comment"># 同名的属性、方法会由左至有查找</span>
<span class="token keyword">class</span> <span class="token class-name">Stu</span><span class="token punctuation">(</span>Person<span class="token punctuation">,</span> Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类专有方法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>__init__ <span class="token punctuation">:</span> 构造函数，在生成对象时调用
__del__ <span class="token punctuation">:</span> 析构函数，释放对象时使用
__repr__ <span class="token punctuation">:</span> 打印，转换
__setitem__ <span class="token punctuation">:</span> 按照索引赋值
__getitem__<span class="token punctuation">:</span> 按照索引获取值
__len__<span class="token punctuation">:</span> 获得长度
__cmp__<span class="token punctuation">:</span> 比较运算
__call__<span class="token punctuation">:</span> 函数调用
__add__<span class="token punctuation">:</span> 加运算
__sub__<span class="token punctuation">:</span> 减运算
__mul__<span class="token punctuation">:</span> 乘运算
__div__<span class="token punctuation">:</span> 除运算
__mod__<span class="token punctuation">:</span> 求余运算
__pow__<span class="token punctuation">:</span> 乘方
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运算符重载</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">__add__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> self<span class="token punctuation">.</span>age <span class="token operator">+</span> other<span class="token punctuation">.</span>age

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="正则" tabindex="-1"><a class="header-anchor" href="#正则" aria-hidden="true">#</a> 正则</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 字符串检测函数</span>
a<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&#39;some&#39;</span><span class="token punctuation">)</span>
<span class="token string">&#39;some&#39;</span> <span class="token keyword">in</span> a

<span class="token comment"># 正则，使用re模块</span>
<span class="token keyword">import</span> re
re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">&#39;parttern&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
<span class="token comment"># 规则和其他语言差不多</span>
<span class="token comment"># 默认贪婪匹配，量词加?即可进入非贪婪</span>
a <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">r&#39;\\bf[a-z]*&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;which foot or hand fell fastest&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># re.I 忽略大小写， re.S .匹配任意</span>
re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">&#39;parttern&#39;</span><span class="token punctuation">,</span> string<span class="token punctuation">,</span> re<span class="token punctuation">.</span>I <span class="token operator">|</span> re<span class="token punctuation">.</span>S<span class="token punctuation">)</span>

<span class="token comment"># 替换类似js replace, count替换多少个，count 为0表示无限制</span>
re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">&#39;parttern&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;target&#39;</span><span class="token punctuation">,</span> string<span class="token punctuation">,</span> count<span class="token punctuation">)</span>
<span class="token comment"># 回调中使用 matched = value.group() 取值</span>
re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">&#39;parttern&#39;</span><span class="token punctuation">,</span> 回调func<span class="token punctuation">,</span> string<span class="token punctuation">,</span> count<span class="token punctuation">)</span>
<span class="token comment"># 或</span>
string<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
re<span class="token punctuation">.</span><span class="token keyword">match</span> <span class="token comment"># 从头匹配</span>
r1 <span class="token operator">=</span> re<span class="token punctuation">.</span>search <span class="token comment"># 搜索</span>

<span class="token comment"># 获取结果</span>
r1<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
r1<span class="token punctuation">.</span>groups<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> json
<span class="token comment"># 序列化 为 string</span>
json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 反序列化</span>
json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数式、闭包" tabindex="-1"><a class="header-anchor" href="#函数式、闭包" aria-hidden="true">#</a> 函数式、闭包</h2><h3 id="闭包变量" tabindex="-1"><a class="header-anchor" href="#闭包变量" aria-hidden="true">#</a> 闭包变量</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 局部可以访问上级的变量，但是不能像js那样修改</span>
<span class="token comment"># 闭包变量被赋值时就会被认为是局部变量</span>
<span class="token keyword">def</span> <span class="token function">curve_pre</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 使用global关键字可以改变全局变量</span>
  <span class="token keyword">global</span> name
  name <span class="token operator">=</span> <span class="token string">&#39;curve_pre&#39;</span>
  <span class="token keyword">def</span> <span class="token function">curve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 申明非本地变量</span>
    <span class="token keyword">nonlocal</span> name
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;i am curve and &#39;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span>
  <span class="token keyword">return</span> curve

curve_pre<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="匿名函数" tabindex="-1"><a class="header-anchor" href="#匿名函数" aria-hidden="true">#</a> 匿名函数</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token comment"># 匿名函数</span>
<span class="token comment"># lambda prama_list: expr</span>
<span class="token keyword">lambda</span> x<span class="token punctuation">,</span> y<span class="token punctuation">:</span> x <span class="token operator">+</span> y
<span class="token comment"># 三元表达式</span>
<span class="token comment"># x &gt; y ? x : y</span>
x <span class="token keyword">if</span> x <span class="token operator">&gt;</span> y <span class="token keyword">else</span> y

<span class="token comment"># map 遍历</span>
<span class="token builtin">map</span><span class="token punctuation">(</span>func<span class="token punctuation">,</span> <span class="token builtin">list</span><span class="token punctuation">)</span>
<span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">,</span> y<span class="token punctuation">:</span> x <span class="token operator">*</span> x <span class="token operator">+</span> y<span class="token punctuation">,</span> listx<span class="token punctuation">,</span> listy<span class="token punctuation">)</span>
<span class="token comment"># reduce 遍历</span>
<span class="token keyword">from</span> functools <span class="token keyword">import</span> <span class="token builtin">reduce</span>
<span class="token builtin">reduce</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">,</span>y<span class="token punctuation">:</span> x<span class="token operator">+</span>y<span class="token punctuation">,</span> listx<span class="token punctuation">,</span> first<span class="token punctuation">)</span>
<span class="token comment"># filter</span>
<span class="token builtin">filter</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> 装饰器</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">def</span> <span class="token function">decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># args 参数列表，kw 关键字参数(以字典接收剩余参数)</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kw<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kw<span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper
<span class="token comment"># 使用装饰器</span>
<span class="token decorator annotation punctuation">@decorator</span>
<span class="token keyword">def</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;this is a func&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h3 id="调试技巧" tabindex="-1"><a class="header-anchor" href="#调试技巧" aria-hidden="true">#</a> 调试技巧</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 当 assert 后面跟的是 False 时， 将抛出错误</span>
<span class="token keyword">assert</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token string">&#39;blabla&#39;</span>

 <span class="token builtin">locals</span><span class="token punctuation">:</span> 执行 <span class="token builtin">locals</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 之后<span class="token punctuation">,</span> 返回一个字典<span class="token punctuation">,</span> 包含<span class="token punctuation">(</span>current scope<span class="token punctuation">)</span>当前范围下的局部变量。
 <span class="token builtin">globals</span><span class="token punctuation">:</span> 执行 <span class="token builtin">globals</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 之后<span class="token punctuation">,</span> 返回一个字典<span class="token punctuation">,</span> 包含<span class="token punctuation">(</span>current scope<span class="token punctuation">)</span>当前范围下的全局变量。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列表推导式" tabindex="-1"><a class="header-anchor" href="#列表推导式" aria-hidden="true">#</a> 列表推导式</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 列表推到式，适用list, set, tuple, dict</span>
<span class="token comment"># 平方为例</span>
a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>
b <span class="token operator">=</span> <span class="token punctuation">[</span>i<span class="token operator">**</span><span class="token number">2</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> a<span class="token punctuation">]</span>
<span class="token comment"># 加入条件过滤</span>
b <span class="token operator">=</span> <span class="token punctuation">[</span>i<span class="token operator">**</span><span class="token number">2</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> a <span class="token keyword">if</span> i<span class="token operator">&gt;</span><span class="token number">5</span><span class="token punctuation">]</span>

<span class="token comment"># 字典中使用</span>
stu <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;张三&#39;</span><span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token string">&#39;李四&#39;</span><span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token string">&#39;王五&#39;</span><span class="token punctuation">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
<span class="token comment"># 取key</span>
b <span class="token operator">=</span> <span class="token punctuation">[</span>key <span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token keyword">in</span> stu<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment"># [&#39;张三&#39;, &#39;李四&#39;, &#39;王五&#39;]</span>
<span class="token comment"># 翻转key-value</span>
b <span class="token operator">=</span> <span class="token punctuation">{</span>value<span class="token punctuation">:</span>key <span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token keyword">in</span> stu<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="none-类型" tabindex="-1"><a class="header-anchor" href="#none-类型" aria-hidden="true">#</a> None 类型</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token boolean">None</span> 不等于 <span class="token string">&#39;&#39;</span> <span class="token operator">|</span> <span class="token number">0</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token boolean">False</span>
<span class="token comment"># None 是属于 NoneType对象</span>
<span class="token keyword">if</span> <span class="token boolean">None</span><span class="token punctuation">:</span> <span class="token comment"># 这里的等同于  bool(None)</span>

<span class="token comment"># 自定义类的判断</span>
<span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__len__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
    <span class="token keyword">def</span> <span class="token function">__bool__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
<span class="token comment"># 判断时，会先尝试调用__bool__, 不行时再调用__len__</span>
test <span class="token operator">=</span> Test<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">bool</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token comment"># 就是 False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="with-as-预定义清理语句" tabindex="-1"><a class="header-anchor" href="#with-as-预定义清理语句" aria-hidden="true">#</a> with as 预定义清理语句</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 基本思想是with所求值的对象必须有一个enter()方法，一个exit()方法。</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;/tmp/foo.txt&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
    data <span class="token operator">=</span> <span class="token builtin">file</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 例如</span>
<span class="token keyword">class</span> <span class="token class-name">He</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__enter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;you are in&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token string">&#39;VALUE&#39;</span>

    <span class="token keyword">def</span> <span class="token function">__exit__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> trace<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;you are out&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">with</span> He<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> L<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,65),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","python入门.html.vue"]]);export{d as default};
