async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}
// use of fatch api yo chai data server bat lerauna use garinxa
async function getData() {
     // Simulate getting data from a server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data=await x.json()
    console.log(data)
}
async function main(){

    console.log("Loading modules")
    
    console.log("Do something else")
    
    console.log("Load data")
    
    let data = await getData()
    // data.then((v)=>{
    //     console.log(data)
    //     console.log("process data")
    //     console.log("task 2")
    // })
    
    console.log(data)
    console.log("process data")
    console.log("task 2")
}
main()
// some key 
// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully
