<!DOCTYPE html>
<head>
    <title>미니게임</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" type="text/css" href="./css/reset.css">
	<link rel="stylesheet" type="text/css" href="./css/def.css">
	<script src="./js/jquery.min.js"></script>
    <style>
        @font-face {
            font-family: 'abster';
            src: url(font/abster-webfont.woff) format('woff');
        }
        @font-face {
            font-family: 'SBAggroB';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
        header{
                position: relative;
                align-items: center;
                background-color:rgb(255, 255, 255);
                color: #333;
                border-bottom: 2px solid #000;
                box-shadow: rgb(56, 56, 56) 2px 3px 1px 0px;
        }
        #site_name{
            padding: 50px;
            font-family: abster;
            font-size: xx-large;
        }
        header .box_style1 {height:65px}
        nav ul {height:100%}
        nav ul li {margin-left:10px; font-family: SBAggroB;}
        #center_font{
            font-size: 50px;
            text-decoration: none;
            color: white;
            font-family: SBAggroB;
            padding: 10% 0 10% 0;
        }
        .box_style1 {
            max-width:1100px;
            margin:0 auto;
        }
        .center{
            text-align: center;
            padding: 0 0 10%;
        }
        .game_list{
            position:relative;
            background-color: rgba(0,0,0,0.5); color: rgb(255, 255, 255);
            border:2px solid rgb(255, 255, 255);
            border-radius: 30px;
            max-width: 840px;
			height: 180px;
            margin: auto;
        }
        #game{
            float: left;
            text-align: center;
            width: 125px;
            height: 125px;
            border: 1px solid rgb(255, 255, 255);
            border-radius: 100%;
            background-color: white;
            font-family: abster;
            margin: 20px;
        }
        
        span{
            display: block;
            color: #000;
            text-align: center;
            font-size: xx-large;
            line-height: 125px;
			border-radius:100%;
        }

		.t1{background:url(./img/main_game_img1.png) no-repeat center; background-size:120%;}
		.t2{background:url(./img/main_game_img2.png) no-repeat center; background-size:120%;}
		.t3{background:url(./img/main_game_img3.png) no-repeat center; background-size:120%;}
		.t4{background:url(./img/main_game_img4.png) no-repeat center; background-size:120%;}
		.t5{background:url(./img/main_game_img5.png) no-repeat center; background-size:120%;}

        #main_section {min-height:calc(100vh - 160px); background: url(ghost_back.png);}

        footer{background-color:#333; color:#fff; font-style: normal;border-top: 1px solid #fff;}
        footer .box_style1 {height:80px;}

    </style>
</head>
<body>
    <header>  
        <div class="box_style1 dis_f al_c flex_jsb">
            <h2 id = site_name>MSG</h1>
            <nav>
                <ul class="dis_f al_c">
					<li><a href="project_01.php">정렬게임</a></li>
					<li><a href="project_02.php">청기백기게임</a></li>
					<li><a href="sub03_p1.php">야구게임</a></li>
					<li><a href="sub03_p2.php">묵찌빠게임</a></li>
					<li><a href="sub08.php">햄버거게임</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <section id="main_section">
        <div class="box_style1">
            <div class = "center">
                <p id = "center_font">맛있는 미니 게임 MSG!</p>
                <div class = game_list>
                    <div id = "game"><a href="project_01.php"><span class="t1">GAME</span></a></div>
                    <div id = "game"><a href="project_02.php"><span class="t2">GAME</span></a></div>
                    <div id = "game"><a href="sub03_p1.php"><span class="t3">GAME</span></a></div>
                    <div id = "game"><a href="sub08.php"><span class="t4">GAME</span></a></div>
                    <div id = "game"><a href="sub08.php"><span class="t5">GAME</span></a></div>
                </div>
            </div>
        </div> 
    </section>
    <?php
	  include 'footer.php';
	?>
</body>