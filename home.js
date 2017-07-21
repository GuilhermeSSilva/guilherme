 	var userData = JSON.parse(localStorage.getItem('userData'));


	 function loadUserData(){
	 	$("#nome").text(userData.first_name + " " + userData.last_name);
	 	var iniciais = userData.first_name.charAt(0) + userData.last_name.charAt(0);
	 	$("#letras").text(iniciais);
	 	$("#email").text(userData.email);
	 	$("#idade").text(userData.age + " Anos");
 }
 		


 		function loadFeeds(){
 			var wrapper = $(".romero");
 			var user_id = userData.id;
 			$.ajax({
 			url: "http://realizadigital-api.nodo.cc/feeds/" + user_id,
 			type: "get",
 			success: function (res){
 				var posts = res.posts;
                posts.reverse();
 				var html = "";
 				if (posts.length== 0){
 					html= "<p class='erro'> Não existe Posts no momento!</p>";
 				}else{
 					for (var i=0; i<posts.length; i++){
                        if (posts[i].liked){
                            var clas = "img active";
                        }else{
                            var clas = 'img';
                        }
 						html= html + "<div><div class='igual'><p><span class='nomes'>"+ posts[i].first_name+ ' ' + posts[i].last_name +"</span></p><p><span>"+ posts[i].text +"</span></p><div class='lasticon'><span class='likes'>"+ posts[i].likes + "</span><span class='"+ clas +"' data-post-id='"+ posts[i].post_id +"'></span>"
                        ;
 						html = html + '</div></div></div></div>';
 					}
 					}
 					wrapper.html(html);
}
 	});
 		};
 

 		$("form").on("submit",function(){
 			var textarea = $('textarea').val();
 			var email = userData.email;
 			var password = userData.password;
 			if (textarea == "" || textarea.length > 200){
 				alert("Preencha o campo no limite de 200 caracteres."); 
 				return;
 			}else{
 				$.ajax({
 					type: "post",
 					url: "http://realizadigital-api.nodo.cc/feed",
 					data: {
 						text: textarea,
 						email: email,
 						password: password

 					},
 					success: function(res){
 						loadFeeds();

 			}
 		});
 	}
 });

$('body').on('click', '.img', function(){
        var post_id = $(this).data('post-id');
        var element = $(this);

        if(element.hasClass('active')){
            $.ajax({
                type: 'post',
                url: 'http://realizadigital-api.nodo.cc/unlike/' + post_id,
                data: {
                    email: userData.email,
                    password: userData.password
                },
                success: function(res){
                    var num = res.likes;
                    element.parent().find('.likes').text(num);
                    element.removeClass('active');

                }
        });

    }
    else{
        $.ajax({
                type: 'post',
                url: 'http://realizadigital-api.nodo.cc/like/' + post_id,
                data: {
                    email: userData.email,
                    password: userData.password
                },
                success: function(res){
                    var num = res.likes;
                    element.parent().find('.likes').text(num);
                    element.addClass('active');
    }
});
    }
});



    function Init() {
    loadUserData();
    loadFeeds();
    
    };

   Init();