<?php
session_start();

if(!isset($_SESSION['ouvert'])){
  
   header("location: index.php");
}
   ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payements</title>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/3a3f417346.js" crossorigin="anonymous" defer></script>
    <link rel="stylesheet" href="main.css">
</head>
<body class="m-0 p-0 w-100 h-100">
    
    <?php 
    require 'dash.php'
    ?>
    <?php 
    $conn = new mysqli('localhost', 'root', '', 'e_classe_db');     
   ?>
    <main>

          <!--avanttable-->

      <section class="nav_bar d-flex align-items-center px-3 bg-light">
            <h2 class="tabtitle col-9 align-self-center mt-1">Payements Détails</h2> 
            <div class="col-3 align-self-center d-flex">
              <button style="border: transparent; background: transparent; align-self: center;"> 
                 <img src="images/svg/buttonpay.svg">
              </button>
              <button id="add" class="addns text-white" style="border : none; background: #00C1FE; border-radius: 4px;">
             ADD A NEW PAYEMET
             </button>
             </div>
      </section> 

          <!--table-->
          
      <section class="mt-5 pt-3 mx-2">
        <table class="table table-responsive table-striped table-sm">
          <thead class="text-muted" style="background: transparent;">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Payment Schedule</th>
              <th scope="col">Bill Number</th>
              <th scope="col">Amount Paid</th>
              <th scope="col">Balance amount</th>
              <th scope="col">Date</th>
              <th scope="col"></th>
              <td></td>
            </tr>
          </thead>
          <tbody>

          <?php

            if($conn -> connect_error) {
            die("connection failed :".$conn -> connect_error);
            }
            $sql= "SELECT * from payements ";
            $read =$conn -> query($sql);
              if($read -> num_rows > 0){
                while($payment= $read -> fetch_assoc()){

           ?>

           <tr>
              <td class="pt-3"><?= $payment['name']?></td>
              <td class="pt-3"><?= $payment['payement_schedule']?></td>
              <td class="pt-3"><?= $payment['bill_number']?></td>
              <td class="pt-3"><?= $payment['amount_paid']?></td>
              <td class="pt-3"><?= $payment['balance_amount']?></td>
              <td class="pt-3"><?= $payment['date'] ?></td>
              <td class="pt-3"><i class="fas fa-eye" style="color: turquoise;"></i></td>
            </tr>

          <?php
          } 
          }

          else {
            echo "le tableau est vide";
         }

         $conn -> close();
           ?>

          </tbody>
        </table>
    </main>

     <!-- modal Add -->

    <div id="addModal" class="modal">
    <div class="modal-content ">
      <div class="modal-header">
      <h3 class="text-center text-secondary mt-3">A New Payement :</h3>
      <h4 class="text-center text-primary">Remplissez les champs du payement</h4>
      </div>
      <form id="formAddPay" class="mt-5 w-75 m-auto" action="addP.php" method="POST" >
            
            <label for="name">
              <span>Name :</span>
            </label>
            <input id="name" type="text" name="name" class="w-100 p-1 mt-2">
            <p class="messageName"></p>
          
            <label for="payement_schedule">
              <span>Payment Schedule :</span>
            </label>
            <input id="payShedule" type="text" name="payement_schedule" class="w-100 p-1 mt-2">
            <p class="messagePayShed"></p>
    
            <label for="bill_number">
                <span>Bill Number :</span>
            </label>
            <input id="billNum" type="text" name="bill_number" class="w-100 p-1 mt-2">
            <p class="messageBillNm"></p>

            <label for="amount_paid">
                <span>Amount Paid :</span>
            </label>
            <input id="amntPaid" type="text" name="amount_paid" class="w-100 p-1 mt-2">
            <p class="messageAmntPaid"></p>

            <label for="balance_amount">
                <span>Balance amount :</span>
            </label>
            <input id="blncAmnt" type="text" name="balance_amount" class="w-100 p-1 mt-2">
            <p class="messageBalAmnt"></p>

            <button type="submit" name="submit" id="submit" class="btn btn-info w-100 mt-4">Save</button>

</form>
  <div class="modal-footer">
        <button class="bg-secondary text-light" id="close">Close</button>
  </div>
    </div>
 </div>

 <script src="js/script.js"></script>
</body>
</html>