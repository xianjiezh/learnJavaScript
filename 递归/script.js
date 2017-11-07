//实现n的阶乘
function fac(n) {
    if(n == 1) {
        return 1
    }
    return n * fac(n-1)
    
}
// console.log(fac(6))
// 递归的方法，不用循环可以达到目的
// 使用的代码比较简洁
// 比其他方法慢；因为前面的都在等，最先执行的最后执行完


// 实现斐波那契数列
function fib(n){
    if(n == 1){
        return 1
    }else if(n == 2){
        return 1
    }
    return fib(n-1)+fib(n-2)
}
// console.log(fib(7))
// 递归的特点：1、找规律（return 公式）；2、找出口（已知条件）
