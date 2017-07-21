var userData = JSON.parse(localStorage.getItem('userData'));
	$("input[name=nome]").val(userData.first_name);
	$("input[name=sobrenome]").val(userData.last_name);
	$("input[name=idade]").val(userData.age);
	$("input[name=cpf]").val(userData.cpf);
	$("input[name=cep]").val(userData.cep);
	$("input[name=endereco]").val(userData.address);

$("form").on("submit", function(e){
	e.preventDefault();

	var first_name = $("input[name=nome]").val();
	var last_name = $("input[name=sobrenome]").val();
	var idade = $("input[name=idade]").val();
	var cpf = $("input[name=cpf]").val();
	var cep = $("input[name=cep]").val();
	var endereco = $("input[name=endereco]").val();

	if(first_name == ""){
	$("[name=nome]").addClass("erro");
	$("[name=nome]").focus(); 
	alert("Preencha com o seu nome por favor!");
		return false;
	}else{
		$("[name=nome]").removeClass("erro");
}
	if(last_name == "") {
	$("[name=sobrenome]").addClass("erro");
	$("[name=sobrenome]").focus();
	alert("Preencha com o seu sobrenome por favor!"); 
		return false;
	}else{
	$("[name=sobrenome]").removeClass("erro");
	}
	
	if(idade == "" || isNaN(idade)){
	$("[name=idade]").addClass("erro");
	$("[name=idade]").focus(); 
	alert("Preencha com o sua idade por favor!");
		return false;
 	}else{
 		$("[name=email]").removeClass("erro");
 	}
	if(cpf == "" || isNaN(cpf)){
	$("[name=cpf]").addClass("erro");
	$("[name=cpf]").focus(); 
	alert("Preencha com o seu cpf por favor!");
		return false;
}else{
	$("[name=cpf]").removeClass("erro");
}
	if(cep == "" || isNaN(cep)){
	$("[name=cep]").addClass("erro");
	$("[name=cep]").focus(); 
	alert("Preencha com o seu cep por favor!");
		return false;
}else{
	$("[name=cpe]").removeClass("erro");
}
	if(endereco == ""){
	$("[name=endereco]").addClass("erro");
	$("[name=endereco]").focus(); 
	alert("Preencha com o seu endereço por favor!");
		return false;
	}else{
		$("[name=endereco]");
	}


	var data = {
		first_name: first_name,
		last_name: last_name,
		email: userData.email,
		age: idade,
		cpf: cpf,
		cep: cep,
		address: endereco,
		password: userData.password	
	};

	console.log(data)

	$.ajax({
		type: "post",
		url: "http://realizadigital-api.nodo.cc/alter",
		data: data,
		success: function(res){
			alert("sucesso");
			var userData = res; 
			userData.password = data.password;
			localStorage.setItem("userData",JSON.stringify(userData));
			window.location = "projeto-home.html";
		}
	});
	return false;
});

