var time = 3; // 시간초
var result = 0; // 0: 무승부, 1: Me_win, 2: AI_win
var state_result = 0; // 0: 플레이 1: Me_win, 2: AI_win

var btn_check = false; // 버튼 선택 여부

$(function(){
    $(".game_page").hide();
    $('#start_btn').click(function(){
        $('.game_start').hide();
        $(".game_page").show();

        timer();
        
    });
});

function timer(){
    // 초기화
    $('#time_circle').show();
    $('#timer').text(time);
    // 3초 시간초, 타이머 UI
    setTimeout(() => {
        time -= 1;
        $('#timer').text(time);
        setTimeout(() => {
            time -= 1;
            $('#timer').text(time);
            setTimeout(()=>{
                $('#time_circle').hide();
                result_text("Choose!");
                btn_check = true;
            },1000)
        }, 1000);
    }, 1000);
};


function my_btn(player_num){
    if(btn_check == true){
        btn_check = false;
        my_state = player_num;

        if(result == 0){
            game_rule(my_state);
        }else if(result == 1){
            game_rule2(mt_state);
        }

    }
}

function game_rule(my_state){ // 첫번째 게임
    var enemy = Math. floor(Math. random() * 3); // 0:묵, 1:가위, 2:보

    if(my_state == 0){
        Enemy_animation(enemy)
        if(enemy == 0){
            result = 0;
            result_text("Draw!");
        }else if(enemy == 1){
            result = 1;
            result_text("You Attack!");
        }else if(enemy == 2){
            result = 2;
            result_text("AI Attack!");
        }
    }

    if(my_state == 1){
        Enemy_animation(enemy)
        if(enemy == 0){
            result = 2;
            result_text("AI Attack!");
        }else if(enemy == 1){
            result = 0;
            result_text("Draw!");
        }else if(enemy == 2){
            result = 1;
            result_text("You Attack!");
        }
    }

    if(my_state == 2){
        Enemy_animation(enemy)
        if(enemy == 0){
            result = 1;
            result_text("You Attack!");
        }else if(enemy == 1){
            result = 2;
            result_text("AI Attack!");
        }else if(enemy == 2){
            result = 0;
            result_text("Draw!");
        }
    }
}



function Enemy_animation(enemy_state){
    setTimeout(()=>{
        $('#enemyscissors').show();
        $('#enemypaper').show();
        $('#enemyrock').show();
        $('#enemypaper').css({'width':'100%','margin-left':'0'});
        $('#enemyscissors').css({'width':'100%','margin-left':'0'});
        $('#enemyrock').css({'width':'100%','margin-left':'0'});
        btn_check = true;
    },3000)
    if(enemy_state == 0){
        $('#enemyscissors').hide();
        $('#enemypaper').hide();
        $('#enemyrock').css({
            'width':'250px',
            'margin-left':'calc(100%/3 - 30px)',
            'animation':'fadeIn',
            'animation-duration':'2s',
            'animation':'backInDown',
            'animation-duration':'2s'
        });
    }
    if(enemy_state == 1){
        $('#enemyrock').hide();
        $('#enemypaper').hide();
        $('#enemyscissors').css({
            'width':'250px',
            'margin-left':'calc(100%/3 - 30px)',
            'animation':'fadeIn',
            'animation-duration':'2s',
            'animation':'backInDown',
            'animation-duration':'2s'
        });
    }
    if(enemy_state == 2){
        $('#enemyscissors').hide();
        $('#enemyrock').hide();
        $('#enemypaper').css({
            'width':'250px',
            'margin-left':'calc(100%/3 - 30px)',
            'animation':'fadeIn',
            'animation-duration':'2s',
            'animation':'backInDown',
            'animation-duration':'2s'
        });
    }
}

function result_text(text){
    var write = text
    $('#result').text(write);
}

function game_rule2(my_state){ // 유저 선공
    var randNum = Math. floor(Math. random() * 3); // 0:묵, 1:가위, 2:보
    
    if(my_state = 0){
        if(enemy == 0){
            state_result = 1;
            result_text("User Win!");
        }else if(enemy == 1){
            timer();
            game_rule2(my_state);
            result_text("You Attack!");
        }else if(enemy == 2){
            timer();
            game_rule3(my_state);
            result_text('AI Attack!');
        }
    }
    
    if(my_state = 1){
        if(enemy == 0){
            timer();
            game_rule3(my_state);
            result_text('AI Attack!');
        }else if(enemy == 1){
            state_result = 1;
            result_text("User Win!");
        }else if(enemy == 2){
            timer();
            game_rule2(my_state);
            result_text("You Attack!");
        }
    }
    
    if(my_state = 2){
        if(enemy == 0){
            timer();
            game_rule2(my_state);
            result_text("You Attack!");
        }else if(enemy == 1){
            timer();
            game_rule3(my_state);
            result_text('AI Attack!');
        }else if(enemy == 2){
            state_result = 1;
            result_text("User Win!");
        }
    }
}

//         나(0)(1)(2)	AI	(0,1,2)		결과
//         묵	=>	묵 찌 빠		=>	짐(2), 이김 game_rule2 다시(1), 비김 game_rule3 다시(0)
//         찌	=>	묵 찌 빠		=>	비김 game_rule3 다시(0), 짐(2), 이김 game_rule2 다시(1)
//         빠	=>	묵 찌 빠		=>	이김 game_rule2 다시(1), 비김 game_rule3 다시(0), 짐(2)
function game_rule3(){ // AI 선공
    var randNum = Math. floor(Math. random() * 3); // 0:묵, 1:가위, 2:보
}

function play(){        
    var my_state = []; // 유저
    my_state = btn_click(); // 버튼 선택


    if( btn_check == 2){    // 버튼 선택 후
        var my_btn = game_rule(my_state);

        if(my_btn == 0){
            timer();
            play();
        }
        if(my_btn == 1){
            timer();
            game_rule2();
        }
        if(my_btn == 2){
            timer();
            game_rule3()
        }
    }
}


//     ■ 결과 1(game_rule1)
//         나(0)(1)(2)	AI	(0,1,2)		결과
//         묵	=>	묵 찌 빠		=>	비김0, 이김1, 짐2
//         찌	=>	묵 찌 빠		=>	짐2, 비김0, 이김1
//         빠	=> 	묵 찌 빠		=>	이김1, 짐2, 비김0

//     ■ 결과 2 real_result 0비김, 1이김, 2짐
//         비김
//         game_rule1다시

//         이김(game_rule2)
//         나(0)(1)(2)	AI	(0,1,2)		결과
//         묵	=>	묵 찌 빠		=>	이김(1), 비김game_rule2다시(0), 짐game_rule3(2)
//         찌	=>	묵 찌 빠		=>	짐game_rule3(2), 이김(1), 비김game_rule2다시(0)
//         빠	=>	묵 찌 빠		=>	비김game_rule2다시(0) , 짐game_rule3(2), 이김(1)

//         짐(game_rule3)
//         나(0)(1)(2)	AI	(0,1,2)		결과
//         묵	=>	묵 찌 빠		=>	짐(2), 이김 game_rule2 다시(1), 비김 game_rule3 다시(0)
//         찌	=>	묵 찌 빠		=>	비김 game_rule3 다시(0), 짐(2), 이김 game_rule2 다시(1)
//         빠	=>	묵 찌 빠		=>	이김 game_rule2 다시(1), 비김 game_rule3 다시(0), 짐(2)