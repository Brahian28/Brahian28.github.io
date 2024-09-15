<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger datos del formulario
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Dirección de correo a donde se enviará el mensaje
    $to = "tucorreo@example.com"; // Reemplaza con tu correo

    // Asunto del correo
    $subject = "New Contact Form Message from: " . $name;

    // Contenido del correo
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Cabeceras del correo
    $headers = "From: $email";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "There was a problem sending the message. Please try again.";
    }
} else {
    echo "Invalid request";
}
?>