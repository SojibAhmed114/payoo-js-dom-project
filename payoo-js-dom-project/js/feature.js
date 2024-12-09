//cash out button
document.getElementById('show-cash-out-form').addEventListener('click', function(){
    document.getElementById('cashOutForm').classList.remove('hidden');
    document.getElementById('addMoneyForm').classList.add('hidden')
});

//add money button
document.getElementById('show-add-money-form').addEventListener('click', function(){
    document.querySelector('#addMoneyForm').classList.remove('hidden');
    document.getElementById('cashOutForm').classList.add('hidden');
});