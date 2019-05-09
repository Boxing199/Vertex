jQuery(document).ready(function($) {
 
    $("#contact-us-form").submit(function() {
    var str = $(this).serialize();
     
    $.ajax({
        type: "GET",
        url: "http://httpbin.org/get",
        data: str,
        success: function() {
            $("#contact-us-form")[0].reset();
            $("#dialog").removeClass("display-none");         
        }
    });
    return false;
    });
    $("#dialog").click(function() {
        $("#dialog").addClass("display-none");
    });
});
    console.log($("#contact-us-form").children());