const inputFirstName = document.querySelector('input:nth-of-type(1)');
const inputLastName = document.querySelector('input:nth-of-type(2)');
const inputEmailAddress = document.querySelector('input:nth-of-type(3)');
const inputPassword = document.querySelector('input:nth-of-type(4)');
const btnConfirm = document.querySelector('.confirmBtn');
const form = document.querySelector('form');
inputFirstName.addEventListener('input', () => {
    console.log('tomek chuj')
    if(inputFirstName.value==""){
        inputFirstName.style.border = "1px solid red"
    }
    else{
        inputFirstName.style.border = "1px solid green"
    }
})
inputLastName.addEventListener('input', () => {
    console.log('tomek chuj')
    if(inputLastName.value==""){
        inputLastName.style.border = "1px solid red"
    }
    else{
        inputLastName.style.border = "1px solid green"
    }
})
inputEmailAddress.addEventListener('input', () => {
    console.log('tomek chuj')
    if(inputEmailAddress.value==""){
        inputEmailAddress.style.border = "1px solid red"
    }
    else{
        inputEmailAddress.style.border = "1px solid green"
    }
})
inputPassword.addEventListener('input', () => {
    console.log('tomek chuj')
    if(inputPassword.value==""){
        inputPassword.style.border = "1px solid red"
    }
    else{
        inputPassword.style.border = "1px solid green"
    }
})
btnConfirm.addEventListener('click', () => {
    event.fomr
    if((inputFirstName.value || inputLastName.value || inputEmailAddress.value || inputPassword.value) == "") {
        alert("error")
    }
    else {
        console.log('tomek szef')
    }
})