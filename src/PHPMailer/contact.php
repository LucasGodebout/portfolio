<?php
header('Content-Type: application/json; charset=UTF-8');

//On récupère les variables du tableau post
$nom = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$subject = isset($_POST['subject']) ? $_POST['subject'] : '';
$company = isset($_POST['company']) ? $_POST['company'] : '';
$messageContent = isset($_POST['message']) ? $_POST['message'] : '';

// Validation des données
if (empty($nom) || empty($email) || empty($subject) || empty($company) || empty($messageContent)) {
    echo json_encode(['success' => false, 'message' => 'Tous les champs sont requis.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'L\'adresse email est invalide.']);
    exit;
}

//Création du message (La manière dont vous voulez qu'il soit sur votre boite mail. Libre choix à vous pour le style)
$message = "Nom : ".$nom."\n"."Email : ".$email."\n"."Sujet : ".$subject."\n"."Entreprise : ".$company."\n"."Message : ".$messageContent;

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//On importe les fichiers importants de PHPMailer
require __DIR__ . '/src/Exception.php';
require __DIR__ . '/src/PHPMailer.php';
require __DIR__ . '/src/SMTP.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();                                        //Send using SMTP
    $mail->Host       = getenv('HOST');                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                               //Enable SMTP authentication
    $mail->Username   = getenv('USERNAME');                 //SMTP username (email utilisé pour envoyer le formulaire. Il doit etre celui de la validation en deux étapes et de création de mot de passe application !)
    $mail->Password   = getenv('PASSWORD');                 // SMTP password (regarder la vidéo pour voir comment avoir ce mot de passe)
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;        //Enable implicit TLS encryption
    $mail->Port       = 465;                                 //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    
    // Encodage UTF-8 pour les accents
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';

    //Recipients
    $mail->setFrom(getenv('USERNAME'), 'Lucas Godebout prise de contact');
    $mail->addAddress(getenv('USERNAME'));     //Add a recipient

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Informations récupérées du formulaire:';
    $mail->Body    = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));
    $mail->AltBody = $message;

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Message envoyé avec succès !']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => "Erreur dans l'envoi du mail: {$mail->ErrorInfo}"]);
}

