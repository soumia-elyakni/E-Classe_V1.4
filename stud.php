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
    <title>Students</title>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/3a3f417346.js" crossorigin="anonymous" defer></script>
    <link rel="stylesheet" href="main.css">
    
</head>
<body class="m-0 p-0 w-100 h-100 bg-light">

    <?php 
    include 'dash.php'
    ?>
    <main>
                <!--avanttable-->

      <section class="nav_bar d-flex align-items-center px-3 bg-light">
            <h2 class="tabtitle col-9 align-self-center mt-1">Students list</h2> 
            <div class="col-3 align-self-center d-flex">
              <button style="border: transparent; background: transparent; align-self: center;"> 
                 <img src="images/svg/buttonpay.svg">
              </button>
            <button id="add" class="addns text-white" style="border : none; background: #00C1FE; border-radius: 4px;">
             ADD NEW STUDENT
             </button>
             </div>
      </section>

                   <!--table-->
          
      <div class="m-3 mt-5">
        <table class="table table-responsive>
          <thead class="text-muted" style="background: transparent;">
            <tr>
              <td class="d-none"></td>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Enroll Number</th>
              <th scope="col" colspan="2">Date of admission</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
          
          <?php

           $connect = new mysqli("localhost", "root", "", "e_classe_db");
           if($connect -> connect_error) {
             die("connection failed :".$connect -> connect_error);
           }
            $sql= "SELECT name, email, phone, enroll_number, date_of_admission from students ";
            $read =$connect -> query($sql);
              if($read -> num_rows > 0){
                while($row= $read -> fetch_assoc()){
              
           echo "
              <tr>
              <td class='pt-3'><img src='images/img_table.png' class='rounded-circle' alt='img'></td>
              
              <td class='pt-3'>".$row['name']."</td>
              <td class='pt-3'>".$row['email']."</td>
              <td class='pt-3'>".$row['phone']."</td>
              <td class='pt-3'>".$row['enroll_number']."</td>
              <td class='pt-3'>".$row['date_of_admission']."</td> 
              <td class='pt-3'><a href='update.php?index=".$row['email']."'><button style='background-color: transparent; border:transparent'><i class='fas fa-pen' style='color: turquoise;'></i></td></button></a>
              <td class='pt-3'><a href='delete.php?index=".$row['email']."'><button style='background-color: transparent; border:transparent'><i class='fas fa-trash' style='color: turquoise;'></i></td></button></a>
            </tr>";
              }

              }
              else {
                echo "0 result";
             }

             $connect -> close();
        ?>
         </tbody>
        </table> 

         <!-- modal Add -->
         </main>
 
 <div id="addModal" class="modal">
    <div class="modal-content ">
      <div class="modal-header">
      <h1 class="text-center text-secondary mt-3">Students informations :</h1>
      <h2 class="text-center text-primary">Saisissez les informations de l'apprenant</h2>
      </div>
<form id="formAddStud" class="mt-5 w-75 m-auto" action="add.php" method="POST" >
            
<label for="name">
              <span>Name :</span>
            </label>
            <input type="text" id="name" name="name" class="w-100 p-1 mt-2">
            <p class="messageName"></p>
          
            <label for="mail">
              <span>Email :</span>
            </label>
            <input type="email" id="email"  name="email" class="w-100 p-1 mt-2">
            <p class="messageEmail"></p>
    
            <label for="phone">
                <span>Phone :</span>
            </label>
            <input type="tel" id="telephone" name="phone" class="w-100 p-1 mt-2">

            <label for="enroll_number">
                <span>Enroll Number :</span>
            </label>
            <input type="tel" id="enroll"  name="enroll_number" class="w-100 p-1 mt-2">
 
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