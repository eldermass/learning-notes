# go 语言基础

## 一、基本概念

### 1、申明

```go
// 显示申明
var name string = "张三"

// 隐式申明，:= 自动推断变量类型
age := 23
name, age := "张三", 56
```

### 2、包

1. 一个目录下可以有多个文件，但只能有一个包
2. 包中大写字母开头的变量、函数、结构体等，才能被外部访问，小写则是私有的

```go
package main

func main() {
  fmt.Println("hello world")
}
```

## 二、数据类型

1. 一般用 `strconv` 进行类型转换

### 1、整型

```go
// 无符号整数，正整数
var num1 uint = 123

// 有符号整数
var num2 int = -123

// 还有些指定范围的整数类型
// uint8, uint16, uint32, uint64，int8, int16, int32, int64
```

### 2、浮点型

```go
var num1 float64 = 1.23

// 32位不常用
var num2 float32 = 2.34
```

### 3、字符串型

双引号和反引号包起来的字符串

```go
var str1 string = "hello world"

// 多行字符串
var str2 string = `hello
world`
```

### 4、布尔型

```go
var flag bool = true
```

<!-- 复杂数据类型：结构struct、数组[]、切片slice、映射map、接口interface、函数func、指针*、管道chan -->

### 5、数组

#### 1. 申明

```go
// 申明, [元素长度]元素类型{value1, value2, ...}
nums := [3]int{1, 2, 3}
// 省略长度
nums := [...]int{1, 2, 3}

// 先申明，再赋值
var scores [10]int
// 或 scores := new([10]int)
scores[0] = 100


```

#### 2. 使用

`len()` 获取数组长度
`cap()` 获取数组容量  
如果超过长度取值，下标越界

```go
scores := [4]int{9001, 9333, 212, 33}

// 遍历
for index, value := range scores {
  fmt.Println(index, value)
}
```

### 6、切片

切片是数组的一部分，相当于数组的部分引用，改变其中的值
数组中的值也会改变  
类型打印时： []int 是切片， [2]int 是数组

#### 1. 切片申明

```go
nums := [4]int{1, 2, 3, 4}

// 从数组中获取切片
all_nums = nums[:]
first_two := nums[:2]
two_begin := nums[2:]

// 申明切片, make(类型，长度，容量)
sliceA := make([]int, 0, 10)
sliceB := make([]int, 5) // 这时容量和长度都为5
```

#### 2. 切片使用

```go
nums := []int{1, 2, 3, 4}
numsSlice = nums[:]
// append会深度拷贝，解除数组引用关系
append(numsSlice, 1)

// append 切片会按 2x 的方式自动扩展容量，cap()变为2倍
func main () {
    a := make([]int, 0, 5)
    b := cap(a)

    for i := 0; i < 25; i++ {
        a = append(a, i)

        if cap(a) != 0 {
            fmt.Println(i, cap(a))
        }
    }

    fmt.Println(a, b)
}
```

### 7、映射

类似 hash 表和字典

#### 1. 映射申明

```go
// 申明, map[keyType]valueType{key1: value1, ...}
user := map[string]string{}

// 申明, make(map[keyType]valueType)
lookup := make(map[string]int)

// 申明空接口类型的映射 interface{} 支持所有类型
allValue map[string]interface{}{}
```

#### 2. 映射使用

```go
users := map[string]interface{}{
    "name": "zhangsan",
    "age": 12,
}

// 删除
delete(users, "name")
// 获取不存在的key
position, exists := users["position"]

fmt.Printf("%v \n", users)
fmt.Print(position, exists)

// 遍历
for key, value := range lookup {
  ...
}
```

### 8、函数

```go
func add(a int, b int) int {}

func user(name string) (string, int) {}
```

### 9、指针

### 10、结构体

go 不是面向对象的语言，结构体是面向对象的替代

1. 申明和初始化

```go
// 申明结构体
type Dog struct {
 name string
 age int
}

func main() {
 // 初始化
 dog := Dog{ name: "Mike" }
 dog.age = 2000
 // 通过指针传递引用
 addAge(&dog)

 fmt.Println(dog.age)
}

func addAge(d *Dog) {
 d.age += 500
}
```

2. 结构体上的函数

```go
type Dog struct {
 name string
 age int
}

func (d *Dog) addAge() {
 d.age += 500
}

dog := Dog{ name: "Mike" }
dog.age = 2000
dog.addAge()
```

3. 构造器
   结构体没有构造器。但是，你可以创建一个返回所期望类型的实例的函数（类似于工厂）

```go
dog := newDog("张三", 23)
dog.age = 2000
dog.addAge(500)

func newDog(name string, age int) *Dog {
 return &Dog{
  name,
  age,
 }
}
```

4. new 函数

```go
dog := new(Dog)
// same as
dog := &Dog{}
```

5. 组合、混合

```go
func main()  {
 dog := &Dog{
  Animal: &Animal{ Name: "Mike" },
  age: 56,
 }
 fmt.Println(dog)
 fmt.Println(dog.getName())
}


type Animal struct {
 Name string
}

func (a *Animal) getName() string {
 return a.Name
}

type Dog struct {
 *Animal
 age int
}
```

6. 指针、值

7. 接口

```go
type Logger interface {
 Log(msg string)
}

type ConsoleLogger struct {}
func (i ConsoleLogger) Log(msg string) {
 fmt.Println(msg)
}
```

### 11、接口

### 12、管道

## 三、流程控制

### 1、递增、递减

```go
// 只有后置自增、自减
func main() {
    i++
}
```

### 2、条件

```go
if a > 10 {
    ...
} else if a > 5 {
    ...
} else {
    ...
}
```

### 3、选择

```go
// 默认只选其中一个
switch a {
  case 1:
      ...
      fallthrough // 继续执行下一个 case
  case 2:
      ...
  default:
      ...
}
```

### 4、循环

```go
// 支持 break、continue
// 死循环
for {
    ...
    if a > 10 {
        break
    }
}

// 条件循环
for a < 10 {
    ...
}

// 循环10次
for i := 0; i < 10; i++ {
    ...
}

// 遍历数组、切片、映射
for index, value := range arr {
    ...
}
```

### 5、跳转

```go
// 跳转到标签
for j := 0; j < 10; j++ {
    if j > 5 {
        goto breakTag
    }
}

breakTag:
    ...
```

## 四、其他
