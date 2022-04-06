
function check(){
let checkbox = document.getElementById('switch-flat');

let basic = document.getElementById('basic-price')
let professional = document.getElementById('professional-price')
let master = document.getElementById('master-price')

if(checkbox.checked) {  // Valor mensal

    basic.innerHTML="19.99"
    professional.innerHTML="24.99"
    master.innerHTML="39.99"

} else {             // Valor anual

    basic.innerHTML="199.99"
    professional.innerHTML="249.99"
    master.innerHTML="399.99"
}
}