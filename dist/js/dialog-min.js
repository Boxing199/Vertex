jQuery(document).ready(function(t){t("#contact-us-form").submit(function(){var a=t(this).serialize();return t.ajax({type:"GET",url:"http://httpbin.org/get",data:a,success:function(){t("#contact-us-form")[0].reset(),t("#dialog").removeClass("display-none")}}),!1}),t("#dialog").click(function(){t("#dialog").addClass("display-none")})});