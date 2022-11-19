<!DOCTYPE html>
<head>
    <title>미니게임</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" type="text/css" href="./css/reset.css">
	<link rel="stylesheet" type="text/css" href="./css/def.css">
    <link rel="stylesheet" type="text/css" href="./css/main01.css">
	<script src="./js/jquery.min.js"></script>
    <script src="./js/main.js"></script>
</head>
<body>
    <header>  
        <div class="box_style1 dis_f al_c">
            <h1>MSG</h1>
            <nav>
                <ul class="dis_f al_c">
					<li class = menu a><a href="project_01.php">정렬게임</a></li>
					<li class = menu a><a href="project_02.php">청기백기게임</a></li>
					<li class = menu a><a href="sub03_p1.php">야구게임</a></li>
					<li class = menu a><a href="sub08.php">묵찌빠게임</a></li>
					<li class = menu a><a href="sub08.php">햄버거게임</a></li>
                </ul>
            </nav>
        </div> 
    </header>

    <section id="main_section">
        <div class="box_style1">
            <p id = "game_names">맛있는 미니 게임 MSG!</p>

            <div id = "f_line">
                <ul id = "sub_gamename">
					<a href="project_01.php">
						<li>01</li>
						<div id = "long_line">
							<div class = "img_box" onclick="f_clickFunc()"> 
								<img src = "img/main_game_img1.png">
							</div>
							<div class = "arrow">
								___________________________________________
							</div>
						</div>
						<li id = "s_name">정렬게임</li>
					</a>
                </ul>
                <ul id = "sub_gamename">
					<a href="project_02.php">
						<li>02</li>
						<div id = "long_line">
							<div class = "img_box" onclick="f_clickFunc()">
								<img src = "img/main_game_img2.png">
							</div>
							<div class = "arrow">
								___________________________________________
							</div>
						</div>
						<li id = "s_name">청기백기게임</li>
					</a>
                </ul>
                <ul id = "sub_gamename">
					<a href="sub03_p1.php">
						<li>03</li>
						<div class = "img_box" onclick="f_clickFunc()">
							<img src = "img/main_game_img3.png">
						</div>
						<div id = "long_line">
							<div class = "arrow">
								___________________________________________
							</div>
						</div>
						<li id = "s_name">야구게임</li>
					</a>
                </ul>
            </div>
            <div id = "s_line">
                <ul id = "sub_gamename">
					<a href="sub03_p2.php">
						<li>04</li>
						<div class = "img_box" onclick="f_clickFunc()">
							<img src = "img/main_game_img4.png">
						</div>
						<div id = "long_line">
							<div class = "arrow">
								___________________________________________
							</div>
						</div>
						<li id = "s_name">묵찌빠게임</li>
					</a>
                </ul>
                <ul id = "sub_gamename">
					<a href="sub08.php">
						<li>05</li>
						<div class = "img_box" onclick="f_clickFunc()">
							<img src = "img/main_game_img5.png">
						</div>
						<div id = "long_line">
							<div class = "arrow">
								___________________________________________
							</div>
						</div>
						<li id = "s_name">햄버거게임</li>
					</a>
                </ul>
				<!--
                <ul id = "sub_gamename">
                    <li>06</li>
                    <div class = "img_box" onclick="f_clickFunc()">
                        <img src = "img/6.jpg">
                    </div>
                    <div id = "long_line">
                        <div class = "arrow">
                            ___________________________________________
                        </div>
                    </div>
                    <li id = "s_name">게임6</li>
                </ul>
				-->
            </div>
        </div>

    </section>

    <?php
	  include 'footer.php';
	?>
</body>