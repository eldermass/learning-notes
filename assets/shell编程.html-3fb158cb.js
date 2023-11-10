import{_ as n,Y as s,Z as a,a0 as e}from"./framework-6d304b95.js";const i={},l=e(`<h1 id="shell-编程基础" tabindex="-1"><a class="header-anchor" href="#shell-编程基础" aria-hidden="true">#</a> shell 编程基础</h1><p>文件头指明执行程序 #!/bin/bash #!/usr/bin/python #!/usr/bin/node</p><h2 id="一、变量" tabindex="-1"><a class="header-anchor" href="#一、变量" aria-hidden="true">#</a> 一、变量</h2><h3 id="_1-一般变量" tabindex="-1"><a class="header-anchor" href="#_1-一般变量" aria-hidden="true">#</a> 1. 一般变量</h3><p>/etc/profile 里配置全局环境变量</p><blockquote><p>$PATH 单个系统变量<br> set 所有变量<br> 在/etc/profile 里 export D=&#39;环境变量&#39; 输出为全局变量</p></blockquote><h3 id="_2-申明变量" tabindex="-1"><a class="header-anchor" href="#_2-申明变量" aria-hidden="true">#</a> 2. 申明变量</h3><blockquote><p>A=100 申明变量<br> readonly B=200 申明清除和操作的变量<br> unset A 清除变量<br> echo $A 使用变量 C=\`ls -al\` 使用命令输出值<br> C=$(ls -al) 同上</p></blockquote><h3 id="_3-位置参数变量" tabindex="-1"><a class="header-anchor" href="#_3-位置参数变量" aria-hidden="true">#</a> 3. 位置参数变量</h3><blockquote><p>./test.sh 100 300<br> $n 例：$1 表示第一个参数，值为 100<br> \${10} 有十个参数就需要加大括号<br> $# 参数的总个数 $* 命令行中所有参数,看做整体 $@ 命令行中所有参数,区分对待</p></blockquote><h3 id="_4-预定义变量" tabindex="-1"><a class="header-anchor" href="#_4-预定义变量" aria-hidden="true">#</a> 4. 预定义变量</h3><blockquote><p>$$ $! 最后一个开始进程的进程号 $? 运行是否成功0、1 $$</p></blockquote><h2 id="二、运算符" tabindex="-1"><a class="header-anchor" href="#二、运算符" aria-hidden="true">#</a> 二、运算符</h2><blockquote><p>$((运算式))<br> $[运算式] 例: $[1+2]<br> expr m + n 例: RES=\`expr 1 + 2\`</p></blockquote><h2 id="三、条件判断-和-流程控制" tabindex="-1"><a class="header-anchor" href="#三、条件判断-和-流程控制" aria-hidden="true">#</a> 三、条件判断 和 流程控制</h2><blockquote><p>[ condition ] 注意有空格 例：[ condition ] &amp;&amp; echo ok || echo notOk =等于<br> -lt 小于<br> -le 小于等于<br> -eq 等于<br> -gt 大于<br> -ge 大于等于<br> -ne 不等于<br> -r 有读权限<br> -w 有写权限<br> -x 有执行权限<br> -f 存在是一个常规文件<br> -e 存在文件<br> -d 存在是一个目录</p></blockquote><p>流程控制 - if 分支语句</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token number">2</span> <span class="token parameter variable">-lt</span> <span class="token number">3</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;equal&#39;</span>
<span class="token keyword">elif</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;noteq&#39;</span>
<span class="token keyword">fi</span>

<span class="token comment"># 判断是否有文件</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> /home/cy/a.txt <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;存在&#39;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>流程控制 - case 分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
    <span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&#39;i am ten&#39;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">&quot;20&quot;</span><span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&#39;i am tweenty&#39;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&#39;i am not all&#39;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>流程控制 - for 循坏</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>语法一
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token number">10</span> <span class="token number">20</span> <span class="token number">30</span>              <span class="token comment"># for i in $* 传入的整体 $@传入的整体类似数组</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;i am number $i&#39;</span>
<span class="token keyword">done</span>

语法二
<span class="token keyword">for</span><span class="token variable"><span class="token punctuation">((</span>初始值<span class="token punctuation">;</span>条件<span class="token punctuation">;</span>变量变化<span class="token punctuation">))</span></span>     <span class="token comment">#  for((i=1; i&lt;=100; i++))</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;something&#39;</span>
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>流程控制 - while 循环</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token keyword">while</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;something&quot;</span>
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、其他系统指令" tabindex="-1"><a class="header-anchor" href="#四、其他系统指令" aria-hidden="true">#</a> 四、其他系统指令</h2><h3 id="_1-读取控制台输入" tabindex="-1"><a class="header-anchor" href="#_1-读取控制台输入" aria-hidden="true">#</a> 1. 读取控制台输入</h3><blockquote><p>read 选项 接收参数<br> -t 等待时间<br> -p 输入提示<br> 例：read -p &quot;请输入 NUM=&quot; NUM</p></blockquote><h3 id="_2-系统函数" tabindex="-1"><a class="header-anchor" href="#_2-系统函数" aria-hidden="true">#</a> 2. 系统函数</h3><p>basename</p><blockquote><p>basename path 返回文件名 例：basename /home/a.txt --&gt; a.txt basename /home/a.txt .txt --&gt; a</p></blockquote><p>dirname 返回完整路径 例：dirname /home/cy/a.txt --&gt; /home/cy</p><h3 id="_3-自定义函数" tabindex="-1"><a class="header-anchor" href="#_3-自定义函数" aria-hidden="true">#</a> 3. 自定义函数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">getSum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token assign-left variable">SUM</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$n1</span>+<span class="token variable">$n2</span><span class="token punctuation">]</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;和是<span class="token variable">$SUM</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment"># 调用</span>
getSum <span class="token variable">$n1</span> <span class="token variable">$n2</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),t=[l];function c(o,p){return s(),a("div",null,t)}const d=n(i,[["render",c],["__file","shell编程.html.vue"]]);export{d as default};
