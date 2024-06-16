import fs from "fs/promises"
// fine read garne function
let a=await fs.readFile("harry.txt")
// aru file ma kei chij tpane
let b=await fs.writeFile("harry.txt","i am aman")

console.log(a.toString())