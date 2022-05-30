# Promise A+

## 术语

1. "promise"是具有 then 方法的对象或函数，其行为符合此规范。
2. "thenable"是定义 then 方法的对象或函数。
3. "value"是任意合法的 Javascript 值，（包括 undefined,thenable, promise）。
4. "exception"是使用 throw 语句抛出的值。
5. "reason"是表示 promise 为什么被 rejected 的值。

## 要求

### Promise 状态

一个 promise 必须处于三种状态之一： 请求态（pending）， 完成态（fulfilled），拒绝态（rejected）。 1. 当 promise 处于请求状态（pending）时： - 1.1.promise 可以转为 fulfilled 或 rejected 状态。 2. 当 promise 处于完成状态（fulfilled）时： - 2.1.promise 不能转为任何其他状态。 - 2.2.必须有一个值，且此值不能改变。 3. 当 promise 处于拒绝状态（rejected）时： - 3.1.promise 不能转为任何其他状态。 - 3.2.必须有一个原因（reason），且此原因不能改变。

### then 方法

promise 必须提供 then 方法来存取它当前或最终的值或者原因。
promise 的 then 方法接收两个参数：promise.then(onFulfilled, onRejected);

```js
class MyPromise {
    constructor(fn) {
        this.status = ''
        this.res_success = null
        this.res_error = null
        this.queue = []

        // fn(resovle, reject)
        // 异步时间到后，传出的res或rej被执行，调用队列
        fn(
            (...arg) => {
                this.status = 'success'
                this.res_success = arg
                // 调用队列
                this.queue.forEach((item) => {
                    item.fn1(...arg)
                })
            },
            (...arg) => {
                this.status = 'error'
                this.res_error = arg

                this.queue.forEach((item) => {
                    item.fn2(...arg)
                })
            }
        )
    }
    then(fn1, fn2) {
        // 收到结果后的执行，已有状态立即执行，没有状态放入队列
        if (this.status == 'success') {
            fn1(...this.res_success)
        } else if (this.status == 'error') {
            fn2(...this.res_error)
        } else {
            this.queue.push({ fn1, fn2 })
        }
    }
}
MyPromise.all = (arr) => {
    let result = []
    return new MyPromise((resolve, reject) => {
        let i = 0
        next()
        function next() {
            arr[i].then((res) => {
                result.push(res)
                i++
                if (i == arr.length) {
                    resolve(result)
                } else {
                    next()
                }
            }, reject)
        }
    })
}

// 测试
let p = new MyPromise((res, rej) => {
    setTimeout(() => {
        res('okok')
    }, 2000)
})
p.then((res) => {
    console.log(res)
})
```

ts 模拟实现

```ts
type State = 'fulfilled' | 'rejected' | 'pending'

// 实例类型
interface Promise2Interface<T> {
    then<T1 = T, T2 = never>(
        onfulfilled?: ResolvedFN<T1> | undefined | null,
        onrejected?: RejectFN<T2> | undefined | null
    ): Promise2Interface<T1 | T2> | void
}

// 类 类型
interface Promise2Constructor {
    new <T>(
        executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void
    ): Promise<T>

    all(promises: Promise2Interface<any>[]): Promise2Interface<any[]>
}

interface ResolvedFN<T> {
    (value?: T): T | Promise2Interface<T> | void
}

interface RejectFN<T> {
    (reason?: any): T | Promise2Interface<T> | void
}

class Promise2<T> implements Promise2Interface<T> {
    state: State = 'pending'
    resolved_res: any[] | null = null
    reject_res: any[] | null = null
    queue: {
        fn1: (...args: any[]) => void
        fn2: (...args: any[]) => void
    }[] = []

    constructor(executor) {
        executor(
            (...agrs) => {
                this.state = 'fulfilled'
                this.resolved_res = agrs
                this.queue.forEach(({ fn1, fn2 }) => {
                    fn1(...agrs)
                })
            },
            (...args) => {
                this.state = 'rejected'
                this.reject_res = args
                this.queue.forEach(({ fn1, fn2 }) => {
                    fn2(...args)
                })
            }
        )
    }

    then<T1 = T, T2 = never>(onResolve?: ResolvedFN<T1>, onReject?: RejectFN<T2>) {
        if (this.state === 'fulfilled') {
            onResolve(...this.resolved_res)
        } else if (this.state === 'rejected') {
            onReject(...this.reject_res)
        } else {
            this.queue.push({ fn1: onResolve, fn2: onReject })
        }
    }

    static all(promises: Promise2Interface<any>[]): Promise2Interface<any[]> {
        let results = []
        return new Promise2((resolve, reject) => {
            let i = 0
            next()
            function next() {
                promises[i].then((res) => {
                    results.push(res)
                    i++
                    if (i === promises.length) {
                        resolve(results)
                    } else {
                        next()
                    }
                }, reject)
            }
        })
    }
}

// let p = new Promise2<number>((resolve, reject) => {
//     setTimeout(() => {
//         resolve(123)
//     }, 1000)
// })

// p.then((res) => {
//     console.log(res)
// })

let p1 = new Promise2((resolve, reject) => {
    setTimeout(() => {
        resolve(11)
    }, 1000)
})
let p2 = new Promise2((resolve, reject) => {
    setTimeout(() => {
        resolve(22)
    }, 1000)
})

Promise2.all([p1, p2]).then((res) => {
    console.log(res)
})
```
