// generate 4 digit Pin
function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const newPin = pin + "";
    if (newPin.length == 4) {
        return newPin;
        // console.log(newPin)
    } else {
        return getPin();
    }
    
}
function generatePin(){
    const displayPin = document.getElementById('display-pin');
    const pin = getPin();
    displayPin.value = pin;
}
// pin-matcher-master
document.getElementById('key-pad').addEventListener('click', function(e){
    const number = e.target.innerText;
    const displayNumber = document.getElementById('display-number');
    if (isNaN(number)) {
        
        if (number == 'C'){
            displayNumber.value = '';
        }
    } else {
        const previousNumber = displayNumber.value;
        const newNumber = previousNumber + number ;
        displayNumber.value = newNumber;
    }
    
});

// verifyPin
function verifyPin(){
    const displayPin = document.getElementById('display-pin');
    const displayNumber = document.getElementById('display-number');
    const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-fail');
    if ( displayPin.value == displayNumber.value ) {
        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none';
    } else {
        notifySuccess.style.display = 'none';
        notifyFail.style.display = 'block';
    }
}