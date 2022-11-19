<!DOCTYPE html>
<head>
    <title>미니게임</title>
	<link rel="stylesheet" type="text/css" href="./css/reset.css">
	<link rel="stylesheet" type="text/css" href="./css/def.css">
    <link rel="stylesheet" type="text/css" href="./css/site_css.css">
    <link rel="stylesheet" type="text/css" href="./css/p_2.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
	<script src="./js/jquery.min.js"></script>
	<script src="./js/p_2.js"></script>
	<script src="./js/site_js.js"></script>
    <meta name ="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<script>
		var game_type_data = "sub03_p2";

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
        <div class="box_style1 play_area_box" id="game_t1">
            <div class="play_area">
                <div class="game_start">
                    <button type="button" id="start_btn"><img src="img2\start_btn.png"></button>
                </div>
                <div class="game_page">
                    <div class="enemy">
                        <div id="enemyrock"><img src="img2\enemy_rock.png" width="100%" transform="rotate(90deg)"></div>
                        <div id="enemyscissors"><img src="img2\enemy_scissors.png" width="100%" transform="rotate(90deg)"></div>
                        <div id="enemypaper"><img src="img2\enemy_paper.png" width="100%" transform="rotate(90deg)"></div>
                    </div>
                    <p id="state">목숨 : </p>
                    <p id="life"></p>
                    <p id="result"></p>
                    <div id="time_circle"><span id="timer"></span></div>
                    <div class="my_btn">
                        <button type="button" id="rock" onclick="my_btn(0)"><img src="img2\rock.png" width="80px" height="105px"></button>
                        <button type="button" id="scissors" onclick="my_btn(1)"><img src="img2\scissors.png" width="80px" height="105px"></button>
                        <button type="button" id="paper" onclick="my_btn(2)"><img src="img2\paper.png" width="80px" height="105px"></button>
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

    <footer>
        <div class="box_style1 dis_f al_c">
            <p>
                유사콜론<br/>
                20210478_박성준 | 20210460_윤영준 | 20181060_김수형
            </p>
        </div>
    </footer>

    <div class="pop_gr pc_h"></div>
</body>