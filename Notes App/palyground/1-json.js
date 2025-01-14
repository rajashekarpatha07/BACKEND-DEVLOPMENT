const fs = require('fs')
const { json } = require('stream/consumers')


const data = fs.readFileSync("1-json.json")
const Json_str = data.toString()
const parsedjson = JSON.parse(Json_str)

parsedjson.name = "raju";
parsedjson.age = 18;
const agejson = JSON.stringify(parsedjson);
const namejson = JSON.stringify(parsedjson);
fs.writeFileSync('1-json.json', namejson);
fs.writeFileSync('1-json.json',namejson);


















// const book={
//     title:"Ego is the enemy",
//     Auther:"Ryan"
// }
// // const BookJSONstr = JSON.stringify(book)
// // console.log(BookJSONstr)
// // fs.writeFileSync('1-json.json', BookJSONstr)
// const DataBuffer = fs.readFileSync('1-json.json'); // we read the data in 1-json.json
// const DataJson = DataBuffer.toString(); // we converted binary to an string
// const data = JSON.parse(DataJson); // we made that string to object
// console.log(data); // logged data