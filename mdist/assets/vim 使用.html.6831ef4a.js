import{_ as n,o as i,c as s,d as e}from"./app.ddafede6.js";const l={},a=e(`<h1 id="vim-\u57FA\u672C\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#vim-\u57FA\u672C\u6307\u4EE4" aria-hidden="true">#</a> Vim \u57FA\u672C\u6307\u4EE4</h1><h2 id="\u79FB\u52A8\u5149\u6807" tabindex="-1"><a class="header-anchor" href="#\u79FB\u52A8\u5149\u6807" aria-hidden="true">#</a> \u79FB\u52A8\u5149\u6807</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u4E0A:k nk:\u5411\u4E0A\u79FB\u52A8 n \u884C 9999k \u6216 gg \u53EF\u4EE5\u79FB\u5230\u7B2C\u4E00\u884C G \u79FB\u5230\u6700\u540E\u4E00\u884C
\u4E0B:j nj:\u5411\u4E0B\u79FB\u52A8 n \u884C
\u5DE6:h nh:\u5411\u5DE6\u79FB\u52A8 n \u5217
\u53F3:l nl:\u5411\u53F3\u79FB\u52A8 n \u5217

w\uFF1A\u5149\u6807\u4EE5\u5355\u8BCD\u5411\u524D\u79FB\u52A8 nw\uFF1A\u5149\u6807\u5411\u524D\u79FB\u52A8 n \u4E2A\u5355\u8BCD \u5149\u6807\u5230\u5355\u8BCD\u7684\u7B2C\u4E00\u4E2A\u5B57\u6BCD\u4E0A
b\uFF1A\u4E0E w \u76F8\u53CD
e: \u5149\u6807\u4EE5\u5355\u8BCD\u5411\u524D\u79FB\u52A8 ne\uFF1A\u5149\u6807\u5411\u524D\u79FB\u52A8 n \u4E2A\u5355\u8BCD \u5149\u6807\u5230\u5355\u8BCD\u7684\u6700\u540E\u4E00\u4E2A\u5B57\u6BCD\u4E0A
ge:\u4E0E e \u76F8\u53CD

$:\u79FB\u52A8\u5149\u6807\u5230\u884C\u5C3E n$:\u79FB\u52A8\u5230\u7B2C n \u884C\u7684\u884C\u5C3E
<span class="token number">0</span>\uFF08Num\uFF09\uFF1A\u79FB\u52A8\u5149\u6807\u5230\u884C\u9996
^:\u79FB\u52A8\u5149\u6807\u5230\u884C\u9996\u7B2C\u4E00\u4E2A\u975E\u7A7A\u5B57\u7B26\u4E0A\u53BB

f:\u79FB\u52A8\u5149\u6807\u5230\u5F53\u524D\u884C\u7684\u5B57\u7B26 a \u4E0A\uFF0Cnf \u79FB\u52A8\u5149\u6807\u5230\u5F53\u524D\u884C\u7684\u7B2C n \u4E2A a \u5B57\u7B26\u4E0A
F:\u76F8\u53CD

%:\u79FB\u52A8\u5230\u4E0E\u5236\u5339\u914D\u7684\u62EC\u53F7\u4E0A\u53BB\uFF08\uFF09\uFF0C<span class="token punctuation">{</span><span class="token punctuation">}</span>\uFF0C<span class="token punctuation">[</span><span class="token punctuation">]</span>\uFF0C<span class="token operator">&lt;&gt;</span>\u7B49\u3002

nG:\u79FB\u52A8\u5230\u7B2C n \u884C\u4E0A G:\u5230\u6700\u540E\u4E00\u884C

CTRL \uFF0B G \u5F97\u5230\u5F53\u524D\u5149\u6807\u5728\u6587\u4EF6\u4E2D\u7684\u4F4D\u7F6E

\u5411\u524D\u7FFB\u9875\uFF1ACTRL+F
\u5411\u4E0B\u79FB\u52A8\u534A\u5C4F\uFF1ACTRL \uFF0B G

\u5411\u540E\u7FFB\u9875\uFF1ACTRL+B

\u5230\u6587\u4EF6\u5F00\u5934 gg
\u5230\u6587\u4EF6\u7ED3\u5C3E shift+g

\u5B58\u76D8\uFF1A
:q<span class="token operator">!</span> :\u4E0D\u5B58\u76D8\u9000\u51FA
:e<span class="token operator">!</span> :\u653E\u5F03\u4FEE\u6539\u6587\u4EF6\u5185\u5BB9\uFF0C\u91CD\u65B0\u8F7D\u5165\u8BE5\u6587\u4EF6\u7F16\u8F91
:wq \uFF1A\u5B58\u76D8\u9000\u51FA

dw\uFF1A\u5220\u9664\u4E00\u4E2A\u5355\u8BCD,\u9700\u5C06\u5149\u6807\u79FB\u5230\u5355\u8BCD\u7684\u7B2C\u4E00\u4E2A\u5B57\u6BCD\u4E0A\uFF0C\u6309 dw\uFF0C\u5982\u679C\u5149\u6807\u5728\u5355\u8BCD\u4EFB\u610F\u4F4D\u7F6E\uFF0C\u7528 daw
dnw:\u5220\u9664 n \u4E2A\u5355\u8BCD
dne:\u4E5F\u53EF\uFF0C\u53EA\u662F\u5220\u9664\u5230\u5355\u8BCD\u5C3E
dnl:\u5411\u53F3\u5220\u9664 n \u4E2A\u5B57\u6BCD
dnh:\u5411\u5DE6\u5220\u9664 n \u4E2A\u5B57\u6BCD
dnj:\u5411\u4E0B\u5220\u9664 n \u884C
dnk:\u5411\u4E0A\u5220\u9664 n \u884C
d$\uFF1A\u5220\u9664\u5F53\u524D\u5149\u6807\u5230\u6539\u884C\u7684\u884C\u5C3E\u7684\u5B57\u6BCD
dd\uFF1A\u5220\u9664\u4E00\u884C
cnw<span class="token punctuation">[</span>word<span class="token punctuation">]</span>:\u5C06n\u4E2Aword\u6539\u53D8\u4E3Aword
cc:\u6539\u53D8\u6574\u884C
C$:\u6539\u53D8\u5230\u884C\u5C3E

J: \u5220\u9664\u6362\u884C\u7B26\uFF0C\u5C06\u5149\u6807\u79FB\u5230\u6539\u884C\uFF0C\u6309 shift+j \u5220\u9664\u884C\u5C3E\u7684\u6362\u884C\u7B26\uFF0C\u4E0B\u4E00\u884C\u63A5\u4E0A\u6765\u4E86.
u: \u64A4\u9500\u524D\u4E00\u6B21\u7684\u64CD\u4F5C
shif+u<span class="token punctuation">(</span>U<span class="token punctuation">)</span>:\u64A4\u9500\u5BF9\u8BE5\u884C\u7684\u6240\u6709\u64CD\u4F5C\u3002

:set showmode :\u8BBE\u7F6E\u663E\u793A\u5DE5\u4F5C\u6A21\u5F0F

o\uFF1A\u5728\u5F53\u524D\u884C\u7684\u4E0B\u9762\u53E6\u8D77\u4E00\u884C
O\uFF08shift+o<span class="token punctuation">)</span>\uFF1A\u5728\u5F53\u524D\u884C\u7684\u4E0A\u9762\u53E6\u8D77\u4E00\u884C

nk \u6216 nj\uFF1A\u5149\u6807\u5411\u4E0A\u6216\u5411\u4E0B\u79FB n \u884C\uFF0Cn \u4E3A\u6570\u5B57
an<span class="token operator">!</span>\u3010ESC\u3011\uFF1A\u5728\u884C\u540E\u9762\u52A0 n \u4E2A\u611F\u53F9\u53F7<span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">)</span>
nx:\u6267\u884C n \u6B21 x<span class="token punctuation">(</span>\u5220\u9664<span class="token punctuation">)</span>\u64CD\u4F5C

ZZ\uFF1A\u4FDD\u5B58\u5F53\u524D\u6587\u6863\u5E76\u9000\u51FA VIM

:help \uFF1A\u67E5\u770B\u5E2E\u52A9\u6587\u6863\uFF0C\u5728\u8FD9\u4E4B\u4E2D\uFF0C\u6309 CTRL+<span class="token punctuation">]</span> \u8FDB\u5165\u8D85\u8FDE\u63A5\uFF0C\u6309 CTRL \uFF0B O \u8FD4\u56DE\u3002
:help subject :\u770B\u67D0\u4E00\u4E3B\u9898\u7684\u5E2E\u52A9\uFF0CZZ \u9000\u51FA\u5E2E\u52A9

:set number / <span class="token builtin class-name">set</span> nonumber :\u663E\u793A/\u4E0D\u663E\u793A\u884C\u53F7
:set ruler /set noruler:\u663E\u793A/\u4E0D\u663E\u793A\u6807\u5C3A

/pattern \u6B63\u65B9\u5411\u641C\u7D22\u4E00\u4E2A\u5B57\u7B26\u6A21\u5F0F
?pattern \u53CD\u65B9\u5411\u641C\u7D22\u4E00\u4E2A\u5B57\u7B26\u6A21\u5F0F
\u7136\u540E\u6309 n \u7EE7\u7EED\u5411\u4E0B\u627E

\u628A\u5149\u6807\u653E\u5230\u67D0\u4E2A\u5355\u8BCD\u4E0A\u9762\uFF0C\u7136\u540E\u6309 \xD7 \u53F7\u952E\uFF0C\u8868\u793A\u67E5\u627E\u8FD9\u4E2A\u5355\u8BCD
\u67E5\u627E\u6574\u4E2A\u5355\u8BCD\uFF1A/<span class="token punctuation">\\</span>

:set hlsearch \u9AD8\u4EAE\u663E\u793A\u67E5\u627E\u5230\u7684\u5355\u8BCD
:set nohlsearch \u5173\u95ED\u6539\u529F\u80FD

m<span class="token punctuation">[</span>a-z<span class="token punctuation">]</span>:\u5728\u6587\u4E2D\u505A\u6807\u8BB0\uFF0C\u6807\u8BB0\u53F7\u53EF\u4E3A a-z \u7684 <span class="token number">26</span> \u4E2A\u5B57\u6BCD\uFF0C\u7528<span class="token punctuation">\\</span>\`a \u53EF\u4EE5\u79FB\u52A8\u5230\u6807\u8BB0 a \u5904

r:\u66FF\u6362\u5F53\u524D\u5B57\u7B26
nr \u5B57\u7B26\uFF1A\u66FF\u6362\u5F53\u524D n \u4E2A\u5B57\u7B26

\u67E5\u627E\u66FF\u6362\uFF1A
way1:
/\u3010word\u3011 :\u67E5\u627E\u67D0\u4E2A word
cw\u3010newword\u3011:\u66FF\u6362\u4E3A\u65B0 word
n: \u7EE7\u7EED\u67E5\u627E
.: \u6267\u884C\u66FF\u6362

way2:
:s/string1/string2/g:\u5728\u4E00\u884C\u4E2D\u5C06 string1 \u66FF\u6362\u4E3A string2,g \u8868\u793A\u6267\u884C \u7528 c \u8868\u793A\u9700\u8981\u786E\u8BA4
:num1,num2 s/string1/string2/g:\u5728\u884C num1 \u81F3 num2 \u4E2D\u95F4\u5C06 string1 \u66FF\u6362\u4E3A string2
:1,<span class="token punctuation">\\</span>$ s/string1/string2/g:\u5728\u5168\u6587\u4E2D\u5C06 string1 \u66FF\u6362\u4E3A string2

v:\u8FDB\u5165 visual \u6A21\u5F0F
\u3010ESC\u3011\u9000\u51FA
V:shift+v \u8FDB\u5165\u884C\u7684 visual \u6A21\u5F0F
CTRL+V:\u8FDB\u5982\u5757\u64CD\u4F5C\u6A21\u5F0F\u7528 o \u548C O \u6539\u53D8\u9009\u62E9\u7684\u8FB9\u7684\u5927\u5C0F\u3002

\u7C98\u8D34\uFF1Ap\uFF0C\u8FD9\u662F\u7C98\u8D34\u7528 x \u6216 d \u5220\u9664\u7684\u6587\u672C
\u590D\u5236\uFF1A
ynw\uFF1A\u590D\u5236 n \u4E2A\u5355\u8BCD
yy\uFF1A\u590D\u5236\u4E00\u884C
ynl:\u590D\u5236 n \u4E2A\u5B57\u7B26
y<span class="token punctuation">\\</span>$:\u590D\u5236\u5F53\u524D\u5149\u6807\u81F3\u884C\u5C3E\u5904
nyy:\u62F7\u8D1D n \u884C
\u5B8C\u4E86\u7528 p \u7C98\u8D34

:split:\u5206\u5272\u4E00\u4E2A\u7A97\u53E3
:split file.c \uFF1A\u4E3A\u53E6\u4E00\u4E2A\u6587\u4EF6 file.c \u5206\u9694\u7A97\u53E3
:nsplit file.c: \u4E3A\u53E6\u4E00\u4E2A\u6587\u4EF6 file.c \u5206\u9694\u7A97\u53E3\uFF0C\u5E76\u6307\u5B9A\u5176\u884C\u6570
CTRL \uFF0B W \u5728\u7A97\u53E3\u4E2D\u5207\u6362
:close\uFF1A\u5173\u95ED\u5F53\u524D\u7A97\u53E3

\u5728\u6240\u6709\u884C\u63D2\u5165\u76F8\u540C\u7684\u5185\u5BB9\u5982 include<span class="token operator">&lt;</span>\uFF0C\u64CD\u4F5C\u65B9\u6CD5\u5982\u4E0B\uFF1A
\u5C06\u5149\u6807\u79FB\u5230\u5F00\u59CB\u63D2\u5165\u7684\u4F4D\u7F6E\uFF0C\u6309 CTRL+V \u8FDB\u5165 VISUAL \u6A21\u5F0F\uFF0C\u9009\u62E9\u597D\u6A21\u5757\u540E
\u6309 I\uFF08shift+i<span class="token punctuation">)</span>\uFF0C\u540E\u63D2\u5165\u8981\u63D2\u5165\u7684\u6587\u672C\uFF0C\u6309<span class="token punctuation">[</span>ESC<span class="token punctuation">]</span>\u5B8C\u6210\u3002

:read file.c \u5C06\u6587\u4EF6 file.c \u7684\u5185\u5BB9\u63D2\u5165\u5230\u5F53\u524D\u5149\u6807\u6240\u5728\u7684\u4E0B\u9762
:0read file.c \u5C06\u6587\u4EF6 file.c \u7684\u5185\u5BB9\u63D2\u5165\u5230\u5F53\u524D\u6587\u4EF6\u7684\u5F00\u59CB\u5904<span class="token punctuation">(</span>\u7B2C <span class="token number">0</span> \u884C\uFF09
:nread file.c \u5C06\u6587\u4EF6 file.c \u7684\u5185\u5BB9\u63D2\u5165\u5230\u5F53\u524D\u6587\u4EF6\u7684\u7B2C n \u884C\u540E\u9762
:read <span class="token operator">!</span>cmd :\u5C06\u5916\u90E8\u547D\u4EE4 cmd \u7684\u8F93\u51FA\u63D2\u5982\u5230\u5F53\u524D\u5149\u6807\u6240\u5728\u7684\u4E0B\u9762

:n1,n2 <span class="token function">write</span> temp.c \u5C06\u672C\u6587\u4EF6\u4E2D\u7684 n1,\u5230 n2 \u884C\u5199\u5165 temp.c \u8FD9\u4E2A\u6587\u4EF6\u4E2D\u53BB

CTRL \uFF0B L \u5237\u65B0\u5C4F\u5E55
<span class="token builtin class-name">shift</span> + <span class="token operator">&lt;</span> \u5DE6\u79FB\u4E00\u884C
<span class="token builtin class-name">shift</span> + <span class="token operator">&gt;</span> \u53F3\u79FB\u4E00\u884C

u: undo
CTRL+R: re-do
J: \u5408\u5E76\u4E00\u884C
CTRL+p \u81EA\u52A8\u5B8C\u6210\u529F\u80FD
CTRL+g \u67E5\u770B\u5F53\u524D\u6587\u4EF6\u5168\u8DEF\u5F84
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=[a];function v(c,r){return i(),s("div",null,d)}var m=n(l,[["render",v],["__file","vim \u4F7F\u7528.html.vue"]]);export{m as default};
