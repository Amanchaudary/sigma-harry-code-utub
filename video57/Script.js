console.log("I am a tutorial of Loops")

console.log("I am a tutorial on Loops")

let a = 1;
console.log(a)
console.log(a+1)
console.log(a+2)
// 1 for loop
for (let i = 0; i < 100; i++) { 
    console.log(a + i); 
}
// 2 for-in-loop for key value
let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}

for (const key in obj) {  
        console.log(key)
}
// 3 for-of-loop  for array
for (const c of "Harry") {
    console.log(c)
}
// 4 while loop
let j = 0;
while (j<60000) {
    console.log(j)
    j++;
}
// 5 do-while loop for if one time prints is necesary
let i = 10;
do {
    console.log(i)
    i++;
} while (i<6);

