const form = document.getElementById('form');

const action = document.getElementById('method-selector');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

const span = document.getElementById('span');

const submitFunction = (e) => {
    e.preventDefault();

    fetch(`/api/${action.value}`, {
        method: 'POST',
        body: JSON.stringify({
            num1: num1.value,
            num2: num2.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        span.innerHTML = data;
    })
}

form.addEventListener("submit", submitFunction);