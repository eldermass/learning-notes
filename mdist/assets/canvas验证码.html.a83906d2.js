import{_ as n,o as s,c as a,d as t}from"./app.4b7e0070.js";const p={},o=t(`<h1 id="canvas-\u7ED8\u5236\u9A8C\u8BC1\u7801" tabindex="-1"><a class="header-anchor" href="#canvas-\u7ED8\u5236\u9A8C\u8BC1\u7801" aria-hidden="true">#</a> canvas \u7ED8\u5236\u9A8C\u8BC1\u7801</h1><p>\u5728\u51E0\u4E4E\u6BCF\u4E2A\u7F51\u7AD9\u767B\u9646\u90FD\u4F1A\u4F7F\u7528\u9A8C\u8BC1\u7801\u6765\u9632\u6B62\u673A\u5668\u7B49\u975E\u4EBA\u64CD\u4F5C\uFF0C\u9632\u6B62\u6570\u636E\u5E93\u88AB\u8F7B\u800C\u6613\u4E3E\u7684\u653B\u7834\u3002<br> \u9A8C\u8BC1\u7801\u4E00\u822C\u662F PHP \u6216 java \u7B49\u751F\u6210\u7684\u56FE\u7247\u3002\u5728\u524D\u7AEF\uFF0C\u7528 canva \u6216 SVG \u4E5F\u53EF\u4EE5\u7ED8\u5236\u9A8C\u8BC1\u7801\uFF1B</p><h2 id="\u4EE5\u4E0B\u662F\u7528-canvas-\u751F\u6210\u9A8C\u8BC1\u7801\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4EE5\u4E0B\u662F\u7528-canvas-\u751F\u6210\u9A8C\u8BC1\u7801\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u4EE5\u4E0B\u662F\u7528 canvas \u751F\u6210\u9A8C\u8BC1\u7801\u7684\u65B9\u6CD5</h2><blockquote><p>\u6211\u5C06\u8BE5\u65B9\u6CD5\u7B80\u5355\u7684\u5C01\u88C5\u6210\u4E86 Verify \u7C7B\uFF0C\u53EA\u9700\u8981\u4F20\u5165 canvas \u5143\u7D20\u7684\u7C7B\u540D\u6216\u8005 id\uFF0C\u5C31\u80FD\u521D\u59CB\u5316 canvas</p></blockquote><ol><li>html \u7ED3\u6784\u5982\u4E0B</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>canvas<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>120<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>40<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    \u4F60\u7684\u6D4F\u89C8\u5668\u4E5F\u592A\u6B6A\u4E86
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.js \u7ED3\u6784\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Verify</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> el<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">,</span> len<span class="token punctuation">,</span> lines<span class="token punctuation">,</span> dots <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u53C2\u6570\u5206\u522B\u4E3Acanvas \u5143\u7D20\uFF0C \u7ED8\u5236\u533A\u57DF\u5BBD\u9AD8\uFF0C \u9A8C\u8BC1\u5B57\u7B26\u4E2A\u6570 ,\u5E72\u6270\u7EBF\u6570\u91CF\uFF0C\u5E72\u6270\u70B9\u6570\u91CF</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span>offsetWidth<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>len <span class="token operator">=</span> len <span class="token operator">||</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span>offsetWidth <span class="token operator">/</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>lines <span class="token operator">=</span> lines <span class="token operator">||</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>dots <span class="token operator">=</span> dots <span class="token operator">||</span> <span class="token number">40</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token punctuation">{</span> width<span class="token punctuation">,</span> height <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5F00\u59CB\u7ED8\u5236</span>
        <span class="token keyword">let</span> ctx <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u586B\u5145\u80CC\u666F\u8272</span>
        ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">makeColor</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">240</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u586B\u5145\u5B57\u7B26</span>
        <span class="token keyword">let</span> chars <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">makeCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>fontSize <span class="token operator">+</span> <span class="token string">&quot;px Simhei&quot;</span><span class="token punctuation">;</span>
            ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">makeColor</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ctx<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">25</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ctx<span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span><span class="token punctuation">(</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>deg <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">180</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>str<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u751F\u6210\u5E72\u6270\u7EBF</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">makeLine</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lines<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u751F\u6210\u5E72\u6270\u70B9</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">makeDot</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dots<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">makeCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u751F\u6210\u9A8C\u8BC1\u7801</span>
        <span class="token keyword">let</span> strs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> pool <span class="token operator">=</span> <span class="token string">&quot;ABCDEFGHIJKLIMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwxyz1234567890&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> str <span class="token operator">=</span> pool<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">makeNum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> pool<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">+=</span> str<span class="token punctuation">;</span>
            <span class="token keyword">let</span> fontSize <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">makeNum</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> deg <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">makeNum</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            strs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> str<span class="token punctuation">,</span> fontSize<span class="token punctuation">,</span> deg <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> strs<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">makeLine</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> lines</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token punctuation">{</span> makeNum<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token comment">//\u6DFB\u52A0\u5E72\u6270\u7EBF</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> lines<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token function">makeNum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">makeNum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token function">makeNum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">makeNum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">makeColor</span><span class="token punctuation">(</span><span class="token number">140</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ctx<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">makeDot</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> dots</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token punctuation">{</span> makeNum<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token comment">//\u6DFB\u52A0\u5E72\u6270\u70B9</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> dots<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token function">makeNum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">makeNum</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">makeNum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ctx<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">makeColor</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">makeNum</span><span class="token punctuation">(</span><span class="token parameter">min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> min <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">makeColor</span><span class="token punctuation">(</span><span class="token parameter">min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token punctuation">{</span> makeNum <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">rgb(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">makeNum</span><span class="token punctuation">(</span>min<span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">makeNum</span><span class="token punctuation">(</span>min<span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">makeNum</span><span class="token punctuation">(</span>min<span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> v <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Verify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#canvas&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//v.code \u4FBF\u662F\u5F53\u524D\u7684\u9A8C\u8BC1\u7801</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8BF4\u660E\uFF1AVerify \u7C7B\u53EF\u4EE5\u63A5\u6536 el, width, height, len, lines, dots \u7B49\u53C2\u6570\uFF0C\u5206\u522B\u8868\u793A canvas \u5143\u7D20\uFF0C \u7ED8\u5236\u533A\u57DF\u5BBD\u9AD8\uFF0C \u9A8C\u8BC1\u5B57\u7B26\u4E2A\u6570 ,\u5E72\u6270\u7EBF\u6570\u91CF\uFF0C\u5E72\u6270\u70B9\u6570\u91CF\u3002\u5982\u679C\u6CA1\u6709\u4F20 len \u53C2\u6570\uFF0C\u9ED8\u8BA4 canvas \u5143\u7D20\u6BCF\u6EE1 30px \u957F\u5EA6\u4FBF\u6DFB\u52A0\u4E00\u4E2A\u5B57\u7B26\u3002</p></blockquote>`,9),c=[o];function e(u,l){return s(),a("div",null,c)}var k=n(p,[["render",e],["__file","canvas\u9A8C\u8BC1\u7801.html.vue"]]);export{k as default};
