import{_ as n,o as s,c as a,d as p}from"./app.4b7e0070.js";const t={},e=p(`<h1 id="go-\u8BED\u8A00\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#go-\u8BED\u8A00\u57FA\u7840" aria-hidden="true">#</a> go \u8BED\u8A00\u57FA\u7840</h1><h2 id="\u7533\u660E" tabindex="-1"><a class="header-anchor" href="#\u7533\u660E" aria-hidden="true">#</a> \u7533\u660E</h2><ol><li>\u6570\u5B57</li></ol><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> num <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">123</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;number is &quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>

<span class="token comment">// := \u81EA\u52A8\u63A8\u65AD\u53D8\u91CF\u7C7B\u578B</span>
power <span class="token operator">:=</span> <span class="token number">9000</span>
name<span class="token punctuation">,</span> age <span class="token operator">:=</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span> <span class="token number">56</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u6570\u7EC4</li></ol><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> scores <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token builtin">int</span>
scores<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">339</span>

scores <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">9001</span><span class="token punctuation">,</span> <span class="token number">9333</span><span class="token punctuation">,</span> <span class="token number">212</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">}</span>
<span class="token comment">// \u904D\u5386</span>
<span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> scores <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u5207\u7247</li></ol><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u521D\u59CB\u5316\u5207\u7247</span>
names <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;leto&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jessica&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;paul&quot;</span><span class="token punctuation">}</span>
checks <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> names <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
scores <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>

<span class="token comment">// \u957F\u5EA6 10 \uFF0C\u5BB9\u91CF 10</span>
a <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
b <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>

a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token function">append</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// append \u5207\u7247\u4F1A\u6309 2x \u7684\u65B9\u5F0F\u81EA\u52A8\u6269\u5C55\u5BB9\u91CF</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 a <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
 b <span class="token operator">:=</span> <span class="token function">cap</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

 <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">25</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  a <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
  
  <span class="token keyword">if</span> <span class="token function">cap</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>\u6620\u5C04, \u7C7B\u4F3Chash\u8868\u548C\u5B57\u5178</li></ol><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>lookup <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
lookup<span class="token punctuation">[</span><span class="token string">&quot;goku&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">9001</span>
lookup<span class="token punctuation">[</span><span class="token string">&quot;vegeta&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">111</span>
power<span class="token punctuation">,</span> exists <span class="token operator">:=</span> lookup<span class="token punctuation">[</span><span class="token string">&quot;vegeta&quot;</span><span class="token punctuation">]</span>

<span class="token comment">// len delete</span>
<span class="token keyword">var</span> total <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token function">len</span><span class="token punctuation">(</span>lookup<span class="token punctuation">)</span>
<span class="token function">delete</span><span class="token punctuation">(</span>lookup<span class="token punctuation">,</span> <span class="token string">&quot;goku&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// \u904D\u5386</span>
<span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> lookup <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="10"><li>\u51FD\u6570</li></ol><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">user</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53" aria-hidden="true">#</a> \u7ED3\u6784\u4F53</h2><p>go \u4E0D\u662F\u9762\u5411\u5BF9\u8C61\u7684\u8BED\u8A00\uFF0C\u7ED3\u6784\u4F53\u662F\u9762\u5411\u5BF9\u8C61\u7684\u66FF\u4EE3</p><ol><li>\u7533\u660E\u548C\u521D\u59CB\u5316</li></ol><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u7533\u660E\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> Dog <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 name <span class="token builtin">string</span>
 age <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// \u521D\u59CB\u5316</span>
 dog <span class="token operator">:=</span> Dog<span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">&quot;Mike&quot;</span> <span class="token punctuation">}</span>
 dog<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">2000</span>
 <span class="token comment">// \u901A\u8FC7\u6307\u9488\u4F20\u9012\u5F15\u7528</span>
 <span class="token function">addAge</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>dog<span class="token punctuation">)</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>dog<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">addAge</span><span class="token punctuation">(</span>d <span class="token operator">*</span>Dog<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 d<span class="token punctuation">.</span>age <span class="token operator">+=</span> <span class="token number">500</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u7ED3\u6784\u4F53\u4E0A\u7684\u51FD\u6570</li></ol><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> Dog <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 name <span class="token builtin">string</span>
 age <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Dog<span class="token punctuation">)</span> <span class="token function">addAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 d<span class="token punctuation">.</span>age <span class="token operator">+=</span> <span class="token number">500</span>
<span class="token punctuation">}</span>

dog <span class="token operator">:=</span> Dog<span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">&quot;Mike&quot;</span> <span class="token punctuation">}</span>
dog<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">2000</span>
dog<span class="token punctuation">.</span><span class="token function">addAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u6784\u9020\u5668 \u7ED3\u6784\u4F53\u6CA1\u6709\u6784\u9020\u5668\u3002\u4F46\u662F\uFF0C\u4F60\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u8FD4\u56DE\u6240\u671F\u671B\u7C7B\u578B\u7684\u5B9E\u4F8B\u7684\u51FD\u6570\uFF08\u7C7B\u4F3C\u4E8E\u5DE5\u5382\uFF09</li></ol><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>dog <span class="token operator">:=</span> <span class="token function">newDog</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span>
dog<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">2000</span>
dog<span class="token punctuation">.</span><span class="token function">addAge</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">newDog</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> age <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>Dog <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token operator">&amp;</span>Dog<span class="token punctuation">{</span>
  name<span class="token punctuation">,</span>
  age<span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>new\u51FD\u6570</li></ol><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>dog <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>Dog<span class="token punctuation">)</span>
<span class="token comment">// same as</span>
dog <span class="token operator">:=</span> <span class="token operator">&amp;</span>Dog<span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>\u7EC4\u5408\u3001\u6DF7\u5408</li></ol><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
 dog <span class="token operator">:=</span> <span class="token operator">&amp;</span>Dog<span class="token punctuation">{</span> 
  Animal<span class="token punctuation">:</span> <span class="token operator">&amp;</span>Animal<span class="token punctuation">{</span> Name<span class="token punctuation">:</span> <span class="token string">&quot;Mike&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  age<span class="token punctuation">:</span> <span class="token number">56</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>dog<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">type</span> Animal <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>Animal<span class="token punctuation">)</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> a<span class="token punctuation">.</span>Name
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Dog <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 <span class="token operator">*</span>Animal
 age <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li><p>\u6307\u9488\u3001\u503C</p></li><li><p>\u63A5\u53E3</p></li></ol><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> Logger <span class="token keyword">interface</span> <span class="token punctuation">{</span>
 <span class="token function">Log</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConsoleLogger <span class="token keyword">struct</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>i ConsoleLogger<span class="token punctuation">)</span> <span class="token function">Log</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2><ol><li>\u9519\u8BEF\u5904\u7406</li></ol>`,28),o=[e];function c(i,l){return s(),a("div",null,o)}var k=n(t,[["render",c],["__file","golang\u57FA\u7840.html.vue"]]);export{k as default};
