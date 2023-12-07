
const names = {
    firstperson: 'Daniel',
    secondperson: 'Chidera',
    thirdperson: 'tobe',
    fourthperson: '2pack',
    fifthperson: 'kelechi',
    lastperson: 'Joseph' 
}
console.log(names.firstperson)

const humans ={
    males: ['john','obi','michael',],
    females: ['ada','gift','chidera'],
    boy:'blaik',
    girl: 'nene',
    women:{
        mum: 'tobe mummy', 
        joe:'joe sister',
        blaik: [true, 'grace', {animal: 'goat'}]
    }
}

console.log(humans.females[1])
console.log(humans.males[2])
console.log(humans.women.blaik[2].animal)
console.log(humans.women.blaik[1]='great')
humans.women.Emmanuel=['house','car']
console.log(humans.women)

let shoppingcart = {
    product: 'fire stick',
    price: 39.9,
    quantity: 2
}
const student = {
    firstname: 'David',
    lastname: 'Jones',
    Strengths: ['Music','Art'],
    exams: { 
        midterm: 92,
        final: 88
    }
}

student.shopping=shoppingcart
console.log(student)



