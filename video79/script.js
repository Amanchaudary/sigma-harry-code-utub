console.log('this is video of 79 of error handelingg')
let a=prompt("enter the number")
let b=prompt("inter second number")
if(isNaN(a)||isNaN(b)){
    throw SyntaxError("ssorry this is not allow")
}
let sum=parseInt(a)+parseInt(b)
try {
    console.log('the sum is',sum*x)
    
} catch (error) {
    console.log("erroe aa gaya")
}