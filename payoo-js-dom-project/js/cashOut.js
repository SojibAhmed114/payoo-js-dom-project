document.getElementById('btn-Cash-Out').addEventListener('click',function(event){
    event.preventDefault();

    const cashOutMoney = document.getElementById('cashOutMoney').value;
    const inputBalance = parseFloat(cashOutMoney);
    const CashOutPin = document.getElementById('CashOutPin').value;

    if (CashOutPin === '1234') {
        const balance = document.getElementById('currentBalance').innerText;
        const accountBalance = parseFloat(balance);
        
        const updateBalance = accountBalance - inputBalance;
        document.getElementById('currentBalance').innerText = updateBalance;
    }
    else{
        alert('please check your pin number')
    }
});