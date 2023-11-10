import{_ as d,Y as u,Z as m,a1 as n,a2 as s,a3 as a,a4 as t,a0 as l,E as i}from"./framework-6d304b95.js";const k="/learning-notes/assets/service-c3f5876a.png",v={},b=n("h1",{id:"k8s-入门",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#k8s-入门","aria-hidden":"true"},"#"),s(" K8s 入门")],-1),h={href:"https://juejin.cn/post/6952331691524358174",target:"_blank",rel:"noopener noreferrer"},g=n("br",null,null,-1),y={href:"https://kubernetes.io/zh/docs/tutorials/kubernetes-basics/create-cluster/cluster-intro/",target:"_blank",rel:"noopener noreferrer"},f=n("br",null,null,-1),_={href:"https://docs.rancher.cn/docs/k3s/quick-start/_index",target:"_blank",rel:"noopener noreferrer"},x=n("h2",{id:"一、k3s",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一、k3s","aria-hidden":"true"},"#"),s(" 一、K3S")],-1),P=n("br",null,null,-1),S={href:"https://www.yuque.com/wukong-zorrm/qdoy5p/lgspzc",target:"_blank",rel:"noopener noreferrer"},q=l(`<h3 id="一-安装" tabindex="-1"><a class="header-anchor" href="#一-安装" aria-hidden="true">#</a> (一). 安装</h3><h4 id="_1-在主服务器上安装-master-节点-k3s-server" tabindex="-1"><a class="header-anchor" href="#_1-在主服务器上安装-master-节点-k3s-server" aria-hidden="true">#</a> 1. 在主服务器上安装 master 节点，k3s server</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sfL</span> https://get.k3s.io <span class="token operator">|</span> <span class="token function">sh</span> -
<span class="token comment"># 使用国内代理</span>
<span class="token function">curl</span> <span class="token parameter variable">-sfL</span> https://rancher-mirror.rancher.cn/k3s/k3s-install.sh <span class="token operator">|</span> <span class="token assign-left variable">INSTALL_K3S_MIRROR</span><span class="token operator">=</span>cn <span class="token function">sh</span> -

<span class="token comment"># 如果安装不上时，可能需要先更新ca证书</span>
yum update <span class="token parameter variable">-y</span> ca-certificates <span class="token comment"># 更新证书</span>
yum-config-manager <span class="token parameter variable">--disable</span> rancher-k3s-common-stable <span class="token comment"># 禁用 rancher-k3s-common-stable 源 --enable 启用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-在其他服务器安装工作节点-k3s-agent" tabindex="-1"><a class="header-anchor" href="#_2-在其他服务器安装工作节点-k3s-agent" aria-hidden="true">#</a> 2. 在其他服务器安装工作节点，k3s-agent</h4><p>安装 work 节点时，需要先获取 master 节点上的 url 和 token</p><blockquote><p>token 位于 /var/lib/rancher/k3s/server/node-token</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">K3S_URL</span><span class="token operator">=</span>https://10.10.1.123:6443
<span class="token assign-left variable">K3S_TOKEN</span><span class="token operator">=</span>K1042e2f8e353b9409472c1e0cca8457abe184dc7be3f0805109e92c50c193ceb42::node:c83acbf89a7de7026d6f6928dc270028
<span class="token function">curl</span> <span class="token parameter variable">-sfL</span> https://get.k3s.io <span class="token operator">|</span> <span class="token assign-left variable">K3S_URL</span><span class="token operator">=</span><span class="token variable">\${K3S_URL}</span> <span class="token assign-left variable">K3S_TOKEN</span><span class="token operator">=</span><span class="token variable">\${K3S_TOKEN}</span> <span class="token function">sh</span> -
<span class="token comment"># 换源如下</span>
<span class="token function">curl</span> <span class="token parameter variable">-sfL</span> https://rancher-mirror.rancher.cn/k3s/k3s-install.sh <span class="token operator">|</span> <span class="token assign-left variable">INSTALL_K3S_MIRROR</span><span class="token operator">=</span>cn <span class="token assign-left variable">K3S_URL</span><span class="token operator">=</span><span class="token variable">\${K3S_URL}</span> <span class="token assign-left variable">K3S_TOKEN</span><span class="token operator">=</span><span class="token variable">\${K3S_TOKEN}</span> <span class="token function">sh</span> -
<span class="token comment">### 命令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-修改镜像仓库" tabindex="-1"><a class="header-anchor" href="#_3-修改镜像仓库" aria-hidden="true">#</a> 3. 修改镜像仓库</h4><p>安装完成后，就可以通过以下命令查看 k3s 集群的状态，和设置镜像仓库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 每隔 1 秒查看 node 的安装状态</span>
<span class="token function">watch</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> kubectl get <span class="token function">node</span>

<span class="token comment"># 修改配置后重启</span>
systemctl restart k3s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>k3s 镜像仓库的配置文件位于 /etc/rancher/k3s/registries.yaml，不要修改生成 /var/lib/rancher/k3s/agent/etc/containerd/config.toml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">mirrors</span><span class="token punctuation">:</span>
    <span class="token key atrule">&quot;docker.io&quot;</span><span class="token punctuation">:</span>
        <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;https://fsp2sfpr.mirror.aliyuncs.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二-、命令" tabindex="-1"><a class="header-anchor" href="#二-、命令" aria-hidden="true">#</a> (二)、命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 获取集群信息</span>
kubectl cluster-info

<span class="token comment"># 获取所有资源</span>
kubectl get all

<span class="token comment"># 获取集群节点状态</span>
kubectl get lease <span class="token parameter variable">-A</span>

<span class="token comment"># 网络信息</span>
kubectl get endpoints <span class="token parameter variable">-n</span> kube-system

<span class="token comment"># 查看 IngressRoute</span>
kubectl get IngressRoute <span class="token parameter variable">-A</span>

<span class="token comment"># crictl 命令来查看正在运行的容器，与 docker 命令差不多</span>
crictl <span class="token function">ps</span>

<span class="token comment"># 将pod端口映射到主机端口</span>
kubectl port-forward <span class="token operator">&lt;</span>pod-name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>host-port<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>pod-port<span class="token operator">&gt;</span>

<span class="token comment"># 删除指定命名空间下的所有东西</span>
kubectl delete all <span class="token parameter variable">--all</span> <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>namespace<span class="token operator">&gt;</span>

<span class="token comment"># 停止 k3s，重置容器、网络、iptables</span>
/usr/local/bin/k3s-killall.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三-、离线导入导出镜像" tabindex="-1"><a class="header-anchor" href="#三-、离线导入导出镜像" aria-hidden="true">#</a> (三)、离线导入导出镜像</h3><h4 id="_1-docker-中" tabindex="-1"><a class="header-anchor" href="#_1-docker-中" aria-hidden="true">#</a> 1. docker 中</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 导出镜像</span>
<span class="token function">docker</span> save <span class="token parameter variable">-o</span> <span class="token operator">&lt;</span>path <span class="token keyword">for</span> generated <span class="token function">tar</span> file<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>image name<span class="token operator">&gt;</span>
<span class="token function">docker</span> save image_name <span class="token operator">&gt;</span> image_name.tar <span class="token comment"># 保存到当前目录</span>
<span class="token comment"># 导入镜像</span>
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> <span class="token operator">&lt;</span>path to image <span class="token function">tar</span> file<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-k8s-中" tabindex="-1"><a class="header-anchor" href="#_2-k8s-中" aria-hidden="true">#</a> 2. k8s 中</h4><p>因为底层改为了 containerd，所以不能直接使用 docker 命令，需要使用 crictl 命令来导入导出镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 导出镜像</span>
crictl <span class="token parameter variable">-n</span> k8s.io images <span class="token builtin class-name">export</span> <span class="token operator">&lt;</span>file.tar<span class="token operator">&gt;</span> docker.io/library/<span class="token operator">&lt;</span>image name<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>tag<span class="token operator">&gt;</span> <span class="token parameter variable">--platform</span> linux/amd64

<span class="token comment"># 导入镜像, 镜像都在k8s.io命名空间下</span>
crictl <span class="token parameter variable">-n</span> k8s.io images <span class="token function">import</span> <span class="token operator">&lt;</span>image name<span class="token operator">&gt;</span> <span class="token parameter variable">--platform</span> linux/amd64

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、pod-容器集" tabindex="-1"><a class="header-anchor" href="#二、pod-容器集" aria-hidden="true">#</a> 二、Pod（容器集）</h2><p>Pod 是包含一个或多个容器的容器组，是 Kubernetes 中创建和管理的最小对象。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建 pod，缩写是 po</span>
kubectl run inginx <span class="token parameter variable">--image</span><span class="token operator">=</span>nginx:1.22
<span class="token comment"># 执行一次性任务</span>
kubectl run ibusy <span class="token parameter variable">--image</span><span class="token operator">=</span>busybox <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span>
<span class="token comment"># 指定标签</span>
kubectl run inginx <span class="token parameter variable">--image</span><span class="token operator">=</span>nginx:1.22 <span class="token parameter variable">--labels</span><span class="token operator">=</span><span class="token string">&quot;app=inginx&quot;</span>

<span class="token comment"># 查看 pod 状态</span>
kubectl get pod <span class="token parameter variable">-A</span>
kubectl get pod <span class="token parameter variable">-o</span> wide <span class="token comment"># 现实详细信息</span>

<span class="token comment"># 查看 pod 运行日志</span>
kubectl get logs <span class="token parameter variable">-f</span> inginx

<span class="token comment"># 查看 pod 详情</span>
kubectl describe pod inginx

<span class="token comment"># 进入 pod</span>
kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> inginx -- /bin/bash

<span class="token comment"># 删除 pod</span>
kubectl delete pod inginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、deployment-部署-和-replicaset-副本集" tabindex="-1"><a class="header-anchor" href="#三、deployment-部署-和-replicaset-副本集" aria-hidden="true">#</a> 三、Deployment（部署）和 ReplicaSet（副本集）</h2><p>Deployment 是对 ReplicaSet 和 Pod 更高级的抽象。 它使 Pod 拥有多副本，自愈，扩缩容、滚动升级等能力。</p><p>ReplicaSet(副本集)是一个 Pod 的集合。 它可以设置运行 Pod 的数量，确保任何时间都有指定数量的 Pod 副本在运行。 通常我们不直接使用 ReplicaSet，而是在 Deployment 中声明。</p><p>而 Deployment 可以看做是 ReplicaSet 的管理器，确保 ReplicaSet 中运行的 Pod 的数量和配置与 Deployment 中定义的一致。 他们的名称也是相互关联的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建</span>
kubectl create deployment dnginx <span class="token parameter variable">--image</span><span class="token operator">=</span>nginx:1.22 <span class="token parameter variable">--replicas</span><span class="token operator">=</span><span class="token number">3</span>

<span class="token comment"># 查看</span>
kubectl get deployment
<span class="token comment"># 查看详细信息</span>
kubectl get deploy <span class="token parameter variable">-o</span> wide

<span class="token comment"># 缩放副本集</span>
kubectl scale deployment dnginx <span class="token parameter variable">--replicas</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token comment"># 根据cpu自动缩放</span>
kubectl autoscale deployment dnginx <span class="token parameter variable">--min</span><span class="token operator">=</span><span class="token number">3</span> <span class="token parameter variable">--max</span><span class="token operator">=</span><span class="token number">5</span> --cpu-percent<span class="token operator">=</span><span class="token number">70</span>
<span class="token comment"># 查看/删除 自动缩放</span>
kubectl get hpa
kubectl describe hpa dnginx

<span class="token comment"># 更新镜像，滚动升级</span>
kubectl <span class="token builtin class-name">set</span> image deployment dnginx <span class="token assign-left variable">nginx</span><span class="token operator">=</span>nginx:1.23

<span class="token comment"># 查看镜像的历史版本</span>
kuebctl rollout <span class="token function">history</span> deployment dnginx
kuebctl rollout <span class="token function">history</span> deployment dnginx <span class="token parameter variable">--revision</span><span class="token operator">=</span><span class="token number">1</span> <span class="token comment"># 查看某个版本的详细信息</span>

<span class="token comment"># 回滚到上一个版本</span>
kubectl rollout undo deployment dninx
kubectl rollout undo deployment dninx --to-revision<span class="token operator">=</span><span class="token number">1</span> <span class="token comment"># 回滚到指定版本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 观察副本集，rs 是 replicaSet 的缩写</span>
kuebcrl get replicaSet <span class="token parameter variable">--watch</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、service-服务" tabindex="-1"><a class="header-anchor" href="#四、service-服务" aria-hidden="true">#</a> 四、Service（服务）</h2><p>Service 将运行在一组 Pods 上的应用程序公开为网络服务的抽象方法。 Service 为一组 Pod 提供相同的 DNS 名，并且在它们之间进行负载均衡。 Kubernetes 为 Pod 提供分配了 IP 地址，但 IP 地址可能会发生变化。 集群内的容器可以通过 service 名称访问服务，而不需要担心 Pod 的 IP 发生变化。</p>`,31),K={href:"https://kubernetes.io/zh-cn/docs/concepts/overview/working-with-objects/labels/",target:"_blank",rel:"noopener noreferrer"},R=l('<p>举个例子，在一个 Service 中运行了 3 个 nginx 的副本。这些副本是可互换的，我们不需要关心它们调用了哪个 nginx，也不需要关注 Pod 的运行状态，只需要调用这个服务就可以了。</p><h3 id="关于-servicetype-的取值" tabindex="-1"><a class="header-anchor" href="#关于-servicetype-的取值" aria-hidden="true">#</a> 关于 ServiceType 的取值</h3><ul><li><code>ClusterIP</code>：将服务公开在集群内部。kubernetes 会给服务分配一个集群内部的 IP，集群内的所有主机都可以通过这个 Cluster-IP 访问服务。集群内部的 Pod 可以通过 service 名称访问服务。</li><li><code>NodePort</code>：通过每个节点的主机 IP 和静态端口（NodePort）暴露服务。 集群的外部主机可以使用节点 IP 和 NodePort 访问服务。</li><li><code>ExternalName</code>：将集群外部的网络引入集群内部。</li><li><code>LoadBalancer</code>：使用云提供商的负载均衡器向外部暴露服务。</li></ul><p><img src="'+k+`" alt="service网络"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 获取服务， svc 是缩写</span>
kubectl get services <span class="token parameter variable">-A</span>

<span class="token comment"># 查看服务详情</span>
kubectl describe <span class="token function">service</span> dnginx

<span class="token comment"># 创建服务</span>
kubectl expose deployment dnginx <span class="token parameter variable">--name</span><span class="token operator">=</span>nginx-service <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">8088</span> --target-port<span class="token operator">=</span><span class="token number">80</span>

kubectl expose deploy dnginx <span class="token parameter variable">--name</span><span class="token operator">=</span>nginx-outside <span class="token parameter variable">--type</span><span class="token operator">=</span>NodePort <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">8089</span> --target-port<span class="token operator">=</span><span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、namespace-命名空间" tabindex="-1"><a class="header-anchor" href="#五、namespace-命名空间" aria-hidden="true">#</a> 五、Namespace(命名空间)</h2>`,6),N={href:"https://kubernetes.io/zh-cn/docs/concepts/policy/resource-quotas/",target:"_blank",rel:"noopener noreferrer"},L=l(`<ul><li>例如我们可以设置开发、测试、生产等多个命名空间。</li></ul><p>同一命名空间内的资源名称要唯一，但跨命名空间时没有这个要求。<br> 命名空间作用域仅针对带有名字空间的对象，例如 Deployment、Service 等。<br> 这种作用域对集群访问的对象不适用，例如 StorageClass、Node、PersistentVolume 等。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看命名空间</span>
kubectl get namespace

<span class="token comment"># 创建命名空间，ns 是 namespace 的缩写</span>
kubectl create namespace dev

<span class="token comment"># 运行容器到指定命名空间， 缩写 -n=dev</span>
kubectl run nginx <span class="token parameter variable">--image</span><span class="token operator">=</span>nginx:1.22 <span class="token parameter variable">--namespace</span><span class="token operator">=</span>dev

<span class="token comment"># 查看指定命名空间的 pod</span>
kubectl get pod <span class="token parameter variable">-n</span><span class="token operator">=</span>dev

<span class="token comment"># 删除命名空间</span>
kubectl delete namespace dev

<span class="token comment"># 查看当前命名空间</span>
kubectl config current-context
<span class="token comment"># 设置默认命名空间</span>
kubectl config set-context <span class="token variable"><span class="token variable">$(</span>kubectl config current-context<span class="token variable">)</span></span> <span class="token parameter variable">--namespace</span><span class="token operator">=</span>dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、label-标签" tabindex="-1"><a class="header-anchor" href="#六、label-标签" aria-hidden="true">#</a> 六、Label(标签)</h2><p>标签（Labels） 是附加到对象（比如 Pod）上的键值对，用于补充对象的描述信息。<br> 标签使用户能够以松散的方式管理对象映射，而无需客户端存储这些映射。<br> 由于一个集群中可能管理成千上万个容器，我们可以使用标签高效的进行选择和操作容器集合。</p><p>在实践中，<code>标签</code>和<code>选择器</code>一一对应，决定了 Service 如何选择一组 Pod。详细看 yaml 中配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看标签</span>
kubectl get pods --show-labels

<span class="token comment"># 创建带标签的 pod</span>
kubectl run nginx <span class="token parameter variable">--image</span><span class="token operator">=</span>nginx:1.22 <span class="token parameter variable">--labels</span><span class="token operator">=</span><span class="token string">&quot;app=nginx,env=dev&quot;</span>

<span class="token comment"># 查看指定标签的 pod</span>
kubectl get pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx
kubectl get pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx,env<span class="token operator">=</span>dev <span class="token comment"># 多个标签用逗号隔开，表示and关系</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>标签选择的两种方式</p><p>基于等值</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span> <span class="token comment"># component=redis &amp;&amp; version=7.0</span>
        <span class="token key atrule">component</span><span class="token punctuation">:</span> redis
        <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">7.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基于集合</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span> <span class="token comment"># tier in (cache, backend) &amp;&amp; environment not in (dev, prod)</span>
        <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> tier<span class="token punctuation">,</span> <span class="token key atrule">operator</span><span class="token punctuation">:</span> In<span class="token punctuation">,</span> <span class="token key atrule">values</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>cache<span class="token punctuation">,</span> backend<span class="token punctuation">]</span> <span class="token punctuation">}</span>
        <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> environment<span class="token punctuation">,</span> <span class="token key atrule">operator</span><span class="token punctuation">:</span> NotIn<span class="token punctuation">,</span> <span class="token key atrule">values</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>dev<span class="token punctuation">,</span> prod<span class="token punctuation">]</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、yaml-声明式对象配置" tabindex="-1"><a class="header-anchor" href="#七、yaml-声明式对象配置" aria-hidden="true">#</a> 七、Yaml(声明式对象配置)</h2><p>kubernetes 使用 yaml 文件来描述 Kubernetes 对象。</p><h3 id="_1-yaml-规范" tabindex="-1"><a class="header-anchor" href="#_1-yaml-规范" aria-hidden="true">#</a> 1. YAML 规范</h3><ul><li>缩进代表上下级关系</li><li>缩进时不允许使用 Tab 键，只允许使用空格，通常缩进 2 个空格</li><li>: 键值对，后面必须有空格</li><li>- 列表，后面必须有空格</li><li>[ ] 数组</li><li># 注释</li><li>| 多行文本块</li><li>--- 表示文档的开始，多用于分割多个资源对象</li></ul><h3 id="_2-pod-yaml-示例" tabindex="-1"><a class="header-anchor" href="#_2-pod-yaml-示例" aria-hidden="true">#</a> 2. pod yaml 示例</h3><p>在创建的 Kubernetes 对象所对应的 yaml 文件中，需要配置的字段如下：</p><ul><li>apiVersion - Kubernetes API 的版本</li><li>kind - 对象类别，例如 Pod、Deployment、Service、ReplicaSet 等</li><li>metadata - 描述对象的元数据，包括一个 name 字符串、UID 和可选的 namespace</li><li>spec - 对象的配置</li></ul>`,19),D={href:"https://juejin.cn/post/7016215566234943524",target:"_blank",rel:"noopener noreferrer"},I=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 导出"),s(`
kubectl get all --all-namespaces `),n("span",{class:"token parameter variable"},"-o"),s(" yaml "),n("span",{class:"token operator"},">"),s(` all.yaml
`),n("span",{class:"token comment"},"# 导入"),s(`
kubectl apply `),n("span",{class:"token parameter variable"},"-f"),s(` pod.yaml
kubectl apply `),n("span",{class:"token parameter variable"},"-f"),s(` https://k8s.io/examples/pods/simple-pod.yaml

`),n("span",{class:"token comment"},"# 查看部署状态"),s(`
kubectl get deploym
kubectl get po
kubectl get svc

`),n("span",{class:"token comment"},"# 删除"),s(`
kubectl delete `),n("span",{class:"token parameter variable"},"-f"),s(` pod.yaml
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` apps/v1
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` Deployment
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(" myapp"),n("span",{class:"token punctuation"},"-"),s(`deployment
`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"replicas"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"3"),s(`
    `),n("span",{class:"token key atrule"},"selector"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"matchLabels"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token key atrule"},"app"),n("span",{class:"token punctuation"},":"),s(` myapp
    `),n("span",{class:"token key atrule"},"template"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token comment"},"# 这里面写的是 pod 模板"),s(`
        `),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
                `),n("span",{class:"token key atrule"},"app"),n("span",{class:"token punctuation"},":"),s(` myapp
        `),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token key atrule"},"containers"),n("span",{class:"token punctuation"},":"),s(`
                `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(" nginx"),n("span",{class:"token punctuation"},"-"),s(`pod
                  `),n("span",{class:"token key atrule"},"image"),n("span",{class:"token punctuation"},":"),s(" nginx"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"1.22"),s(`
                  `),n("span",{class:"token key atrule"},"ports"),n("span",{class:"token punctuation"},":"),s(`
                      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"containerPort"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"80"),s(`

`),n("span",{class:"token punctuation"},"---"),s(`
`),n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` v1
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` Service
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(" myapp"),n("span",{class:"token punctuation"},"-"),s(`service
`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"selector"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"app"),n("span",{class:"token punctuation"},":"),s(` myapp
    `),n("span",{class:"token key atrule"},"ports"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"port"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"8080"),s(`
          `),n("span",{class:"token key atrule"},"targetPort"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"80"),s(`
          `),n("span",{class:"token key atrule"},"nodePort"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"30080"),s(`
    `),n("span",{class:"token key atrule"},"type"),n("span",{class:"token punctuation"},":"),s(` NodePort
    `),n("span",{class:"token comment"},"# LoadBalancer 时会自动分配 EXTERNAL-IP，从而将 nodePort 暴露到公网"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=l(`<p>如果要修改端口映射 或者 EXTERNAL-IP 可以使用下面命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看 -n 命名空间</span>
kubectl get services <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>namespace<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>service-name<span class="token operator">&gt;</span>
<span class="token comment"># 修改</span>
kubectl edit <span class="token function">service</span> myapp-service
<span class="token comment"># 修改  spec.ports 处理映射关系</span>
<span class="token comment"># 修改  spec.type 为 LoadBalancer 时，会自动分配 EXTERNAL-IP</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-安装-dashboard" tabindex="-1"><a class="header-anchor" href="#_3-安装-dashboard" aria-hidden="true">#</a> 3. 安装 Dashboard</h3><p>Kubernetes Dashboard 来管理 Kubernetes 集群</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml
<span class="token comment"># 启动Kubernetes Dashboard：</span>
kubectl proxy

<span class="token comment"># 接下来，您可以在浏览器中访问</span>
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/
<span class="token comment"># 来访问Kubernetes Dashboard。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、-卷-volume" tabindex="-1"><a class="header-anchor" href="#八、-卷-volume" aria-hidden="true">#</a> 八、 卷(Volume)</h2><p>卷是独立于容器之外的一块存储区域，通过挂载(Mount)的方式供 Pod 中的容器使用。 使用场景</p><ul><li>卷可以在多个容器之间共享数据。</li><li>卷可以将容器数据存储在外部存储或云存储上。</li><li>卷更容易备份或迁移。</li></ul><h3 id="_1-零时卷-ebphemeral-volume" tabindex="-1"><a class="header-anchor" href="#_1-零时卷-ebphemeral-volume" aria-hidden="true">#</a> 1. 零时卷(EBphemeral Volume)</h3><ul><li>与 Pod 一起创建和删除，生命周期与 Pod 相同</li><li>emptyDir - 初始内容为空的本地临时目录</li><li>configMap - 为 Pod 注入配置文件</li><li>secret - 为 Pod 注入加密数据</li></ul><h3 id="_2-持久卷-persistent-volume" tabindex="-1"><a class="header-anchor" href="#_2-持久卷-persistent-volume" aria-hidden="true">#</a> 2. 持久卷(Persistent Volume)</h3><p>删除 Pod 后，持久卷不会被删除</p><p>1 <strong>本地存储</strong></p><ul><li>hostPath - 节点主机上的目录或文件 (仅供单节点测试使用；多节点集群请用 local 卷代替)</li><li>local - 节点上挂载的本地存储设备(不支持动态创建卷)</li></ul><p>2 <strong>网络存储</strong></p><ul><li>NFS - 网络文件系统 (NFS)</li></ul><p>3 <strong>分布式存储</strong></p><ul><li>Ceph(cephfs 文件存储、rbd 块存储)</li></ul><h3 id="_3-投射卷-projected-volumes" tabindex="-1"><a class="header-anchor" href="#_3-投射卷-projected-volumes" aria-hidden="true">#</a> 3. 投射卷(Projected Volumes)</h3><ul><li>projected 卷可以将多个卷映射到同一个目录上</li></ul><h2 id="九、存储类-storage-class" tabindex="-1"><a class="header-anchor" href="#九、存储类-storage-class" aria-hidden="true">#</a> 九、存储类(Storage Class)</h2><h2 id="十、创建有状态应用" tabindex="-1"><a class="header-anchor" href="#十、创建有状态应用" aria-hidden="true">#</a> 十、创建有状态应用</h2><h3 id="_1-创建-mysql-应用" tabindex="-1"><a class="header-anchor" href="#_1-创建-mysql-应用" aria-hidden="true">#</a> 1. 创建 mysql 应用</h3><p>1 .配置环境变量<br> 传递给容器的环境变量，可以在容器内部使用，也可以在容器启动时使用</p><ol start="2"><li>挂载数据卷<br><code>hostPath</code> 卷将主机节点上的文件或目录挂载到 Pod 中。<br> hostPath 仅用于在单节点集群上进行开发和测试，不适用于多节点集群；<br> 例如，当 Pod 被重新创建时，可能会被调度到与原先不同的节点上，导致新的 Pod 没有数据。 在多节点集群使用本地存储，可以使用 <code>local</code> 卷。</li></ol><p>hostPath 的 type 值:</p><ul><li>DirectoryOrCreate：如果路径不存在，则创建一个目录</li><li>Directory：如果路径不存在，则挂载失败</li><li>FileOrCreate：如果文件不存在，则创建一个文件</li><li>File：如果文件不存在，则挂载失败</li><li>Socket：如果套接字文件不存在，则挂载失败</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>pod
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
    <span class="token key atrule">containers</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql
          <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">8.0</span>
          <span class="token key atrule">env</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> MYSQL_ROOT_PASSWORD
                <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span>
          <span class="token key atrule">ports</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">3306</span>
          <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/lib/mysql <span class="token comment">#容器中的目录</span>
                <span class="token key atrule">name</span><span class="token punctuation">:</span> data<span class="token punctuation">-</span>volume
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> data<span class="token punctuation">-</span>volume
          <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
              <span class="token comment"># 宿主机上目录位置</span>
              <span class="token key atrule">path</span><span class="token punctuation">:</span> /data/mysql/data
              <span class="token key atrule">type</span><span class="token punctuation">:</span> DirectoryOrCreate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-configmap-与-secret" tabindex="-1"><a class="header-anchor" href="#_2-configmap-与-secret" aria-hidden="true">#</a> 2. ConfigMap 与 Secret</h3><p>在 Kubernetes 集群中，容器可能被调度到任意节点，配置文件需要能在集群任意节点上访问、分发和更新。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 更新配置文件，cm 是configmap的缩写，myapp-config 是配置名</span>
kubectl edit cm myapp-config

<span class="token comment"># 查看配置文件</span>
kubectl describe cm myapp-config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Secret
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>password
<span class="token key atrule">type</span><span class="token punctuation">:</span> Opaque
<span class="token key atrule">data</span><span class="token punctuation">:</span>
    <span class="token key atrule">PASSWORD</span><span class="token punctuation">:</span> MTIzNDU2Cg== <span class="token comment"># base64 编码 123456</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>pod
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
    <span class="token key atrule">containers</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql
          <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">5.7</span>
          <span class="token key atrule">env</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> MYSQL_ROOT_PASSWORD
                <span class="token comment"># 读取secret中的值</span>
                <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
                    <span class="token key atrule">secretKeyRef</span><span class="token punctuation">:</span>
                        <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>password
                        <span class="token key atrule">key</span><span class="token punctuation">:</span> PASSWORD
                        <span class="token key atrule">optional</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 此值为默认值；表示secret已经存在了</span>
          <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/lib/mysql
                <span class="token key atrule">name</span><span class="token punctuation">:</span> data<span class="token punctuation">-</span>volume
              <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/mysql/conf.d
                <span class="token key atrule">name</span><span class="token punctuation">:</span> conf<span class="token punctuation">-</span>volume <span class="token comment"># 挂载卷的名字</span>
                <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> conf<span class="token punctuation">-</span>volume
          <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
              <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>config <span class="token comment"># 使用configmap的名字来挂载到集群</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> data<span class="token punctuation">-</span>volume
          <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
              <span class="token comment"># directory location on host</span>
              <span class="token key atrule">path</span><span class="token punctuation">:</span> /home/mysql/data
              <span class="token comment"># this field is optional</span>
              <span class="token key atrule">type</span><span class="token punctuation">:</span> DirectoryOrCreate
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>config
<span class="token key atrule">data</span><span class="token punctuation">:</span>
    <span class="token key atrule">mysql.cnf</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
        [mysqld]
        character-set-server=utf8mb4
        collation-server=utf8mb4_general_ci
        init-connect=&#39;SET NAMES utf8mb4&#39;</span>

        <span class="token punctuation">[</span>client<span class="token punctuation">]</span>
        default<span class="token punctuation">-</span>character<span class="token punctuation">-</span>set=utf8mb4

        <span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
        default<span class="token punctuation">-</span>character<span class="token punctuation">-</span>set=utf8mb4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32);function w(T,A){const e=i("ExternalLinkIcon"),p=i("CodeTabs");return u(),m("div",null,[b,n("p",null,[n("a",h,[s("教程"),a(e)]),g,n("a",y,[s("kubernetes 文档"),a(e)]),f,n("a",_,[s("k3s 文档"),a(e)])]),x,n("p",null,[s("Kubernetes 是一个开源的容器编排引擎和容器集群管理工具，用来对容器化应用进行自动化部署、 扩缩和管理。k3s 是轻量级 kubenetes，跟 k8s 差不多"),P,n("a",S,[s("学习资料"),a(e)])]),q,n("p",null,[s("Kubernetes Service 定义了这样一种抽象： 逻辑上的一组可以互相替换的 Pod，通常称为微服务。 Service 对应的 Pod 集合通常是通过 "),n("a",K,[s("选择算符"),a(e)]),s(" 来确定的。")]),R,n("p",null,[s("命名空间(Namespace)是一种资源隔离机制，将同一集群中的资源划分为相互隔离的组。 命名空间可以在多个用户之间划分集群资源（通过"),n("a",N,[s("资源配额"),a(e)]),s("）。")]),L,n("p",null,[s("使用下命令可以直接创建一个 "),n("a",D,[s("示例"),a(e)]),s(" 的 pod")]),a(p,{id:"242",data:[{title:"使用 pod.yaml 创建 pod"},{title:"pod.yaml"}],active:0,"tab-id":"shell"},{tab0:t(({title:c,value:o,isActive:r})=>[I]),tab1:t(({title:c,value:o,isActive:r})=>[O]),_:1},8,["data"]),E])}const V=d(v,[["render",w],["__file","k8s 入门.html.vue"]]);export{V as default};
