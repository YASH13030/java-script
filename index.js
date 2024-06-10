// console.log("hello world")

// let a =10;
// var b=20;
// const c=30;
// console.log(a,b,c)
// console.table([a,b,c])


// let a;
// console.log(a)
// const isAllowed = true;
// console.log(isAllowed)
// let b = null;
// console.log(b)


//non primitive

// const arr=[10,"Yash",false,undefined,null]
// console.log(arr)

// let obj = {
//     name: "yash",
//     age: 18,
//     email: "yash.raw.12@gmail.com",
//     mobile: 9871836528
// }

// console.log(obj)
// console.log(obj.age)
// console.log(obj["age"])  // another way of accesing items

// let obj2 = {
//     name: {
//         firstName: "Yash",
//         lName: "Rawat"
//     },
//     age: 18,
//     email: "yash.raw.12@gmail.com",
//     mobile: 9871836528
// }

// console.log(obj2.name.lName)

function user(){
    let a =10;
    let b= 20;
    return a+b
}

console.log(user())

const fn = function(){
    let a =10
    let b=20
    return a*b
}

console.log(fn())
const f2 = ()=>{
    let a =10
    let b=5
    return a/b
}

console.log(f2())

const mySym = Symbol("Hii")
console.log(mySym)
