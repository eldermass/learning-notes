# npx 用途

-   在项目中直接运行指令，直接运行 node_modules 中的某个指令，不需要输入文件路径

```bash
node-modules/.bin/babel.js --version
npx babel --version
```

-   避免全局安装模块：npx 临时安装一个模块，使用过后删除这个模块(下面的两个模块不需要全局安装)

```bash
npx babel my-react-app
npx babel@7.0.1 main.js -o ./dist/main.js
```

-   使用不同版本的命令，使用本地或者下载的命令

```bash
# 必须使用本地 http-server（本地没有就报错）
npx --no-install http-server
# 忽略本地安装的包，直接使用下载的包
npx --ignore-existing create-react-app my-react-app
# 使用特定版本的包的命令
npx node@0.12.8 -v
```

## 参数

-   -p 下载某个模块后，运行命令（命令必须在下载后才行，类似于通道符）

```bash
npx -p node@0.10 node -v
npx -p A -p B [command]
```

-   可以执行仓库中的代码，远程代码必须是一个模块，即必须包含 package.json 和入口脚本

```bash
npx github:piuccio/cowsay hello
```
