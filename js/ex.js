
var game_type = $('.play_area_box').attr('id');

var game_cha = [["1", "left"],["2", "center"],["3", "right"]];
var game_ctr = true;
var game_score = 0;
var game_life = 3;

var time_max = 60;

$(function(){
    game_type = $('.play_area_box').attr('id');
    for(var i = 0; i < 12; i++)
    {
        game_obj_c();
    };   
         
    $('.restart_btn').click(function(){
        game_life = 3;
        game_score = 0;
    
        $('.score_text').html(game_score);
        $('.game_life div').addClass("active");
        
    })  
    
    $('.start_btn').click(function(){
        time_max = 60;
        $(".time_text span").html(time_max);
        setTimeout(function(){
            time_event();
        }, 1000)
    })
});


function game_t1_ctr1(arrow)
{
    if(game_ctr)
    {

        game_ctr = false;

        var target_date = $("#" + game_type + ' .game_view ul li:nth-child(1)');

        if(arrow == target_date.attr('date'))
        {
            game_score += 100;
            $(".score_text").html(game_score);
        }
        else
        {
            game_life -= 1;

            $('.game_life div').removeClass("active");
            for(var i = 0; i < game_life; i++)
            {
                $('.game_life div:nth-child('+(i + 1)+')').addClass("active");
            }
            if(game_life == 0)
            {
                $('#game_over').show();
                time_max = 0;
            }
        }

        if(arrow == "left")
        {
            target_date.animate({
                left: '-100%'
            });
        }
        else if(arrow == "center")
        {
            target_date.animate({
                bottom: '-100%'
            });
        }
        else if(arrow == "right")
        {
            target_date.animate({
                left: '150%'
            });
        }
        setTimeout(function(){
            
            $("#" + game_type + ' .game_view ul li:nth-child(1)').remove();
            game_obj_c()
            game_ctr = true;
        }, 250);
    }
}

function game_obj_c()
{
    var s_num = Math.floor(Math.random() * 3);

    $("#" + game_type + ' .game_view ul').append('<li date = '+ game_cha[s_num][1] +' class="type'+game_cha[s_num][0]+'");"></li>');
}

function time_event(){
    time_max -= 1;
    
    $(".time_text span").html(time_max);

    if(time_max < 0){
        $('#game_over').show();
        $(".time_text span").html(0);
    }else{
        setTimeout(function(){
            time_event()
        }, 1000)
    }
}
