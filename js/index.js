$(document).ready(function() {
	$('body').scrollspy({
		target: '.dotted-scrollspy'
	});

	$(function () {
		$("#mdb-lightbox-ui").load("../mdb-addons/mdb-lightbox-ui.html");
	});

	$('.navbar-collapse a').click(function(){
		$(".navbar-collapse").collapse('hide');
	});

	new WOW().init();

	$(".lazy").lazy({
		beforeLoad: function(element) {
			if(element.attr("data-src") != "img/header.jpg") {
				$(element).parent().css("position", "relative");
				$('<div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%)"><i class="fas fa-spinner fa-spin" style="color:#707070"></i></div>').insertAfter(element);
			}
		},
		afterLoad: function(element) {
			$(element).parent().find("i").css("display","none");
		}
	});

	$("html").easeScroll();
});

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