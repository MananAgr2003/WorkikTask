// src/renderer.js
const apiKey = '6d32920b9ee16e30784972c3'; // Replace with your actual API key

const convertButton = document.getElementById('convertButton');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amount = document.getElementById('amount');
const result = document.getElementById('result');

convertButton.addEventListener('click', () => {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amountValue = parseFloat(amount.value);
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amountValue}`)
        .then(response => response.json())
        .then(data => {
            const conversionResult = data.conversion_result;
            result.innerHTML = `Converted Amount: ${conversionResult} ${to}`;
        })
        .catch(error => {
            console.error('Error converting currency:', error);
            result.innerHTML = 'Error converting currency';
        });
});
