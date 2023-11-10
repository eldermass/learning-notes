import{_ as p,Y as i,Z as o,a1 as n,a2 as a,a3 as e,$ as c,a0 as t,E as l}from"./framework-6d304b95.js";const r={},u=t(`<h1 id="python-爬虫" tabindex="-1"><a class="header-anchor" href="#python-爬虫" aria-hidden="true">#</a> python 爬虫</h1><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="编码问题" tabindex="-1"><a class="header-anchor" href="#编码问题" aria-hidden="true">#</a> 编码问题</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># response.content 是 bytes 类型，response.text 是用 response.content.decode(xx) 推断解码,一般是错的</span>
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
response<span class="token punctuation">.</span>encoding            <span class="token comment"># 当前推断的编码</span>
response<span class="token punctuation">.</span>apparent_encoding   <span class="token comment"># 页面的真实编码</span>
response<span class="token punctuation">.</span>encoding <span class="token operator">=</span> <span class="token string">&#39;GB2312&#39;</span> <span class="token comment"># 设为页面的真实编码，utf8，gbk</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代理" tabindex="-1"><a class="header-anchor" href="#代理" aria-hidden="true">#</a> 代理</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 为了防止自己ip被封，一般会使用三方的高匿代理，百度可搜</span>
<span class="token comment"># 通过修改下参数确定代理匿名程度，一般后两个隐藏</span>
REMOTE_ADDR <span class="token operator">=</span> Proxy_IP
HTTP_VIA <span class="token operator">=</span> <span class="token keyword">not</span> determined
HTTP_X_FORWARDED_FOR <span class="token operator">=</span> your IP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ca-证书" tabindex="-1"><a class="header-anchor" href="#ca-证书" aria-hidden="true">#</a> CA 证书</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 忽略 https 验证</span>
request<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> verify<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="session-连续请求" tabindex="-1"><a class="header-anchor" href="#session-连续请求" aria-hidden="true">#</a> session 连续请求</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 这样的请求会保持cookie状态</span>
session <span class="token operator">=</span> request<span class="token punctuation">.</span>session<span class="token punctuation">(</span><span class="token punctuation">)</span>
response <span class="token operator">=</span> session<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="xpath-语法" tabindex="-1"><a class="header-anchor" href="#xpath-语法" aria-hidden="true">#</a> xpath 语法</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># lxml 模块使用xpath语法解析 xml/html 数据</span>
html <span class="token operator">=</span> lxml<span class="token punctuation">.</span>entre<span class="token punctuation">.</span>HTML<span class="token punctuation">(</span>html<span class="token punctuation">)</span>
html<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//a[@href=&quot;1.html&quot;]/text()&#39;</span><span class="token punctuation">)</span>
html<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//a[contains(@href, &quot;.html&quot;)]/text()&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="selenium" tabindex="-1"><a class="header-anchor" href="#selenium" aria-hidden="true">#</a> selenium</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>chrome<span class="token punctuation">.</span>service <span class="token keyword">import</span> Service
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>service<span class="token operator">=</span>Service<span class="token punctuation">(</span>executable_path<span class="token operator">=</span><span class="token string">&#39;./path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://www.baidu.com&#39;</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 窗口句柄</span>
driver<span class="token punctuation">.</span>window_handles
<span class="token comment"># 切换窗口</span>
driver<span class="token punctuation">.</span>switch_to<span class="token punctuation">.</span>window<span class="token punctuation">(</span>driver<span class="token punctuation">.</span>window_handles<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 执行js代码</span>
driver<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span><span class="token string">&#39;js_script&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 等待</span>
time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 强制等待</span>
driver<span class="token punctuation">.</span>implicitly_wait<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token comment"># 隐式等待：找不到元素会继续找，直到超时才报错</span>

<span class="token comment"># 无界面模式</span>
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>chrome<span class="token punctuation">.</span>options <span class="token keyword">import</span> Options
opt <span class="token operator">=</span> Options<span class="token punctuation">(</span><span class="token punctuation">)</span>
opt<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;--headless&#39;</span><span class="token punctuation">)</span>
opt<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;--disable-gpu&#39;</span><span class="token punctuation">)</span>
webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>options<span class="token operator">=</span>opt<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tesseract-图像识别引擎" tabindex="-1"><a class="header-anchor" href="#tesseract-图像识别引擎" aria-hidden="true">#</a> tesseract 图像识别引擎</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token number">1.</span> 安装引擎
<span class="token number">2.</span> pip install pillow
<span class="token number">3.</span> pip install pytesseract
<span class="token comment"># 腾讯，阿里，有道云ocr平台</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用类似-js2py-类似的模块尝试-pyv8-executejs-splash" tabindex="-1"><a class="header-anchor" href="#使用类似-js2py-类似的模块尝试-pyv8-executejs-splash" aria-hidden="true">#</a> 使用类似 js2py 类似的模块尝试, pyv8 executejs splash</h3><h3 id="scrapy-框架" tabindex="-1"><a class="header-anchor" href="#scrapy-框架" aria-hidden="true">#</a> scrapy 框架</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>scrapy startproject project_name
scrapy genspider spider_name domain
scrapy crawl spider_name <span class="token parameter variable">--nolog</span>
<span class="token comment"># crawlspider 模板</span>
scrapy genspider <span class="token parameter variable">-t</span> crawl spider_name domain
<span class="token comment"># scrapy shell url调试代码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本描述" tabindex="-1"><a class="header-anchor" href="#基本描述" aria-hidden="true">#</a> 基本描述</h2>`,20),d={href:"https://cuijiahua.com/blog/spider/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.w3cschool.cn/python3/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://cn.python-requests.org/zh_CN/latest/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://beautifulsoup.readthedocs.io/zh_CN/latest/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://blog.csdn.net/c406495762/article/details/78123502",target:"_blank",rel:"noopener noreferrer"},h=t(`<h3 id="常用库" tabindex="-1"><a class="header-anchor" href="#常用库" aria-hidden="true">#</a> 常用库</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># requests库 或 urllib库 请求、抓取网页数据</span>
pip install requests

<span class="token comment"># 使用 Beautiful Soup 解析 html 文本</span>
pip install beautifulsoup4

<span class="token comment"># scrapy 爬虫框架</span>
<span class="token comment"># pyquery 库 解析html文本</span>
<span class="token comment"># lxml.html.etree 解析html文本</span>
<span class="token comment"># selenium 配合浏览器驱动 自动化操作</span>
<span class="token comment"># pyecharts echarts 图形库</span>
<span class="token comment"># jieba 中文断字解析</span>
<span class="token comment"># scipy 科学计算、统计分析 库</span>
<span class="token comment"># PIL 图形处理</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见" tabindex="-1"><a class="header-anchor" href="#常见" aria-hidden="true">#</a> 常见</h2><h3 id="base64-基本原理" tabindex="-1"><a class="header-anchor" href="#base64-基本原理" aria-hidden="true">#</a> base64 基本原理</h3>`,4),g=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 1. 三个字节一队，3 * 8 = 24 bit</span>
<span class="token comment"># 2. 每6个bit一组，分为4组。24 / 6 = 4组，  每组2**6=64种可能就是所谓的base64</span>
<span class="token comment"># 3. 每组前补两个0，组成一个字节，</span>
<span class="token comment"># 4. 根据base64编码，把相应二进制转为字符， 不足用==补足</span>
<span class="token comment"># 5. 结果资源变大1/3，约为原来的4/3</span>

例如：
文本            a
asiic           <span class="token number">97</span>
二进制          <span class="token number">011000</span>  <span class="token number">01</span><span class="token punctuation">(</span>补<span class="token number">0</span><span class="token punctuation">)</span>     <span class="token punctuation">.</span>       <span class="token punctuation">.</span>
base64索引      <span class="token number">24</span>      <span class="token number">16</span>          <span class="token punctuation">.</span>       <span class="token punctuation">.</span>
base64          Y       Q           <span class="token operator">=</span>       <span class="token operator">=</span>

<span class="token keyword">import</span> base64
base64<span class="token punctuation">.</span>b64encode<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 结果为 YQ==</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> session</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 使用 requests 提供的会话管理</span>
s <span class="token operator">=</span> requests<span class="token punctuation">.</span>session<span class="token punctuation">(</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件存储" tabindex="-1"><a class="header-anchor" href="#文件存储" aria-hidden="true">#</a> 文件存储</h3>`,4),y={href:"https://www.cnblogs.com/chimeiwangliang/p/7130434.html",target:"_blank",rel:"noopener noreferrer"},_=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>req <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token operator">=</span>img_src<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">,</span> verify<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
<span class="token comment"># 二进制</span>
f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./a.jpg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ab&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 追加写入二进制， 不仅仅是图片</span>
f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>req<span class="token punctuation">.</span>content<span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># urllib 库中下载文件的方法</span>
<span class="token keyword">from</span> urllib<span class="token punctuation">.</span>request <span class="token keyword">import</span> urlretrieve
urlretrieve<span class="token punctuation">(</span>IMAGE_URL<span class="token punctuation">,</span> <span class="token string">&#39;./image/img1.png&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 图片的其他方式</span>
<span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image
<span class="token keyword">from</span> io <span class="token keyword">import</span> BytesIO
i <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>BytesIO<span class="token punctuation">(</span>r<span class="token punctuation">.</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="https-不友好" tabindex="-1"><a class="header-anchor" href="#https-不友好" aria-hidden="true">#</a> https 不友好</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># requests 库对 https 不友好，就用原生的解决， 或者使用 selenuim</span>
url <span class="token operator">=</span> <span class="token string">&#39;https://qqchub.com/index.php/ajax/data.html?mid=1&amp;page=1&amp;limit=8&amp;tid=all&amp;by=t&amp;level=1&#39;</span>

headers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">:</span> &quot;Mozilla<span class="token operator">/</span><span class="token number">5.0</span> <span class="token punctuation">(</span>Linux<span class="token punctuation">;</span> Android <span class="token number">8.0</span><span class="token number">.0</span><span class="token punctuation">;</span> MIX 2S Build<span class="token operator">/</span>OPR1<span class="token punctuation">.</span><span class="token number">170623.032</span><span class="token punctuation">)</span>\\
    AppleWebKit<span class="token operator">/</span><span class="token number">537.36</span> <span class="token punctuation">(</span>KHTML<span class="token punctuation">,</span> like Gecko<span class="token punctuation">)</span> Chrome<span class="token operator">/</span><span class="token number">62.0</span><span class="token number">.3202</span><span class="token number">.84</span> Mobile Safari<span class="token operator">/</span><span class="token number">537.36</span>&quot;<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

req <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>

res <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>req<span class="token punctuation">)</span>

data <span class="token operator">=</span> res<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

data <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>data<span class="token punctuation">)</span>

f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;list.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span>

pickle<span class="token punctuation">.</span>dump<span class="token punctuation">(</span>data<span class="token punctuation">,</span> f<span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function x(f,w){const s=l("ExternalLinkIcon");return i(),o("div",null,[u,n("p",null,[n("a",d,[a("入门博客"),e(s)])]),n("p",null,[n("a",m,[a("w3c"),e(s)])]),n("p",null,[n("a",v,[a("requests 中文 Doc"),e(s)])]),n("p",null,[n("a",k,[a("Beautiful Soup 中文 Doc"),e(s)])]),n("p",null,[n("a",b,[a("教程博文"),e(s)])]),h,c(" https://blog.csdn.net/wo541075754/article/details/81734770 "),g,n("p",null,[n("a",y,[a("pillow 常用方法"),e(s)])]),_])}const j=p(r,[["render",x],["__file","python爬虫.html.vue"]]);export{j as default};
