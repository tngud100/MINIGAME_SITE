<!DOCTYPE html>
<head>
    <title>미니게임</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" type="text/css" href="./css/reset.css">
	<link rel="stylesheet" type="text/css" href="./css/def.css">
    <link rel="stylesheet" type="text/css" href="./css/site_css.css">
    <link rel="stylesheet" type="text/css" href="./css/p02.css">
	<script src="./js/jquery.min.js"></script>
    <script src="./js/p02.js"></script>
   	<script src="./js/site_js.js"></script>
</head>
<script>
	var game_type_data = "type_p2";

	$(function(){
		rank_show(game_type_data);
	})
</script>
<body>
    <?php
	  include 'header.php';
	?>

    <section id="main_section" class="dis_f al_c">
        <div class="box_style1 play_area_box" id = "game_t1">
            <div class="play_area">
                
                <div class = "layer1 dis_f flex_c" id="game_start">
                    <div>
                        <h2 class="t_c" id = "st_01">
                            <span style="color : rgb(17,135,207);">청</span>
                            <span style="color: rgb(17,135,207)">기</span>
                            <span style="color: white;">백</span>
                            <span style="color: white;">기</span>&nbsp;
                            게임</h2>
                        <div  id = "main_img" class = "dis_f">
                            <div id = main_img1><img src = "img/main_img.png" width="100%" height="100%"></div>
                        </div>
                        <button class="start_btn p2_start_btn"><img class = "st_img" src="img/game_start_img.png"></button>
                    </div>
                </div>

                <div class = "layer1" id="game_play" style="display: none;" style="display: none;">
                    <div class = "game_view">
                        <div class = "time">
                            <div class = "time_bar"></div>
                        </div>
                        <div class="mission_text" id="mission">
                            청기들어
                        </div>
                        <div class = "flags">
                            <img class = blue_flag src = "img/blue_flag.png" >
                            <img class = white_flag src = "img/white_flag.png">
                        </div>
                        <div class = "up_down_btn">
                            <button id = "blue_up_btn" onclick="game_t1_ctr1('1')"><img  src = "img/blue_up_btn.png"></button>
                            <button id = "white_up_btn" onclick="game_t1_ctr1('3')"><img src = "img/white_up_btn.png"></button>
                            <button id = "blue_down_btn"  onclick="game_t1_ctr1('2')"><img src = "img/blue_down_btn.png"></button>
                            <button id = "white_down_btn"  onclick="game_t1_ctr1('4')"><img src = "img/white_down_btn.png"></button>
                        </div>
                        
                        
                        <p class = "score_text">0</p>
                        <!--
                        <p class = "time_text">시간 : <span>60</span></p>
                        -->
                        <ul id = "game_cht">
                        </ul>
                    </div>
                </div>

                <div class="layer1 dis_f flex_c" id="game_over" style="display:none;">
                    <div class="popup_area t_c" id="score_popup" >
                        <h3 class="mb10">GAME OVER</h3>
                        <p class="mb10">점수 : <span class="score_text">0</span></p>
						<div class="over_btn_box mb20">
	                        <button class="restart_btn">다시하기</button>
		                    <button class="rank_btn" onclick='rank_show(game_type_data);'>랭킹보기</button>
							<button class="save_btn">점수등록</button>
						</div>
						<div class="rank_area" style="display:none;">
							<table class="rank_table mb20">
								
							</table>
						</div>
                    </div>
                </div>

				<div class="layer1 dis_f flex_c" id="save_over" style="display:none;">
					<div class="popup_area t_c">
						<h3 class="mb20">랭킹 등록</h3>
						<input type="hidden" name="gametype" value="type8" id="gametype">
						<input type="text" name="username" value="" id="username" placeholder="아이디를 입력해주세요">
						<input type="hidden" name="score" value="0" id="score">
						<!--<input type="submit" value="insert">-->
						<div class="over_btn_box mt20 dis_f flex_c">
							<button class="close_btn mr10">취소</button>
							<a href="#" onClick="rankSave();" class="save_ok_btn">저장</a>
						</div>
					</div>
				</div>
            </div>
        </div>
    </section>



    <?php
	  include 'footer.php';
	?>

    <div class="pop_gr pc_h"></div>
</body>