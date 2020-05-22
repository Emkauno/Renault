$(function(){
	var email = $("#email");
	var name = $("#name");

	function validate(field){
		if(field.val().length === 0){
			field.removeClass().addClass("error");
			field.next().removeClass().addClass("fa fa-exclamation");
		}else{
			field.removeClass().addClass("success");
			field.next().removeClass().addClass("fa fa-check");
		}
		return field;
	}

	$('input').blur(function(){
		validate($(this));
	});

	$("#formbutton").on("click" , function(){
		validate(email);
		validate(name);
		if($(email).val().length === 0 || $(name).val().length === 0)
			$(this).removeClass().addClass("submit-error");

		else{
			$(this).removeClass().addClass("submit-success");
		}
		window.setTimeout(function(){
			console.log("done");
			$("#formbutton").removeClass();
		}, 3300)
		return false;
	});
	
});