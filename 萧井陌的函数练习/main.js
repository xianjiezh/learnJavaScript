// 定义我们的log 函数
// 这样，我们就可以用log() 来代替console.log() 了
// apply 的作用是强行把console作为一个对象传进去
var log = function(){
    return console.log.apply(console,arguments)
}


// 实现一个加法口诀表

// 用两个for 循环的方法完成
function add1(){
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < i + 1; j++) {
            document.write(i + '+' + j + '=' + (i + j) + ', ')
        }
        document.write('<br>')
    }
}
// add1()

// 用分解的方法，先构建出每一行的内容，在把每一行画上去
function addLine(n){
    var s = ''
    for (let i = 0; i <= 9; i++) {
        
        s +=`${n} + ${i} = ${n + i} `
    }
    
    return s 
}
function addTwo(){
    var arr = []
    for (let n = 1; n <= 9; n++) {
        arr.push(addLine(n))
    }
    return arr.join(','+'\n')
}
// console.log(addTwo())

// 随机返回0或1
function random01(n){
    var m = []
    for (let i = 0; i < n; i++) {
        var a = Math.floor(Math.random() + 0.5)
        m.push(a)
    }
    

    return m
}
// console.log(random01(10))


// 返回一个这样的数组，这里是n = 3的情况
// [
//     [0, 0, 1],
//     [1, 0, 1],
//     [0, 0, 0],
// ]
function randomSquere01(n){
    var arr = []
    for (let i = 0; i < n; i++) {
        let arr2 = random01(n)
        arr[i] = arr2
    }
    return arr
}
log(randomSquere01(5))


// 返回一个包含 0 ，9的随机array，长度为n
function random09(n){
    console.log('random09')
    let arr = random01(n)
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i] * 9)
    }
    return arr2
}
// log(random09(10))

