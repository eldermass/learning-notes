# Linux 命令行

## ssh 使用

```sh
# 生成非对称秘钥
ssh-keygen -t [rsa|dsa]

# 登录服务器
ssh user@ip
# 别名登录
# ~/.ssh/config 中修改配置
# Host aliasName
# HostName 192.168.225.22
# User root
ssh aliasName

# 注销
logout

# 隧道链接,含义是：在A上访问自己的8888端口相当于通过（B的）localhost的8080端口。
ssh -NL 8888[本地A]:localhost:8080[目标B] aliasName
    # 创建隧道常用的参数说明：
    # -C：压缩传输，提高传输速度
    # -f：将ssh转入后台执行，不占用当前的shell
    # -N：建立静默连接（不回显ssh页面）
    # -g：允许远程主机连接本地用于端口转发的端口
    # -L：本地端口转发
    # -R：远程端口转发
    # -D：动态端口转发（socket代理）
    # -p：指定ssh端口
```

[关于隧道](https://blog.csdn.net/weixin_42742658/article/details/122735119)

## 一. 开关机

```bash
# 关机、重启
shutdown
    -h now          立即关机
    -h 1            一小时后关机
    -r now          立即重启
halt                直接关机
reboot              直接重启
sync                同步内存到磁盘上
```

## 二. 用户管理

```bash
# 用户 -> 用户组 -> 家目录
/etc/passwd             放着所有的用户信息
/etc/shadow             放着密码相关信息

useradd username        添加用户
    -m                  自动构建相关目录
    -d /home/tiger      指定家目录
    -g groupname        添加到组

passwd username         修改某账户密码

userdel username        删除用户
    -r                  同时删除根目录

id                      查询用户信息
    username            查询指定用户信息

su - username           切换用户

```

## 三、组和权限管理

```bash
# 用户组
/etc/sudoers            放着各个组或组员对应的权限（可以针对指令设置无权限）
                        cy      ALL=(ALL:ALL) /bin/mkdir,/usr/bin/vim
/etc/group              放着所有的组。及其成员

groups                  查看当前用户属于哪些组
        user            查看user属于哪些组


groupadd groupname      添加组
groupdel groupname      删除组
usermod -g groupname username   修改用户的组
        -G groupname     修改附加组群，逗号隔开

```

## 四、文件权限管理

```bash
ls -l                    r是可读，w可写,x 可执行
文件属性    连接数 文件拥有者 所属群组 文件大小 文件修改时间    文件名
drwxr-xr-x    7     cy      cy      4096    Jun  7 11:46   dir
文件属性：
    首字母,    - 普通文件  d 目录文件 l 链接文件  c 字符设备【键盘】  b 块文件【硬盘】
    其他9个,   r 可读  w 可写  x 可执行 - 没有权限 (每3个一组，所有者，组权限，其他权限)


chmod 700 /home/dir         改变文件、目录权限 4(读)、2(写)、1(执行)
    u 拥有者，g组成员，o其他人，a所有人

chmod 751 file              分配file所有者7，所属组5，其他1的权限
chmod u=rwx,g=rx,o=x file   上例的另一种形式

chmod +x file               给组都加上执行权限
chmod o+w   file            给o(其他组)加上可写权限

chown user file             改变文件所有者
chown user:group  file      同事改变所属组
            -R              递归生效

chgrp group file            改变文件的组

```

## 五、压缩解压

1、 gzip，gunzip 压缩解压缩，不保留源文件

> gzip a.txt 压缩  
> gunzip a.txt.gz 解压

2、 zip，unzip 压缩，解压

```bash
    zip dest_name 目录或文件
        -r        递归压缩

    unzip 压缩包
        -d        目录
```

3、 tar 打包指令

```bash
#  压缩
tar -zcvf a.tar.gz a.txt b.txt
    -c              产生压缩文件
    -v              显示详细信息
    -f              指定压缩文件名
    -z              打包同时压缩
    -x              解压zxvf  -C 指定目录

```

## 六、任务调度

```bash
/etc/crontab            数据存放地

crontab                 定时任务
    -l                  列表
    -e                  编辑例：1 * * 1,5 * ls -l /home/cy >> /home/cy/b.txt
                        *每  1-5连续  1,5不连续   */5 每隔5个单位时间
    -r                  删除

编辑内容
    第一个*             第几分钟0-59
    第二个*             每天的第几小时0-23
    第三个*             每月的第几天1-31
    第四个*             每年的第几月1-12
    第五个*             每周的周几  0-7

```

## 七、磁盘分区和挂载

```bash
lsblk   -f            查看分区和挂载情况 sdx~   x分区块，~第几部分

# 如何增加一块硬盘
fdisk   /dev/sdb                1分区
mkfs    -t ext4  /dev/sdb1      2格式化
mount   /dev/sdb1  /home/newdisk    3挂载分区
4永久挂载
/etc/fstab      文件里添加磁盘信息,/dev/sda1磁盘   /home/cy挂载点
然后输入 mount -a 挂载

umount /dev/sda1            取消挂载

# 查看磁盘情况
df -l
# 查看目录占用磁盘
du /home
    -s                      显示总量
    -a  隐藏   -h  单位  -c 统计
    --max-depth=1           显示深度

```

## 八、进程管理

[任务管理](https://www.cnblogs.com/kaituorensheng/p/3980334.html)

```bash
#  查看进程 ps -aux
    ps
        -a  所有  -u 用户界面    -x  显示后台运行参数
        -ef         显示父进程(ppid)

# 杀死进程
    kill    pid     杀死进程
        -9          强制杀死

    killall         进程名称(可以使用通配符) 用于一组进程

    pstree
        -p          pid的进程树
        -u          用户的进程树


查看后台有多少挂起的命令
jobs                    查看
    &                   末尾加&该命令会在后台运行 node index.js & -n 10
        -n 10               10秒后就挂到后台
    ctrl + z            挂起当前命令
    fg  %num            把第num命令调至前台
    bg  %num            将后台第num停止状态改为运行状态
    kill %num           杀死第num个命令，类似kill pid
    nohup               挂到进程，ps -aux | grep "test.sh"查看



进程监控指令
top/atop            即时监控进程
        -d          刷新间隔
        -i          不显示闲置和僵死进程
        -p          按pid显示
    交互输入
        u   筛选user    k   杀死进程    q   退出


网络进程监控
    netstat         查看网络服务进程
        -tunlp | grep 端口号

查看文件系统的端口占用
    lsof -i(:端口号)    列出当前系统打开文件

```

## 九、服务管理

```bash
# 查看全部服务
    service --status-all

# 查看服务详情
    service mysql status

# 启动
    service mysql stop

# 管里启动服务
    setup               指令
    /etc/init.d         启动服务目录

    chkconfig --list    查看各个运行级别的服务启动情况
            -level 5 serve_name on、off     开关启动运行
# 管理系统
    systemctl

```

## 十、apt 相关命令

/etc/apt/source.list 可以切换为
[清华镜像源](https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/)

[apt-cache 使用](https://jingyan.baidu.com/article/22a299b51648e09e19376ae7.html)

```bash
apt-get update                  更新源

apt-cache search package        找查包

apt-get install package         安装包
    -y                          跳过确认
    --reinstall                 重新安装

apt-get remove package          移除包
    --purge                     同时清理配置

apt-get -f install              修复安装

apt-get build-dep package       安装相关编译环境
apt-get upgrade                 更新安装的包
apt-get dist-upgrade            系统升级

apt-get source package          下载其源代码

apt-get show package            显示包详情
apt-get depends package         查看依赖了哪些包
apt-get rdepends package        查看被哪些包依赖了

```

## 十一、其他

```bash

init [0-6]              指定运行级别
/etx/inittab            修改启动级别

select-editor           切换默认编辑器
/etc/profile            环境变量位置

tree                    打印目录结构
telnet ip port          测试网络

```

## 常用实践

[linux 免密 ssh](https://blog.csdn.net/wenyun_kang/article/details/77413714)

### 小文件传输 rzsz (Lrzsz)

```bash
# 安装
sudo apt-get install lrzsz

# 上传
rz

# 下载
sz filename

```

### 美化命令行

使用`ohmyzsh`美化命令行
使用`solarized`美化 vim

### ssh 免密登陆

[ssh](https://www.cnblogs.com/mikeguan/p/7227058.html)

```bash
# 在当前用户生成rsa的密钥
ssh-keygen -t rsa

# 目标服务器 .ssh 目录下 authorized_keys 写入公钥

# (-v 调试模式)
ssh -v user@host
# 或
ssh locahost -vv

```

### 查看进程，端口占用

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

### grep 命令

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
