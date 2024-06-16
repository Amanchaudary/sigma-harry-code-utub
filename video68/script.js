console.log("harry")
// class target garda
let boxes=document.getElementsByClassName("box")
console.log(boxes)
boxes[2].style.color="red"
//  Id target garda
let b2=document.getElementById("redbox")
console.log(b2)
b2.style.backgroundColor="red"
// quary selector 
// first element matra targer garxa ra dot use garinxa
document.querySelector(".box").style.backgroundColor="green"
// quary for all 
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="green"
})
// tag name selector asne sabai div name vako lai target garxa
document.getElementsByTagName("div")
//  match,closet, containe ko barema video herer practice garne simple xa
