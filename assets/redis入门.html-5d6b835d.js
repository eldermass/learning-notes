import{_ as l,Y as t,Z as c,a1 as n,a2 as s,a3 as a,a0 as i,E as d}from"./framework-6d304b95.js";const u={},r=n("h1",{id:"redis-入门",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#redis-入门","aria-hidden":"true"},"#"),s(" Redis 入门")],-1),p={href:"https://www.redis.net.cn/tutorial/3508.html",target:"_blank",rel:"noopener noreferrer"},o=i(`<h2 id="登录" tabindex="-1"><a class="header-anchor" href="#登录" aria-hidden="true">#</a> 登录</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动服务</span>
redis-server
<span class="token comment"># 登录 6379</span>
redis-cli <span class="token parameter variable">-h</span> <span class="token function">host</span> <span class="token parameter variable">-p</span> port <span class="token parameter variable">-a</span> password
<span class="token comment"># 查看所有数据</span>
keys *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>AUTH password 验证密码是否正确
ECHO message 打印字符串
PING 查看服务是否运行
QUIT 关闭当前连接
SELECT index 切换到指定的数据库
INFO
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h2><h3 id="基础命令" tabindex="-1"><a class="header-anchor" href="#基础命令" aria-hidden="true">#</a> 基础命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dump.rdb快照
<span class="token builtin class-name">type</span> key
del key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-字符串-string" tabindex="-1"><a class="header-anchor" href="#_1-字符串-string" aria-hidden="true">#</a> 1.字符串 string</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置值</span>
<span class="token builtin class-name">set</span> key value         设置key
setex key seconds value 设置key并赋予过期时间，秒计
psetex key milliseconds value  同上，毫秒计
setnx key value       不存在key时，设置某值
setrange key offset value 从偏移x开始插入值
mset key value key value  设置多个建值
msetnx key value key value 仅当key都不在的时候，才设置这些建值

<span class="token comment"># 读取值</span>
get key               读取key
mget key1 key2        读取多个key
strlen key            获取字符串长度

getrange  key start end 获取子字符串，类似substr
getset key value      设置新值，返回老值

<span class="token comment"># 改变值</span>
incr key              数值加一
incrby key increment  数值加n
decr key              数值减一
decrby key decrement  数值减n
append key value      追加字符串之前的值

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-哈希-hash" tabindex="-1"><a class="header-anchor" href="#_2-哈希-hash" aria-hidden="true">#</a> 2. 哈希 hash</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置表值</span>
hset key field value            设置或追加某个字段
hmset key field value <span class="token punctuation">[</span>field value <span class="token punctuation">..</span>.<span class="token punctuation">]</span> 设置或追加给定的字段
hsetnx key field value          不存在时设置值

<span class="token comment"># 获取</span>
hgetall key           获取某键下的所有值
hget key field        获取键下的某个字段值
hmget key field field2 获取给定字段的值
hkeys key             获取所有键
hvals key             获取所有的值
hlen key              获取键的数量

hexists key field     查看是否有该字段

hscan key cursor <span class="token punctuation">[</span>match pattern<span class="token punctuation">]</span> <span class="token punctuation">[</span>count number<span class="token punctuation">]</span> 根据游标cursor<span class="token punctuation">(</span>数字<span class="token punctuation">)</span>来迭代遍历

<span class="token comment"># 修改</span>
hincrby key field increment 某字段增加n
hincrbyfloat key field increment 某字段增加n的浮点值

<span class="token comment"># 删除</span>
hdel key field <span class="token punctuation">[</span>field<span class="token punctuation">]</span> 删除某个字段的值

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-列表-list" tabindex="-1"><a class="header-anchor" href="#_3-列表-list" aria-hidden="true">#</a> 3.列表 list</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置</span>
lset key index value    通过索引设置值
lpush key value value2  放入一些值到头部
lpushx key value        把已存在的值放到头部，或新加
rpush key value         添加值
rpushx key value        为已存在的列表添加值

<span class="token comment"># 获取</span>
lrange key start end    获取一定范围的值
lindex key index        读取index位置的值
llen key                读取列表长度

blpop key <span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token function">timeout</span> 弹出第一个元素，没有元素会阻塞n秒
brpop key <span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token function">timeout</span> 弹出最后一个元素，没有元素会阻塞n秒

brpoplpush <span class="token builtin class-name">source</span> destination <span class="token function">timeout</span> 弹出值并放入另外的列表，阻塞
rpoplpush <span class="token builtin class-name">source</span> destination 弹出最后值并放入另外的列表

<span class="token comment"># 修改</span>
linsert key before<span class="token operator">|</span>after pivot value  在某值<span class="token punctuation">(</span>pivot<span class="token punctuation">)</span>前或后插入value

lpop key                移除，返回第一个元素
rpop                    移除，返回最后<span class="token punctuation">(</span>最右<span class="token punctuation">)</span>元素
lrem key count value    删除count个等值数据，count<span class="token operator">&gt;</span><span class="token number">0</span>尾部开始搜，<span class="token operator">=</span><span class="token number">0</span>删除所有, <span class="token operator">&lt;</span><span class="token number">0</span>头部开始
ltrim key start end     删除不在范围内的元素<span class="token punctuation">[</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-集合-set" tabindex="-1"><a class="header-anchor" href="#_4-集合-set" aria-hidden="true">#</a> 4. 集合 set</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置</span>
sadd key member <span class="token punctuation">[</span>member<span class="token punctuation">]</span>  添加到集合

<span class="token comment"># 获取</span>
smembers key              获取集合的所有成员

sismember key member      判断是否存在member
scard key                 获取集合的成员数

sunion key <span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span>      返回给定几个的合并集
sunionstore destinantion key <span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span> 返回给定几个的合并集，并储存
<span class="token function">sdiff</span> key <span class="token punctuation">[</span>key<span class="token punctuation">]</span>           比较两集合的差集
sdiffstore destination key <span class="token punctuation">[</span>key<span class="token punctuation">]</span>  比较两集合的差集,并储存在dest里
sinter key <span class="token punctuation">[</span>key<span class="token punctuation">]</span>          返回两集合的交集
sinterstore destination key <span class="token punctuation">[</span>key<span class="token punctuation">]</span>     返回两几个的交集，并储存

<span class="token comment"># 修改</span>
smove <span class="token builtin class-name">source</span> destination member 把某成员从集合a移动到集合b
spop key <span class="token punctuation">[</span>count<span class="token punctuation">]</span>          随机移除n个成员
srandmember key <span class="token punctuation">[</span>count<span class="token punctuation">]</span>   随机返回n个成员
srem key member <span class="token punctuation">[</span>member<span class="token punctuation">]</span>  移除成员

sscan key cursor <span class="token punctuation">[</span>match pattern<span class="token punctuation">]</span> <span class="token punctuation">[</span>count n<span class="token punctuation">]</span> 迭代集合

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-有序集合-sorted-set" tabindex="-1"><a class="header-anchor" href="#_5-有序集合-sorted-set" aria-hidden="true">#</a> 5. 有序集合 sorted set</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加</span>
zadd key score member <span class="token punctuation">[</span> socre member<span class="token punctuation">]</span>   像集合添加成员

<span class="token comment"># 获取</span>
zrange key start end <span class="token punctuation">[</span>withscores<span class="token punctuation">]</span> 获取所有成员
zrangebylex key min max           按字典区间获取
zrangebyscore key min max <span class="token punctuation">[</span>withscores<span class="token punctuation">]</span>  分数区间获取成员
zrevrange key start stop <span class="token punctuation">[</span>WITHSCORES<span class="token punctuation">]</span> 返回有序集中指定区间内的成员，通过索引，分数从高到底<span class="token punctuation">(</span>和zrange方向相反<span class="token punctuation">)</span>
zrevrangebyscore key max min <span class="token punctuation">[</span>WITHSCORES<span class="token punctuation">]</span> 返回有序集中指定分数区间内的成员，分数从高到低排序
zrevrank key member 返回有序集合中指定成员的排名，有序集成员按分数值递减<span class="token punctuation">(</span>从大到小<span class="token punctuation">)</span>排序

zscore key member             返回成员分数值
zrank key member              获取指定成员的索引
zcard key                     获取成员数量
zcount key min max            获取区间分数的成员数量
zlexcount key min max         在有序集合中计算指定字典区间内成员数量


<span class="token comment"># 修改</span>
zrem key member <span class="token punctuation">[</span>member<span class="token punctuation">]</span>      移除成员案例
zremrangebylex key min max    移除有序集合中给定的字典区间的所有成员
zremrangebyrank key min max   移除有序集合中给定的排名区间的所有成员
ZREMRANGEBYSCORE key min max  移除有序集合中给定的分数区间的所有成员

zincrby key increment member  成员排序分数增加n

zinterstore destination numkeys key <span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span> 计算给定的一个或多个有序集的交集并将结果集存储在新的有序集合 key 中
ZUNIONSTORE destination numkeys key <span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span> 计算给定的一个或多个有序集的并集，并存储在新的 key 中
ZSCAN key cursor <span class="token punctuation">[</span>MATCH pattern<span class="token punctuation">]</span> <span class="token punctuation">[</span>COUNT count<span class="token punctuation">]</span> 迭代有序集合中的元素（包括元素成员和元素分值）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-hyperloglog" tabindex="-1"><a class="header-anchor" href="#_6-hyperloglog" aria-hidden="true">#</a> 6. HyperLogLog</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pfaddd key element element              添加到基数集
pfcount key                             基数数量
pfmerge destkey sourcekey <span class="token punctuation">[</span>sourcekey<span class="token punctuation">]</span>   合并到基数集
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-发布订阅" tabindex="-1"><a class="header-anchor" href="#_7-发布订阅" aria-hidden="true">#</a> 7. 发布订阅</h3>`,19),v={href:"https://www.redis.net.cn/tutorial/3514.html",target:"_blank",rel:"noopener noreferrer"},m=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 订阅</span>
subscribe channel <span class="token punctuation">[</span>channel<span class="token punctuation">]</span> 订阅指定频道
psubscribe pattern <span class="token punctuation">[</span>pattern<span class="token punctuation">]</span>  订阅符合指定标准的频道

<span class="token comment"># 退订</span>
unsubscribe channel <span class="token punctuation">[</span>channel<span class="token punctuation">]</span> 退订指定频道
PUNSUBSCRIBE <span class="token punctuation">[</span>pattern <span class="token punctuation">[</span>pattern <span class="token punctuation">..</span>.<span class="token punctuation">]</span><span class="token punctuation">]</span> 退订所有给定模式的频道。

<span class="token comment"># 发布</span>
publish channel message   给指定频道发送信息

<span class="token comment"># 查看系统订阅状态</span>
pubsub <span class="token operator">&lt;</span>subcommand<span class="token operator">&gt;</span> <span class="token punctuation">[</span>argument<span class="token punctuation">]</span> 可选channels

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-事务" tabindex="-1"><a class="header-anchor" href="#_8-事务" aria-hidden="true">#</a> 8. 事务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>multi   标记事务的开始
<span class="token builtin class-name">exec</span>    执行事务块中的命令
discard 取消事务
<span class="token function">watch</span> key <span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span> 监视一个<span class="token punctuation">(</span>或多个<span class="token punctuation">)</span> key ，如果在事务执行之前这个<span class="token punctuation">(</span>或这些<span class="token punctuation">)</span> key 被其他命令所改动，那么事务将被打断。
unwatch key 取消监听

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function b(k,h){const e=d("ExternalLinkIcon");return t(),c("div",null,[r,n("p",null,[n("a",p,[s("中文文档"),a(e)])]),o,n("p",null,[n("a",v,[s("教程"),a(e)])]),m])}const g=l(u,[["render",b],["__file","redis入门.html.vue"]]);export{g as default};
