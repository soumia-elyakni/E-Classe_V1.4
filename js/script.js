const emailInput = document.getElementById('email');
const passInput = document.getElementById('pass');
const nameInput = document.getElementById('name');
const form = document.getElementById('form');
const formSignIn = document.getElementById('formSignIn')
const messageName = document.querySelector('.messageName');
const messageEmail = document.querySelector('.messageEmail');
const messagePass = document.querySelector('.messagePass');

if(formSignIn) {

    formSignIn.addEventListener('submit', (e) => {
        if (emailInput.value == "") {
            e.preventDefault()
            messageEmail.textContent = "Ce Champ est obligatoire";
            emailInput.style.borderColor = "red";
        } else {
            messageEmail.textContent = "";
            emailInput.style.borderColor = "blue";
        }
        if (passInput.value == "") {
            e.preventDefault()
            messagePass.textContent = "Ce Champ est obligatoire";
            passInput.style.borderColor = "red";
    
        } else {
            messagePass.textContent = "";
            passInput.style.borderColor = "blue";
        }
    })
}

if(form) {

    form.addEventListener('submit', (e) => {
    
        if (nameInput.value == "") {
            e.preventDefault()
            messageName.textContent = "Ce Champ est obligatoire";
            nameInput.style.borderColor = "red"; 
        } else {
            messageName.textContent = "";
            nameInput.style.borderColor = "blue";
        }
       
        if (emailInput.value == "") {
            e.preventDefault()
            messageEmail.textContent = "Ce Champ est obligatoire";
            emailInput.style.borderColor = "red";
        } else {
            messageEmail.textContent = "";
            emailInput.style.borderColor = "blue";
        }
        if (passInput.value == "") {
            e.preventDefault()
            messagePass.textContent = "Ce Champ est obligatoire";
            passInput.style.borderColor = "red";
    
        } else if (passInput.value.length < 8 || passInput.value.length > 20 ) {
            e.preventDefault()
            messagePass.textContent = "Le mot de passe doit être entre 8 et 20 caractères ";
            passInput.style.borderColor = "red";
    
        } else {
            messagePass.textContent = "";
            passInput.style.borderColor = "blue";
        }
    })
}




