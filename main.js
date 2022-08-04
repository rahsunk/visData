const userImg=document.getElementById('img')
userImg.src=data[0].picture.large

const userName=document.getElementById('name')
userName.innerHTML=data[0].name.title+" "+data[0].name.first+" "+data[0].name.last

const userGender=document.getElementById('gender')
userGender.innerHTML="Gender: "+data[0].gender.charAt(0).toUpperCase()+data[0].gender.slice(1)

const userLocal=document.getElementById('location')
userLocal.innerHTML="Address: "+data[0].location.street.number+" "+data[0].location.street.name+", "+data[0].location.city+", "+data[0].location.state+", "+data[0].location.country

const userDob=document.getElementById('dob')
userDob.innerHTML="Date of Birth: "+data[0].dob.date.substr(0,10)

const userMail=document.getElementById('mail')
userMail.innerHTML="Email: "+data[0].email

const userCell=document.getElementById('cell')
userCell.innerHTML="Cell Phone #: "+data[0].cell

const userNum=document.getElementById('number')
userNum.innerHTML="User #"+1

const button=document.querySelector('button')

button.onclick=function(event){
    event.preventDefault()
    generate()
}

button.onmousedown=function(){
    button.style.backgroundColor="white"
}

button.onmouseup=function(){
    button.style.backgroundColor="gray"
}

button.onmouseenter=function(){
    button.style.backgroundColor="gray"
}

button.onmouseleave=function(){
    button.style.backgroundColor="blueviolet"
}

function generate(){
    let randIndex=Math.floor(Math.random()*data.length)
    // let randIndex=29
    let randUser=data[randIndex]

    userImg.src=randUser.picture.large
    userName.innerHTML=randUser.name.title+" "+randUser.name.first+" "+randUser.name.last
    userGender.innerHTML="Gender: "+randUser.gender.charAt(0).toUpperCase()+randUser.gender.slice(1)
    userLocal.innerHTML="Address: "+randUser.location.street.number+" "+randUser.location.street.name+", "+randUser.location.city+", "+randUser.location.state+", "+randUser.location.country
    userDob.innerHTML="Date of Birth: "+randUser.dob.date.substr(0,10)
    userMail.innerHTML="Email: "+randUser.email
    userCell.innerHTML="Cell Phone #: "+randUser.cell
    userNum.innerHTML="User #"+(randIndex+1)
}