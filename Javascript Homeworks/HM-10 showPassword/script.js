
const icons = document.querySelectorAll('.fas');
const input = document.querySelectorAll('.input');

icons.forEach((icon, index) =>{
    icon.addEventListener('click',(event) =>{
        if (event.target.classList.contains('fa-eye')){
            event.target.classList.toggle('fa-eye-slash')
            event.target.classList.remove('fa-eye')
            input[index].type = 'text';
     } else {
        event.target.classList.toggle('fa-eye')
        event.target.classList.remove('fa-eye-slash')
        input[index].type = 'password';
        }
    })
})
const btn = document.querySelector('.btn')
const warning = document.querySelector('.warning')

btn.addEventListener('click', (event) => {
    if ((input[0].value === input[1].value) && (input[0].value !== '' || input[1].value !== '')){
        let welcome = document.querySelector('.welcome')
        welcome.hidden = false;
        warning.hidden = true;
    } else {
        warning.hidden = false;
    }
    event.preventDefault()
})