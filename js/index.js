$(document).ready(function() {
	$(document).on("click", ".send-message", function() {
		$(".send-message").prop("disabled",true);
		$(".send-message").html("Sending Message...");
		
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		
		if(name != "" && email != "" && message != "") {
			$.ajax({
				method: "POST",
				url: "https://bigclap365marketing-service.online/developer/portfolio/scripts/send_message.php",
				data: {
					name: name,
					email: email,
					message: message
				}
			}).done(function(response) {
				response = JSON.parse(response);
				if(response.error == "") {
					$("#name").val("");
					$("#email").val("");
					$("#message").val("");
					$(".contact-section label").removeClass("active");
					
					$('#successful-modal .title').html("Message Successfully Sent");
					$("#successful-modal").modal("show");
				} else {
					$('.error-code').html(response.error);
					$("#error-modal").modal("show");
				}
			}).fail(function() {
				$('.error-code').html("Unable to connect to server.");
				$('#error-modal').modal('show');
			}).always(function() {
				$(".send-message").html("Send Message");
				$(".send-message").prop("disabled",false);
			});
		} else {
			$(".send-message").html("Send Message");
			$(".send-message").prop("disabled",false);
		}
	});
});