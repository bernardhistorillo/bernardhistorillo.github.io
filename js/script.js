$(window).on("load", function() {
    $("#loading-ownly-container").removeClass("d-flex");
    $("#loading-ownly-container").addClass("d-none");
});

$(document).ready(function() {
    setInterval(function() {
        if($("#loading-ownly").css('width') === "200px") {
            $("#loading-ownly").css('width', '300px');
        } else {
            $("#loading-ownly").css('width', '200px');
        }
    }, 1100);
});