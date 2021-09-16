// Listen for sumit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e){
    const uiAmount = document.getElementById('amount');
    const interest - getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');


    const principal = parseFloat(uiAmount.value);
    const calcInterest = parseFloat(interset.value) / 100 / 12;
    const calcPayments = parseFloat(years.value) * 12;

    // Compute monthly payments

    const x = Math.pow(1 + calcInterest, calcPayments);
    const monthly = (principal*x*calcInterest)/(x-1)
    e.preventDefault()
}
