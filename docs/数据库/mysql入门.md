# Mysql 入门

## 启动

```bash
# 打开服务, 或者直接在服务管理中打开
net start mysql58
# 连接数据库
    # sock连接
mysql -S/tmp/mysql.sock -uroot -p
    # ip连接
mysql -h127.0.0.1 -p3306 -uroot -p  # 之后键入密码
```

## 操作数据库

```sql
--  创建
CREATE DATABASE IF NOT EXISTS dbname CHARACTER SET utf8 COLLATE utf8_general_ci
-- 查看数据库
SHOW DATABASES                    -- 显示所有数据库
SHOW CREATE DATABASES dbname      -- 显示某一数据库
-- 使用某一数据库
USE dbname
-- 删除某一数据库
DROP DATABASE IF EXISTS dbname
-- 修改数据库
ALTER DATABASE dbname CHARACTER SET utf8
ALTER DATABASE dbname utf8_general_ci
```

## 操作数据表

### DDL(Data Definition language)

DDL 主要有 CREATE、 ALTER 、DROP

```sql
-- 查看创建表的信息
show create table table_name
-- 表的增删查改
CREATE TABLE tablename
CREATE TABLE IF NOT EXIST tablename(id int unsigned)CHARACTER SET utf8 ENGINE MYISAM
-- 注：MyISAM效率更高不支持高级事务处理、InnoDB则相反
ALTER TABLE a RENAME TO b
DROP TABLE tablename
-- 重置auto_increment
ALTER TABLE table_name AUTO_INCREMENT = 1;
TRUNCATE TABLE table_name;
-- 列的增删查改
ALTER TABLE tablename ADD COLUMN newcol VARCHAR(10)
ALTER TABLE tablename MODIFY COLUMN col VARCHAR(5)
ALTER TABLE tablename CHANGE col newCol VARCHAR(5)
ALTER TABLE tablename DROP COLUMN col
ALTER TABLE tablename ENGINE = myisam
```

### DML(data manipulation language)

DML 主要有 SELECT 、UPDATE 、INSERT、 DELETE

```sql
-- 插入数据 INSERT
INSERT INTO tablename VALUES(1,’Jack’,12)
INSERT INTO tablename(id,name,age) VALUES(1,’Jack’,12)
-- ③ 带占位符的插入语句
INSERT INTO tablename(id,name,age) VALUES(?,?,?) , [1,’Jack’,12]

-- 查询数据 SELECT
-- SELECT 的四大子句(有顺序>)  WHERE　 GROUP  LIMIT  ORDER
LIMIT （(n-1)*20) , 20   (偏移量，搜索条数)
-- 一般查询
SELECT * FROM tablename         -- 找查所有
SELECT name,age FROM tablename  -- 定量查询
-- 条件查询
SELECT * FROM tablename WHERE id = 1
-- 限量查询
SELECT * FROM tablename LIMIT 2,2 (偏移量，取n条)
-- 过滤重复name
SELECT DISTINCT name FROM tablename
-- 聚类-合并相同：（统计每个班的人数）
SELECT class,COUNT(class) FROM tablename GROUP BY class
-- 多条件筛选：
SELECT name,English+math+Chinese as ‘总分’ FROM tablename WHERE (English +math + Chinese) > 200
-- and表示同时满足 between 表示在之间闭区间
SELECT name,English FROM tablename WHERE English < 90 and English > 60
SELECT name,English FROM tablename WHERE English between 60 and 90
SELECT name,English FROM tablename WHERE English =60 or English = 45
SELECT name,English FROM tablename WHERE English in (60,45)
-- 模糊查询
SELECT name,English FROM tablename WHERE name LIKE ‘张%’;  %代表一或多个
select * from info where name regexp '^L'; -- 以L开头的
-- 排序
SELECT name,age FROM tablename ORDER BY name,age [asc\desc] -- 升序\降序
例：
SELECT name,English+math+Chinese as total FROM stu WHERE name LIKE ‘李%’ ORDER BY DESC

-- 修改数据 UPDATE
UPDATE tablename SET age = 24 WHERE name = ‘Kimmy’
UPDATE tablename SET age = age + 1 WHERE id = 2

-- 删除数据  DROP
DELETE FROM tablename               -- 删除表中所有
DELETE FROM tablename WHERE id=1    -- 删除id为1

```

## 备份

```sql
-- mysqldump -uroot -p DBname > 存放路径
例：mysqldump -uroot -p test > d:/test.sql
-- 恢复数据库
切换到一个空库，mysql > source d:/test.bak
-- 备份数据表
mysqldump -uroot -p DBname table1 table2 > d:/test.bak
-- 在库中恢复表
source d:/test.bak
-- -B 表示在恢复数据时，自动创建空数据库
mysqldump -uroot -p -B 数据库1 数据库2 >d:/test.sql
```

## 其他

### 事务

```sql
start transaction
set autocommit=false
```

### 内外联查找

```sql
SELECT t1.id,t1.title,t1.state,t2.title as cate FROM table1 t1 LEFT JOIN table2 t2 ON t1.category_id=t2.id;
-- 注释left 意味着左边(前)保持满编,right意味着右边(后)保持满编
```

### 排序时，把 null 值排到最后

```sql
-- 意思是，当 User_NO 是 null 的时候， 就把User_NO 当作1，否则就是0。 然后再按 User_NO 排序
select UserInfoID,User_No,User_Names
from UserInfo
order by case when User_NO is null then 1 else 0 end asc,User_NO asc

```

```php
// 如果 distance 是 null 就当作 99999 否则就是 distance 本来的值
$query->orderBy(DB::Raw('case when distance is null then 99999999999 else distance end'), 'ASC');
```

### 指令

1. ？ create 对于模糊不清的指令的查询
2. \s 查看数据库信息
3. show variables like ‘character%’ 查看各种数据类型
4. /_!40100 default 、、、、_/ 当版本大于 4.01 时就执行里面的那
5. show processlist 查看 mysql 连接情况

## 类型

### int 类型

tinyint、smallint、mediumint、int 、bigint
tinyint：
有符号数范围 1000 0000 0000 0000 （负零，正零）27=128 所以有符号数的范围是-128-127，无符号是 0-255；
注：这里 int(6) 里的 6 表示现实宽度，需要配合 zerofill
例如 int（6） unsigned zerofill 显示 000001

### 单精度浮点型 float(M,D)

M:总长度 D:小数位长度
例如:float(4,2) 范围在-99.99~99.99， 之后的小数位会四舍五入，且四舍五入后不会超过上面范围

### 定点数 Decimal(M,D)

M:总长度 D:小数位长度
浮点型的精确度在 7 位小数， 定点数在 30 位左右

### 字符串 char(n)

n 表示字符的长度 最长可以表示 255 个字节，char 是定长总是分配四个长度空间，尾部空格会丢失（一般用于 md5 32 位加密）

### 字符串 varchar(n)

n 表示字符的长度 最长可以表示 65532 字节，所以 n<=65532/3 ，varchar 是变长，是实际占用空间 L+1 个长度 （一般用于留言、文章）
Uft-8 下一个字符 3 个字节，gbk 下一个字符 2 个字节

### Text 类型

类似与 varchar

### Date 类型

年月日

### Datetime 类型

年月日时分秒
T### imestamp 类型：
时间戳，根性，添加时会自动更新

### 枚举类型 enum，set

hobby set(‘苹果’，‘香蕉’，‘草莓’)
找查含有苹果项时 select \*from t1 where find_in_set(‘苹果’，hobby)；

### json
