// create operations
use("CrudDB")
db.createCollection("courses")
db.courses.insertOne({
    name:"Harrys web dev",
    price :0,
    assiments:12,
    project:45
})
db.courses.insertMany([
    {
        "name": "Python",
        "Price": 15000,
        "Instructor": "Alice"
      },
      {
        "name": "JavaScript",
        "Price": 18000,
        "Instructor": "Bob"
      },
      {
        "name": "C++",
        "Price": 22000,
        "Instructor": "Charlie"
      },
      {
        "name": "Ruby",
        "Price": 17000,
        "Instructor": "David"
      },
      {
        "name": "C#",
        "Price": 19000,
        "Instructor": "Eva"
      },
      {
        "name": "Swift",
        "Price": 21000,
        "Instructor": "Frank"
      },
      {
        "name": "Kotlin",
        "Price": 16000,
        "Instructor": "Grace"
      },
      {
        "name": "PHP",
        "Price": 23000,
        "Instructor": "Hank"
      },
      {
        "name": "TypeScript",
        "Price": 20000,
        "Instructor": "Ivy"
      },
      {
        "name": "Go",
        "Price": 18000,
        "Instructor": "Jack"
      }
])

// read operation
let a=db.courses.find({price: 0})
console.log(a)

// update oprerations
db.courses.updateOne({price:0},{$set:{price:1000}})
db.courses.updateMany({price:1000},{$set:{price:10000}})

// delete operations
db.courses.deleteOne({price:1000})