let a = 6;
function factorial(number) {
    let arr = Array.from(Array(number + 1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a, b) => {
        return a * b
    })
    console.log(c)
    return c
}
factorial(a)

// function facFor(numer){
//     let fac=1;
//     for (let index = 1; index < array.length; index++) {
//         fac=fac*index       
//     }
//     return fac
// }

// facFor(a)