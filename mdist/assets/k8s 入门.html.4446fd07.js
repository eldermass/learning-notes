import{_ as i,r,o as t,c as l,a as e,e as a,b as n,d as c}from"./app.ddafede6.js";const o={},d=e("h1",{id:"k8s-\u5165\u95E8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#k8s-\u5165\u95E8","aria-hidden":"true"},"#"),n(" K8s \u5165\u95E8")],-1),u={href:"https://juejin.cn/post/6952331691524358174",target:"_blank",rel:"noopener noreferrer"},m=n("\u6559\u7A0B"),v=e("br",null,null,-1),b={href:"https://kubernetes.io/zh/docs/tutorials/kubernetes-basics/create-cluster/cluster-intro/",target:"_blank",rel:"noopener noreferrer"},p=n("\u5B98\u65B9\u6587\u6863"),h=c(`<h2 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5</h2><p>\u7701\u7565</p><h2 id="\u547D\u4EE4-\u5148\u5C1D\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4-\u5148\u5C1D\u8BD5" aria-hidden="true">#</a> \u547D\u4EE4(\u5148\u5C1D\u8BD5)</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u96C6\u7FA4</span>
<span class="token comment"># Cluster up and running</span>
minikube version
minikube start

<span class="token comment"># Cluster version</span>
kubectl version

<span class="token comment"># Cluster details</span>
kubectl cluster-info
kubectl get nodes

<span class="token comment"># \u90E8\u7F72\u5E94\u7528</span>
<span class="token comment"># Deploy our app</span>
kubectl create deployment kubernetes-bootcamp --image<span class="token operator">=</span>gcr.io/google-samples/kubernetes-bootcamp:v1

<span class="token comment"># View our app</span>
kubectl proxy

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function _(k,f){const s=r("ExternalLinkIcon");return t(),l("div",null,[d,e("p",null,[e("a",u,[m,a(s)]),v,e("a",b,[p,a(s)])]),h])}var x=i(o,[["render",_],["__file","k8s \u5165\u95E8.html.vue"]]);export{x as default};
