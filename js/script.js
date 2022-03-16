//Session fermée

const emailInput = document.getElementById('email');
const passInput = document.getElementById('pass');
const nameInput = document.getElementById('name');
const form = document.getElementById('form');
const formSignIn = document.getElementById('formSignIn')
const messageName = document.querySelector('.messageName');
const messageEmail = document.querySelector('.messageEmail');
const messagePass = document.querySelector('.messagePass');



//function validation of SignIn page
if(formSignIn) {

    formSignIn.addEventListener('submit', (e) => {
        if (emailInput.value == "") {
            e.preventDefault()
            messageEmail.textContent = "Ce Champ est obligatoire";
            emailInput.style.borderColor = "red";
        } else {
            messageEmail.textContent = "";
            emailInput.style.borderColor = "green";
        }
        if (passInput.value == "") {
            e.preventDefault()
            messagePass.textContent = "Ce Champ est obligatoire";
            passInput.style.borderColor = "red";
    
        } else {
            messagePass.textContent = "";
            passInput.style.borderColor = "green";
        }
    })
}


//function validation of Registration page

if(form) {

    form.addEventListener('submit', (e) => {
    
        if (nameInput.value == "") {
            e.preventDefault()
            messageName.textContent = "Ce Champ est obligatoire";
            nameInput.style.borderColor = "red"; 
        } else {
            messageName.textContent = "";
            nameInput.style.borderColor = "green";
        }
       
        if (emailInput.value == "") {
            e.preventDefault()
            messageEmail.textContent = "Ce Champ est obligatoire";
            emailInput.style.borderColor = "red";
        } else {
            messageEmail.textContent = "";
            emailInput.style.borderColor = "green";
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
            passInput.style.borderColor = "green";
        }
    })
}


//Session Ouverte 
//Modal
const add = document.getElementById('add');
// const studentAdd = document.getElementById('studAdd');
// const payementAdd = document.getElementById('payementAdd');
const close = document.getElementById('close')
const modalAdd = document.getElementById('addModal');


//Modal's Inputs
  //crs
const addCourForm = document.getElementById('formAddCrs')
const titleInput = document.getElementById('title');
const chapitreInput = document.getElementById('chapitre');
const prixInput = document.getElementById('prix');
const messageTitle = document.querySelector('.messageTitle');
const messageChapter = document.querySelector('.messageChapter');
const messagePrix = document.querySelector('.messagePrix');
  //students et payements



// Modals 

// Show the model
add.onclick = function() {
    modalAdd.style.display = "block";
  }

// addForm validation function

// Add a new cour
if(addCourForm) {

    addCourForm.addEventListener('submit', (e) => {
        if (titleInput.value == "") {
            e.preventDefault()
            messageTitle.textContent = "Ce Champ est Obligatoire";
            titleInput.style.borderColor = "red";
        } else {
            messageTitle.textContent = "";
            titleInput.style.borderColor = "green";
        }
        if(chapitreInput.value == 0){
           e.preventDefault()
            messageChapter.textContent = "Indiquez le nombre des chapitres"; 
            chapitreInput.style.borderColor = "red"; 
        } else {
             messageChapter.textContent = "";
             chapitreInput.style.borderColor = "green";
        }

        if (prixInput.value == "") {
            e.preventDefault()
            messagePrix.textContent = "Définissez le prix du cour";
            prixInput.style.borderColor = "red";
        } else {
            messagePass.textContent = "";
            prixInput.style.borderColor = "green";
        }
    })
}

// Add a new student


// Add a new payement


//   close the model

close.onclick = function() {
    modalAdd.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalAdd) {
      modalAdd.style.display = "none";
    }
  }









