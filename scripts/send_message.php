<?php
	
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	header("Access-Control-Allow-Origin: *");
	
	require "PHPMailer/src/Exception.php";
	require "PHPMailer/src/PHPMailer.php";
	require "PHPMailer/src/SMTP.php";
	
	$response["error"] = "";
	
	$mail = new PHPMailer(true);
	
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];
	
	try {
		$mail->SMTPDebug = 1;
		$mail->Debugoutput = 'error_log';
		$mail->Host = "smtp.sendgrid.net";
		$mail->SMTPAuth = true;
		$mail->Username = "bernardhistorillo";
		$mail->Password = "helloworld1";
		$mail->SMTPSecure = "tls";
		$mail->Port = 587;
		
		$mail->setFrom($email, $name);
		$mail->addAddress("bernard.historillo@bicol-u.edu.ph");
		
		$mail->isHTML(true);
		$mail->Subject = "Portfolio Message";
		
		$mail->Body = $message;
		$mail->AltBody = $message;
		
		$mail->send();
		
		$response["error"] = "Sent";
		
		echo json_encode($response);
	} catch(Exception $e) {
		$response["error"] = "Your message couldn't be sent. You may not be connected to the internet.";
		
		echo json_encode($response);
	}
	
?>