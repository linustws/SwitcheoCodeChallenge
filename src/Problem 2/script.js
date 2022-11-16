function showError(errorElement, errorMessage) {
    document.querySelector("."+errorElement).classList.add("display-error");
    document.querySelector("."+errorElement).innerHTML = errorMessage;
}
function clearError() {
    let errors = document.querySelectorAll(".error");
    for(let error of errors) {
        error.classList.remove("display-error");
    }
}

let form = document.forms['send-eth-form'];
form.onsubmit = function(e) {
    clearError();
    if (form.address.value === "" ) {
        showError("address-error", "Please fill in this field.");
        return false;
    }
    if (form.address.value[0] != '0' || form.address.value[1] != 'x') {
        showError("address-error", "Enter an address starting with 0x.");
        return false;
    }
    if (form.amount.value === "" ) {
        showError("amount-error", "Please fill in this field.");
        return false;
    }
    if (form.otp.value === "" ) {
        showError("otp-error", "Please fill in this field.");
        return false;
    }

    document.querySelector(".success").classList.add("display-success")
    document.querySelector(".success").innerHTML = "Transaction completed."

    e.preventDefault();
}
// const eth_address = document.getElementById('eth-address')
// const amount = document.getElementById('amount')
// const otp = document.getElementById('otp')
// const form = document.getElementById('form')
// const errorElement = document.getElementById('error')

// form.addEventListener('send-tokens', (e) => {
//     e.preventDefault
//     let messages = []
//     if (eth_address.value == '' || eth_address.value == null) {
//         messages.push('ETH Address is required')
//     } 
//     if (eth_address.value[0] != '0' && eth_address.value[1] != 'x') {
//         messages.push('ETH Address must start with 0x')
//     }
//     if (messages.length > 0) {
//         e.preventDefault()
//         errorElement.innerText = messages.join(', ')
//     }
// })