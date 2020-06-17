
//函数声明
// function add(x: number, y: number, z?:number): number {
//   if(typeof z === 'number'){
//       return x+y+z
//   }else{
//       return x+y
//   }
// }
// let result = add(2,3,5)
const add = function (x: number, y: number, z:number = 10): number {
    if(typeof z === 'number'){
        return x + y + z
    }else{
        return x + y
    }
  }
const add2:(x: number, y:number, z?:number) => number = add //  =>表示返回值
//这里我们没有定义add 的类型但是typscript 会自动的进行类型推断

// 再看这个例子会更容易理解
let stri = '112';//再赋值 的过程中推断为string类型
