// display content button in text-box

function display(content) {
    output.value += content

    checkOp = output.value.slice(-2)
    if (checkOp == '//' || checkOp == '++' || checkOp == '--' || checkOp == '**' || checkOp == '%%' || checkOp == '****') {
        output.value = output.value.slice(0, -1)
    }

}

function allClear() {
    output.value = ""
}

// evaluate expression
function expEval() {
    try { output.value = eval(output.value) }
    catch {
        output.value = "Invalid operation...!!"
        setTimeout(() => {
            output.value = ""
        }, 1000)
    }
}


// removing last digit from expression

function removeLastValue() {
    output.value = output.value.slice(0, -1)
}