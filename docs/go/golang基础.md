# go 语言基础

## 申明

1. 数字

```go
var num int = 123
fmt.Println("number is ", num)

// := 自动推断变量类型
power := 9000
name, age := "张三", 56
```

2. 数组

```go
var scores [10]int
scores[0] = 339

scores := [4]int{9001, 9333, 212, 33}
// 遍历
for index, value := range scores {}
```

3. 切片

```go
// 初始化切片
names := []string{"leto", "jessica", "paul"}
checks := make([]bool, 10)
var names []string
scores := make([]int, 0, 20)

// 长度 10 ，容量 10
a := make([]int, 10)
b := make([]int, 0, 10)

a[1] = 1
append(b, 1)

// append 切片会按 2x 的方式自动扩展容量
func main()  {
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

4. 映射, 类似hash表和字典

```go
lookup := make(map[string]int)
lookup["goku"] = 9001
lookup["vegeta"] = 111
power, exists := lookup["vegeta"]

// len delete
var total int = len(lookup)
delete(lookup, "goku")

// 遍历
for key, value := range lookup {
  ...
}
```

10. 函数

```go
func add(a int, b int) int {}

func user(name string) (string, int) {}
```

## 结构体

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

4. new函数

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

## 其他

1. 错误处理
