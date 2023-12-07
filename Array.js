let student1 = 'Lekan'
let student2 = 'jegede'
let student3 = 'Nnamdi'

// let students = ['Lekan','jegede','Nnamdi']

// console.log(students[0])
//Array is a collection of data, adata type(basically)

//types of arrays
//empty array
let cars=[]

//array of strings
let students = ['Lekan','jegede','Nnamdi']

//array of numbers
let indices =  [782,27272,2727]

//mixed array
let spice = ['onga',null,true,34,undefined]
console.log(spice[0])
console.log(spice[1])
console.log(spice[2])


//modifying arrays  by changing elements
spice[0]= 'knorr'
console.log(spice)

//push// adds elements to the end of an array
spice.push('chicken flavour')
console.log(spice)

//pop//removes last element from array
spice.pop()
console.log(spice)

//unshift adds to the start of tha array
spice.unshift('royco')
console.log(spice)

//shift removes the first element from the array
spice.shift()
console.log(spice)

//concat can merge arrays together
let computers =['Dell','hp']

let newComputers = ['Mac','Esus']

let allcomputers = computers.concat(newComputers)

console.log(allcomputers)

//includes method for searching
let ans = allcomputers.includes('Lenovo')
console.log(ans)

//indexOf

let socialMedia = ['facebook','twitter','instagram']

console.log(socialMedia.indexOf('twitter'))

//join
console.log(socialMedia.join('..'))

//reverse
console.log(socialMedia.reverse())

//slice
console.log(socialMedia.slice(1,2)) //twitter

//splice

console.log(socialMedia.splice(1,1,'whatsApp'))
console.log(socialMedia)

//sort
let state =['Taraba','Jigawa','Abia','Imo','Anambra','Kogi']

console.log(state.sort())

const wddRow =[
     ['Chidera'],
     ['kc','Baba'],
     ['joe']
]
console.log(wddRow[1][0])