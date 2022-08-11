# windows中安装open-ssh

## 一、安装Windows OpenSSH

1. 管理员模式打开 `powershell` 并输入

```powershell
# 安装OpenSSH客户端
Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0
 
#安装OpenSSH服务端
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
```

2. 查看安装情况

```powershell
Get-WindowsCapability -Online | ? Name -like 'OpenSSH*'

# 返回， NotPresent 为未安装
Name  : OpenSSH.Client~~~~0.0.1.0
State : Installed
 
Name  : OpenSSH.Server~~~~0.0.1.0
State : NotPresent  
```

## 二、启动SSH服务器

1. 在PowerShell中启动服务

```powershell
# 启动sshd服务
Start-Service sshd
 
# 将sshd服务设置为自动启动，若不设置需要在每次重启后重新开启sshd
Set-Service -Name sshd -StartupType 'Automatic'
 
# 确认防火墙规则，一般在安装时会配置好
Get-NetFirewallRule -Name *ssh*
 
# 若安装时未添加防火墙规则"OpenSSH-Server-In-TCP"，则通过以下命令添加
New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22
```

2. 也可在服务窗口中启动

## 三、开启密钥登录

1. 类似linux 在服务器中授权公钥，即在authorized_keys中加入本机的id_rsa.pub内容

可以使用命令行来完成此操作

```powershell
# 确保服务器上存在.ssh 文件夹，若不存在则使用下面命令创建
ssh username@ip mkdir C:\Users\username\.ssh\
 
#通过scp将本地的公钥上传到服务器上并重命名为authorized_keys，注意此方法会覆盖原有authorized_keys
scp C:\Users\username\.ssh\id_rsa.pub user1@ip:C:\Users\username\.ssh\authorized_keys
```

2. windows服务器中需要对authorized_keys文件授权，才能通过ssh免密登录

```powershell
# windows远程通过ACL更改文件权限
ssh --% user1@ip icacls.exe "C:\Users\username\.ssh\authorized_keys" /inheritance:r /grant "Administrators:F" /grant "SYSTEM:F"

#在服务器端修改authorized_keys文件权限
icacls.exe "C:\Users\username\.ssh\authorized_keys" /inheritance:r /grant "Administrators:F" /grant "SYSTEM:F"
```

3. 修改默认授权文件位置
在Windows OpenSSH中，默认的授权密钥存放位置为ProgramData\ssh\administrators_authorized_keys，此位置对应为管理用户权限。因此需要修改默认授权文件位置。

```powershell
#允许公钥授权访问，确保条目不被注释
PubkeyAuthentication yes
 
#授权文件存放位置，确保条目不被注释
AuthorizedKeysFile .ssh/authorized_keys
 
#可选，关闭密码登录，提高安全性
PasswordAuthentication no
 
#注释掉默认授权文件位置，确保以下条目被注释
#Match Group administrators
#       AuthorizedKeysFile __PROGRAMDATA__/ssh/administrators_authorized_keys
```

4. 重启服务

```powershell
#重启sshd，需要管理员权限
Restart-Service sshd
```

## 四、卸载openssh

```powershell
# 卸载 OpenSSH 客户端
Remove-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0
 
# 卸载 OpenSSH 服务端
Remove-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
```
