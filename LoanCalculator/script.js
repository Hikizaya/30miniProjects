function calculateLoan() {
    loanAmount = document.querySelector('#loan-amount').value
    interestRate = document.querySelector('#interest-rate').value
    MonthsToPay = document.querySelector('#months-to-pay').value
    payment = document.querySelector('#payment')
    interest = (loanAmount * (interestRate * 0.01)) / MonthsToPay
    monthlyPayment = (loanAmount / MonthsToPay + interest).toFixed(2)
    payment.innerHTML = `Monthly payment: ${monthlyPayment}`
}
