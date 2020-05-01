<?php

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require "includes/PHPMailer/src/Exception.php";
	require "includes/PHPMailer/src/PHPMailer.php";
	require "includes/PHPMailer/src/SMTP.php";
	
	$mail = new PHPMailer(true);
	
	try {
		$mail->SMTPDebug = 1;
		$mail->isSMTP();
		$mail->Host = "smtp.sendgrid.net";
		$mail->SMTPAuth = true;
		$mail->Username = "bernardhistorillo";
		$mail->Password = "helloworld1";
		$mail->SMTPSecure = "tls";
		$mail->Port = 587;
		
		$mail->setFrom("bernard.historillo@bicol-u.edu.ph", "Big Clap 365 Marketing");
		$mail->addAddress("trinculo06@gmail.com");
		
		$mail->isHTML(true);
		$mail->Subject = "MyMobileBiz Confirmation";
		$mail->Body = '<a href="http://workwithjobermundo.online/mymobilebiz/confirmation.php?code=sdf67sdf876s8df76"></a>';
		$mail->Alt = "Confirm by entering this link: http://workwithjobermundo.online/mymobilebiz/confirmation.php?code=sdf67sdf876s8df76";
	
		$mail->send();
		
		echo "Message Sent!!";
	} catch(Exception $e) {
		echo "Message could not be sent.";
		echo "Mail Error: " . $mail->ErrorInfo;
	}
	
?>