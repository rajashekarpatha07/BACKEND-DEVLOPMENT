import chalk from "chalk"
import fs from "fs"
console.log("Hello World...!")

let command = process.argv[2]

if(command === 'add'){
    console.log('Adding note')
}else if(command === 'remove'){
    console.log("removing note")
}
