<!DOCTYPE html>
<head>
    <title>미니게임</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" type="text/css" href="./css/reset.css">
	<link rel="stylesheet" type="text/css" href="./css/def.css">
    <link rel="stylesheet" type="text/css" href="./css/site_css.css">
	<script src="./js/jquery.min.js"></script>
    <script src="./js/site_js.js"></script>
</head>
<body>
    <?php
	  include 'header.php';
	?>

	<style>
		.game_c_list .img_box.t1{background:url(./img/main_game_img1.png) no-repeat center; background-size:120%;}
		.game_c_list .img_box.t2{background:url(./img/main_game_img2.png) no-repeat center; background-size:120%;}
		.game_c_list .img_box.t3{background:url(./img/main_game_img3.png) no-repeat center; background-size:120%;}
		.game_c_list .img_box.t4{background:url(./img/main_game_img4.png) no-repeat center; background-size:120%;}
		.game_c_list .img_box.t5{background:url(./img/main_game_img5.png) no-repeat center; background-size:120%;}
	</style>
	<script>
		var game_link = ["project_01.php", "project_02.php", "sub03_p1.php", "sub08.php", "sub08.php"];

		function game_start(){
			location.href = game_link[Math.floor(Math.random() * 5)];
		}
	</script>

    <section id="main_section" class="dis_f al_c">
        <div class="box_style1">
            <div class="game_c_list">
				<div class="md_h t_c"><img src="./img/jun_main_img2.png"></div>
                <ul class="flex_jsb">
                    <li>
						<a href="project_01.php">
							<div class="img_box t1"></div>
							<p>정렬게임</p>
						</a>
                    </li>
                    <li>
						<a href="project_02.php">
							<div class="img_box t2"></div>
							<p>청기백기게임</p>
						</a>
                    </li>
                    <li>
						<a href="sub03_p1.php">
							<div class="img_box t3"></div>
							<p>야구게임</p>
						</a>
                    </li>
                    <li>
						<a href="sub03_p2.php">
							<div class="img_box t4"></div>
							<p>묵찌빠게임</p>
						</a>
                    </li>
					<li>
						<a href="sub08.php">
							<div class="img_box t5"></div>
							<p>햄버거게임</p>
						</a>
                    </li>
                </ul>
            </div>

            <div class="game_t_div1 t_c">
                <p></p>
                <p>맛있는 미니 게임 MSG!</p>
                <button onclick="game_start();"><img src="./img/jun_main_img1.png"></button>
            </div>
        </div>
    </section>

	<?php
	  include 'footer.php';
	?>

    <div class="pop_gr pc_h"></div>
</body>