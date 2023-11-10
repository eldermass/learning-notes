import{_ as n,Y as s,Z as a,$ as t,a0 as e}from"./framework-6d304b95.js";const p={},l=e(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function o(c,u){return s(),a("div",null,[l,t(` ::: vue-demo 代码演示

\`\`\`vue
<template>
  <div class="box">
    <code>这是一段越点越多的</code>
    <span @click="handler">{{ message }}</span>!
  </div>
</template>
<script>
const { ref } = Vue;

export default {
  setup() {
    const message = ref("代码示例");

    const handler = () => {
      message.value = "代码示例" + message.value;
    };

    return {
      message,
      handler,
    };
  },
};
<\/script>
<style>
.box span {
  color: red;
  cursor: pointer;
  user-select: none;
}
</style>
\`\`\`

:::

::: vue-playground 交互演示
@file App.vue

\`\`\`vue
<script setup>
import { ref } from "vue";

const msg = ref("你改变了我，就能改变结果!");
<\/script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>
\`\`\`

@import

\`\`\`json
"imports": {
    "vue3": "//cdn.jsdelivr.net/npm/vue@3",
    "element-plus": "//cdn.jsdelivr.net/npm/element-plus",
    "elementPlusStyle": "//cdn.jsdelivr.net/npm/element-plus/dist/index.css"
  }
\`\`\`

@setting

\`\`\`json
{
  "showCompileOutput": true
}
\`\`\`

::: `)])}const r=n(p,[["render",o],["__file","index.html.vue"]]);export{r as default};
