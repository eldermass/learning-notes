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
nums := [4]int{1, 2, 3, 4} // 数组

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

#### 1. 一般函数

```go
// 申明 func 函数名(参数) 返回值 {}
func add(a int, arr ...int) int {} // ...接受不定参数
// 调用
add(1, [2, 3, 4]...) // ...展开数组

func user(name string) (string, int) {
    // 函数内无法声明函数，但是可以使用匿名函数
    a := func(data string) {
        fmt.Printf("hello %s", data)
    }
    return name, 23
}
// 自执行函数
(func() {
    fmt.Println("hello world")
})()

// 闭包函数
func adder() func(int) int {
    sum := 0
    return func(x int) int {
        sum += x
        return sum
    }
}

// 延迟执行，defer 会在函数结束时执行
defer fmt.Println("hello world")
```

#### 2. go 函数

### 9、指针

& 取地址，\* 取值

```go
a := 1
fmt.Println(a) // 1
var p *int
p = &a // 取地址
*p = 2 // 取值
// a == *p, &a == p
fmt.Println(a, p, *p) // 2 0xc000014048 2


// 函数中传递指针
func addAge(age *int) {
 *age += 500
}

dogAge := 1
addAge(&dogAge)
```

### 10、结构体

go 不是面向对象的语言，结构体是面向对象的替代

#### 1、申明和使用

```go
// 申明结构体
type Dog struct {
    name string
    age int
}

func main() {
    // 初始化
    // dog := new(Dog) // 空实例化
    // dog := &Dog{} // 同上
    dog := Dog{ "Mike", 23 }
    // 通过指针传递引用
    addAge(&dog)
    fmt.Println(dog.age) // 28
}

func addAge(d *Dog) {
    // 通过地址 或者 通过值都是能改变复杂数据类型的值
    d.age += 5
    (*d).age += 5
}
```

#### 2、结构体上的函数、方法

```go
type Dog struct {
    name string
    age int
}

// 在结构体上定义方法
func (d *Dog) addAge() {
    d.age += 5
}

dog := Dog{ name: "Mike", age: 23 }
dog.addAge() // dog.age == 28
```

#### 3、组合、混合

```go
type Animal struct {
    legs int
    Dog // 匿名结构体
    tiger Tiger // 带名结构体
}

animal := Animal{ legs: 4, Dog: Dog{ "Mike", 23 } }

// 匿名结构体有2中访问方式，有相同字段时，优先使用匿名结构体的字段
animal.name // Mike
animal.Dog.name // Mike
```

### 11、接口

一类东西的规范，集合

```go
type Animal interface {
    Run(long string)
}

type Dog struct {
    name string
    age string
}

func (d Dog) Run(l string) {
    fmt.Print(d.name + " 跑了 " + l + " 米")
}

// 接口作为参数
func beginRun(a Animal) {
    a.Run("12")
}

func main () {
    dog := Dog{"Mike", "12"}

    beginRun(dog)
}
```

### 12、管道(协成、异步)

#### 1. goroutine

在调用前加上 go 关键字，就能创建一个协成

```go
// 申明协成
func main() {
    go Run() // 创建一个协成，不会阻塞主线程
}

func Run() {
    fmt.Println("hello world")
}
```

#### 2. 协成管理器

```go
func main() {
    var wg sync.WaitGroup
    wg.Add(1) // 添加一个协成
    go Run(&wg) // 创建一个协成，不会阻塞主线程
    wg.Wait() // 等待所有协成执行完毕
    fmt.Println("协成完了，我再执行")
}

```

#### 3. channel

goroutine 的通信工具, 箭头指入为写入，指出为读取

```go
// 申明管道
ch := make(chan int)
ch2 := make(chan int, 2) // 带缓冲的管道

// 只读、只写管道
var readCh <-chan int = ch
var writeCh chan<- int = ch

// 写入数据
ch <- 1
// 读取数据
num := <- ch

// 关闭，关闭后不可写入，但可读取
// for range 遍历前必须关闭管道
close(ch)

func main() {
    // 不带缓冲的管道，再接收时才会去读取数据
    // 带缓冲的管道，会先存满缓冲区时才写入管道
    ch := make(chan int)

    go func() {
        for i:=0; i<10; i++ {
            ch <- i
        }
    }()

    for i:=0; i<10; i++ {
        num := <- ch
        fmt.Println(num)
    }
}

// select 选择器，在没有值时，不会死锁
func main() {
    ch1 := make(chan int)
    ch2 := make(chan int)

    select {
        case num := <- ch1:
            fmt.Println(num)
        case num := <- ch2:
            fmt.Println(num)
        default:
            fmt.Println("没有数据")
    }
}
```

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
