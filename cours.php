<?php
session_start();

if (!isset($_SESSION['ouvert'])) {

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
      <h2 class="tabtitle col-9 align-self-center mt-1">Courses liste</h2>
      <div class="col-3 align-self-center d-flex">
        <button style="border: transparent; background: transparent; align-self: center;">
          <img src="images/svg/buttonpay.svg">
        </button>
        <button id="courAdd" class="addns text-white" style="border : none; background: #00C1FE; border-radius: 4px;">
          ADD NEW COURS
        </button>

      </div>

    </section>

    <!--table-->

    <div class="m-3 mt-5">
      <table class="table table-responsive">
        <thead class="text-muted" style="background: transparent">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Chapitres</th>
            <th scope="col">Prix en $</th>

            <td></td>
          </tr>
        </thead>
        <tbody>

          <?php

          $connect = mysqli_connect("localhost", "root", "", "e_classe_db");
          if ($connect->connect_error) {
            die("connection failed :" . $connect->connect_error);
          }
          $sql = "SELECT * from courses ";
          $read = $connect->query($sql);
          if ($read->num_rows > 0) {
            while ($row = $read->fetch_assoc()) {
          ?>

              <tr>

                <td class='pt-3'><?= "$row[id]" ?></td>
                <td class='pt-3'><?= "$row[title]" ?></td>
                <td class='pt-3'><?= "$row[chapitre]" ?></td>
                <td class='pt-3'><?= "$row[prix]" ?></td>

                <td class='pt-3'>
                  <a href="updateCrs.php?index=<?= "$row[id]" ?>"> <button style="background-color: transparent; border:transparent"><i class="fas fa-pen" style="color: turquoise;"></i></button></a>
                  <a href="deleteCrs.php?index=<?= "$row[id]" ?>"><button style="background-color: transparent; border:transparent"><i class="fas fa-trash" style="color: turquoise;"></i></button></a>
                </td>
              </tr>

          <?php
            }
          } else {
            echo "le tableau est vide";
          }

          $connect->close();
          ?>
        </tbody>
      </table>

      <!-- modal Add -->

 
 <div id="addModal" class="modal">
    <div class="modal-content ">
      <div class="modal-header">
      <h1 class="text-center text-secondary mt-3">Cours informations :</h1>
      <h2 class="text-center text-primary">Saisissez les détails du cours</h2>
      </div>
<form id="formAddCrs" class="mt-5 w-75 m-auto" action="addCrs.php" method="POST" >
            
            <label for="title">
              <span>Title :</span>
            </label>
            <input type="text" id="title" name="title" class="w-100 p-1 mt-2">
          
            <label for="chapitre">
              <span>Nombre de Chapitres :</span>
            </label>
            <input type="number" id="chapitre" name="chapitre" class="w-100 p-1 mt-2">
    
            <label for="prix">
                <span>Prix $ :</span>
            </label>
            <input type="text" id="prix" name="prix" class="w-100 p-1 mt-2">
 
            <button type="submit" name="submit" id="submit" class="btn btn-info w-100 mt-4">Save</button>

</form>
  <div class="modal-footer">
        <button class="bg-secondary text-light" id="close">Close</button>
  </div>
    </div>
 </div>



  </main>

  <script src="js/script.js"></script>
</body>

</html>