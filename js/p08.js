var game_type_data = "burgerGame";

var game_play = true;
var game_over = false;

var burger_num1 = 3;
var burger_num2 = new Array;

var game_score = 0;

var time_bar_w = $('.time_bar div').css("width");

var time_max = 10000;

var game_round = 1;

$(function(){
	rank_show(game_type_data);
	
    setInterval(function(){
        if(game_over == false){
            time_bar_w = $('.time_bar div').css("width");
            time_bar_w = time_bar_w.replace('px','');
            
            if(time_bar_w <= 60){
                $('.time_bar div').css("background", "red");
            }else{
                $('.time_bar div').css("background", "yellow");
            }

            if(time_bar_w == 0){
                $("#game_over").show();
                game_over = true;
            }
        }
    },10)

	$("html").keydown(function(e) {
		if(e.keyCode == 49){
			burger_event1(1);
		}else if(e.keyCode == 50){
			burger_event1(2);
		}else if(e.keyCode == 51){
			burger_event1(3);
		}else if(e.keyCode == 52){
			burger_event1(4);
		}else if(e.keyCode == 53){
			burger_event1(5);
		}
	});
})

function game_start(){
    $('.time_bar div').stop(true,false);
    $('.time_bar div').css("width", "100%");

    burger_event2();

    game_play = true;
    game_over = false;

    burger_num1 = 3;
    time_max = 10000;

    game_round = 1;

    game_score = 0;

    $(".score_text").html(game_score);
	$('.save_btn').show();
}

function burger_event1(data1){
    if(game_play == true){
        var burger_hei = $("#play_area li").length;
        var bottom_v = burger_hei * 15;
        $('#play_area').append(`<li class="burger_t${data1}" style="bottom:${bottom_v}px;"><div></div></li>`);
        
        if(burger_num2[burger_hei] == data1){
            if(burger_hei == (burger_num1 -1)){
                burger_ok();
            }
        }else{
            burger_close();
        }
    }
}

function burger_event2(){
    $('.time_bar div').animate({width : "0%"}, time_max)

    burger_num2 = new Array;
    $('.quest_area .burger_list').html('');

    for(var i = 0; i < burger_num1 ; i ++){
        burger_num2[i] = Math.floor(Math.random() * 5) + 1;
    }

    burger_quest(0);
}

function burger_quest(num1){
    if(num1 < burger_num1){
        $('.quest_area .burger_list').append(`<li class="burger_t${burger_num2[num1]}" data="" style="bottom:${num1 * 10}px;"><div></div></li>`);
        
        setTimeout(function(){
            burger_quest(num1 + 1);
        }, 200);
    }
}

function burger_ok(){
    $('.time_bar div').stop(true,false);
    $('.time_bar div').css("width", "100%");

    game_round += 1;
    burger_num1 = 3 + Math.floor(game_round / 3);
    
    time_max = 10000 - (Math.floor(game_round / 3) * 1000)

    if(time_max < 5000){
        time_max = 5000;
    }

    game_score += (burger_num1 * 100) + Math.floor(time_bar_w * (1 + Math.floor(game_round / 3)));
    $(".score_text").html(game_score);

    game_play = false;
    setTimeout(function(){
        $(".bg_area2 div.hand").css("right" , "calc(50% - 180px)")
    }, 200)

    setTimeout(function(){
        $(".burger_area").css("right", "-100%");
    }, 600)

    setTimeout(function(){
        $('#play_area').html('');
        $(".burger_area").css("right", "0%");
        burger_event2();
    }, 1100)

    setTimeout(function(){
        game_play = true;
        $(".bg_area2 div.hand").css("right" , "calc(-20% - 180px)")
    }, 1450)
}

function burger_close(){
    game_play = false;
    setTimeout(function(){
        $(".burger_area").css("bottom", "-100vh");
        $(".burger_area").css("transform", "rotate(180deg)");
    }, 300)

    setTimeout(function(){
        $(".bg_area2").css('opacity', '0');
        $('#play_area').html('');
        $(".burger_area").css("bottom", "0%");
        $(".burger_area").css("right", "-100%");
        $(".burger_area").css("transform", "rotate(0deg)");
        $(".bg_area2 div.hand").css("right" , "calc(50% - 180px)")
    }, 700)

    setTimeout(function(){
        $(".bg_area2").css('opacity', '1');
        $(".burger_area").css("right", "0%");
    }, 1300)

    setTimeout(function(){
        game_play = true;
        $(".bg_area2 div.hand").css("right" , "calc(-20% - 180px)")
    }, 1650)
}