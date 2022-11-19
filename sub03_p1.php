<!DOCTYPE html>
<head>
    <title>미니게임</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" type="text/css" href="./css/reset.css">
	<link rel="stylesheet" type="text/css" href="./css/def.css">
    <link rel="stylesheet" type="text/css" href="./css/site_css.css">
    <link rel="stylesheet" type="text/css" href="./css/baseball.css">
	<script src="./js/jquery.min.js"></script>
	<script src="./js/baseball.js"></script>
    <script src="./js/site_js.js"></script>

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<script>
		var game_type_data = "baseball";

		$(function(){
			rank_show(game_type_data);
		})
	</script>
</head>

<body>
    <?php
	  include 'header.php';
	?>

    <section id="main_section" class="dis_f al_c">
        <p id = "Timer"></p>
        <div class="box_style1 play_area_box" id="game_t1">
            <div class="play_area">
                <div class="layer1" id="game_ready">
                    <img id = "start_btn" src="img/start_btn.png" alt="start">
                </div>

                <div class="g1" id="game_play" style="display: none;">
                    <p class = "score_box">SCORE :  <span class="score_text">0</span></p>
                    <p id = "life"></p>
                    <li id = "pitcher"><img src="img/pitcher_r1.png" width="50px" height="50px"></li>
                    <li id = "pitcher2" style="display:none;"><img src="img/pitcher_r2.png" width="50px" height="50px"></li>
                    <li id = "pitcher3" style="display:none;"><img src="img/pitcher_slow.png" width="50px" height="50px"></li>
                    <li id = "ball"><img src="img/ball.png" width="25px" height="25px"></li>
                    <li id = "hitter"><img src="img/hitter_ready.png" width="100px" height="100px"></li>
                    <li id = "hitter2" style="display:none;"><img src="img/hitter_hit.png" width="100px" height="100px"></li>
                </div>

				<!--
                <div class="layer2" id="game_over" style="display: none;">
                    <div class = "G_O_box">
                        <li id ="G_O_text"></li>
                        <li id ="G_O_score"></li>
                        <button type="button" id = "restart">Restart</button>
                        <button type="button" id = "Exit">Exit</button>
                    </div>
                </div>-->

				 <div class="layer1 dis_f flex_c" id="game_over" style="display:none;">
                    <div class="popup_area t_c" id="score_popup" >
                        <h3 class="mb10">GAME OVER</h3>
                        <p class="mb10">점수 : <span class="score_text">0</span></p>
						<div class="over_btn_box mb20">
	                        <button class="restart_btn" id="restart">다시하기</button>
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