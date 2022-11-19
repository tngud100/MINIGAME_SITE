<!DOCTYPE html>
<head>
    <title>미니게임</title>
	<link rel="stylesheet" type="text/css" href="./css/reset.css">
	<link rel="stylesheet" type="text/css" href="./css/def.css">
    <link rel="stylesheet" type="text/css" href="./css/site_css.css">
	<link rel="stylesheet" type="text/css" href="./css/p08.css">
	<script src="./js/jquery.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <script src="./js/p08.js"></script>
	<script src="./js/site_js.js"></script>
</head>
<body>
    <?php
	  include 'header.php';
	?>

    <section id="main_section" class="dis_f al_c">
        <div class="box_style1 play_area_box" id="game_t6">
            <div class="play_area">
                <div class="layer1 dis_f flex_c" id="game_start">
                    <div>
                        <button class="start_btn" onclick="game_start()"></button>
                    </div>
                </div>

                <div class="layer1" id="game_play" style="display:none;">
                    <div class="game_view">
                        <div class="time_box">
                            <img src="./img/p06/time_img.png">
                            <div class="time_bar"><div></div></div>
                        </div>
                        <p class="score_area">Score : <span class="score_text">0</span></p>
                        <div class="quest_area">
                            <!--<p class="t_c">주문</p>-->
                            <ul class="burger_list">
                                <li class="burger_t1"><div></div></li>
                                <li class="burger_t2" style="bottom:10px;"><div></div></li>
                                <li class="burger_t3" style="bottom:20px;"><div></div></li>
                                <li class="burger_t4" style="bottom:30px;"><div></div></li>
                                <li class="burger_t5" style="bottom:40px;"><div></div></li>
                                <li class="burger_t1" style="bottom:50px;"><div></div></li>
                            </ul>
                        </div>

                        <div class="burger_area">
                            <ul class="burger_list" id="play_area">
                                
                            </ul>
                            <div class="bg_area2">
                                <div class="plate"></div>
                                <div class="hand"></div>
                            </div>
                        </div>
                        <div class="bg_area"></div>
                    </div>
                    <div class="game_ctr dis_f flex_jc">
                        <ul class="dis_f">
                            <li onclick="burger_event1(1)"><img src="./img/p06/img_1.png"></li>
                            <li onclick="burger_event1(2)"><img src="./img/p06/img_2.png"></li>
                            <li onclick="burger_event1(3)"><img src="./img/p06/img_3.png"></li>
                            <li onclick="burger_event1(4)"><img src="./img/p06/img_4.png"></li>
                            <li onclick="burger_event1(5)"><img src="./img/p06/img_5.png"></li>
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
						<input type="hidden" name="score" value="0"; id="score">
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