import{_ as n,o as s,c as a,d as t}from"./app.4b7e0070.js";const p={},e=t(`<h1 id="\u89C2\u5BDF\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u89C2\u5BDF\u8005\u6A21\u5F0F" aria-hidden="true">#</a> \u89C2\u5BDF\u8005\u6A21\u5F0F</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// get\u548Cset\u80FD\u76D1\u6D4B\u5230\u6570\u636E\u7684\u53D8\u5316</span>
<span class="token keyword">function</span> <span class="token function">observe</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5224\u65AD\u662F\u5426\u4E3A\u5BF9\u8C61</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>obj <span class="token operator">||</span> <span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">defineReactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5BF9obj\u5B9A\u4E49\u53EF\u76D1\u63A7\u7684\u5C5E\u6027</span>
<span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9012\u5F52\u68C0\u6D4B\u5B50\u5BF9\u8C61\u7684\u5C5E\u6027</span>
    <span class="token function">observe</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
    <span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveGetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;get value &#39;</span> <span class="token operator">+</span> val<span class="token punctuation">)</span>
            <span class="token comment">// \u5C06 Watcher \u6DFB\u52A0\u5230\u8BA2\u9605, \u5728Watcher\u5B9E\u4F8B\u5316\u65F6\u624D\u4F1A\u5224\u65AD\u4E3Atrue</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> val
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveSetter</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;change value&#39;</span><span class="token punctuation">)</span>
            val <span class="token operator">=</span> newVal
            <span class="token comment">// \u6267\u884C watcher \u7684 update \u65B9\u6CD5</span>
            dp<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u901A\u8FC7 Dep \u89E3\u8026</span>
<span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token comment">// \u5B58\u653Ewatcher\u5B9E\u4F8B</span>
    <span class="token punctuation">}</span>
    <span class="token function">addSub</span><span class="token punctuation">(</span><span class="token parameter">sub</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// sub \u662F Watcher \u5B9E\u4F8B</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">sub</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            sub<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5168\u5C40\u5C5E\u6027\uFF0C\u901A\u8FC7\u8BE5\u5C5E\u6027\u914D\u7F6E Watcher</span>
Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5C06 Dep.target \u6307\u5411\u81EA\u5DF1</span>
        <span class="token comment">// \u7136\u540E\u89E6\u53D1\u5C5E\u6027\u7684 getter \u6DFB\u52A0\u76D1\u542C</span>
        <span class="token comment">// \u6700\u540E\u5C06 Dep.target \u7F6E\u7A7A</span>
        Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cb <span class="token operator">=</span> cb
        <span class="token keyword">this</span><span class="token punctuation">.</span>obj <span class="token operator">=</span> obj
        <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token comment">// \u89E6\u53D1\u76D1\u542C</span>
        Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u83B7\u5F97\u65B0\u503C</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>obj<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>key<span class="token punctuation">]</span>
        <span class="token comment">// \u8C03\u7528 update \u65B9\u6CD5\u66F4\u65B0 Dom</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;jack&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span>
<span class="token function">observe</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

<span class="token comment">// \u6A21\u62DF\u89E3\u6790\u5230 \`{{name}}\` \u89E6\u53D1\u7684\u64CD\u4F5C</span>
<span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u56DE\u8C03\u51FD\u6570</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;update - -&#39;</span><span class="token punctuation">)</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> value
<span class="token punctuation">}</span>
<span class="token comment">// \u6DFB\u52A0\u76D1\u63A7</span>
<span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> update<span class="token punctuation">)</span>
<span class="token comment">// new Watcher(data, &#39;age&#39;, () =&gt; {console.log(&#39;age updated&#39;)})</span>
<span class="token comment">// update Dom innerText</span>
data<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;yyy&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","\u89C2\u5BDF\u8005\u6A21\u5F0F.html.vue"]]);export{k as default};
