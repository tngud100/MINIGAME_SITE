var time = 3; // 시간초
var result = 0; // 0: 무승부, 1: Me_win, 2: AI_win
var state_result = 0; // 0: 플레이 1: Me_win, 2: AI_win

var enemy_state = []; // AI
var my_state = []; // 유저
var btn_count = 0; // 몇번째 게임인가

var btn_check = 0; // 버튼 선택 여부

$(function(){
    $(".game_page").hide();
    $('#start_btn').click(function(){
        $('.game_start').hide();
        $(".game_page").show();

        timer();
        play();
        
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
                btn_check = 1;
            },1000)
        }, 1000);
    }, 1000);
    
}


function game_rule(my_state){ // 첫번째 게임
    var randNum = Math. floor(Math. random() * 3); // 0:묵, 1:가위, 2:보
    enemy_state.push(randNum);

    var enemy = enemy_state[btn_count - 1];

    if(my_state = 0){
        if(enemy == 0){
            result = 0;
        }else if(enemy == 1){
            result = 1;
        }else if(enemy == 2){
            result = 2;
        }
    }

    if(my_state = 1){
        if(enemy == 0){
            result = 2;
        }else if(enemy == 1){
            result = 0;
        }else if(enemy == 2){
            result = 1;
        }
    }

    if(my_state = 2){
        if(enemy == 0){
            result = 1;
        }else if(enemy == 1){
            result = 2;
        }else if(enemy == 2){
            result = 0;
        }
    }
    return result;
}

function game_rule2(new_my_state){ // 유저 선공
    var randNum = Math. floor(Math. random() * 3); // 0:묵, 1:가위, 2:보
    enemy_state.push(randNum);
    
    var enemy = enemy_state[btn_count - 1];

    if(my_state = 0){
        if(enemy == 0){
            state_result = 1;
        }else if(enemy == 1){
            timer();
            game_rule2(my_state);
        }else if(enemy == 2){
            timer();
            game_rule3(my_state);
        }
    }
    
    if(my_state = 1){
        if(enemy == 0){
            timer();
            game_rule3(my_state);
        }else if(enemy == 1){
            state_result = 1;
        }else if(enemy == 2){
            timer();
            game_rule2(my_state);
        }
    }
    
    if(my_state = 2){
        if(enemy == 0){
            timer();
            game_rule2(my_state);
        }else if(enemy == 1){
            timer();
            game_rule3(my_state);
        }else if(enemy == 2){
            state_result = 1;
        }
    }
}

//         나(0)(1)(2)	AI	(0,1,2)		결과
//         묵	=>	묵 찌 빠		=>	짐(2), 이김 game_rule2 다시(1), 비김 game_rule3 다시(0)
//         찌	=>	묵 찌 빠		=>	비김 game_rule3 다시(0), 짐(2), 이김 game_rule2 다시(1)
//         빠	=>	묵 찌 빠		=>	이김 game_rule2 다시(1), 비김 game_rule3 다시(0), 짐(2)
function game_rule3(new_my_state){ // AI 선공
    var randNum = Math. floor(Math. random() * 3); // 0:묵, 1:가위, 2:보
    enemy_state.push(randNum);

}

function play(){        
    my_state = btn_click(); // 버튼 선택

    if( btn_check == 2){    // 버튼 선택 후
        if(game_rule(my_state) == 0){
            timer();
            play();
        }
        if(game_rule(my_state) == 1){
            timer();
            game_rule2(my_state);
        }
        if(game_rule(my_state) == 2){
            timer();
            game_rule3()
        }
    }

function btn_click(){
    if( btn_check == 1 ){ // 버튼 1번만 선택 가능
        $("#rock").click(function(){
            my_state.push(0);
            btn_check = 2;
        });
        $("#scissors").click(function(){
            my_state.push(1);
            btn_check = 2;
        });
        $("#paper").click(function(){
            my_state.push(2);
            btn_check = 2;
        });
    }
    btn_count += 1;

    return my_state[btn_count - 1];
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
