
document.addEventListener('keydown', highlightLetters)

function highlightLetters(event){
    const btnList = document.querySelectorAll('.btn')
    for (let btn of btnList){
        if(event.code.toUpperCase() === btn.dataset.keyCode.toUpperCase()){
            btn.classList.toggle('selected')
        } else {
            btn.classList.remove('selected')
        }
    }
}