var time = 3;

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
