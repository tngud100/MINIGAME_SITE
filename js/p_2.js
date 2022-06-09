var time = 3;
var enemy_state = 0; // 1:묵 2:찌 3:빠

$(function(){
    $(".game_page").hide();
    $('#start_btn').click(function(){
        $('.game_start').hide();
        $(".game_page").show();
        $('#timer').text(time);


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
    });
});

function play(){
    let x = Math.floor((Math.random() * 3) + 1);
    enemy_state = x;
    
    var rock = document.getElementById("rock").name;
}