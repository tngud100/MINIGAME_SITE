var game_type = $('.play_area_box').attr('id');

var game_score = 0;
var time_max = 60;
var up_down_btn = true;

var game_over = true;
var game_speed = 5000;

var r_text = new Array();
r_text[0] = ["청기들어", 1];
r_text[1] = ["백기들어", 3];
r_text[2] = ["청기 들지말고 백기들어" ,3];
r_text[3] = ["백기 들지말고 청기들어", 1];
r_text[4] = ["청기내려", 2];
r_text[5] = ["백기내려", 4];
r_text[6] = ["청기 내리지말고 백기내려", 4];
r_text[7] = ["백기 내리지말고 청기내려", 2];
r_text[8] = ["청기 들지말고 백기내려", 4];
r_text[9] = ["백기 들지말고 청기내려", 2];
r_text[10] = ["청기 내리지말고 백기들어", 3];
r_text[11] = ["백기 내리지말고 청기들어", 1];

var array_num = 0;


$(function(){
    game_type = $('.play_area_box').attr('id');
         
    $('.restart_btn').click(function(){
        game_score = 0;
        game_speed = 5000;

        $('.score_text').html(game_score);
        
        
    })  
    

    $('.start_btn').click(function(){
        start_game();
        /*
        time_max = 60;
        $(".time_text span").html(time_max);
        setTimeout(function(){
            time_event();
        }, 1000)
        */
    })

    setInterval(function(){
        if(game_over == true){
            time_bar_w = $('.time_bar').css("width");
            time_bar_w = time_bar_w.replace('px', '');

            if(time_bar_w <= 0){
                game_over = false;
                $('#game_over').show();
            }
        }
    }, 10)
});

function start_game(){

    array_num = Math.floor(12*Math.random());

    $('#mission').html('<p>' + r_text[array_num][0] + '</p>');   

    $('.time_bar').stop(true, false);
    $('.time_bar').css('width', '99.5%')

    $('.time_bar').animate({
        width : "0%"
    }, game_speed)
}

function game_t1_ctr1(arrow)
{
    if(arrow == 1){
        $('.blue_flag').css("transform", "rotate(40deg)")
    }else if(arrow == 2){
        $('.blue_flag').css("transform", "rotate(-40deg)")
    }else if(arrow == 3){
        $('.white_flag').css("transform", "rotate(-40deg)")
    }else if(arrow == 4){
        $('.white_flag').css("transform", "rotate(40deg)")
    }

    $('.time_bar').stop(true, false);

    setTimeout(function(){
        $('.blue_flag').css("transform", "rotate(0deg)")
        $('.white_flag').css("transform", "rotate(0deg)")

        if(r_text[array_num][1] == arrow){
            start_game();
            game_score += 100;
            $('.score_text').html(game_score);
            if(game_speed >= 800){
                game_speed -= 300
            }else{
                game_over = 800;
            }        
        }else{
            game_over = false;
            $('.time_bar').stop(true, true);
            $('#game_over').show();
        }
    }, 500)
}

function game_over()
{
    if('.time_bar' == true)
    $('#game_over').show();
}


/*
function time_event(){
    time_max -= 1;
    
    $(".time_text span").html(time_max);

    if(time_max < 0)
    {
        $('#game_over').show();
        $(".time_text span").html(0);
    }
    else
    {
        setTimeout(function(){
            time_event()
        }, 1000)
    }
}
*/