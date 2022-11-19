$(function(){
	gametype.value = game_type_data;

    $('.md_pop_close').click(function(){
        $('html, body').css('overflow', '');
        $('.pop_gr').hide();
        $('.head_araa .box_style1').animate( {
            right: '-300px'
        } );
    });

    $('.md_pop_show').click(function(){
        $('html, body').css('overflow', 'hidden');
        $('.pop_gr').show();
        $('.head_araa .box_style1').animate( {
            right: '0'
        } );
    });

    $('.start_btn').click(function(){
        $("#game_start").hide();

        $("#game_play").show();
    });

    $('.restart_btn').click(function(){
        $("#game_start").show();

        $("#game_play").hide();

        $("#game_over").hide();
    });

	$('.over_btn_box .rank_btn').click(function(){
		$('.rank_area').slideToggle();
	})

	$('.over_btn_box .close_btn').click(function(){
		$('#save_over').hide();
	})

	$('.over_btn_box .save_btn').click(function(){
		$('#save_over').show();
		username.value = '';
	})
})

var rank_data = "";

function rank_show(type_data){
	$.ajax({
		method: "POST",
		url: "/game_rank.php?gametype='"+type_data+"'",
		data: { name: "John", location: "Boston" }
	})
	.done(function (msg) {
		if(msg != false){
			rank_data = JSON.parse(msg);
		
			$(".rank_table").html("<tr><th>순위</th><th>아이디</th><th>점수</th></tr>");
			for (var i = 0; i < rank_data.length ; i++)
			{
				$(".rank_table").append(`<tr><td>${i+1}</td><td>${rank_data[i].name}</td><td>${rank_data[i].score}</td></tr>`)
			}
		}else{
			$(".rank_table").html("<div>등록된 점수없음</div>")
		}
		
	});			
}

function rankSave(){
	var pop_title = "rankSave" ;
	var id_check = false;

	if(username.value == ""){
		alert('아이디를 입력해주세요.');
	}else{
		for (var i = 0; i < rank_data.length ; i++)
		{
			if(rank_data[i].name == username.value){
				id_check = true;
			}
		}
		

		$("input#score").attr("value", Number($("#score_popup .score_text").html()));
		//score.value = Number($("#score_popup .score_text").html());

		if(id_check == false){
			window.open("/save.php?gametype="+gametype.value+"&username="+username.value+"&score="+ $("input#score").attr("value"), pop_title, "width=100,height=100,top=0,left=0") ;
			
			$('#save_over').hide();
			$('.save_btn').hide();

			setTimeout(function(){
				rank_show(game_type_data);
			}, 500)
		}else{
			alert('랭킹에 존재하는 아이디입니다.');
		}
	}
}