const fs=require ("fs")
// console.log(fs)
console.log("staring")

// fs.writeFileSync("harry.txt","harry is a goood")
fs.writeFile("harry2.txt","harry is a good boy",()=>{
    console.log("done")
    fs.readFile("harry2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})
//  for appand data
fs.appendFile("harry.txt","harryrobo",(e,d)=>{
    console.log(d)
})
console.log("Ending")