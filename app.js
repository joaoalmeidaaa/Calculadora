let displayValue = '';

function adicionaNoDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function limpaDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculador() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        document.getElementById('display').value = displayValue;

    } catch(error) {
        displayValue = 'Erro!';
        document.getElementById('display').value = displayValue;
    }
}
