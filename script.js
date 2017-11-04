//实现n的阶乘
function fac(n) {
    if(n == 1) {
        return 1
    }
    return n * fac(n-1)
    
}
// console.log(fac(6))
// 递归，不用循环可以达到目的




// 实现斐波那契数列