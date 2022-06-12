# K8s 入门

[教程](https://juejin.cn/post/6952331691524358174)  
[官方文档](https://kubernetes.io/zh/docs/tutorials/kubernetes-basics/create-cluster/cluster-intro/)

## 概念

省略

## 命令(先尝试)

```bash
# 创建集群
# Cluster up and running
minikube version
minikube start

# Cluster version
kubectl version

# Cluster details
kubectl cluster-info
kubectl get nodes

# 部署应用
# Deploy our app
kubectl create deployment kubernetes-bootcamp --image=gcr.io/google-samples/kubernetes-bootcamp:v1

# View our app
kubectl proxy

```
