# Linux 实践

## open-ssh 使用

> 1.安装

```bash
# 安装服务端
sudo apt-get install openssh-server
# 安装客户端
sudo apt-get install openssh-client
```

> 2.别名登录

```bash
# ~/.ssh/config 中添加配置
Host aliasName
HostName 192.168.225.22
User root

# 直接登录 (-v 调试模式)
ssh user@ip -v
# 通过别名登录
ssh aliasName
```

> 3.免密登录

```bash
# 生成非对称秘钥
ssh-keygen -t [rsa|dsa]

# 将本地的id_rsa.pub，复制到服务器 authorized_keys
# 可以通过本地使用 ssh-copy-id 工具
ssh-copy-id aliasName

# 注销
logout
```

> 4.隧道

```bash
# 隧道示例，NL 是映射到本地，NR 映射到远程做远程代理
ssh -NL 5000:localhost:5000 aliasName

# 隧道链接,含义是：在A上访问自己的8888端口相当于通过（B的）localhost的8080端口。
# aliasName 可以写作 user@ip
ssh -NL 8888[本地A]:localhost:8080[目标B] aliasName
    # 创建隧道常用的参数说明：
    # -C：压缩传输，提高传输速度
    # -f：将ssh转入后台执行，不占用当前的shell
    # -N：建立静默连接（不回显ssh页面）
    # -g：允许远程主机连接本地用于端口转发的端口
    # -L：本地端口转发, 映射到本地
    # -R：远程端口转发, 映射到远程
    # -D：动态端口转发（socket代理）
    # -p：指定ssh端口

# 通过 ssh 测试端口链接成功与否
ssh -v -p 1521 oracle@192.168.150.168
```

> 5.禁用密码登录，或使用 man ssh config 查看其他配置

```bash
# 禁用密码登录,编辑服务器端的 /etc/ssh/sshd_config

Host *
  PasswordAuthentication no

# 防断链
# 编辑 ~/.ssh/config

Host *
  ServerAliveInterval 30
  TCPKeepAlive yes
  ServerAliveCountMax 6
  Compression yes
```

## lrzsz 小文件传输

```bash
# 安装
sudo apt-get install lrzsz

# 上传
rz

# 下载
sz filename
```

## 美化工具

使用 [ohmyzsh](https://github.com/ohmyzsh/ohmyzsh) 美化命令行  
使用`solarized`美化 vim  
[neovim](https://github.com/neovim/neovim) 加强版 vim

## grep 命令

```bash
grep [options]
    -c              只输出匹配行的计数。
    -h              查询多文件时不显示文件名。
    -l              查询多文件时只输出包含匹配字符的文件名。
    -n              显示匹配行及行号。
    -s              不显示不存在或无匹配文本的错误信息。
    -v              显示不包含匹配文本的所有行。
    -i              忽略字符的大小写
　　-o              仅显示匹配到的字符串
　　-v              显示不能被模式匹配到的行
　　-E              支持使用扩展的正则表达式
　　-q              静默模式，即不输出任何信息
　　-A n            显示被模式匹配的行及其后n行
　　-B n            显示被模式匹配的行及其前n行
　　-C n            显示被模式匹配的行及其前后各n行
    -G              支持基本正则表达式
　　注：使用grep匹配时需使用双引号引起来（单引号为强引用），防止被系统误认为参数或者特殊命令而报错。


　  '^'： 锚定行首
　　'$'： 锚定行尾
　　'.'： 匹配任一一个字符
　　'*'： 匹配零个或多个先前字符
　　'\?'：匹配其前面的字符0次或者1次；
　　'\+'：匹配其前面的字符1次或者多次；
　　'\{m\}'：匹配其前面的字符m次（\为转义字符）
　　'\{m,n\}'：匹配其前面的字符至少m次，至多n次
　　'[]'： 匹配一个指定范围内的字符 | '[^]'匹配指定范围外的任意单个字符
　　'\<'或'\b'：锚定词首，'\>'或'\b'：锚定词尾（可用\<PATTERN\>：匹配完整单词）
　　'\(\)'：将多个字符当做一个整体进行处理

　　后向引用：引用前面的分组括号中的模式所匹配到的字符
　　分组括号中的模式匹配到的内容或被正则表达式引擎自动记录于内部的变量中：
　　\1：模式从左侧起，第一个左括号及与之匹配的右括号之间模式匹配到的内容
　　\2：模式从左侧起，第二个左括号及与之匹配的右括号之间模式匹配到的内容...

　　扩展正则表达式与正则表达式略有不同：

　　'[]'：依旧匹配指定范围内的任意单个字符；但是有很多特殊匹配方式。
　　　　[:digit:] 匹配任意单个数字
　　　　[:lower:] 匹配任意单个小写字母
　　　　[:upper:] 匹配任意单个大写字母
　　　　[:alpha:] 匹配任意单个字母
　　　　[:alnum:] 匹配任意单个字母或数字
　　　　[:punct:] 匹配任意单个符号
　　　　[:space:] 匹配单个空格

　　一些地方取消了转义字符的使用：

　　'?'：匹配其前面的字符0次或者1次；
　　'+'：匹配其前面的字符1次或者多次；
　　'{m}'：匹配其前面的字符m次（\为转义字符）
　　'{m,n}'：匹配其前面的字符至少m次，至多n次
　　()：将一个或多个字符捆绑在一起，当做一个整体进行处理，反向引用照常使用。
　　'|'：或（注：'C|cat'为C与cat，'（C|c）at才是Cat与cat'）
```

## ping

ttl： 即 time to live，每经过一个路由就会减一，当 ttl 为 0 时数据包就会被路由抛弃。一般是 64(mac)、128(win)

```bash
# ping 本机检查配置
ping 127.0.0.1
# ping 内网ip，检查网络连接
ping 192.168.0.101
# ping 默认网关(路由器)
ping 192.168.0.1
# ping 目标ip地址
ping 43.26.1.47
# ping 主机名(域名)
ping facebook.com

    -t             # Ping 指定的主机，直到停止。
    -a             # 将地址解析为主机名。
    -n count       # 要发送的回显请求数。
    -l size        # 发送缓冲区大小。
    -f             # 在数据包中设置“不分段”标记(仅适用于 IPv4)。
    -i TTL         # 生存时间。
    -r count       # 记录计数跃点的路由(仅适用于 IPv4)。
    -s count       # 计数跃点的时间戳(仅适用于 IPv4)。
    -j host-list   # 与主机列表一起使用的松散源路由(仅适用于 IPv4)。
    -k host-list   #  与主机列表一起使用的严格源路由(仅适用于 IPv4)。
    -w timeout     # 等待每次回复的超时时间(毫秒)。
    -S srcaddr     # 要使用的源地址。
    -c compartment # 路由隔离舱标识符。
    -p             # Ping Hyper-V 网络虚拟化提供程序地址。
    -4             # 强制使用 IPv4。
    -6             # 强制使用 IPv6。
```

## curl

```bash
# 请求
curl http://www.baidu.com

    -XPOST # 使用post请求
    -d     # post的数据
    -H     # 添加头部信息
    -I     # 显示头部信息
    -O     # 下载文件
    -o filename # 同上
    -L     # 跟随重定向
    -V     # 显示握手及连接信息
    --proxy "协议://用户名:密码@代理地址" URL

# 其他的 -help 查看
```

## lsof 查看占用

```bash
lsof -i:8080    查看8080端口占用
lsof abc.txt    显示开启文件abc.txt的进程
lsof -c abc     显示abc进程现在打开的文件
lsof -c -p 1234 列出进程号为1234的进程所打开的文件
lsof -g gid     显示归属gid的进程情况
lsof +d /usr/local/ 显示目录下被进程开启的文件
lsof +D /usr/local/ 同上，但是会搜索目录下的目录，时间较长
lsof -d 4       显示使用fd为4的进程
lsof -i -U      显示所有打开的端口和UNIX domain文件
```

## ps 命令

```bash
ps命令——查看静态的进程统计信息（Processes Statistic）

常见的选项：
a：显示当前终端下的所有进程信息，包括其他用户的进程。
u：使用以用户为主的格式输出进程信息。
x：显示当前用户在所有终端下的进程。
-e：显示系统内的所有进程信息。
-l：使用长（long）格式显示进程信息。
-f：使用完整的（full）格式显示进程信息。
```

## 进程、端口

```shell
# 通过文件系统查看占用
lsof -i:8000

# 使用netstat命令，例如
netstat -tunlp
    -t              (tcp) 仅显示tcp相关选项
    -u              (udp)仅显示udp相关选项
    -n              拒绝显示别名，能显示数字的全部转化为数字
    -l              仅列出在Listen(监听)的服务状态
    -p              显示建立相关链接的程序名
```
