$(document).ready(function() {
    $("#contact-us-form").submit(function(e) {
        e.stopPropagation();
        $("#dialog").removeClass("display-none");
        return false
    });
    $("#dialog").click(function() {
        $("#dialog").addClass("display-none");
    });
});

