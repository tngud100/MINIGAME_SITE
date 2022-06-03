// 타자가 쳤을 때 점수의 범위
var soso_range = 73;
var good_range = 78;
var exelent_range = 86;
var bad_range = 91;
var strike_range = 96;

// cnt, score
var bad = 3; //목숨
var good = 0;
var exelent = 0;
var score = 0;

// 볼 위치
var ball_pos = 27;
var hitted_ball = -5;

var state = 0; // 현재 상황 (0:start버튼, 1:공 던짐, 2: 타자가 침)

var hit_value = false; // 공이 쳐졌는가?
var hit_state = false; // 범위 체크

var init_value = true;

function hitting_ball_pos(ball_pos){
    window.addEventListener("keydown", e => {
        if(e.keyCode == 32) { // space바 누를 시         

            $('#hitter').hide();
            $('#hitter2').show();

            console.log(hit_state);
            console.log(ball_pos);

            if(hit_state == true && hit_value == false){    
                console.log('test');
                if(hit_value){
                    state = 2;
                }
                if(ball_pos > hitted_ball){
                    $('#ball').animate({top : `${hitted_ball}%`});
                    hit_value = false;
                    state = 3;
                }
            }

            hit_value = true;  
        }
    });
}

function ball_go(){
    var interval = setInterval(() =>{
        if(state == 1){     // 투수가 공을 던졌을때
            if(ball_pos <= strike_range){
                if( ball_pos >= soso_range && ball_pos < bad_range){ // 공 위치가 soso_range 와 bad_range 사이일 때
                    hit_state = true;
                    console.log('can hitting');
                }else{
                    hit_state = false;
                }
                $("#ball").css('top',`${ball_pos}%`);
                ball_pos += 0.3
            }else{
                if(init_value == true){
                    console.log('test');
                    init();
                    init_value = false;
                }; 
            }
            //console.log("볼 위치:"+ ball_pos);
        }

        if( state == 2 ){ // 타자가 침
            if(ball_pos >= bad) { // 타자가 칠 수 없음
                score -= 500;
                if( score < 0 ){
                    score = 0;
                }
                bad -= 1;
                state = 3;
                console.log("bad");
            }else if(ball_pos >= exelent_range && ball_pos < bad_range){
                score += 500;
                good += 1;
            }else if(ball_pos >= good_range && ball_pos < exelent_range){
                score += 1000;
                exelent += 1;
            }else if(ball_pos >= soso_range && ball_pos < good_range){
                score += 500;
                good += 1;
            }
        }

        
        //console.log(ball_pos);
        //console.log(state);
        // console.log("볼 위치:"+ ball_pos);
        // console.log("good:"+good);
        // console.log("exelent"+exelent);
        // console.log("score"+score);
    });
}
// 초기화
function init(){
    $('.layer1').hide();
    $('.g1').show();
    $('#pitcher2').hide();
    $('#pitcher3').hide();
    $('#hitter2').hide();
    $('#hitter').show();
    // 점수
    state = 1;
    gent = 0;
    scorood = 0;
    exele = 0;
    // 볼 위치
    ball_pos = 27;
    hit_value = false; // 공이 쳐졌는가?
    hit_state = false; // 범위 체크
    init_value = true;
}

$(function(){
    $('.layer1').show();
    $('.g1').hide();
    $('#start_btn').click(()=>{
        if(state == 3){
            init();
            state = 1;
            setTimeout(function(){
                ball_go();
            },1000);
        }
        init();
        state = 1;
        setTimeout(function(){
            ball_go();
        },1000);
    });
    hitting_ball_pos(ball_pos);
});