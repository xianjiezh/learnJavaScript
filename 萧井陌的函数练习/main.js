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




