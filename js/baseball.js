var pitchershot_val = true;
var shot_state = true;
var shot_speed = 1000;
var life = 3;
var score = 0;

$(function(){
    $('#start_btn').click(function(){
		life = 3;
		score = 0;
		shot_speed = 1000;
        $('.layer1').hide();
        $('.g1').show();
        $('.score_text').html(0);
        life_shape = '';
        for(var i = 0; i < life; i++){
            life_shape += "♥"
        };
        $('#life').html(life_shape);
        setTimeout(function(){
            ballshot()
        }, Math.floor(Math.random() * 1000) + 500);

        if( life > 0 ){
            $("html").keydown(function(e) {
                if(e.keyCode == 32){
                    pitchershot();
                }
            });
        }

		$('.save_btn').show();
    });

	$('.restart_btn').click(function(){
		$('#game_ready').show();

		$('.save_btn').show();
        
    })  
})

function ballshot(){
    $("#ball").animate({
        top : '100%'
    }, shot_speed)
    if(life > 0){
        setTimeout(function(){
            if(shot_state == true){
                life -= 1;
                reset();
            }
        }, shot_speed + 400)
    }else{
        $("#ball").stop(true, false);
        $('.g1').hide();
        $("#game_over").show();
    }
}

function pitchershot(){
    if(pitchershot_val == true){
        var play_view = $("#game_play").css("height");
        var play_view = play_view.replace('px','');

        var shot_zone_min = Number(play_view) * 0.7;
        var shot_zone_max = Number(play_view) * 0.9;

        var ballpos=$("#ball").css("top");
        var ballpos=ballpos.replace('px','');
        if(shot_zone_min < ballpos && ballpos < shot_zone_max){
            shot_state = false;
            score += 1000;
            $("#ball").stop(true,false);
            $("#ball").animate({
                top : '-100%',
                left : (Math.floor(Math.random() * 300) - 75) + '%'
            }, shot_speed / 2)

            if(life > 0){
                setTimeout(function(){
                    reset();
                }, shot_speed / 2 + 500)
            }

            if(shot_speed > 150){
                shot_speed = shot_speed - 50;
            }
        }
        if(life > 0){
            $("#hitter").hide();
            $("#hitter2").show();
        }

        pitchershot_val = false;
    }
}

function reset(){
    $("#ball").css("top", "27%");
    $("#ball").css("left", "50%");
    pitchershot_val = true;
    life_shape = '';
    shot_state = true;
    
    $("#hitter").show();
    $("#hitter2").hide();
    $('.score_text').html(score);
    for(var i = 0; i < life; i++){
        life_shape += "♥";
    }
    $('#life').html(life_shape);

    setTimeout(function(){
        ballshot();
    }, Math.floor(Math.random() * 1000) + 500);
}