function increaseValue() {
    let value = parseInt(document.getElementById('numberInput').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numberInput').value = value;
}

function decreaseValue() {
    let value = parseInt(document.getElementById('numberInput').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('numberInput').value = value;
}

