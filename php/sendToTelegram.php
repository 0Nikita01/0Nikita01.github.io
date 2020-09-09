<?php
/*https://api.telegram.org/bot1240635508:AAGo5WFm2p3hQMpBvmlkJjSjKy5oPaHZFPY/getUpdates*/ 
if (isset($_POST['form']))
{
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $course = $_POST['course'];
    $token = "1240635508:AAGo5WFm2p3hQMpBvmlkJjSjKy5oPaHZFPY";
    $chat_id = "-447242984";

    if ($course === 'test') $course = "Тариф: Тест";
    if ($course === 'full') $course = "Тариф: Полный";

    $arr = array(
        'Имя пользователя: ' => $name,
        'Телеофон: ' => $phone,
        'Email: ' => $email,
        'Гайд: ' => $course
    );

    foreach ($arr as $key => $value)
    {
        $txt .= "<b>".$key."</b>".$value."%0A";
    }

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");
    $mes = '';
    if ($sendToTelegram)
    {
        $mes = true;
    }
    elseif ($sendToTelegram === false)
    {
        $mes = false;
    }
    else
    {
        $mes = false;
    }

    $array = json_encode(array("1" => $mes));

    echo $array;
}

?>