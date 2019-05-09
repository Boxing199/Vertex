jQuery(document).ready(function($) {
 
    $("#contact-us-form").submit(function() {
    var str = $(this).serialize();
     
    $.ajax({
        type: "GET",
        url: "http://httpbin.org/get",
        data: str,
        success: function() {
        $("#dialog").removeClass("display-none");
        }
    });
    return false;
    });
    $("#dialog").click(function() {
        $("#dialog").addClass("display-none");
    });
});
    