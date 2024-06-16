// html ko buttuon target gareko
let button = document.getElementById("btn")
// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// button ma event haleko by using addEventListener key
button.addEventListener("dblclick", ()=>{
    // ani change garne tham select gareko 
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click Please")
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})