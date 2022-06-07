# MongoDb 入门

## 安装

```bash
# 直接启动
mongod --dbpath ../data/db
# 使用配置文件的方式启动服务
mongod -f ../etc/mongo.conf  
        --smallfiles # 空间不够时可用
    # 1.编写配置文件 一般放在根目录 etc/mongodb.conf
        logpath=../log/mongodb.log      # log地址
        logappend=false                 # log是否追加到之前的文件
        dbpath=../data/db               # 数据存放位置
        fork=false                      # 进程是否保留在后台
        port = 27017
    # 2.配置完成后，执行以下命令 安装到服务
        mongod --config "F:\mongoDB\mongodb/etc/mongo.conf" --install
        # 或者 直接输入以下命令
        mongod --bind_ip 127.0.0.1 --logpath F:\mongoDB\mongodb\log\log.txt --logappend --dbpath "F:\mongoDB\mongodb\data\db" --directoryperdb --serviceName MongoDB --install
        # 删除
        mongod --remove
    # 3.配置环境变量

# 安装好服务后，如果服务是手动启动，net start MongoDB, 这样就开启了后台服务了

# mongo.conf文件示例  绝对路径
systemLog:
    destination: file
    path: F:\mongoDB\mongodb\log\log.txt
    logAppend: true
storage:
    journal:
        enabled: true
    dbPath: F:\mongoDB\mongodb\data\db\
net: 
    port: 27017

```

## 使用

### 指令

```bash
# 1. 高级指令
    db.test.drop()  高级命令  等同于
# 2. 基础指令，例如
    db.runCommand({'drop': 'test'})  # {指令： 目标} 会返回一个更为详细的文档
# 3. 底层指令
    db.$cmd.findOne({'drop': 'test'})

# 启动
db.runCommand({getLastError: 1})
# 不带 port 为默认， --host 链接其他主机
mongo --port 27017
# 查看用户列表
show users

# 库
show dbs # 查看库 
use test # 切换/创建库，如果没有会延时创建
db.dropDatabase() # 删除库

# 集合
show collections # 查看集合(类似表) 
db.acount.save({'name':'Jack', 'age': 23}) # 创建集合db.库名.save({})
db.acount.find()  # 查询acount集合
db.acount.find({'name':'Jack'})  # 查询acount集合
db.acount.drop()  # 删除acount集合
```

### 恢复备份

```bash
# 备份
# 地址， 数据库名， 目录路径
mongodump -h dbhost -d dbname -o dbdirectory

# 恢复
mongorestore -h dbhost -d dbname --directoryperdb dbdirectory
```

### 导入导出

```bash
# 导出
mongoexport -d dbname -c collectionname -q {查询条件} -f name,age>path
mongoexport -d test -c boss -o D:/boss.json --type=json
    # csv导出
mongoexport -d dbname -c collectionname -q {查询条件} -f name,age --csv>path
mongoexport -d test -c boss -o D:/boss.csv -f name,age --type=csv
#  导入
mongoimport -d dbname -c collectionname --type csv --headerline --drop <path
mongoimport --db dbname --collection collectionname --file F:\users.json --type=json
```

## 增删查改

```bash
# 1. 增
    db.test.insert({}) 插入 不能超过4m  
    db.test.insert([{}, {}]) 多个插入
    db.test.save({})
# 2. 删
    db.test.remove() 删除所有数据
    db.test.remove({条件}) 
    db.test.drop()   删除所有数据 和 索引
# 3. 查
    db.test.count()  计数
    db.test.find()   找查
    db.test.find(query, field, limit, skip, batchSize, options)   找查的参数
    db.test.find({name: 'huang', age: {$gt: 20}}, {'_id': 0}) 多条件找查, 不返回id
    比较操作符  $lt $lte $gt $gte $ne 对应 < <= > >= != 
                $in: [1, 5] 在数组中的 $nin 不在其中
                $or: [{条件1}, {条件2}]
                $not: 取非
                $mod: [5, 0] 取模 %5为0的
    · 高级查询规则
        null 匹配自身和不存在。 alias: null, 匹配没有别名或者别名为null的
        $exist 是否存在该键     alias: true  匹配存在别名的
        /.+/i 正则表达式 js规则  
        数组:   
            fruit: 'apple'    单元素匹配
            fruit.2: 'apple'    下标单元素匹配
            fruit: {$size: 3}   长度匹配
            fruit: {$all: ['apple', 'banana']}   多元素匹配
        内嵌文档(子对象)
            userName: {'first': 'wang', 'last': 'jing'}  完全匹配
            userName.first: 'wang', userName.last: 'jing' 属性匹配
            #elemMatch  内嵌文档，多条件匹配
    · where查询  js对象函数查询 性能低
        用函数循环遍历文档，
        db.fruit.find({$where: function () {for(let key in this){if(key =='apple'){return true}}}})
    · 查询游标
        1. let cursor = db.number.find() 定义游标
        2. cursor.next()  查询下一个值
            while(cursor.hasNext()){ cursor.next() }  查询最后一个
        游标操作
        db.number.find().limit(5)
        db.number.find().skip(5)  跳过5个匹配的值, 用于分页
        db.number.find().sort({x: 1, y: -1})， 1 升序， -1 降序

# 4. 改 ({查询条件}, {更新的值}, 是否在没找到old插入新的, 是否多文档更新)
    db.test.update({old},{new}) 全量更新
    db.test.update({条件}, {'$set': {'password': 'ddd'}})  局部更新
    db.test.update({条件}, {'$unset': {'age': 23}})        去除一个 键值
    db.test.update({条件}, {'$inc': {age: 1}})             age 加一
    db.test.update({条件}, {'$push': {title: 'nameList'}}) 给title数组push一个值
    db.test.update({条件}, {'$addToSet': {title: 'nameList'}}) 避免重复的push添加
    db.test.update({条件}, {'$pop': {title: 1}}) 给title数组pop一个值 ， 1尾部， -1头部 删除
    db.test.update({条件}, {'$pull': {title: ‘nameList}})  删除数组中的 指定位置
```

## 索引统计

```bash
# 一.创建索引
    # 单件索引，
        db.test.ensureIndex({userid: 1}) # 升序
    # 复合索引
        db.test.ensureIndex({userid: 1, age: -1})
    # 唯一索引  // 复合唯一索引，的组合不同即可
        db.test.ensureIndex({userid: 1}, {unique: true})
# 二.查询分析
    # explain 用于查询性能分析
        db.test.find({username: 'wang'}).explain()
    # hint 强制指定查询使用索引
        db.test.find(age: {$lt : 20}).hint({userName: 1, age: 1})
# 三. 索引管理
    # 1. 查看索引
        db.test.getIndexes()
    # 2. 删除索引
        db.test.dropIndex() # 可传入string
        db.test.dropIndexes() # 删除全部

        db.runCommand({'dropIndexes': 'test', 'index': 'x_1'})
    # 3. 重建索引
        db.test.reIndex()


# 四. 聚合统计
    # 1. 统计 count
        db.test.count()
        db.test.count({age: {$lt: 10}})
    # 2. 聚合
        db.test.distinct(string, {queryObj})
        db.runCommand({distinct: 'test', key: 'value'})
    # 3. 分组
        db.test.group({key: {'x': true},            # 分组目标
            initial: {number: 0},                   # 初始值
            reduce: (doc, prev) => {prev.number++}, # 迭代函数
            cond: {x: {$gt: 90}}})                  # 查询条件
```