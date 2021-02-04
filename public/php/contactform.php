<?php


if(isset($_POST['submit'])){

    $name = htmlspecialchars($_POST['name'], ENT_QUOTES);
    $subject = htmlspecialchars($_POST['subject'], ENT_QUOTES);
    $mailFrom = htmlspecialchars($_POST['mail'], ENT_QUOTES);
    $message = htmlspecialchars($_POST['message'], ENT_QUOTES);

    $mailTo = "guillaume.meheutpro@gmail.com"; 
    $headers = "De: ".$mailFrom;
    $txt = "Vous avez reçu un email de ".$name.".\n\n"." Son adresse mail : ".$mailFrom.".\n\n".$message; 

    if(filter_var($mailFrom, FILTER_VALIDATE_EMAIL)){
        mail($mailTo, $subject, $txt, $headers); 
        header("Location: ../");
    }else{
        header("Location: ../");
    }

}