import{_ as n,o as s,c as a,d as e}from"./app.4b7e0070.js";const p={},t=e(`<h1 id="python-\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#python-\u5165\u95E8" aria-hidden="true">#</a> python \u5165\u95E8</h1><h2 id="\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B</h2><h3 id="\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u8FD0\u7B97\u7B26</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>\u8FD0\u7B97\u7B26 <span class="token operator">+</span> <span class="token operator">-</span> <span class="token operator">*</span> <span class="token operator">/</span>\u9664\u6CD5 <span class="token operator">//</span>\u9664\u6574 <span class="token operator">%</span>\u6A21 <span class="token operator">**</span>\u5E42
\u8D4B\u503C\u8FD0\u7B97\u7B26 <span class="token operator">+=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>   \u540C\u4E0A
\u6BD4\u8F83\u8FD0\u7B97\u7B26 <span class="token operator">&gt;</span> <span class="token operator">&lt;</span> <span class="token operator">!=</span> <span class="token operator">==</span> <span class="token operator">&lt;=</span> <span class="token operator">&gt;=</span>
\u903B\u8F91\u8FD0\u7B97\u7B26 <span class="token keyword">and</span> <span class="token operator">/</span> <span class="token keyword">or</span> <span class="token operator">/</span> <span class="token keyword">not</span>
\u6210\u5458\u8FD0\u7B97\u7B26 <span class="token keyword">in</span> <span class="token operator">/</span> <span class="token keyword">not</span> <span class="token keyword">in</span>
\u8EAB\u4EFD\u8FD0\u7B97\u7B26<span class="token punctuation">(</span>\u6BD4\u8F83\u5185\u5B58\u5730\u5740<span class="token punctuation">)</span>
          <span class="token keyword">is</span> <span class="token operator">/</span> <span class="token keyword">is</span> <span class="token keyword">not</span>
\u4F4D\u8FD0\u7B97\u7B26
    <span class="token operator">&amp;</span> \u6309\u4F4D\u4E0E <span class="token number">2</span> <span class="token operator">&amp;</span> <span class="token number">3</span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">(</span><span class="token number">0b10</span> \u4E0E <span class="token number">0b11</span> \u5F97 <span class="token number">0b10</span><span class="token punctuation">)</span>
    <span class="token operator">|</span> \u6309\u4F4D\u6216
    <span class="token operator">^</span> \u6309\u4F4D\u5F02\u6216
    <span class="token operator">~</span> \u6309\u4F4D\u53D6\u53CD
    <span class="token operator">&lt;&lt;</span> \u6309\u4F4D\u5DE6\u79FB
    <span class="token operator">&gt;&gt;</span> \u6309\u4F4D\u53F3\u79FB

\u5224\u65AD\u662F\u5426\u662F\u67D0\u7C7B\u578B
<span class="token builtin">isinstance</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
<span class="token builtin">isinstance</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">float</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u5B57\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u5B57\u7C7B\u578B</h3><p>int float bool complex</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u6574\u578B\u6D6E\u70B9\u578B</span>
a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1.1</span>
<span class="token comment"># \u4E8C\u8FDB\u5236 \u516B\u8FDB\u5236 \u5341\u516D\u8FDB\u5236</span>
<span class="token number">0b10</span> <span class="token number">0o10</span> <span class="token number">0x10</span>

<span class="token comment"># bool \u7C7B\u578B</span>
<span class="token comment"># \u7A7A\u503C\u90FD\u662FFalse</span>
<span class="token builtin">bool</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">False</span>

<span class="token comment"># complex \u590D\u6570 \u7C7B\u578B</span>
n <span class="token operator">=</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">4j</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>n <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment"># 32 + 16j + 16j + 32j^2  = 32j</span>

<span class="token comment"># \u8FDB\u5236\u8F6C\u6362</span>
<span class="token builtin">bin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">oct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">hex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token comment"># \u6574\u9664</span>
<span class="token number">1</span><span class="token operator">//</span><span class="token number">2</span> <span class="token operator">=</span> <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u7EC4" aria-hidden="true">#</a> \u7EC4</h3><p>\u6709\u5E8F\u5E8F\u5217(sequence)\uFF1Astr list tuple (\u53EF\u901A\u8FC7\u4E0B\u6807\u8BBF\u95EE\uFF0C\u53EF\u4EE5[0:3]\u5207\u7247\u64CD\u4F5C) \u96C6\u5408\uFF1Aset (\u65E0\u5E8F\uFF0C\u6CA1\u6709\u7D22\u5F15\uFF0C\u4E0D\u80FD\u5207\u7247) \u5B57\u5178\uFF1Adict (key: value \u7684\u6982\u5FF5)</p><p>list[0:length:\u6B65\u957F]\uFF0C \u5207\u7247\u64CD\u4F5C list[start, end, step] hex(id(a)), a \u7684\u5185\u5B58\u5730\u5740</p><h4 id="\u5B57\u7B26\u4E32-str" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32-str" aria-hidden="true">#</a> \u5B57\u7B26\u4E32 str</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u5355\u5F15\u53F7 \u53CC\u5F15\u53F7 \u4E09\u5F15\u53F7</span>
<span class="token comment"># \u4E09\u5F15\u53F7\u53EF\u4EE5\u6307\u5B9A\u591A\u884C\u5B57\u7B26\u4E32</span>

<span class="token comment"># r \u8868\u793A \u539F\u59CB\u5B57\u7B26\u4E32 \\n \u4E0D\u8F6C\u4E49</span>
a <span class="token operator">=</span> <span class="token string">r&#39;abc\\nbcd&#39;</span>

<span class="token comment"># unicode \u76F8\u4E92\u8F6C\u6362</span>
<span class="token builtin">chr</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span>
<span class="token builtin">ord</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
<span class="token comment"># \\d\uFF1A\u5341\u8FDB\u5236\uFF1B\\o\uFF1A\u516B\u8FDB\u5236\uFF1B\\x \u5341\u516D\u8FDB\u5236</span>
<span class="token comment"># \\u unicode\u7801</span>
<span class="token comment"># \\xaa \u21D2 chr(0xaa) \u21D2 chr(16*a+a)</span>

<span class="token comment"># \u5B57\u7B26\u4E32\u53EF\u4EE5\u76F4\u63A5\u8FD0\u7B97</span>
b <span class="token operator">=</span><span class="token string">&#39;python&#39;</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token comment"># &#39;pythonpython&#39;</span>

<span class="token comment"># \u4ECE\u524D\u81F3\u540E\uFF0C\u548C\u4ECE\u540E\u81F3\u524D\u7684\u7D22\u5F15\u65B9\u5F0F</span>
<span class="token comment"># \u5B57\u7B26\u4E32\u4E0D\u53EF\u6539\u53D8\uFF0C\u4E0D\u53EF\u901A\u8FC7\u7D22\u5F15\u8D4B\u503C, \u5982 b[0] = &#39;h&#39;</span>
b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment"># p</span>
b<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment"># n</span>

<span class="token comment"># \u5B57\u7B26\u4E32\u5207\u7247\uFF0C\u53D8\u91CF[\u5934\u4E0B\u6807:\u5C3E\u4E0B\u6807]\uFF0C \u524D\u95ED\u540E\u5F00</span>
<span class="token string">&#39;hello world&#39;</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token comment"># &#39;ll&#39;</span>

<span class="token comment"># \u683C\u5F0F\u5360\u4F4D\u7B26%s\uFF0C\u8FD9\u662F\u8001\u7684\u683C\u5F0F\u5316\uFF0C\u73B0\u5728\u4E00\u822C\u7528str.format()</span>
<span class="token comment"># https://blog.csdn.net/jiangbo721/article/details/78468571</span>
c <span class="token operator">=</span> <span class="token string">&#39;place %s&#39;</span> <span class="token operator">%</span> <span class="token string">&#39;holder&#39;</span> <span class="token comment"># \u4F20\u5165\u5355\u503C</span>
c <span class="token operator">=</span> <span class="token string">&#39;i am %s, age is %s}&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;23&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># \u4F20\u5165\u5143\u7EC4</span>
c <span class="token operator">=</span> <span class="token string">&quot;I&#39;m %(name)s. I&#39;m %(age)d year old&quot;</span> <span class="token operator">%</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;Vamei&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span><span class="token number">99</span><span class="token punctuation">}</span> <span class="token comment"># \u4F20\u5165\u5B57\u5178</span>
e <span class="token operator">=</span> <span class="token string">&#39;i am {0}, age is {1}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&#39;z3&#39;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span>
e <span class="token operator">=</span> <span class="token string">&#39;i am {}, age is {}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token string">&#39;z3&#39;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># \u4F20\u5165\u5143\u7EC4</span>
e <span class="token operator">=</span> <span class="token string">&#39;i am {name:s}, age is {age:d}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token operator">**</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">23</span><span class="token punctuation">}</span><span class="token punctuation">)</span>       <span class="token comment"># \u4F20\u5165\u5B57\u5178</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5217\u8868-list" tabindex="-1"><a class="header-anchor" href="#\u5217\u8868-list" aria-hidden="true">#</a> \u5217\u8868 list</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u5F15\u7528\u7C7B\u578B</span>
a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">,</span> true<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token comment"># \u9009\u53D6\u5217\u8868\uFF0C\u524D\u95ED\u540E\u5F00\u533A\u95F4</span>
a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>
a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment"># return [1, &#39;two&#39;]</span>

<span class="token comment"># \u8FD0\u7B97</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">2</span>      <span class="token comment"># [1, 2, 1, 2]</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>    <span class="token comment"># [1, 2, 3]</span>

<span class="token comment"># \u4FEE\u6539\u533A\u95F4\u7684\u503C</span>
a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span> <span class="token comment"># \u63D2\u5165</span>
a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>     <span class="token comment"># \u5220\u9664</span>

<span class="token comment"># \u65B9\u6CD5</span>
a<span class="token punctuation">.</span>append<span class="token punctuation">(</span>val<span class="token punctuation">)</span>   <span class="token comment"># \u5165\u6808\u4E00\u4E2A\u503C\uFF0Cpush</span>
a<span class="token punctuation">.</span>extend<span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span>  <span class="token comment"># \u6269\u5C55\u6570\u7EC4\uFF0Cconcat</span>
a<span class="token punctuation">.</span>insert<span class="token punctuation">(</span>i<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token comment"># \u63D2\u5165\u503C\u5230i\u4F4D\u7F6E</span>
a<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>n<span class="token punctuation">)</span>     <span class="token comment"># \u79FB\u9664\u7B2Cn\u4E2A\u5143\u7D20</span>
a<span class="token punctuation">.</span>pop<span class="token punctuation">(</span>n<span class="token punctuation">)</span>        <span class="token comment"># pop\u51FA\u7B2Cn\u4E2A\u503C</span>
a<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>index<span class="token punctuation">(</span>val<span class="token punctuation">)</span>    <span class="token comment"># \u627E\u51FAvalue\u503C\u7684index</span>
a<span class="token punctuation">.</span>count<span class="token punctuation">(</span>val<span class="token punctuation">)</span>    <span class="token comment"># val\u51FA\u73B0\u6B21\u6570</span>
a<span class="token punctuation">.</span>reverse<span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment"># \u5012\u5E8F</span>
a<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># \u6392\u5E8F</span>
a<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># \u590D\u5236</span>

<span class="token comment"># \u5217\u8868\u63A8\u5BFC\u5F0F</span>
a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
a1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">]</span>
b <span class="token operator">=</span> <span class="token punctuation">[</span>x<span class="token operator">*</span><span class="token number">3</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> a<span class="token punctuation">]</span> <span class="token comment"># [3, 6, 9, 12]</span>
c <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>x<span class="token punctuation">,</span> x<span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> a <span class="token punctuation">]</span> <span class="token comment"># [[1, 3], [2, 6], [3, 9], [4, 12]]</span>
<span class="token comment"># \u4F7F\u7528 if \u8FC7\u6EE4</span>
d <span class="token operator">=</span> <span class="token punctuation">[</span>x<span class="token operator">*</span><span class="token number">3</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> a <span class="token keyword">if</span> x <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment"># [12]</span>
e <span class="token operator">=</span> <span class="token punctuation">[</span>x<span class="token operator">+</span>y <span class="token keyword">for</span> x <span class="token keyword">in</span> a <span class="token keyword">for</span> y <span class="token keyword">in</span> a1<span class="token punctuation">]</span> <span class="token comment"># [6, 11, 7, 12, 8, 13, 9, 14]</span>

<span class="token comment"># \u4F8B\uFF1A3*4 \u77E9\u9635\u66FF\u6362\u4E3A4*3</span>
matrix <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>

b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>row<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">for</span> row <span class="token keyword">in</span> matrix<span class="token punctuation">]</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u961F\u5217</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> collections <span class="token keyword">import</span> deque

q <span class="token operator">=</span> deque<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

q<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

q<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5143\u7EC4-tuple" tabindex="-1"><a class="header-anchor" href="#\u5143\u7EC4-tuple" aria-hidden="true">#</a> \u5143\u7EC4 tuple</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u503C\u7C7B\u578B\uFF0C\u4E0D\u53EF\u4FEE\u6539</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># tu \u4F1A\u81EA\u5DF1\u6210\u4E3A\u5143\u7EC4(1, 2, 3)</span>
tu <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span>
a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> tu

<span class="token comment"># \u5143\u7EC4 \u53EF\u4EE5\u5207\u7247(\u540C\u4E0A),\u53EF\u4EE5\u76F8\u52A0</span>
tu <span class="token operator">+</span> tu <span class="token comment"># (1,2,3,1,2,3)</span>

<span class="token comment"># \u65B9\u6CD5</span>
<span class="token builtin">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">tuple</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># \u628A\u5217\u8868\u8F6C\u5316\u4E3A\u5143\u7EC4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u96C6\u5408-set" tabindex="-1"><a class="header-anchor" href="#\u96C6\u5408-set" aria-hidden="true">#</a> \u96C6\u5408 set</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u5F15\u7528\u7C7B\u578B\uFF0C\u65E0\u5E8F\u3001\u4E0D\u91CD\u590D\u7684</span>
<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span> <span class="token operator">==</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span>\uFF0C<span class="token number">2</span>\uFF0C<span class="token number">1</span><span class="token punctuation">}</span>

<span class="token comment"># \u96C6\u5408\u7684\u6BD4\u8F83</span>
a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span>
b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span>

<span class="token comment"># \u5DEE\u96C6</span>
a <span class="token operator">-</span> b <span class="token comment"># {1,2}</span>
<span class="token comment"># \u5E76\u96C6</span>
a <span class="token operator">|</span> b <span class="token comment"># {1, 2, 3, 4, 5, 6}</span>
<span class="token comment"># \u4EA4\u96C6</span>
a <span class="token operator">&amp;</span> b <span class="token comment"># {3, 4}</span>
<span class="token comment"># \u4E0D\u540C\u65F6\u5B58\u5728</span>
a <span class="token operator">^</span> b <span class="token comment"># {1, 2, 5, 6}</span>

<span class="token comment"># \u652F\u6301 \u5217\u8868\u63A8\u5BFC\u5F0F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B57\u5178-dict" tabindex="-1"><a class="header-anchor" href="#\u5B57\u5178-dict" aria-hidden="true">#</a> \u5B57\u5178 dict</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u5F15\u7528\u7C7B\u578B</span>
users <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">:</span> <span class="token number">1320</span><span class="token punctuation">,</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">:</span> <span class="token number">1557</span><span class="token punctuation">,</span> <span class="token string">&#39;Rose&#39;</span><span class="token punctuation">:</span> <span class="token number">1886</span><span class="token punctuation">}</span>
<span class="token comment"># \u5220\u9664</span>
<span class="token keyword">del</span> users<span class="token punctuation">[</span><span class="token string">&#39;Rose&#39;</span><span class="token punctuation">]</span>

<span class="token comment"># \u53EF\u4EE5\u4ECEsequence\u4E2D\u6784\u5EFA\u5B57\u5178</span>
<span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;sape&#39;</span><span class="token punctuation">,</span> <span class="token number">4139</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;guido&#39;</span><span class="token punctuation">,</span> <span class="token number">4127</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;jack&#39;</span><span class="token punctuation">,</span> <span class="token number">4098</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># \u5185\u7F6E\u65B9\u6CD5</span>
<span class="token builtin">dict</span><span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># keys \u7684 list</span>
<span class="token builtin">dict</span><span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">dict</span><span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># \u8FD4\u56DE (key, value) \u5143\u7EC4</span>
<span class="token builtin">dict</span><span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token builtin">dict</span><span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># \u6D45\u62F7\u8D1D</span>
<span class="token builtin">dict</span><span class="token punctuation">.</span>fromkeys<span class="token punctuation">(</span>seq<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token comment"># \u6839\u636E\u5E8F\u5217\u751F\u6210\u5B57\u5178</span>
<span class="token builtin">dict</span><span class="token punctuation">.</span>get<span class="token punctuation">(</span>key<span class="token punctuation">,</span> default<span class="token punctuation">)</span>    <span class="token comment"># \u83B7\u53D6\u6307\u5B9A\u5B57\u6BB5\uFF0C\u6CA1\u6709\u8FD4\u56DE\u9ED8\u8BA4\u503C</span>
<span class="token builtin">dict</span><span class="token punctuation">.</span>setdefault<span class="token punctuation">(</span>key<span class="token punctuation">,</span> default<span class="token punctuation">)</span>
<span class="token builtin">dict</span><span class="token punctuation">.</span>update<span class="token punctuation">(</span>dict2<span class="token punctuation">)</span> <span class="token comment"># \u628Adict2 \u66F4\u65B0\u5230dict</span>

<span class="token comment"># \u6210\u5458\u6D4B\u8BD5</span>
<span class="token string">&quot;Tom&quot;</span> <span class="token keyword">in</span> users <span class="token comment"># True</span>

<span class="token comment"># \u65B9\u6CD5</span>
<span class="token builtin">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">str</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># \u652F\u6301 \u5217\u8868\u63A8\u5BFC\u5F0F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u679A\u4E3E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u679A\u4E3E\u7C7B\u578B" aria-hidden="true">#</a> \u679A\u4E3E\u7C7B\u578B</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u7EE7\u627F\u81EA\u7C7B, \u5E76\u4E0D\u662F\u5355\u72EC\u7684\u7C7B\u578B</span>
<span class="token keyword">from</span> enum <span class="token keyword">import</span> Enum

<span class="token keyword">class</span> <span class="token class-name">VIP</span><span class="token punctuation">(</span>Enum<span class="token punctuation">)</span><span class="token punctuation">:</span>
    yellow <span class="token operator">=</span> <span class="token number">1</span>
    yellow_alias <span class="token operator">=</span> <span class="token number">1</span>
    green <span class="token operator">=</span> <span class="token number">2</span>
    black <span class="token operator">=</span> <span class="token number">3</span>
<span class="token comment"># \u4F7F\u7528for in \u904D\u5386</span>
<span class="token comment"># \u4F7F\u7528VIP.__members__\u904D\u5386\u522B\u540D</span>
VIP<span class="token punctuation">.</span>yellow VIP<span class="token punctuation">[</span>VIP<span class="token punctuation">.</span>yellow<span class="token punctuation">.</span>name<span class="token punctuation">]</span> VIP<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment"># \u9650\u5236\u6807\u7B7E\u7C7B\u578B\uFF0C \u5E76\u552F\u4E00</span>
<span class="token keyword">from</span> enum <span class="token keyword">import</span> IntEnum<span class="token punctuation">,</span> unique

<span class="token decorator annotation punctuation">@unique</span>
<span class="token keyword">class</span> <span class="token class-name">VIP</span><span class="token punctuation">(</span>IntEnum<span class="token punctuation">)</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u8868\u8FBE\u5F0F</h2><p>\u8868\u8FBE\u5F0F(Expression)\uFF1A\u9884\u7B97\u7B26(operator)\u548C\u64CD\u4F5C\u6570(operand)\u6784\u6210\u7684\u5E8F\u5217</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5355\u884C\u6CE8\u91CA</span>
<span class="token string">&#39;&#39;</span>&#39;
\u591A\u884C\u6CE8\u91CA
<span class="token string">&#39;&#39;</span>&#39;
<span class="token string">&quot;&quot;</span>&quot;
\u591A\u884C\u6CE8\u91CA
<span class="token string">&quot;&quot;</span>&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6D41\u7A0B\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u63A7\u5236" aria-hidden="true">#</a> \u6D41\u7A0B\u63A7\u5236</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u53EF\u7528pass\u4FDD\u7559\u7ED3\u6784\u5B8C\u6574</span>

<span class="token comment"># \u83B7\u53D6\u8F93\u5165\u503C</span>
value <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># \u5224\u65AD</span>
<span class="token keyword">if</span> condition<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;something&#39;</span><span class="token punctuation">,</span> end <span class="token operator">=</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> condition<span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># while\u5FAA\u73AF</span>
<span class="token keyword">while</span> counter<span class="token punctuation">:</span>
    counter <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">else</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>EOF<span class="token punctuation">)</span>

<span class="token comment"># range(start, end, step))</span>
<span class="token comment"># for\u5FAA\u73AF</span>
<span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
    <span class="token keyword">if</span> x <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>

<span class="token keyword">for</span> item <span class="token keyword">in</span> l<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u904D\u5386\u5B8C\u4E86&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5305\u4E0E\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u5305\u4E0E\u6A21\u5757" aria-hidden="true">#</a> \u5305\u4E0E\u6A21\u5757</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u6A21\u5757 \u4F1A\u627E\u67E5sys.path\u7684\u8DEF\u5F84</span>
<span class="token comment"># \u5F15\u5165\u6A21\u5757\u5168\u90E8\u5185\u5BB9</span>
<span class="token keyword">import</span> module_name <span class="token comment"># \u4F7F\u7528 module_name.var</span>
<span class="token comment"># \u90E8\u5206\u5F15\u5165\uFF0Cvar\u53EF\u4F7F\u7528 *(\u4E0D\u542B_\u5F00\u5934\u7684\u5C5E\u6027)</span>
<span class="token keyword">from</span> module_name <span class="token keyword">import</span> var <span class="token comment"># \u76F4\u63A5\u4F7F\u7528 var</span>

<span class="token comment"># \u6A21\u5757\u4E2D __name__ \u5224\u65AD\u662F\u5426\u662F\u5F15\u5165\u8C03\u7528\uFF0C__main__\u4E3A\u81EA\u5DF1\u6267\u884C</span>
<span class="token builtin">dir</span><span class="token punctuation">(</span>module_name<span class="token punctuation">)</span> <span class="token comment"># \u83B7\u53D6\u6A21\u5757\u6240\u5B9A\u4E49\u7684\u540D\u79F0</span>

<span class="token comment"># \u522B\u540D</span>
<span class="token keyword">import</span> module_name <span class="token keyword">as</span> alias


<span class="token comment"># \u5305\u662F\u4E00\u79CD\u7BA1\u7406 Python \u6A21\u5757\u547D\u540D\u7A7A\u95F4\u7684\u5F62\u5F0F\uFF0C\u91C7\u7528&quot;\u70B9\u6A21\u5757\u540D\u79F0&quot;\u3002</span>
<span class="token comment"># \u76EE\u5F55\u4E0B\u6709__init__.py\u6587\u4EF6\uFF0C\u5C31\u4F1A\u88AB python \u5F53\u505A\u5305</span>
sound<span class="token operator">/</span>                          \u9876\u5C42\u5305
      __init__<span class="token punctuation">.</span>py               \u521D\u59CB\u5316 sound \u5305
      formats<span class="token operator">/</span>                  \u6587\u4EF6\u683C\u5F0F\u8F6C\u6362\u5B50\u5305
              __init__<span class="token punctuation">.</span>py
              wavread<span class="token punctuation">.</span>py
              wavwrite<span class="token punctuation">.</span>py

<span class="token comment"># \u5F15\u5165\u540C\u6A21\u5757\uFF0C \u53EF\u4EE5\u76F4\u63A5\u5F15\u5165\u6A21\u5757\u6216\u53D8\u91CF</span>
<span class="token keyword">from</span> sound<span class="token punctuation">.</span>formats <span class="token keyword">import</span> wavread

<span class="token comment"># __init__.py \u6587\u4EF6\u4E0B\u4E00\u822C\u5199 __all__ = [&#39;\u9700\u8981\u5BFC\u51FA\u7684\u6A21\u5757&#39;]\uFF0C \u5BF9\u5E94\u4F7F\u7528\u65F6\u7684ipmort *</span>
<span class="token comment"># \u5305\u540D.\u6587\u4EF6\u540D\uFF08__init__.py\u6A21\u5757\u7684\u6A21\u5757\u540D\u5C31\u662F\u5305\u540D\uFF09</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>__package__<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>__doc__<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>__file__<span class="token punctuation">)</span>

<span class="token comment"># \u5176\u4ED6\u65B9\u5F0F\u5F15\u5165</span>
<span class="token keyword">from</span> module_name <span class="token keyword">import</span> var<span class="token operator">/</span>mod<span class="token operator">/</span><span class="token operator">*</span>
<span class="token comment"># \u5BFC\u51FA\u65F6\u4F7F\u7528\u6A21\u5757\u5185\u7F6E\u5C5E\u6027 __all__ = [&#39;a&#39;], \u53EF\u4EE5\u63A7\u5236import * \u65F6\u9700\u8981\u5F15\u5165\u7684\u53D8\u91CF</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h2><h3 id="\u51FD\u6570\u7533\u660E" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7533\u660E" aria-hidden="true">#</a> \u51FD\u6570\u7533\u660E</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">funcname</span><span class="token punctuation">(</span>parameter_list<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token comment"># \u53EF\u53D8\u53C2\u6570</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># args is a tuple \u5269\u4F59\u53C2\u6570\uFF0C\u5F53\u505A\u5143\u7EC4</span>
    <span class="token keyword">for</span> x <span class="token keyword">in</span> args<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>

<span class="token comment"># \u5173\u952E\u5B57\u53C2\u6570</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">**</span>kargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># karg is type of dict \u6307\u5B9A\u5173\u952E\u5B57\u7684\u53C2\u6570\uFF0C\u5982\uFF1Ax=1</span>
    <span class="token keyword">pass</span>

<span class="token comment"># \u53EF\u4EE5\u8FD4\u56DE\u591A\u4E2A\u53C2\u6570\u6784\u6210\u5143\u7956</span>
<span class="token keyword">return</span> res1<span class="token punctuation">,</span> res2<span class="token punctuation">,</span> res3

<span class="token comment"># \u89E3\u6784\u5143\u7EC4</span>
r1<span class="token punctuation">,</span> r2<span class="token punctuation">,</span> r3 <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># \u51FD\u6570\u53C2\u6570\u4E3A\u5FC5\u987B\u53C2\u6570 def add(x, y)</span>
<span class="token comment"># \u5F62\u53C2\u4EFB\u610F\u8D4B\u503C\u5BF9\u5E94,\u53EF\u4EE5\u5207\u6362\u4F20\u53C2\u987A\u5E8F</span>
add<span class="token punctuation">(</span>y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> x <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C40\u90E8\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5C40\u90E8\u53D8\u91CF" aria-hidden="true">#</a> \u5C40\u90E8\u53D8\u91CF</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u5C40\u90E8\u53EF\u4EE5\u8BBF\u95EE\u4E0A\u7EA7\u7684\u53D8\u91CF\uFF0C\u4F46\u662F\u4E0D\u80FD\u50CFjs\u90A3\u6837\u4FEE\u6539</span>
<span class="token comment"># \u95ED\u5305\u53D8\u91CF\u88AB\u8D4B\u503C\u65F6\u5C31\u4F1A\u88AB\u8BA4\u4E3A\u662F\u5C40\u90E8\u53D8\u91CF</span>
<span class="token keyword">def</span> <span class="token function">curve_pre</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u4F7F\u7528global\u5173\u952E\u5B57\u53EF\u4EE5\u6539\u53D8\u5168\u5C40\u53D8\u91CF</span>
  <span class="token keyword">global</span> name
  name <span class="token operator">=</span> <span class="token string">&#39;curve_pre&#39;</span>
  <span class="token keyword">def</span> <span class="token function">curve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u7533\u660E\u975E\u672C\u5730\u53D8\u91CF</span>
    <span class="token keyword">nonlocal</span> name
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;i am curve and &#39;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span>
  <span class="token keyword">return</span> curve

curve_pre<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7C7B\u4E0E\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u4E0E\u5BF9\u8C61" aria-hidden="true">#</a> \u7C7B\u4E0E\u5BF9\u8C61</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Stu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token comment"># \u79C1\u6709\u5C5E\u6027\u3001\u65B9\u6CD5,\u4EE5__\u5F00\u5934, \u5C06\u88AB\u6539\u540D_Stu__private</span>
    __private <span class="token operator">=</span> <span class="token string">&#39;\u79C1\u6709\u5C5E\u6027\uFF0C\u53EA\u662F\u6539\u4E86\u4E2A\u540D\u5B57\u800C\u5DF2\uFF0C\u5E76\u6CA1\u6CD5\u963B\u6B62\u8BBF\u95EE&#39;</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># \u6784\u9020\u51FD\u6570</span>
        <span class="token keyword">pass</span>
        <span class="token comment"># \u8BBF\u95EE\u7C7B\u5C5E\u6027(\u9759\u6001\u5C5E\u6027)</span>
        self<span class="token punctuation">.</span>__class__<span class="token punctuation">.</span>name

    <span class="token comment"># \u88C5\u9970\u5668\uFF0C\u9759\u6001\u51FD\u6570\uFF0C\u53EF\u4EE5\u4E0D\u8981\u53C2\u6570</span>
    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">funcname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token comment"># \u7C7B\u65B9\u6CD5</span>
    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">funname</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
<span class="token comment"># \u5B9E\u4F8B\u5316</span>
s <span class="token operator">=</span> Stu<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># \u7C7B\u4F3Cjs\uFF0C\u76F4\u63A5\u6DFB\u52A0\u5C5E\u6027</span>
s<span class="token punctuation">.</span>newattr <span class="token operator">=</span> <span class="token string">&#39;\u65B0\u5C5E\u6027&#39;</span>
s<span class="token punctuation">.</span>say<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># \u6253\u5370\u5B9E\u4F8B\u7684\u5B57\u5178</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>__dict__<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EE7\u627F</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u7EE7\u627F</span>
<span class="token keyword">class</span> <span class="token class-name">Stu</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># \u8C03\u7528\u7236\u7C7B\u6784\u9020\u51FD\u6570 1</span>
        Person<span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span>
        <span class="token comment"># \u8C03\u7528\u7236\u7C7B\u6784\u9020\u51FD\u6570 2</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>Stu<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>name<span class="token punctuation">)</span>

<span class="token comment"># \u591A\u91CD\u7EE7\u627F</span>
<span class="token comment"># \u540C\u540D\u7684\u5C5E\u6027\u3001\u65B9\u6CD5\u4F1A\u7531\u5DE6\u81F3\u6709\u67E5\u627E</span>
<span class="token keyword">class</span> <span class="token class-name">Stu</span><span class="token punctuation">(</span>Person<span class="token punctuation">,</span> Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7C7B\u4E13\u6709\u65B9\u6CD5</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>__init__ <span class="token punctuation">:</span> \u6784\u9020\u51FD\u6570\uFF0C\u5728\u751F\u6210\u5BF9\u8C61\u65F6\u8C03\u7528
__del__ <span class="token punctuation">:</span> \u6790\u6784\u51FD\u6570\uFF0C\u91CA\u653E\u5BF9\u8C61\u65F6\u4F7F\u7528
__repr__ <span class="token punctuation">:</span> \u6253\u5370\uFF0C\u8F6C\u6362
__setitem__ <span class="token punctuation">:</span> \u6309\u7167\u7D22\u5F15\u8D4B\u503C
__getitem__<span class="token punctuation">:</span> \u6309\u7167\u7D22\u5F15\u83B7\u53D6\u503C
__len__<span class="token punctuation">:</span> \u83B7\u5F97\u957F\u5EA6
__cmp__<span class="token punctuation">:</span> \u6BD4\u8F83\u8FD0\u7B97
__call__<span class="token punctuation">:</span> \u51FD\u6570\u8C03\u7528
__add__<span class="token punctuation">:</span> \u52A0\u8FD0\u7B97
__sub__<span class="token punctuation">:</span> \u51CF\u8FD0\u7B97
__mul__<span class="token punctuation">:</span> \u4E58\u8FD0\u7B97
__div__<span class="token punctuation">:</span> \u9664\u8FD0\u7B97
__mod__<span class="token punctuation">:</span> \u6C42\u4F59\u8FD0\u7B97
__pow__<span class="token punctuation">:</span> \u4E58\u65B9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u7B97\u7B26\u91CD\u8F7D</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">__add__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> self<span class="token punctuation">.</span>age <span class="token operator">+</span> other<span class="token punctuation">.</span>age

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6B63\u5219" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219" aria-hidden="true">#</a> \u6B63\u5219</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u5B57\u7B26\u4E32\u68C0\u6D4B\u51FD\u6570</span>
a<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&#39;some&#39;</span><span class="token punctuation">)</span>
<span class="token string">&#39;some&#39;</span> <span class="token keyword">in</span> a

<span class="token comment"># \u6B63\u5219\uFF0C\u4F7F\u7528re\u6A21\u5757</span>
<span class="token keyword">import</span> re
re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">&#39;parttern&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
<span class="token comment"># \u89C4\u5219\u548C\u5176\u4ED6\u8BED\u8A00\u5DEE\u4E0D\u591A</span>
<span class="token comment"># \u9ED8\u8BA4\u8D2A\u5A6A\u5339\u914D\uFF0C\u91CF\u8BCD\u52A0?\u5373\u53EF\u8FDB\u5165\u975E\u8D2A\u5A6A</span>
a <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">r&#39;\\bf[a-z]*&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;which foot or hand fell fastest&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># re.I \u5FFD\u7565\u5927\u5C0F\u5199\uFF0C re.S .\u5339\u914D\u4EFB\u610F</span>
re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">&#39;parttern&#39;</span><span class="token punctuation">,</span> string<span class="token punctuation">,</span> re<span class="token punctuation">.</span>I <span class="token operator">|</span> re<span class="token punctuation">.</span>S<span class="token punctuation">)</span>

<span class="token comment"># \u66FF\u6362\u7C7B\u4F3Cjs replace, count\u66FF\u6362\u591A\u5C11\u4E2A\uFF0Ccount \u4E3A0\u8868\u793A\u65E0\u9650\u5236</span>
re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">&#39;parttern&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;target&#39;</span><span class="token punctuation">,</span> string<span class="token punctuation">,</span> count<span class="token punctuation">)</span>
<span class="token comment"># \u56DE\u8C03\u4E2D\u4F7F\u7528 matched = value.group() \u53D6\u503C</span>
re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">&#39;parttern&#39;</span><span class="token punctuation">,</span> \u56DE\u8C03func<span class="token punctuation">,</span> string<span class="token punctuation">,</span> count<span class="token punctuation">)</span>
<span class="token comment"># \u6216</span>
string<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
re<span class="token punctuation">.</span><span class="token keyword">match</span> <span class="token comment"># \u4ECE\u5934\u5339\u914D</span>
r1 <span class="token operator">=</span> re<span class="token punctuation">.</span>search <span class="token comment"># \u641C\u7D22</span>

<span class="token comment"># \u83B7\u53D6\u7ED3\u679C</span>
r1<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
r1<span class="token punctuation">.</span>groups<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> json
<span class="token comment"># \u5E8F\u5217\u5316 \u4E3A string</span>
json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># \u53CD\u5E8F\u5217\u5316</span>
json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570\u5F0F\u3001\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u5F0F\u3001\u95ED\u5305" aria-hidden="true">#</a> \u51FD\u6570\u5F0F\u3001\u95ED\u5305</h2><h3 id="\u95ED\u5305\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305\u53D8\u91CF" aria-hidden="true">#</a> \u95ED\u5305\u53D8\u91CF</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u5C40\u90E8\u53EF\u4EE5\u8BBF\u95EE\u4E0A\u7EA7\u7684\u53D8\u91CF\uFF0C\u4F46\u662F\u4E0D\u80FD\u50CFjs\u90A3\u6837\u4FEE\u6539</span>
<span class="token comment"># \u95ED\u5305\u53D8\u91CF\u88AB\u8D4B\u503C\u65F6\u5C31\u4F1A\u88AB\u8BA4\u4E3A\u662F\u5C40\u90E8\u53D8\u91CF</span>
<span class="token keyword">def</span> <span class="token function">curve_pre</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u4F7F\u7528global\u5173\u952E\u5B57\u53EF\u4EE5\u6539\u53D8\u5168\u5C40\u53D8\u91CF</span>
  <span class="token keyword">global</span> name
  name <span class="token operator">=</span> <span class="token string">&#39;curve_pre&#39;</span>
  <span class="token keyword">def</span> <span class="token function">curve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u7533\u660E\u975E\u672C\u5730\u53D8\u91CF</span>
    <span class="token keyword">nonlocal</span> name
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;i am curve and &#39;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span>
  <span class="token keyword">return</span> curve

curve_pre<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u533F\u540D\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u533F\u540D\u51FD\u6570" aria-hidden="true">#</a> \u533F\u540D\u51FD\u6570</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token comment"># \u533F\u540D\u51FD\u6570</span>
<span class="token comment"># lambda prama_list: expr</span>
<span class="token keyword">lambda</span> x<span class="token punctuation">,</span> y<span class="token punctuation">:</span> x <span class="token operator">+</span> y
<span class="token comment"># \u4E09\u5143\u8868\u8FBE\u5F0F</span>
<span class="token comment"># x &gt; y ? x : y</span>
x <span class="token keyword">if</span> x <span class="token operator">&gt;</span> y <span class="token keyword">else</span> y

<span class="token comment"># map \u904D\u5386</span>
<span class="token builtin">map</span><span class="token punctuation">(</span>func<span class="token punctuation">,</span> <span class="token builtin">list</span><span class="token punctuation">)</span>
<span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">,</span> y<span class="token punctuation">:</span> x <span class="token operator">*</span> x <span class="token operator">+</span> y<span class="token punctuation">,</span> listx<span class="token punctuation">,</span> listy<span class="token punctuation">)</span>
<span class="token comment"># reduce \u904D\u5386</span>
<span class="token keyword">from</span> functools <span class="token keyword">import</span> <span class="token builtin">reduce</span>
<span class="token builtin">reduce</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">,</span>y<span class="token punctuation">:</span> x<span class="token operator">+</span>y<span class="token punctuation">,</span> listx<span class="token punctuation">,</span> first<span class="token punctuation">)</span>
<span class="token comment"># filter</span>
<span class="token builtin">filter</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#\u88C5\u9970\u5668" aria-hidden="true">#</a> \u88C5\u9970\u5668</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">def</span> <span class="token function">decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># args \u53C2\u6570\u5217\u8868\uFF0Ckw \u5173\u952E\u5B57\u53C2\u6570(\u4EE5\u5B57\u5178\u63A5\u6536\u5269\u4F59\u53C2\u6570)</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kw<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kw<span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper
<span class="token comment"># \u4F7F\u7528\u88C5\u9970\u5668</span>
<span class="token decorator annotation punctuation">@decorator</span>
<span class="token keyword">def</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;this is a func&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2><h3 id="\u8C03\u8BD5\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#\u8C03\u8BD5\u6280\u5DE7" aria-hidden="true">#</a> \u8C03\u8BD5\u6280\u5DE7</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u5F53 assert \u540E\u9762\u8DDF\u7684\u662F False \u65F6\uFF0C \u5C06\u629B\u51FA\u9519\u8BEF</span>
<span class="token keyword">assert</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token string">&#39;blabla&#39;</span>

 <span class="token builtin">locals</span><span class="token punctuation">:</span> \u6267\u884C <span class="token builtin">locals</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \u4E4B\u540E<span class="token punctuation">,</span> \u8FD4\u56DE\u4E00\u4E2A\u5B57\u5178<span class="token punctuation">,</span> \u5305\u542B<span class="token punctuation">(</span>current scope<span class="token punctuation">)</span>\u5F53\u524D\u8303\u56F4\u4E0B\u7684\u5C40\u90E8\u53D8\u91CF\u3002
 <span class="token builtin">globals</span><span class="token punctuation">:</span> \u6267\u884C <span class="token builtin">globals</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \u4E4B\u540E<span class="token punctuation">,</span> \u8FD4\u56DE\u4E00\u4E2A\u5B57\u5178<span class="token punctuation">,</span> \u5305\u542B<span class="token punctuation">(</span>current scope<span class="token punctuation">)</span>\u5F53\u524D\u8303\u56F4\u4E0B\u7684\u5168\u5C40\u53D8\u91CF\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5217\u8868\u63A8\u5BFC\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5217\u8868\u63A8\u5BFC\u5F0F" aria-hidden="true">#</a> \u5217\u8868\u63A8\u5BFC\u5F0F</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u5217\u8868\u63A8\u5230\u5F0F\uFF0C\u9002\u7528list, set, tuple, dict</span>
<span class="token comment"># \u5E73\u65B9\u4E3A\u4F8B</span>
a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>
b <span class="token operator">=</span> <span class="token punctuation">[</span>i<span class="token operator">**</span><span class="token number">2</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> a<span class="token punctuation">]</span>
<span class="token comment"># \u52A0\u5165\u6761\u4EF6\u8FC7\u6EE4</span>
b <span class="token operator">=</span> <span class="token punctuation">[</span>i<span class="token operator">**</span><span class="token number">2</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> a <span class="token keyword">if</span> i<span class="token operator">&gt;</span><span class="token number">5</span><span class="token punctuation">]</span>

<span class="token comment"># \u5B57\u5178\u4E2D\u4F7F\u7528</span>
stu <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token string">&#39;\u674E\u56DB&#39;</span><span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token string">&#39;\u738B\u4E94&#39;</span><span class="token punctuation">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
<span class="token comment"># \u53D6key</span>
b <span class="token operator">=</span> <span class="token punctuation">[</span>key <span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token keyword">in</span> stu<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment"># [&#39;\u5F20\u4E09&#39;, &#39;\u674E\u56DB&#39;, &#39;\u738B\u4E94&#39;]</span>
<span class="token comment"># \u7FFB\u8F6Ckey-value</span>
b <span class="token operator">=</span> <span class="token punctuation">{</span>value<span class="token punctuation">:</span>key <span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token keyword">in</span> stu<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="none-\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#none-\u7C7B\u578B" aria-hidden="true">#</a> None \u7C7B\u578B</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token boolean">None</span> \u4E0D\u7B49\u4E8E <span class="token string">&#39;&#39;</span> <span class="token operator">|</span> <span class="token number">0</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token boolean">False</span>
<span class="token comment"># None \u662F\u5C5E\u4E8E NoneType\u5BF9\u8C61</span>
<span class="token keyword">if</span> <span class="token boolean">None</span><span class="token punctuation">:</span> <span class="token comment"># \u8FD9\u91CC\u7684\u7B49\u540C\u4E8E  bool(None)</span>

<span class="token comment"># \u81EA\u5B9A\u4E49\u7C7B\u7684\u5224\u65AD</span>
<span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__len__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
    <span class="token keyword">def</span> <span class="token function">__bool__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
<span class="token comment"># \u5224\u65AD\u65F6\uFF0C\u4F1A\u5148\u5C1D\u8BD5\u8C03\u7528__bool__, \u4E0D\u884C\u65F6\u518D\u8C03\u7528__len__</span>
test <span class="token operator">=</span> Test<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">bool</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token comment"># \u5C31\u662F False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="with-as-\u9884\u5B9A\u4E49\u6E05\u7406\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#with-as-\u9884\u5B9A\u4E49\u6E05\u7406\u8BED\u53E5" aria-hidden="true">#</a> with as \u9884\u5B9A\u4E49\u6E05\u7406\u8BED\u53E5</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u57FA\u672C\u601D\u60F3\u662Fwith\u6240\u6C42\u503C\u7684\u5BF9\u8C61\u5FC5\u987B\u6709\u4E00\u4E2Aenter()\u65B9\u6CD5\uFF0C\u4E00\u4E2Aexit()\u65B9\u6CD5\u3002</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;/tmp/foo.txt&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
    data <span class="token operator">=</span> <span class="token builtin">file</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># \u4F8B\u5982</span>
<span class="token keyword">class</span> <span class="token class-name">He</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__enter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;you are in&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token string">&#39;VALUE&#39;</span>

    <span class="token keyword">def</span> <span class="token function">__exit__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> trace<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;you are out&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">with</span> He<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> L<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,65),o=[t];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","python\u5165\u95E8.html.vue"]]);export{r as default};
