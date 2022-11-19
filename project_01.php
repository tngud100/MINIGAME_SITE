<!DOCTYPE html>
<head>
    <title>미니게임</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" type="text/css" href="./css/reset.css">
	<link rel="stylesheet" type="text/css" href="./css/def.css">
    <link rel="stylesheet" type="text/css" href="./css/site_css.css">
    <link rel="stylesheet" type="text/css" href="./css/p01.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dongle:wght@700&display=swap" rel="stylesheet">
	<script src="./js/jquery.min.js"></script>
    <script src="./js/p01.js"></script>
    <script src="./js/site_js.js"></script>  

	<script>
		var game_type_data = "type_p1";

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
        <div class="box_style1 play_area_box" id = "game_t1">
            <div class="play_area">
                <div class = "layer1 dis_f flex_c" id="game_start" >

                    <div>
                        <h2 class="t_c" id = "st_01">
                            <span style="color : white;">R</span>
                            <span style="color: orange;">P</span>
                            <span style="color: green;">G</span>&nbsp;
                            정렬게임</h2>
                        <div  id = "main_imgfiles" class = "dis_f">
                            <div id = main_img1></div>
                            <div id = main_img2></div>
                            <div id = main_img3></div>
                        </div>
                        <button class="start_btn">GAME START</button>
                    </div>

                </div>
                <div class = "layer1" id="game_play" style="display:none">
                    <div class = "game_view">
                        <div class="game_life dis_f">
                            <div class="active"></div>
                            <div class="active"></div>
                            <div class="active"></div>
                        </div>
                        <p class = "score_text">0</p>
                        <p class = "time_text">남은시간 : <span>60</span></p>
                        <ul id = "game_cht">
                        </ul>

                    </div>

                    <div class = "game_ctr dis_f flex_jc">
                        <button id = "p01_btn" onclick="game_t1_ctr1('left')" style="background-color: green;"></button>
                        <button id = "p01_btn" onclick="game_t1_ctr1('center')" style="background-color: orange;"></button>
                        <button id = "p01_btn" onclick="game_t1_ctr1('right')" style="background-color: white;"></button>

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