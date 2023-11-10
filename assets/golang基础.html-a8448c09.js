import{_ as s,Y as a,Z as t,$ as p,a0 as n}from"./framework-6d304b95.js";const e={},o=n(`<h1 id="go-语言基础" tabindex="-1"><a class="header-anchor" href="#go-语言基础" aria-hidden="true">#</a> go 语言基础</h1><h2 id="一、基本概念" tabindex="-1"><a class="header-anchor" href="#一、基本概念" aria-hidden="true">#</a> 一、基本概念</h2><h3 id="_1、申明" tabindex="-1"><a class="header-anchor" href="#_1、申明" aria-hidden="true">#</a> 1、申明</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 显示申明</span>
<span class="token keyword">var</span> name <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span>

<span class="token comment">// 隐式申明，:= 自动推断变量类型</span>
age <span class="token operator">:=</span> <span class="token number">23</span>
name<span class="token punctuation">,</span> age <span class="token operator">:=</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">56</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、包" tabindex="-1"><a class="header-anchor" href="#_2、包" aria-hidden="true">#</a> 2、包</h3><ol><li>一个目录下可以有多个文件，但只能有一个包</li><li>包中大写字母开头的变量、函数、结构体等，才能被外部访问，小写则是私有的</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、数据类型" tabindex="-1"><a class="header-anchor" href="#二、数据类型" aria-hidden="true">#</a> 二、数据类型</h2><ol><li>一般用 <code>strconv</code> 进行类型转换</li></ol><h3 id="_1、整型" tabindex="-1"><a class="header-anchor" href="#_1、整型" aria-hidden="true">#</a> 1、整型</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 无符号整数，正整数</span>
<span class="token keyword">var</span> num1 <span class="token builtin">uint</span> <span class="token operator">=</span> <span class="token number">123</span>

<span class="token comment">// 有符号整数</span>
<span class="token keyword">var</span> num2 <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">123</span>

<span class="token comment">// 还有些指定范围的整数类型</span>
<span class="token comment">// uint8, uint16, uint32, uint64，int8, int16, int32, int64</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、浮点型" tabindex="-1"><a class="header-anchor" href="#_2、浮点型" aria-hidden="true">#</a> 2、浮点型</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> num1 <span class="token builtin">float64</span> <span class="token operator">=</span> <span class="token number">1.23</span>

<span class="token comment">// 32位不常用</span>
<span class="token keyword">var</span> num2 <span class="token builtin">float32</span> <span class="token operator">=</span> <span class="token number">2.34</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、字符串型" tabindex="-1"><a class="header-anchor" href="#_3、字符串型" aria-hidden="true">#</a> 3、字符串型</h3><p>双引号和反引号包起来的字符串</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> str1 <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span>

<span class="token comment">// 多行字符串</span>
<span class="token keyword">var</span> str2 <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">\`hello
world\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、布尔型" tabindex="-1"><a class="header-anchor" href="#_4、布尔型" aria-hidden="true">#</a> 4、布尔型</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> flag <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18),c=n(`<h3 id="_5、数组" tabindex="-1"><a class="header-anchor" href="#_5、数组" aria-hidden="true">#</a> 5、数组</h3><h4 id="_1-申明" tabindex="-1"><a class="header-anchor" href="#_1-申明" aria-hidden="true">#</a> 1. 申明</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 申明, [元素长度]元素类型{value1, value2, ...}</span>
nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token comment">// 省略长度</span>
nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>

<span class="token comment">// 先申明，再赋值</span>
<span class="token keyword">var</span> scores <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token comment">// 或 scores := new([10]int)</span>
scores<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用" aria-hidden="true">#</a> 2. 使用</h4><p><code>len()</code> 获取数组长度 <code>cap()</code> 获取数组容量<br> 如果超过长度取值，下标越界</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>scores <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">9001</span><span class="token punctuation">,</span> <span class="token number">9333</span><span class="token punctuation">,</span> <span class="token number">212</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">}</span>

<span class="token comment">// 遍历</span>
<span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> scores <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、切片" tabindex="-1"><a class="header-anchor" href="#_6、切片" aria-hidden="true">#</a> 6、切片</h3><p>切片是数组的一部分，相当于数组的部分引用，改变其中的值 数组中的值也会改变<br> 类型打印时： []int 是切片， [2]int 是数组</p><h4 id="_1-切片申明" tabindex="-1"><a class="header-anchor" href="#_1-切片申明" aria-hidden="true">#</a> 1. 切片申明</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span> <span class="token comment">// 数组</span>

<span class="token comment">// 从数组中获取切片</span>
all_nums <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
first_two <span class="token operator">:=</span> nums<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
two_begin <span class="token operator">:=</span> nums<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">]</span>

<span class="token comment">// 申明切片, make(类型，长度，容量)</span>
sliceA <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
sliceB <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// 这时容量和长度都为5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-切片使用" tabindex="-1"><a class="header-anchor" href="#_2-切片使用" aria-hidden="true">#</a> 2. 切片使用</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
numsSlice <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token comment">// append会深度拷贝，解除数组引用关系</span>
<span class="token function">append</span><span class="token punctuation">(</span>numsSlice<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// append 切片会按 2x 的方式自动扩展容量，cap()变为2倍</span>
<span class="token keyword">func</span> main <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、映射" tabindex="-1"><a class="header-anchor" href="#_7、映射" aria-hidden="true">#</a> 7、映射</h3><p>类似 hash 表和字典</p><h4 id="_1-映射申明" tabindex="-1"><a class="header-anchor" href="#_1-映射申明" aria-hidden="true">#</a> 1. 映射申明</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 申明, map[keyType]valueType{key1: value1, ...}</span>
user <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 申明, make(map[keyType]valueType)</span>
lookup <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>

<span class="token comment">// 申明空接口类型的映射 interface{} 支持所有类型</span>
allValue <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-映射使用" tabindex="-1"><a class="header-anchor" href="#_2-映射使用" aria-hidden="true">#</a> 2. 映射使用</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>users <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span>
    <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 删除</span>
<span class="token function">delete</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 获取不存在的key</span>
position<span class="token punctuation">,</span> exists <span class="token operator">:=</span> users<span class="token punctuation">[</span><span class="token string">&quot;position&quot;</span><span class="token punctuation">]</span>

fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v \\n&quot;</span><span class="token punctuation">,</span> users<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> exists<span class="token punctuation">)</span>

<span class="token comment">// 遍历</span>
<span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> lookup <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8、函数" tabindex="-1"><a class="header-anchor" href="#_8、函数" aria-hidden="true">#</a> 8、函数</h3><h4 id="_1-一般函数" tabindex="-1"><a class="header-anchor" href="#_1-一般函数" aria-hidden="true">#</a> 1. 一般函数</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 申明 func 函数名(参数) 返回值 {}</span>
<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">,</span> arr <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// ...接受不定参数</span>
<span class="token comment">// 调用</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">...</span><span class="token punctuation">)</span> <span class="token comment">// ...展开数组</span>

<span class="token keyword">func</span> <span class="token function">user</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 函数内无法声明函数，但是可以使用匿名函数</span>
    a <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>data <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;hello %s&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> name<span class="token punctuation">,</span> <span class="token number">23</span>
<span class="token punctuation">}</span>
<span class="token comment">// 自执行函数</span>
<span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 闭包函数</span>
<span class="token keyword">func</span> <span class="token function">adder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    sum <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> x
        <span class="token keyword">return</span> sum
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 延迟执行，defer 会在函数结束时执行</span>
<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-go-函数" tabindex="-1"><a class="header-anchor" href="#_2-go-函数" aria-hidden="true">#</a> 2. go 函数</h4><h3 id="_9、指针" tabindex="-1"><a class="header-anchor" href="#_9、指针" aria-hidden="true">#</a> 9、指针</h3><p>&amp; 取地址，* 取值</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>a <span class="token operator">:=</span> <span class="token number">1</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token keyword">var</span> p <span class="token operator">*</span><span class="token builtin">int</span>
p <span class="token operator">=</span> <span class="token operator">&amp;</span>a <span class="token comment">// 取地址</span>
<span class="token operator">*</span>p <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">// 取值</span>
<span class="token comment">// a == *p, &amp;a == p</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> p<span class="token punctuation">,</span> <span class="token operator">*</span>p<span class="token punctuation">)</span> <span class="token comment">// 2 0xc000014048 2</span>


<span class="token comment">// 函数中传递指针</span>
<span class="token keyword">func</span> <span class="token function">addAge</span><span class="token punctuation">(</span>age <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token operator">*</span>age <span class="token operator">+=</span> <span class="token number">500</span>
<span class="token punctuation">}</span>

dogAge <span class="token operator">:=</span> <span class="token number">1</span>
<span class="token function">addAge</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>dogAge<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10、结构体" tabindex="-1"><a class="header-anchor" href="#_10、结构体" aria-hidden="true">#</a> 10、结构体</h3><p>go 不是面向对象的语言，结构体是面向对象的替代</p><h4 id="_1、申明和使用" tabindex="-1"><a class="header-anchor" href="#_1、申明和使用" aria-hidden="true">#</a> 1、申明和使用</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 申明结构体</span>
<span class="token keyword">type</span> Dog <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化</span>
    <span class="token comment">// dog := new(Dog) // 空实例化</span>
    <span class="token comment">// dog := &amp;Dog{} // 同上</span>
    dog <span class="token operator">:=</span> Dog<span class="token punctuation">{</span> <span class="token string">&quot;Mike&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span> <span class="token punctuation">}</span>
    <span class="token comment">// 通过指针传递引用</span>
    <span class="token function">addAge</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>dog<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>dog<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 28</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">addAge</span><span class="token punctuation">(</span>d <span class="token operator">*</span>Dog<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 通过地址 或者 通过值都是能改变复杂数据类型的值</span>
    d<span class="token punctuation">.</span>age <span class="token operator">+=</span> <span class="token number">5</span>
    <span class="token punctuation">(</span><span class="token operator">*</span>d<span class="token punctuation">)</span><span class="token punctuation">.</span>age <span class="token operator">+=</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、结构体上的函数、方法" tabindex="-1"><a class="header-anchor" href="#_2、结构体上的函数、方法" aria-hidden="true">#</a> 2、结构体上的函数、方法</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Dog <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在结构体上定义方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Dog<span class="token punctuation">)</span> <span class="token function">addAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    d<span class="token punctuation">.</span>age <span class="token operator">+=</span> <span class="token number">5</span>
<span class="token punctuation">}</span>

dog <span class="token operator">:=</span> Dog<span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">&quot;Mike&quot;</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">23</span> <span class="token punctuation">}</span>
dog<span class="token punctuation">.</span><span class="token function">addAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// dog.age == 28</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、组合、混合" tabindex="-1"><a class="header-anchor" href="#_3、组合、混合" aria-hidden="true">#</a> 3、组合、混合</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Animal <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    legs <span class="token builtin">int</span>
    Dog <span class="token comment">// 匿名结构体</span>
    tiger Tiger <span class="token comment">// 带名结构体</span>
<span class="token punctuation">}</span>

animal <span class="token operator">:=</span> Animal<span class="token punctuation">{</span> legs<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> Dog<span class="token punctuation">:</span> Dog<span class="token punctuation">{</span> <span class="token string">&quot;Mike&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>

<span class="token comment">// 匿名结构体有2中访问方式，有相同字段时，优先使用匿名结构体的字段</span>
animal<span class="token punctuation">.</span>name <span class="token comment">// Mike</span>
animal<span class="token punctuation">.</span>Dog<span class="token punctuation">.</span>name <span class="token comment">// Mike</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11、接口" tabindex="-1"><a class="header-anchor" href="#_11、接口" aria-hidden="true">#</a> 11、接口</h3><p>一类东西的规范，集合</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Animal <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Run</span><span class="token punctuation">(</span>long <span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Dog <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d Dog<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span>l <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot; 跑了 &quot;</span> <span class="token operator">+</span> l <span class="token operator">+</span> <span class="token string">&quot; 米&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 接口作为参数</span>
<span class="token keyword">func</span> <span class="token function">beginRun</span><span class="token punctuation">(</span>a Animal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;12&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> main <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    dog <span class="token operator">:=</span> Dog<span class="token punctuation">{</span><span class="token string">&quot;Mike&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;12&quot;</span><span class="token punctuation">}</span>

    <span class="token function">beginRun</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12、管道-协成、异步" tabindex="-1"><a class="header-anchor" href="#_12、管道-协成、异步" aria-hidden="true">#</a> 12、管道(协成、异步)</h3><h4 id="_1-goroutine" tabindex="-1"><a class="header-anchor" href="#_1-goroutine" aria-hidden="true">#</a> 1. goroutine</h4><p>在调用前加上 go 关键字，就能创建一个协成</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 申明协成</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 创建一个协成，不会阻塞主线程</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-协成管理器" tabindex="-1"><a class="header-anchor" href="#_2-协成管理器" aria-hidden="true">#</a> 2. 协成管理器</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
    wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 添加一个协成</span>
    <span class="token keyword">go</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>wg<span class="token punctuation">)</span> <span class="token comment">// 创建一个协成，不会阻塞主线程</span>
    wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 等待所有协成执行完毕</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;协成完了，我再执行&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-channel" tabindex="-1"><a class="header-anchor" href="#_3-channel" aria-hidden="true">#</a> 3. channel</h4><p>goroutine 的通信工具, 箭头指入为写入，指出为读取</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 申明管道</span>
ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
ch2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 带缓冲的管道</span>

<span class="token comment">// 只读、只写管道</span>
<span class="token keyword">var</span> readCh <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token operator">=</span> ch
<span class="token keyword">var</span> writeCh <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span> <span class="token operator">=</span> ch

<span class="token comment">// 写入数据</span>
ch <span class="token operator">&lt;-</span> <span class="token number">1</span>
<span class="token comment">// 读取数据</span>
num <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch

<span class="token comment">// 关闭，关闭后不可写入，但可读取</span>
<span class="token comment">// for range 遍历前必须关闭管道</span>
<span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 不带缓冲的管道，再接收时才会去读取数据</span>
    <span class="token comment">// 带缓冲的管道，会先存满缓冲区时才写入管道</span>
    ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>

    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
            ch <span class="token operator">&lt;-</span> i
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        num <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// select 选择器，在没有值时，不会死锁</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ch1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
    ch2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>

    <span class="token keyword">select</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> num <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch1<span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
        <span class="token keyword">case</span> num <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch2<span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;没有数据&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13、断言" tabindex="-1"><a class="header-anchor" href="#_13、断言" aria-hidden="true">#</a> 13、断言</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 断言，判断类型</span>
<span class="token keyword">var</span> a <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

a<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token comment">// 断言为 int 类型</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    a <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token comment">// a.(type) 判断 a 的类型</span>
    <span class="token keyword">switch</span> a<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;int&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token builtin">string</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14、-反射" tabindex="-1"><a class="header-anchor" href="#_14、-反射" aria-hidden="true">#</a> 14、 反射</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Dog <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    age <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">// 反射，获取类型</span>
a <span class="token operator">:=</span> Dog<span class="token punctuation">{</span><span class="token string">&quot;Mike&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">}</span>

<span class="token comment">// 获取类型</span>
t <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// []int</span>
<span class="token comment">// 获取值</span>
v <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// [1, 2, 3]</span>

<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> t<span class="token punctuation">.</span><span class="token function">NumField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取字段名</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 获取字段值</span>
    <span class="token comment">// fmt.Println(v.Field(i).Interface())</span>
<span class="token punctuation">}</span>

<span class="token comment">// 其他操作</span>
v<span class="token punctuation">.</span><span class="token function">FieldByName</span><span class="token punctuation">(</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">)</span>
v<span class="token punctuation">.</span><span class="token function">FieldByIndex</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SetString</span><span class="token punctuation">(</span><span class="token string">&quot;Mike3&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 成员 Name 必须以大写字母开头才能访问</span>
m <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">MethodByName</span><span class="token punctuation">(</span><span class="token string">&quot;Run&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 调用函数</span>
m<span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>reflect<span class="token punctuation">.</span>Value<span class="token punctuation">{</span>reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token string">&quot;12&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

t<span class="token punctuation">.</span><span class="token function">kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 获取类型</span>
t<span class="token punctuation">.</span><span class="token function">kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> reflect<span class="token punctuation">.</span>Struct <span class="token comment">// 判断是否为结构体</span>
t<span class="token punctuation">.</span><span class="token function">kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> reflect<span class="token punctuation">.</span>String <span class="token comment">// 判断是否为整型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15、-泛型" tabindex="-1"><a class="header-anchor" href="#_15、-泛型" aria-hidden="true">#</a> 15、 泛型</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>test<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> test<span class="token punctuation">[</span>T<span class="token punctuation">]</span><span class="token punctuation">(</span>i T<span class="token punctuation">)</span> T <span class="token punctuation">{</span>
    <span class="token keyword">return</span> i
<span class="token punctuation">}</span>

<span class="token comment">// 切片</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	a <span class="token operator">:=</span> same<span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a: %v\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> same<span class="token punctuation">[</span>T <span class="token builtin">float64</span> <span class="token operator">|</span> <span class="token builtin">int</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> a <span class="token operator">==</span> b
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、流程控制" tabindex="-1"><a class="header-anchor" href="#三、流程控制" aria-hidden="true">#</a> 三、流程控制</h2><h3 id="_1、递增、递减" tabindex="-1"><a class="header-anchor" href="#_1、递增、递减" aria-hidden="true">#</a> 1、递增、递减</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 只有后置自增、自减</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    i<span class="token operator">++</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、条件" tabindex="-1"><a class="header-anchor" href="#_2、条件" aria-hidden="true">#</a> 2、条件</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">if</span> a <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> a <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、选择" tabindex="-1"><a class="header-anchor" href="#_3、选择" aria-hidden="true">#</a> 3、选择</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 默认只选其中一个</span>
<span class="token keyword">switch</span> a <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
      <span class="token operator">...</span>
      <span class="token keyword">fallthrough</span> <span class="token comment">// 继续执行下一个 case</span>
  <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
      <span class="token operator">...</span>
  <span class="token keyword">default</span><span class="token punctuation">:</span>
      <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、循环" tabindex="-1"><a class="header-anchor" href="#_4、循环" aria-hidden="true">#</a> 4、循环</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 支持 break、continue</span>
<span class="token comment">// 死循环</span>
<span class="token keyword">for</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token keyword">if</span> a <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 条件循环</span>
<span class="token keyword">for</span> a <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 循环10次</span>
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 遍历数组、切片、映射</span>
<span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> arr <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、跳转" tabindex="-1"><a class="header-anchor" href="#_5、跳转" aria-hidden="true">#</a> 5、跳转</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 跳转到标签</span>
<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> j <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token punctuation">{</span>
        <span class="token keyword">goto</span> breakTag
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

breakTag<span class="token punctuation">:</span>
    <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、并发编程" tabindex="-1"><a class="header-anchor" href="#四、并发编程" aria-hidden="true">#</a> 四、并发编程</h2><h3 id="_1、锁" tabindex="-1"><a class="header-anchor" href="#_1、锁" aria-hidden="true">#</a> 1、锁</h3><h4 id="_1-互斥锁" tabindex="-1"><a class="header-anchor" href="#_1-互斥锁" aria-hidden="true">#</a> 1. 互斥锁</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 申明互斥锁，解锁之前，其他协成无法访问</span>
    l <span class="token operator">:=</span> <span class="token operator">&amp;</span>sync<span class="token punctuation">.</span>Mutex<span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">go</span> <span class="token function">lockFun</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">lockFun</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">lockFun</span><span class="token punctuation">(</span>lock <span class="token operator">*</span>sync<span class="token punctuation">.</span>Mutex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">...</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token keyword">defer</span> lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-读写锁" tabindex="-1"><a class="header-anchor" href="#_2-读写锁" aria-hidden="true">#</a> 2. 读写锁</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 读写锁，写锁时不可读写。读锁时可以读，但不能写</span>
    l <span class="token operator">:=</span> <span class="token operator">&amp;</span>sync<span class="token punctuation">.</span>RWMutex<span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">go</span> <span class="token function">lockFun</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">lockFun</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">readLockFun</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">readLockFun</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">lockFun</span><span class="token punctuation">(</span>lock <span class="token operator">*</span>sync<span class="token punctuation">.</span>RWMutex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 写锁在写的时候，其他协成不能读写</span>
    lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">...</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token keyword">defer</span> lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">readLockFun</span><span class="token punctuation">(</span>lock <span class="token operator">*</span>sync<span class="token punctuation">.</span>RWMutex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 读锁在读的时候，其他协成也可以读，但不能写</span>
    lock<span class="token punctuation">.</span><span class="token function">RLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">...</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token keyword">defer</span> lock<span class="token punctuation">.</span><span class="token function">RUnlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-once-锁" tabindex="-1"><a class="header-anchor" href="#_3-once-锁" aria-hidden="true">#</a> 3. once 锁</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>o <span class="token operator">:=</span> <span class="token operator">&amp;</span>sync<span class="token punctuation">.</span>Once<span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        o<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;只执行一次&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-waitgroup" tabindex="-1"><a class="header-anchor" href="#_4-waitgroup" aria-hidden="true">#</a> 4. waitGroup</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>wg <span class="token operator">:=</span> <span class="token operator">&amp;</span>sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">{</span><span class="token punctuation">}</span>

wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 添加2个协成</span>

<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 协成执行完毕，减少一个协成</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;执行完毕第一次&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 协成执行完毕，减少一个协成</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;执行完毕第二次&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 等待所有协成执行完毕</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;最后执行完毕&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-并发字典" tabindex="-1"><a class="header-anchor" href="#_5-并发字典" aria-hidden="true">#</a> 5. 并发字典</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>m <span class="token operator">:=</span> <span class="token operator">&amp;</span>sync<span class="token punctuation">.</span>Map<span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 同时读写</span>
<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        m<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment">// m.LoadOrStore(i, i) // 不存在时，存储</span>
        <span class="token comment">// m.Delete(i) // 删除</span>
        <span class="token comment">// 循环</span>
        <span class="token comment">// m.range(func(key, value interface{}) bool {</span>
        <span class="token comment">//     fmt.Println(key, value)</span>
        <span class="token comment">//     time.Sleep(1 * time.Second)</span>
        <span class="token comment">//     return true</span>
        <span class="token comment">// })</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-并发池" tabindex="-1"><a class="header-anchor" href="#_6-并发池" aria-hidden="true">#</a> 6. 并发池</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>p <span class="token operator">:=</span> <span class="token operator">&amp;</span>sync<span class="token punctuation">.</span>Pool<span class="token punctuation">{</span><span class="token punctuation">}</span>

p<span class="token punctuation">.</span><span class="token function">Put</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 存储</span>
p<span class="token punctuation">.</span><span class="token function">Put</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 存储</span>
p<span class="token punctuation">.</span><span class="token function">Put</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 存储</span>

<span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
        <span class="token comment">// 取出来的值，如果不放回去，就不在池中了</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-cond" tabindex="-1"><a class="header-anchor" href="#_7-cond" aria-hidden="true">#</a> 7. Cond</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>c <span class="token operator">:=</span> sync<span class="token punctuation">.</span><span class="token function">NewCond</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>sync<span class="token punctuation">.</span>Mutex<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// c.L.Lock()</span>
<span class="token comment">// c.Wait() // 等待通知</span>
<span class="token comment">// c.L.Unlock()</span>
<span class="token comment">// c.Signal() // 通知一个协成</span>
<span class="token comment">// c.Broadcast() // 广播</span>

<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span>L<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> c<span class="token punctuation">.</span>L<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// defer 放到最后才执行</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;协成1等待&quot;</span><span class="token punctuation">)</span>
    c<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;协成1执行&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span>L<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> c<span class="token punctuation">.</span>L<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;协成2等待&quot;</span><span class="token punctuation">)</span>
    c<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;协成2执行&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
c<span class="token punctuation">.</span><span class="token function">Signal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 通知一个协成</span>
time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
c<span class="token punctuation">.</span><span class="token function">Signal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 通知一个协成</span>
time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、文件操作" tabindex="-1"><a class="header-anchor" href="#五、文件操作" aria-hidden="true">#</a> 五、文件操作</h2><h3 id="_1、文件读取" tabindex="-1"><a class="header-anchor" href="#_1、文件读取" aria-hidden="true">#</a> 1、文件读取</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 读取文件</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// os.ReadFile(&quot;./test.txt&quot;) // 一次性读取</span>
    <span class="token comment">// 读取文件</span>
    file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;./test.txt&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    file<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        b <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span>
        n<span class="token punctuation">,</span> err <span class="token operator">:=</span> file<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// bufio包，读取文件</span>
    reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        str<span class="token punctuation">,</span> err <span class="token operator">:=</span> reader<span class="token punctuation">.</span><span class="token function">ReadString</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 读取一行</span>
        <span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span> <span class="token comment">// 读取完毕</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、网络编程-net" tabindex="-1"><a class="header-anchor" href="#六、网络编程-net" aria-hidden="true">#</a> 六、网络编程 net</h2><h3 id="_1、tcp" tabindex="-1"><a class="header-anchor" href="#_1、tcp" aria-hidden="true">#</a> 1、tcp</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 申明 tcp 服务端</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    tcpAddr<span class="token punctuation">,</span><span class="token boolean">_</span> <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">ResolveTCPAddr</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;:8888&quot;</span><span class="token punctuation">)</span>
    net<span class="token punctuation">.</span><span class="token function">ListenTCP</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> tcpAddr<span class="token punctuation">)</span>
    <span class="token comment">// 创建 tcp 连接</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> tcpListener<span class="token punctuation">.</span><span class="token function">AcceptTCP</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">go</span> <span class="token function">handleConn</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 申明 tcp 客户端</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    tcpAddr<span class="token punctuation">,</span><span class="token boolean">_</span> <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">ResolveTCPAddr</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;:8888&quot;</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">DialTCP</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> tcpAddr<span class="token punctuation">)</span>

    <span class="token comment">// 读取命令行输入</span>
    reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdin<span class="token punctuation">)</span>
    bytes<span class="token punctuation">,</span><span class="token boolean">_</span><span class="token punctuation">,</span><span class="token boolean">_</span> <span class="token operator">:=</span> reader<span class="token punctuation">.</span><span class="token function">ReadLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 发送数据</span>
    conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、http" tabindex="-1"><a class="header-anchor" href="#_2、http" aria-hidden="true">#</a> 2、http</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token char">&#39;/test&#39;</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
    http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8888&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">handler</span><span class="token punctuation">(</span>res http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> req <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、rpc" tabindex="-1"><a class="header-anchor" href="#_3、rpc" aria-hidden="true">#</a> 3、rpc</h3><p>远程调用</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 申明 rpc 服务端</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rpc<span class="token punctuation">.</span><span class="token function">RegisterName</span><span class="token punctuation">(</span><span class="token string">&quot;HelloService&quot;</span><span class="token punctuation">,</span> <span class="token function">new</span><span class="token punctuation">(</span>HelloService<span class="token punctuation">)</span><span class="token punctuation">)</span>
    listener<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;:1234&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        conn<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> listener<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">go</span> rpc<span class="token punctuation">.</span><span class="token function">ServeConn</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、websocket" tabindex="-1"><a class="header-anchor" href="#_4、websocket" aria-hidden="true">#</a> 4、websocket</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,91);function i(l,u){return a(),t("div",null,[o,p(" 复杂数据类型：结构struct、数组[]、切片slice、映射map、接口interface、函数func、指针*、管道chan "),c])}const k=s(e,[["render",i],["__file","golang基础.html.vue"]]);export{k as default};
