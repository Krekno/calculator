function calculate(n1, op, n2) {
    num1 = parseFloat(n1)
    num2 = parseFloat(n2)
    switch (op) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
    }
    return "error"
}

function updateDisplay() {
    cur = n1 + op + n2
    switch (cur) {
        case "Error":
            document.querySelector('.display').innerHTML = "error"
            n1 = ""
            op = ""
            n2 = ""
            break
        case "0":
            document.querySelector('.display').innerHTML = "0"
            n1 = ""
            op = ""
            n2 = ""
            break
        case "NaN":
            document.querySelector('.display').innerHTML = "error"
            n1 = ""
            op = ""
            n2 = ""
            break
        case "Infinity":
            document.querySelector('.display').innerHTML = "error"
            n1 = ""
            op = ""
            n2 = ""
            break
        default:
            document.querySelector('.display').innerHTML = n1 + op + n2
    }
}

function error() {
    document.querySelector('.display').innerHTML = "Error"
}

let n1 = ""
let op = ""
let n2 = ""

numbers = document.querySelectorAll('#number');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        content = number.innerHTML
        if (op == "" && content in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']) {
            n1 += content
            updateDisplay()
        }
        else if (content in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']) {
            n2 += content
            updateDisplay()
        }
        else {
            error()
        }
    })
});
operators = document.querySelectorAll('#operator');
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (n1 != "") {
            op = operator.innerHTML
            updateDisplay()
        }
    })
});

document.querySelector('#equal').addEventListener('click', () => {
    if (n2 != "") {
        n1 = calculate(n1, op, n2)
        op = ""
        n2 = ""
        updateDisplay()
    }
});

document.querySelector('#clear').addEventListener('click', () => {
    n1 = ""
    op = ""
    n2 = ""
    updateDisplay()
});

document.querySelector('#dot').addEventListener('click', () => {
    if (op == "" && !n1.includes(".")) {
        if (n1 == "") {
            n1 = "0."
        }
        else {
            n1 += "."
        }
    }
    else if (op != "" && !n2.includes(".")) {
        if (n2 == "") {
            n2 = "0."
        }
        else {
            n2 += "."
        }
    }
    updateDisplay()
});

document.querySelector('#percent').addEventListener('click', () => {
    if (op == "") {
        n1 = parseFloat(n1) / 100
    }
    else {
        n2 = parseFloat(n2) / 100
    }
    updateDisplay()
});

document.querySelector('#reverse').addEventListener('click', () => {
    if (op == "") {
        n1 = parseFloat(n1) * -1
    }
    else if (op != "") {
        if (op == "-") {
            op = "+"
        }
        else if (op == "+") {
            op = "-"
        }
        else {
            if (n2 != "") {
                n2 = parseFloat(n2) * -1
            }
        }
    }
    else {
    }
    updateDisplay()
});

