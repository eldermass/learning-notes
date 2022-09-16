import{_ as l,r as c,o as t,c as d,a as n,e as a,b as s,d as i}from"./app.ddafede6.js";const u={},r=n("h1",{id:"redis-\u5165\u95E8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#redis-\u5165\u95E8","aria-hidden":"true"},"#"),s(" Redis \u5165\u95E8")],-1),p={href:"https://www.redis.net.cn/tutorial/3508.html",target:"_blank",rel:"noopener noreferrer"},o=s("\u4E2D\u6587\u6587\u6863"),v=i(`<h2 id="\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55" aria-hidden="true">#</a> \u767B\u5F55</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8\u670D\u52A1</span>
redis-server
<span class="token comment"># \u767B\u5F55 6379</span>
redis-cli -h <span class="token function">host</span> -p port -a password
<span class="token comment"># \u67E5\u770B\u6240\u6709\u6570\u636E</span>
keys *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>AUTH password \u9A8C\u8BC1\u5BC6\u7801\u662F\u5426\u6B63\u786E
ECHO message \u6253\u5370\u5B57\u7B26\u4E32
PING \u67E5\u770B\u670D\u52A1\u662F\u5426\u8FD0\u884C
QUIT \u5173\u95ED\u5F53\u524D\u8FDE\u63A5
SELECT index \u5207\u6362\u5230\u6307\u5B9A\u7684\u6570\u636E\u5E93
INFO
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B" aria-hidden="true">#</a> \u7C7B\u578B</h2><h3 id="\u57FA\u7840\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u547D\u4EE4" aria-hidden="true">#</a> \u57FA\u7840\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dump.rdb\u5FEB\u7167
<span class="token builtin class-name">type</span> key
del key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-\u5B57\u7B26\u4E32-string" tabindex="-1"><a class="header-anchor" href="#_1-\u5B57\u7B26\u4E32-string" aria-hidden="true">#</a> 1.\u5B57\u7B26\u4E32 string</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E\u503C</span>
<span class="token builtin class-name">set</span> key value         \u8BBE\u7F6Ekey
setex key seconds value \u8BBE\u7F6Ekey\u5E76\u8D4B\u4E88\u8FC7\u671F\u65F6\u95F4\uFF0C\u79D2\u8BA1
psetex key milliseconds value  \u540C\u4E0A\uFF0C\u6BEB\u79D2\u8BA1
setnx key value       \u4E0D\u5B58\u5728key\u65F6\uFF0C\u8BBE\u7F6E\u67D0\u503C
setrange key offset value \u4ECE\u504F\u79FBx\u5F00\u59CB\u63D2\u5165\u503C
mset key value key value  \u8BBE\u7F6E\u591A\u4E2A\u5EFA\u503C
msetnx key value key value \u4EC5\u5F53key\u90FD\u4E0D\u5728\u7684\u65F6\u5019\uFF0C\u624D\u8BBE\u7F6E\u8FD9\u4E9B\u5EFA\u503C

<span class="token comment"># \u8BFB\u53D6\u503C</span>
get key               \u8BFB\u53D6key
mget key1 key2        \u8BFB\u53D6\u591A\u4E2Akey
strlen key            \u83B7\u53D6\u5B57\u7B26\u4E32\u957F\u5EA6

getrange  key start end \u83B7\u53D6\u5B50\u5B57\u7B26\u4E32\uFF0C\u7C7B\u4F3Csubstr
getset key value      \u8BBE\u7F6E\u65B0\u503C\uFF0C\u8FD4\u56DE\u8001\u503C

<span class="token comment"># \u6539\u53D8\u503C</span>
incr key              \u6570\u503C\u52A0\u4E00
incrby key increment  \u6570\u503C\u52A0n
decr key              \u6570\u503C\u51CF\u4E00
decrby key decrement  \u6570\u503C\u51CFn
append key value      \u8FFD\u52A0\u5B57\u7B26\u4E32\u4E4B\u524D\u7684\u503C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u54C8\u5E0C-hash" tabindex="-1"><a class="header-anchor" href="#_2-\u54C8\u5E0C-hash" aria-hidden="true">#</a> 2. \u54C8\u5E0C hash</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E\u8868\u503C</span>
hset key field value            \u8BBE\u7F6E\u6216\u8FFD\u52A0\u67D0\u4E2A\u5B57\u6BB5
hmset key field value <span class="token punctuation">[</span>field value <span class="token punctuation">..</span>.<span class="token punctuation">]</span> \u8BBE\u7F6E\u6216\u8FFD\u52A0\u7ED9\u5B9A\u7684\u5B57\u6BB5
hsetnx key field value          \u4E0D\u5B58\u5728\u65F6\u8BBE\u7F6E\u503C

<span class="token comment"># \u83B7\u53D6</span>
hgetall key           \u83B7\u53D6\u67D0\u952E\u4E0B\u7684\u6240\u6709\u503C
hget key field        \u83B7\u53D6\u952E\u4E0B\u7684\u67D0\u4E2A\u5B57\u6BB5\u503C
hmget key field field2 \u83B7\u53D6\u7ED9\u5B9A\u5B57\u6BB5\u7684\u503C
hkeys key             \u83B7\u53D6\u6240\u6709\u952E
hvals key             \u83B7\u53D6\u6240\u6709\u7684\u503C
hlen key              \u83B7\u53D6\u952E\u7684\u6570\u91CF

hexists key field     \u67E5\u770B\u662F\u5426\u6709\u8BE5\u5B57\u6BB5

hscan key cursor <span class="token punctuation">[</span>match pattern<span class="token punctuation">]</span> <span class="token punctuation">[</span>count number<span class="token punctuation">]</span> \u6839\u636E\u6E38\u6807cursor<span class="token punctuation">(</span>\u6570\u5B57<span class="token punctuation">)</span>\u6765\u8FED\u4EE3\u904D\u5386

<span class="token comment"># \u4FEE\u6539</span>
hincrby key field increment \u67D0\u5B57\u6BB5\u589E\u52A0n
hincrbyfloat key field increment \u67D0\u5B57\u6BB5\u589E\u52A0n\u7684\u6D6E\u70B9\u503C

<span class="token comment"># \u5220\u9664</span>
hdel key field <span class="token punctuation">[</span>field<span class="token punctuation">]</span> \u5220\u9664\u67D0\u4E2A\u5B57\u6BB5\u7684\u503C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u5217\u8868-list" tabindex="-1"><a class="header-anchor" href="#_3-\u5217\u8868-list" aria-hidden="true">#</a> 3.\u5217\u8868 list</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E</span>
lset key index value    \u901A\u8FC7\u7D22\u5F15\u8BBE\u7F6E\u503C
lpush key value value2  \u653E\u5165\u4E00\u4E9B\u503C\u5230\u5934\u90E8
lpushx key value        \u628A\u5DF2\u5B58\u5728\u7684\u503C\u653E\u5230\u5934\u90E8\uFF0C\u6216\u65B0\u52A0
rpush key value         \u6DFB\u52A0\u503C
rpushx key value        \u4E3A\u5DF2\u5B58\u5728\u7684\u5217\u8868\u6DFB\u52A0\u503C

<span class="token comment"># \u83B7\u53D6</span>
lrange key start end    \u83B7\u53D6\u4E00\u5B9A\u8303\u56F4\u7684\u503C
lindex key index        \u8BFB\u53D6index\u4F4D\u7F6E\u7684\u503C
llen key                \u8BFB\u53D6\u5217\u8868\u957F\u5EA6

blpop key <span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token function">timeout</span> \u5F39\u51FA\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C\u6CA1\u6709\u5143\u7D20\u4F1A\u963B\u585En\u79D2
brpop key <span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token function">timeout</span> \u5F39\u51FA\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C\u6CA1\u6709\u5143\u7D20\u4F1A\u963B\u585En\u79D2

brpoplpush <span class="token builtin class-name">source</span> destination <span class="token function">timeout</span> \u5F39\u51FA\u503C\u5E76\u653E\u5165\u53E6\u5916\u7684\u5217\u8868\uFF0C\u963B\u585E
rpoplpush <span class="token builtin class-name">source</span> destination \u5F39\u51FA\u6700\u540E\u503C\u5E76\u653E\u5165\u53E6\u5916\u7684\u5217\u8868

<span class="token comment"># \u4FEE\u6539</span>
linsert key before<span class="token operator">|</span>after pivot value  \u5728\u67D0\u503C<span class="token punctuation">(</span>pivot<span class="token punctuation">)</span>\u524D\u6216\u540E\u63D2\u5165value

lpop key                \u79FB\u9664\uFF0C\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u5143\u7D20
rpop                    \u79FB\u9664\uFF0C\u8FD4\u56DE\u6700\u540E<span class="token punctuation">(</span>\u6700\u53F3<span class="token punctuation">)</span>\u5143\u7D20
lrem key count value    \u5220\u9664count\u4E2A\u7B49\u503C\u6570\u636E\uFF0Ccount<span class="token operator">&gt;</span><span class="token number">0</span>\u5C3E\u90E8\u5F00\u59CB\u641C\uFF0C<span class="token operator">=</span><span class="token number">0</span>\u5220\u9664\u6240\u6709, <span class="token operator">&lt;</span><span class="token number">0</span>\u5934\u90E8\u5F00\u59CB
ltrim key start end     \u5220\u9664\u4E0D\u5728\u8303\u56F4\u5185\u7684\u5143\u7D20<span class="token punctuation">[</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u96C6\u5408-set" tabindex="-1"><a class="header-anchor" href="#_4-\u96C6\u5408-set" aria-hidden="true">#</a> 4. \u96C6\u5408 set</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E</span>
sadd key member <span class="token punctuation">[</span>member<span class="token punctuation">]</span>  \u6DFB\u52A0\u5230\u96C6\u5408

<span class="token comment"># \u83B7\u53D6</span>
smembers key              \u83B7\u53D6\u96C6\u5408\u7684\u6240\u6709\u6210\u5458

sismember key member      \u5224\u65AD\u662F\u5426\u5B58\u5728member
scard key                 \u83B7\u53D6\u96C6\u5408\u7684\u6210\u5458\u6570

sunion key <span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span>      \u8FD4\u56DE\u7ED9\u5B9A\u51E0\u4E2A\u7684\u5408\u5E76\u96C6
sunionstore destinantion key <span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span> \u8FD4\u56DE\u7ED9\u5B9A\u51E0\u4E2A\u7684\u5408\u5E76\u96C6\uFF0C\u5E76\u50A8\u5B58
<span class="token function">sdiff</span> key <span class="token punctuation">[</span>key<span class="token punctuation">]</span>           \u6BD4\u8F83\u4E24\u96C6\u5408\u7684\u5DEE\u96C6
sdiffstore destination key <span class="token punctuation">[</span>key<span class="token punctuation">]</span>  \u6BD4\u8F83\u4E24\u96C6\u5408\u7684\u5DEE\u96C6,\u5E76\u50A8\u5B58\u5728dest\u91CC
sinter key <span class="token punctuation">[</span>key<span class="token punctuation">]</span>          \u8FD4\u56DE\u4E24\u96C6\u5408\u7684\u4EA4\u96C6
sinterstore destination key <span class="token punctuation">[</span>key<span class="token punctuation">]</span>     \u8FD4\u56DE\u4E24\u51E0\u4E2A\u7684\u4EA4\u96C6\uFF0C\u5E76\u50A8\u5B58

<span class="token comment"># \u4FEE\u6539</span>
smove <span class="token builtin class-name">source</span> destination member \u628A\u67D0\u6210\u5458\u4ECE\u96C6\u5408a\u79FB\u52A8\u5230\u96C6\u5408b
spop key <span class="token punctuation">[</span>count<span class="token punctuation">]</span>          \u968F\u673A\u79FB\u9664n\u4E2A\u6210\u5458
srandmember key <span class="token punctuation">[</span>count<span class="token punctuation">]</span>   \u968F\u673A\u8FD4\u56DEn\u4E2A\u6210\u5458
srem key member <span class="token punctuation">[</span>member<span class="token punctuation">]</span>  \u79FB\u9664\u6210\u5458

sscan key cursor <span class="token punctuation">[</span>match pattern<span class="token punctuation">]</span> <span class="token punctuation">[</span>count n<span class="token punctuation">]</span> \u8FED\u4EE3\u96C6\u5408

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u6709\u5E8F\u96C6\u5408-sorted-set" tabindex="-1"><a class="header-anchor" href="#_5-\u6709\u5E8F\u96C6\u5408-sorted-set" aria-hidden="true">#</a> 5. \u6709\u5E8F\u96C6\u5408 sorted set</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6DFB\u52A0</span>
zadd key score member <span class="token punctuation">[</span> socre member<span class="token punctuation">]</span>   \u50CF\u96C6\u5408\u6DFB\u52A0\u6210\u5458

<span class="token comment"># \u83B7\u53D6</span>
zrange key start end <span class="token punctuation">[</span>withscores<span class="token punctuation">]</span> \u83B7\u53D6\u6240\u6709\u6210\u5458
zrangebylex key min max           \u6309\u5B57\u5178\u533A\u95F4\u83B7\u53D6
zrangebyscore key min max <span class="token punctuation">[</span>withscores<span class="token punctuation">]</span>  \u5206\u6570\u533A\u95F4\u83B7\u53D6\u6210\u5458
zrevrange key start stop <span class="token punctuation">[</span>WITHSCORES<span class="token punctuation">]</span> \u8FD4\u56DE\u6709\u5E8F\u96C6\u4E2D\u6307\u5B9A\u533A\u95F4\u5185\u7684\u6210\u5458\uFF0C\u901A\u8FC7\u7D22\u5F15\uFF0C\u5206\u6570\u4ECE\u9AD8\u5230\u5E95<span class="token punctuation">(</span>\u548Czrange\u65B9\u5411\u76F8\u53CD<span class="token punctuation">)</span>
zrevrangebyscore key max min <span class="token punctuation">[</span>WITHSCORES<span class="token punctuation">]</span> \u8FD4\u56DE\u6709\u5E8F\u96C6\u4E2D\u6307\u5B9A\u5206\u6570\u533A\u95F4\u5185\u7684\u6210\u5458\uFF0C\u5206\u6570\u4ECE\u9AD8\u5230\u4F4E\u6392\u5E8F
zrevrank key member \u8FD4\u56DE\u6709\u5E8F\u96C6\u5408\u4E2D\u6307\u5B9A\u6210\u5458\u7684\u6392\u540D\uFF0C\u6709\u5E8F\u96C6\u6210\u5458\u6309\u5206\u6570\u503C\u9012\u51CF<span class="token punctuation">(</span>\u4ECE\u5927\u5230\u5C0F<span class="token punctuation">)</span>\u6392\u5E8F

zscore key member             \u8FD4\u56DE\u6210\u5458\u5206\u6570\u503C
zrank key member              \u83B7\u53D6\u6307\u5B9A\u6210\u5458\u7684\u7D22\u5F15
zcard key                     \u83B7\u53D6\u6210\u5458\u6570\u91CF
zcount key min max            \u83B7\u53D6\u533A\u95F4\u5206\u6570\u7684\u6210\u5458\u6570\u91CF
zlexcount key min max         \u5728\u6709\u5E8F\u96C6\u5408\u4E2D\u8BA1\u7B97\u6307\u5B9A\u5B57\u5178\u533A\u95F4\u5185\u6210\u5458\u6570\u91CF


<span class="token comment"># \u4FEE\u6539</span>
zrem key member <span class="token punctuation">[</span>member<span class="token punctuation">]</span>      \u79FB\u9664\u6210\u5458\u6848\u4F8B
zremrangebylex key min max    \u79FB\u9664\u6709\u5E8F\u96C6\u5408\u4E2D\u7ED9\u5B9A\u7684\u5B57\u5178\u533A\u95F4\u7684\u6240\u6709\u6210\u5458
zremrangebyrank key min max   \u79FB\u9664\u6709\u5E8F\u96C6\u5408\u4E2D\u7ED9\u5B9A\u7684\u6392\u540D\u533A\u95F4\u7684\u6240\u6709\u6210\u5458
ZREMRANGEBYSCORE key min max  \u79FB\u9664\u6709\u5E8F\u96C6\u5408\u4E2D\u7ED9\u5B9A\u7684\u5206\u6570\u533A\u95F4\u7684\u6240\u6709\u6210\u5458

zincrby key increment member  \u6210\u5458\u6392\u5E8F\u5206\u6570\u589E\u52A0n

zinterstore destination numkeys key <span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span> \u8BA1\u7B97\u7ED9\u5B9A\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u6709\u5E8F\u96C6\u7684\u4EA4\u96C6\u5E76\u5C06\u7ED3\u679C\u96C6\u5B58\u50A8\u5728\u65B0\u7684\u6709\u5E8F\u96C6\u5408 key \u4E2D
ZUNIONSTORE destination numkeys key <span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span> \u8BA1\u7B97\u7ED9\u5B9A\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u6709\u5E8F\u96C6\u7684\u5E76\u96C6\uFF0C\u5E76\u5B58\u50A8\u5728\u65B0\u7684 key \u4E2D
ZSCAN key cursor <span class="token punctuation">[</span>MATCH pattern<span class="token punctuation">]</span> <span class="token punctuation">[</span>COUNT count<span class="token punctuation">]</span> \u8FED\u4EE3\u6709\u5E8F\u96C6\u5408\u4E2D\u7684\u5143\u7D20\uFF08\u5305\u62EC\u5143\u7D20\u6210\u5458\u548C\u5143\u7D20\u5206\u503C\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-hyperloglog" tabindex="-1"><a class="header-anchor" href="#_6-hyperloglog" aria-hidden="true">#</a> 6. HyperLogLog</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pfaddd key element element              \u6DFB\u52A0\u5230\u57FA\u6570\u96C6
pfcount key                             \u57FA\u6570\u6570\u91CF
pfmerge destkey sourcekey <span class="token punctuation">[</span>sourcekey<span class="token punctuation">]</span>   \u5408\u5E76\u5230\u57FA\u6570\u96C6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-\u53D1\u5E03\u8BA2\u9605" tabindex="-1"><a class="header-anchor" href="#_7-\u53D1\u5E03\u8BA2\u9605" aria-hidden="true">#</a> 7. \u53D1\u5E03\u8BA2\u9605</h3>`,19),m={href:"https://www.redis.net.cn/tutorial/3514.html",target:"_blank",rel:"noopener noreferrer"},b=s("\u6559\u7A0B"),k=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BA2\u9605</span>
subscribe channel <span class="token punctuation">[</span>channel<span class="token punctuation">]</span> \u8BA2\u9605\u6307\u5B9A\u9891\u9053
psubscribe pattern <span class="token punctuation">[</span>pattern<span class="token punctuation">]</span>  \u8BA2\u9605\u7B26\u5408\u6307\u5B9A\u6807\u51C6\u7684\u9891\u9053

<span class="token comment"># \u9000\u8BA2</span>
unsubscribe channel <span class="token punctuation">[</span>channel<span class="token punctuation">]</span> \u9000\u8BA2\u6307\u5B9A\u9891\u9053
PUNSUBSCRIBE <span class="token punctuation">[</span>pattern <span class="token punctuation">[</span>pattern <span class="token punctuation">..</span>.<span class="token punctuation">]</span><span class="token punctuation">]</span> \u9000\u8BA2\u6240\u6709\u7ED9\u5B9A\u6A21\u5F0F\u7684\u9891\u9053\u3002

<span class="token comment"># \u53D1\u5E03</span>
publish channel message   \u7ED9\u6307\u5B9A\u9891\u9053\u53D1\u9001\u4FE1\u606F

<span class="token comment"># \u67E5\u770B\u7CFB\u7EDF\u8BA2\u9605\u72B6\u6001</span>
pubsub <span class="token operator">&lt;</span>subcommand<span class="token operator">&gt;</span> <span class="token punctuation">[</span>argument<span class="token punctuation">]</span> \u53EF\u9009channels

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#_8-\u4E8B\u52A1" aria-hidden="true">#</a> 8. \u4E8B\u52A1</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>multi   \u6807\u8BB0\u4E8B\u52A1\u7684\u5F00\u59CB
<span class="token builtin class-name">exec</span>    \u6267\u884C\u4E8B\u52A1\u5757\u4E2D\u7684\u547D\u4EE4
discard \u53D6\u6D88\u4E8B\u52A1
<span class="token function">watch</span> key <span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span> \u76D1\u89C6\u4E00\u4E2A<span class="token punctuation">(</span>\u6216\u591A\u4E2A<span class="token punctuation">)</span> key \uFF0C\u5982\u679C\u5728\u4E8B\u52A1\u6267\u884C\u4E4B\u524D\u8FD9\u4E2A<span class="token punctuation">(</span>\u6216\u8FD9\u4E9B<span class="token punctuation">)</span> key \u88AB\u5176\u4ED6\u547D\u4EE4\u6240\u6539\u52A8\uFF0C\u90A3\u4E48\u4E8B\u52A1\u5C06\u88AB\u6253\u65AD\u3002
unwatch key \u53D6\u6D88\u76D1\u542C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function h(y,g){const e=c("ExternalLinkIcon");return t(),d("div",null,[r,n("p",null,[n("a",p,[o,a(e)])]),v,n("p",null,[n("a",m,[b,a(e)])]),k])}var f=l(u,[["render",h],["__file","redis\u5165\u95E8.html.vue"]]);export{f as default};
