// let password = '#234kkl$%%'
// //use conditional statement to check length

// console.log(password.length)
// if(password.length<16){
//     console.log('Password Character must be greater than 16')
// }else{
//     console.log('Good Password')
// }

// let email = 'emmakcvictor@gmail.com'
// if(email.length<9){
//     console.log('email Character must be greater than 9')
// }else{
//     console.log('Good Email')
// }
// let username = prompt('Enter Username')

// if(username.length<8){
//     alert('Username must be greater than eight characters')
// }else{
//     alert(`Welcome ${username}`)
// }

// if your age is less than 20, your gate fee is 1000 and you will be assigned a password that starts with teen

// if your age is more 60 you would be assigned a password that starts with ret and your fee will be 500

let fullname = prompt('Enter Fullname')
let agee = Number(prompt('Enter age'))

let genPass = Math.floor(Math.random()*10000)+14300
let teenPassword =  `teen${genPass}`
let retPassword =  `ret${genPass}`

let firtsname = fullname.slice(fullname.indexOf(' '),100)
if(agee<20){
    alert(`Welcome ${firtsname}, your password is ${teenPassword} and your fee is 1000 Naira`)
}else if(agee>60){
    alert(`Welcome ${firtsname}, your password is ${retPassword} and your fee is 500 Naira`)
}else{
    alert('You didnt meet the requirement')
}

// an application that can determine discount based on purchase
// let fullname = prompt('Enter fullname')
// let firstPurchase = prompt('Enter product')

// let firstamount
// if(firstPurchase.trim().toLowerCase() === 'noodles' && qty!=0){
//     firstamount = 2000*qty
// }else if(firstPurchase.trim().toLowerCase() === 'hamper'){
//     firstamount = 3500
// }

//AND (both sides need to be true,for the entire statement to be true)
// let passkey = 'taco tuesday';
// if(passkey.length >= 6 && passkey.indexOf(' ') === -1){
//     console.log("Valid Passkey!")
// }
// else{
//     console.log("INVALID PASSKEY!")
// }
//OR (Only one side needs to be true for the entire statement to be true)
// let age = 76;
// if( age <6 || age >=65){
//    console.log("You get in for free!!")
// }
// else{
//     console.log('That will be $10 please');
// }

// let age =number(prompt('Enter your age'))
// if( age >=24 && age <=29){
//     console.log('Accepted')
// let StudiedCourse = prompt('Enter Studied Course')
// if(StudiedCourse.includes('Engineering')|| StudiedCourse==='Computer Science'){
//     console.log('You have been assigned to Field Operations')
// }
// else if(StudiedCourse ==='biochemistry' || StudiedCourse === 'biology' || StudiedCourse ==='Industrial Chemistry'){
//     console.log('You have been assigned to Lab Study')
// }
// }


//correction
// let age =Number(prompt('Enter Your age'))
// let cs = prompt('Enter Course Of Study')
// let ageRange = age>=24 && age<=29

//  if((ageRange) && (cs.toLowerCase().trim().includes('engineering') || cs.toLowerCase().trim().includes('computer science'))){
//     alert('field operations')
//  }else if((ageRange) && (cs.toLowerCase().trim().includes('biochemistry') || cs.toLowerCase().trim().includes('biology'))){
//     alert('laboratory')
//  }else if((ageRange) && (cs.toLowerCase().trim().includes('industrial chemistry'))){
//     alert('laboratory')
//  }else{
//     alert('not qualified')
//  }
// create a system that assigns those that are 60 years and above to Free services, those that are 30-59 years to payment of 2000 naira, those that are 18-29 years to 1200 naira and those that are below 18 years are not permitted to enter
let age =Number(prompt('Enter Your Age'))
if((age>=60)){
    alert('Congratulations,for you its free!!')
}
let agerange = age>=18 
if(agerange && age>=30 && age<=59){
    alert('Your fee is $2000')
}
if(agerange && age>=18 && age<=29){
    alert('Your fee is $1200')
}
else if(age<18){
    alert('You are not permitted to enter')
}











//NOT expression returns true if expression is false

// let noodlesQty =Number (prompt('noodlesQty'))

// let hamperQty = Number(prompt('hamperQty'))
// let shoesQty = Number(prompt('shoesQty'))
// let chickenQty =Number (prompt('chickenQty'))
// let noodles = 2000
// let hamper = 3500
// let shoes = 1700
// let chicken = 2300



// create an application that would give 3% discount for a purchese of 5000 and above, and let the user know his total purchase, his discount percentage, and how much he has to pay
// 5% 10000 and above

// the app must the firstname of the user and the qunatity he wants to purchase

// if(totalPurchase>=5000){
//     alert(`Your total is :${totalPurchase},
//     \nYour discount percentage is 3% and total amount to be paid with discount is\n
//     : ${totalPurchase - (totalPurchase*0.3)}./nThank you ${fullname.slice(0, fullname.indexOf(' '))}`)
// }else if(totalPurchase>=10000){
//     alert(`Your total is :${totalPurchase},
//     \nYour discount percentage is 5% and total amount to be paid with discount is\n
//     : ${totalPurchase - (totalPurchase*0.5)}./nThank you ${fullname.slice(0, fullname.indexOf(' '))}`)
// }