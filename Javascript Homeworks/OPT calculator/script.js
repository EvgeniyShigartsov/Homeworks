const box = document.querySelector('.box')
const input = document.querySelector('.input')
const test = document.querySelector('.input')
const mBox = document.querySelector('.m-box')
const keysBox = document.querySelector('.keys')
const mrc = document.querySelector('.mrc ')
let valueToOp1 = ''
let valueToOp2 = ''
let opernad = ''
let savedValue = ''

box.addEventListener('click', calculator)
function calculator(event) {
    const dataValue = event.target.dataset.value
    switch (dataValue) {
        case 'number':
            if (input.classList.contains('first-click')) {
                valueToOp1 = input.value += `${event.target.value}`
            } else if (input.classList.contains('second-click')) {
                input.value = ''
                valueToOp2 = input.value += `${event.target.value}`
                input.classList.remove('second-click')
                input.classList.add('third-click')
                keysBox.classList.add('count-with-op')
            } else if (input.classList.contains('third-click')) {
                valueToOp2 = input.value += `${event.target.value}`
            }
            break
        case 'opernad':
            if (keysBox.classList.contains('count-with-op')) {
                count(opernad)
                valueToOp1 = input.value
            }
            opernad = event.target.value
            input.classList.add('second-click')
            input.classList.remove('first-click')
            break
        case 'm+':
            savedValue = input.value
            mBox.hidden = false
            break
        case 'm-':
            savedValue = ''
            mBox.hidden = true
            break
        case 'mrc':
            if (savedValue === '') break
            if (event.target.classList.contains('show-mrc')){
                input.value = savedValue
                valueToOp2 = input.value
                event.target.classList.remove('show-mrc')
            } else if (!event.target.classList.contains('show-mrc')){
                mBox.hidden = true
                savedValue = ''
                event.target.classList.add('show-mrc')
            }
            break
        case 'cancel':
            clear()
            break
        case 'count':
            // input.value = +valueToOp1 + opernad + +input.value // тут всегда конкатинация. 
            count(opernad)
            break
    }
}
function clear() {
    input.classList.add('first-click')
    keysBox.classList.remove('count-with-op')
    mrc.classList.add('show-mrc')
    opernad = ''
    input.value = ''
    valueToOp1 = ''
    valueToOp2 = ''
    savedValue = ''
    mBox.hidden = true
}
function count(op) {
    switch (op) {
        case '+':
            input.value = +valueToOp1 + +valueToOp2
            break
        case '-':
            input.value = valueToOp1 - valueToOp2
            break
        case '*':
            input.value = valueToOp1 * valueToOp2
            break
        case '/':
            input.value = valueToOp1 / valueToOp2
            break
    }
}
