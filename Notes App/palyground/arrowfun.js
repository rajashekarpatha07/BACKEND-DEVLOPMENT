// const square = function(x){
//     return x*x
// }

// console.log(square(4))

// const square = (x)=>{
//     return x*x
// }

const square = (x) => x*x
// console.log(square(323))

const event = {
    name:'birthday party',
    guestlist: ['raj','sai', 'andrew'],
    printguesttoparty(){
        console.log('guest for this party are')
        this.guestlist.forEach((guest)=>{
            console.log(guest+' attending '+this.name)
        }
    )}
}

event.printguesttoparty()