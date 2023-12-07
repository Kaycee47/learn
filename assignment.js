let username =(prompt('Enter Your Username'))
if(username.length<8|| username.includes(' ')){
    alert('Username must be grater than 8 characters and must not contain space')
}
else{
    alert(`Welcome ${username}`)
    console.log(username.trim())
}

let age = Number(prompt('Enter Your age'))
let agerange =  age>=25 && age<=33
if(age =agerange){
    alert('Welcome')
}
else{
    alert('Sorry you are not in the specified agerange')
}
let email = prompt('Enter Your Email')
if(email.includes('@')&& email.length>8){
    alert('valid Email')
}else{
    alert('Invalid Email')
}

let cos= prompt('Enter Course Studied')
if (cos.toLowerCase().trim().includes('engineering'|| cos.includes('sciences'))){
    console.log('Valid')
}
else{
    alert('Sorry your Course Studied is not available')
}
let code = Math.floor(Math.random()*10000)
let trackingcode = `SUN${code}`
if(age=agerange && cos.includes('engineering')){
    alert(`Dear ${username},Your tracking code is ${trackingcode}ENG`)
}else if(age=agerange && cos.includes('sciences')){
    alert(`Dear ${username},Your tracking code is ${trackingcode}SCS `)
}
