<?php
   if ( $_SERVER['REQUEST_METHOD']=='GET' && realpath(__FILE__) == realpath( $_SERVER['SCRIPT_FILENAME'] ) ) {
        header( 'HTTP/1.0 403 Forbidden', TRUE, 403 );
        die( header( 'location: /index.html' ) );
    }




$body = json_decode(file_get_contents("php://input"));

$date = $body->date;
$phoneNumber = $body->phone;

$message = '<p>Была отправлена заявка на бронь базы отдыха <strong><a href="http://rybafish.ru" target="_blank">"Надежда"</a></strong></p>
<p><b>Выбранная дата брони: </b>'.$date.';<br>
    <b>Телефон: </b> '.$phoneNumber .'<br>
</p>';

// if (mb_strlen($tariff) > 3) {
//     $message = $message.'<h3 style="color:#9E001F;background-color:#E9E9A0;padding:20px;">Выбран тарифный план: '.$tariff.'</h3>';
// }

$mail_address = 'lww@inbox.ru';
// $mail_address = 'bck-dkiselev@yandex.ru';
$title = 'Заявка на бронь базы отдыха ' . date('d-m-Y G:i:s') .'!';
// Рассылка почты
require_once "./SendMailSmtpClass.php"; // подключаем класс

$mailSMTP = new SendMailSmtpClass('rybafish@deestore.ru', 'Dfghjuyt567', 'ssl://mail.hostland.ru', 'Rybafish Info', 465);
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
$headers .= "From: Rybafish.ru Info <rybafish@deestore.ru>\r\n"; // от кого письмо

try{

    $result = $mailSMTP->send($mail_address, $title, $message, $headers);
    // echo json_encode($result);

    if($result === true){
        $message = "Ваша заявка принята. Я обязательно свяжусь с Вами в ближайшее время.";
        // echo $message;
        echo json_encode($message);
    } else {
        $message = "error";
        // echo $message;
        echo json_encode($message);
    }
}
    catch(Exception $e){
    echo json_encode('Error: '.$e);
    // echo 'Error: '.$e;
}




?>