document.getElementById('btn-AddMoney').addEventListener('click', function(event){
    event.preventDefault()
    const getAmount = document.getElementById('addMoney').value;
    const getPin = document.getElementById('amountPin').value;
    if(getPin === '1234'){
        const balance = document.getElementById('currentBalance').innerText;
        const accountBalance = parseFloat(balance);
        const inputBalance = parseFloat(getAmount); 
        const updateBalance = accountBalance + inputBalance;
        
        document.getElementById('currentBalance').innerText = updateBalance;
        
    }
    else{
        alert('please check your password');
    }
});