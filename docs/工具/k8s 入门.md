# K8s 入门

[教程](https://juejin.cn/post/6952331691524358174)  
[官方文档](https://kubernetes.io/zh/docs/tutorials/kubernetes-basics/create-cluster/cluster-intro/)  
[k3s 文档](https://docs.rancher.cn/docs/k3s/quick-start/_index)

## K3S

k3s 是轻量级 kubenetes，跟 k8s 差不多

### 安装

1. 在 master 节点上安装 k3s server

```bash
curl -sfL https://get.k3s.io | sh -
# 使用国内代理
curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn sh -

# 如果安装不上，可能需要先更新ca证书
yum update -y ca-certificates # 更新证书
yum-config-manager --disable rancher-k3s-common-stable # 禁用 rancher-k3s-common-stable 源 --enable 启用
```

2. 在其他节点上安装 k3s-agent

````bash

需要先获取 master 节点上的 url 和 token, token 位于 /var/lib/rancher/k3s/server/node-token

```bash
K3S_URL=https://10.10.1.123:6443
K3S_TOKEN=K1042e2f8e353b9409472c1e0cca8457abe184dc7be3f0805109e92c50c193ceb42::node:c83acbf89a7de7026d6f6928dc270028
curl -sfL https://get.k3s.io | K3S_URL=${K3S_URL} K3S_TOKEN=${K3S_TOKEN} sh -
# 换源如下
curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn K3S_URL=${K3S_URL} K3S_TOKEN=${K3S_TOKEN} sh -
````

### 命令

```bash
# 获取集群信息
kubectl cluster-info

# 获取节点信息
kubectl get nodes

# 命名空间
kubectl get namespaces

# 网络信息
kubectl get endpoints -n kube-system

# 查看所有服务
kubectl get services --all-namespaces
kubectl get service -A

# 查看IngressRoute
kubectl get IngressRoute -A

# 查看pod
kubectl get pods -n kube-system
# 查看运行资源
kubectl get po -o wide


# crictl命令来查看正在运行的容器
crictl ps

# 部署
kubectl apply -f k8s-pod.yaml

# 删除
kubectl delete -f k8s-pod.yaml

# 查看部署pod状态
kubectl get pods --all-namespaces

# 将pod端口映射到主机端口
kubectl port-forward <pod-name> <host-port>:<pod-port>

# 进入pod中
kubectl exec -it <pod-name> -- /bin/bash

# 停止 k3s，重置容器、网络、iptables
/usr/local/bin/k3s-killall.sh

# 删除服务 -n 命名空间
kubectl delete service -n kube-system traefik
```

### pod yaml 示例

使用下命令可以直接创建一个示例的 pod
[示例](https://juejin.cn/post/7016215566234943524)

::: code-tabs#shell

@tab:active 使用 pod.yaml 创建 pod

```bash
kubectl apply -f pod.yaml
# 或者
kubectl apply -f https://k8s.io/examples/pods/simple-pod.yaml

# 查看部署状态
kubectl get deployments
kubectl get pods
kubectl get services

# 管理应用，扩展到5个副本
kubectl scale deployment myapp-deployment --replicas=5
# 其他 kubectl delete、kubectl update、kubectl rollout
```

@tab pod.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
    name: myapp-deployment
spec:
    replicas: 3
    selector:
        matchLabels:
            app: myapp
    template:
        metadata:
            labels:
                app: myapp
        spec:
            containers:
                - name: myapp-container
                  image: nginx:latest
                  ports:
                      - containerPort: 80

---
apiVersion: v1
kind: Service
metadata:
    name: myapp-service
spec:
    selector:
        app: myapp
    ports:
        - protocol: TCP
          port: 80
          targetPort: 80
    type: LoadBalancer
```

:::

如果要修改端口映射 或者 EXTERNAL-IP 可以使用下面命令

```bash
# 查看 -n 命名空间
kubectl get services -n <namespace> <service-name>
# 修改
kubectl edit service myapp-service
# 修改  spec.ports 处理映射关系
# 修改  spec.type 为 LoadBalancer 时，会自动分配 EXTERNAL-IP
```

### 安装 Dashboard

Kubernetes Dashboard 来管理 Kubernetes 集群

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml
# 启动Kubernetes Dashboard：
kubectl proxy

# 接下来，您可以在浏览器中访问
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/
# 来访问Kubernetes Dashboard。
```
