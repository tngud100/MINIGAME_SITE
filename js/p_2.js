var time = 3; // 시간초
var result = 0; // 0: 무승부, 1: Me_win, 2: AI_win
var state_result = 0; // 0: 무승부, 1: Me_win(선공), 2: AI_win(선공)

var enemy_state = [];
var my_state = [];

$(function(){
    $(".game_page").hide();
    $('#start_btn').click(function(){
        $('.game_start').hide();
        $(".game_page").show();
        $('#timer').text(time);

        
        
    });
});

// 타이머 UI
function timer(timer){
    setTimeout(() => {
        timer -= 1;
        $('#timer').text(timer);
    },1000)
}

function init(){
    // 3초 시간초
    setTimeout(() => {
        time -= 1;
        $('#timer').text(time);
        setTimeout(() => {
            time -= 1;
            $('#timer').text(time);
            setTimeout(()=>{
                $('#time_circle').hide();
            },1000)
        }, 1000);
    }, 1000);
    
}

function game_rule(my_state, enemy_state){
    if(my_state = 0){
        if(enemy_state == 0){
            result = 0;
        }else if(enemy_state == 1){
            result = 1;
        }else if(enemy_state == 2){
            result = 2;
        }
    }

    if(my_state = 1){
        if(enemy_state == 0){
            result = 2;
        }else if(enemy_state == 1){
            result = 0;
        }else if(enemy_state == 2){
            result = 1;
        }
    }

    if(my_state = 2){
        if(enemy_state == 0){
            result = 1;
        }else if(enemy_state == 1){
            result = 2;
        }else if(enemy_state == 2){
            result = 0;
        }
    }
    return result;
}

function game_rule2(new_my_state, new_enemy_state){
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

}
function play(my_state){
    var numRand = Math. floor(Math. random() * 3 + 1); // 0:묵, 1:가위, 2:보
    // var enemy_state.append(); // 배열에 push하기
    if(game_rule(my_state, enemy_state) == 0){
        
        state_result = 1;
    }
}
