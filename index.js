import extVar from './variables.js';

function del() {
    extVar.display.innerHTML = display.textContent.slice(0, display.textContent.length - 1)
}

function cancel() {
    extVar.newTotal = ''
    extVar.displayTotal = '';
    extVar.display.innerHTML = ''
    extVar.secondaryDisplay.innerHTML = ''
}

function upperDisplay(e) {
    if (extVar.display.textContent.includes('.')) {
        if (e.target.textContent != '.') {
            extVar.displayTotal += e.target.innerHTML
        }
        extVar.display.innerHTML = displayTotal;
    } else if (extVar.display.textContent.slice(0, 1) == '0') {
        if (e.target.innerHTML != '0') {
            extVar.displayTotal += e.target.innerHTML;
        }
        extVar.display.innerHTML = displayTotal;
    } else {
        extVar.displayTotal += e.target.innerHTML;
        extVar.display.innerHTML = extVar.displayTotal;
    };
}

function bottomDisplay() {
    extVar.newTotal = eval(extVar.newTotal + extVar.displayTotal);
    try {
        let total = eval(extVar.newTotal);
        if (total.toString().includes('.')) {
            var x = total.toString().indexOf('.');
            var y = total.toString().slice(x + 1)
            if (y.length > 4) {
                extVar.secondaryDisplay.innerHTML = total.toFixed(4);
                extVar.display.innerHTML = ''
                extVar.displayTotal = ''
            } else {
                extVar.secondaryDisplay.innerHTML = total
                extVar.display.innerHTML = ''
                extVar.displayTotal = ''
            }
        } else {
            extVar.secondaryDisplay.innerHTML = total;
            extVar.display.innerHTML = ''
            extVar.displayTotal = ''
        }
    } catch (error) {
        extVar.secondaryDisplay.innerHTML = 'ERR'
    }
}


extVar.numbers.forEach(number => {
    number.addEventListener('click', upperDisplay)
})

extVar.operators.forEach(operator => {
    operator.addEventListener('click', upperDisplay)

})

extVar.deleteBtn.addEventListener('click', del)
extVar.cancelBtn.addEventListener('click', cancel)
extVar.equals.addEventListener('click', bottomDisplay)
