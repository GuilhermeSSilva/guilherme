$("form").on("submit", function(e){
	e.preventDefault(); 
	var email= $("input[name=email]").val();
	var senha = $("input[name=senha]").val();
		

		if(email == "" || ){
	$("[name=email]").addClass("erro");
	$("[name=email]").focus(); 
	alert("Preencha com o seu email por favor!");
		return false;
	}else{
 	 $("[name=email]").removeClass("erro");
	}

	if(senha == ""){
	$("[name=senha]").addClass("erro");
	$("[name=senha]").focus(); 
	alert("Preencha com a sua senha por favor!");
		return false;
	}else{
		$("[name=senha]").removeClass("erro");
	}

		var data = {
		email: email,
		password: senha	
	};

		$.ajax({
		type: "post",
		url: "http://realizadigital-api.nodo.cc/login",
		data: data,
		success: function(res){
			alert("sucesso");
			$("form")[0].reset();
		},
		error: function (xhr) {
			alert(xhr.responseJSON.error.message); 
		}
	});
	return false;
});
