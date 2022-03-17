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
const close = document.getElementById('close')
const modalAdd = document.getElementById('addModal');

    //Modal's Content
        //crs
const addCourForm = document.getElementById('formAddCrs')
const titleInput = document.getElementById('title');
const chapitreInput = document.getElementById('chapitre');
const prixInput = document.getElementById('prix');
const messageTitle = document.querySelector('.messageTitle');
const messageChapter = document.querySelector('.messageChapter');
const messagePrix = document.querySelector('.messagePrix');

        //students 
const addStudentForm = document.getElementById('formAddStud');
const phoneInput = document.getElementById('telephone');
const enrollNumberInput = document.getElementById('enroll');
const messagePhone = document.querySelector('.messagePhone');
const messageEnroll = document.querySelector('.messageEnroll');

        // payements
const addPayementForm = document.getElementById('formAddPay');
const paymentScheduleInput = document.getElementById('payShedule');
const billNumberInput = document.getElementById('billNum');
const amountPaidInput = document.getElementById('amntPaid');
const balanceAmountInput = document.getElementById('blncAmnt');
const messagePayementS = document.querySelector('.messagePayShed');
const messageBillNm = document.querySelector('.messageBillNm');
const messageAmountP = document.querySelector('.messageAmntPaid');
const messageBalanceAmt = document.querySelector('.messageBalAmnt');

// Modals 

    // Show the modal
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

if(addStudentForm){
    addStudentForm.addEventListener('submit', (e) => {
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

        if (phoneInput.value == "" ){
            e.preventDefault()
            messagePhone.textContent = "Ce Champ est obligatoire";
            phoneInput.style.borderColor = "red";

        } else {
            messagePhone.textContent = "";
            phoneInput.style.borderColor = "green";
        }

        if (enrollNumberInput.value == "" ){
            e.preventDefault()
            messageEnroll.textContent = "Ce Champ est obligatoire";
            enrollNumberInput.style.borderColor = "red";

        } else {
            messageEnroll.textContent = "";
            enrollNumberInput.style.borderColor = "green";
        }


    })
}

        // Add a new payement

if(addPayementForm){
    addPayementForm.addEventListener('submit', (e) =>{
        if (nameInput.value == "") {
            e.preventDefault()
            messageName.textContent = "Ce Champ est obligatoire";
            nameInput.style.borderColor = "red"; 
        } else {
            messageName.textContent = "";
            nameInput.style.borderColor = "green";
        }

        if(paymentScheduleInput.value == ""){
            e.preventDefault()
            messagePayementS.textContent = "Ce Champ est obligatoire";
            paymentScheduleInput.style.borderColor = "red"; 

        } else {
            messagePayementS.textContent = "";
            paymentScheduleInput.style.borderColor = "green";
        }

        if(billNumberInput.value == ""){
            e.preventDefault()
            messageBillNm.textContent = "Ce Champ est obligatoire";
            billNumberInput.style.borderColor = "red"; 

        } else {
            messageBillNm.textContent = "";
            billNumberInput.style.borderColor = "green";

        }

        if(amountPaidInput.value == ""){
            e.preventDefault()
            messageAmountP.textContent = "Ce Champ est obligatoire";
            amountPaidInput.style.borderColor = "red"; 

        } else {
            messageAmountP.textContent = "";
            amountPaidInput.style.borderColor = "green";

        }

        if(balanceAmountInput.value == ""){
            e.preventDefault()
            messageBalanceAmt.textContent = "Ce Champ est obligatoire";
            balanceAmountInput.style.borderColor = "red"; 

        } else {
            messageBalanceAmt.textContent = "";
            balanceAmountInput.style.borderColor = "green";

        }
    })
        

}       


    //   close the model

close.onclick = function() {
    modalAdd.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalAdd) {
      modalAdd.style.display = "none";
    }
  }









