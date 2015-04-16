$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	initializeLib(ctx);
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;
	var scoreboard = 0
	numObjects = 0;
	numObjectsLoaded =0;
	var screen = 0;
	var dunkey2 = createObjectPic("Images/dunkey2.png")
	var dude = createObjectPic("Images/diablo1.png")
	var sonic = createObjectPic("Images/dunkey1.png")
	var player = createObjectPic("Images/demonhunter1.png")
	
	var papa = createObjectPic("Images/papajohn2.png")
	papa.addFrames('Images/papajohn22.png')
	var papa2 = createObjectPic("Images/papajohn2.png")
	papa2.addFrames('Images/papajohn22.png')
	var papa3 = createObjectPic("Images/papajohn2.png")
	papa3.addFrames('Images/papajohn22.png')
	var papa4 = createObjectPic("Images/papajohn2.png")
	papa4.addFrames('Images/papajohn22.png')
	
	var dunkey= createObjectPic("Images/d1.png")
	var weapon= createObjectPic("Images/weapon.png")
	
	var cool = makePicture('Images/level.jpg')
	var cool2 = makePicture('Images/hi.jpg')
	var bosspic = makePicture('Images/bosspic.jpg')
	
	var boss = createObjectPic("Images/boss.png")
	var boss2 = createObjectPic("Images/boss.png")
	var boss3 = createObjectPic("Images/boss.png")
	//BUTTONS
	
	var button =createButton(200,100,200,50, null, "Play")
	var mySound = addSound('Images/pizzamusic1.mp3', true);
	button.textCol = 'white'
	button.job = function(){
		screen = 2
		mySound.play();
	}
	
	var button1 =createButton(475,10,75,75, 'Images/music.png', "Play The Music!")
		button1.job = function(){
	
		mySound.play();
	}
	var button2 =createButton(560,10,75,75, 'Images/stop.png', "Pause The Music!")
		button2.job = function(){
	
		mySound.pause();
	}
	
	var button3 =createButton(200,400,200,50, null, "Visit WebSite")
		button3.textCol = 'white'
		button3.job = function(){
			
		
	}
	
		var button4 =createButton(200,300,200,50, null, "Credits")
		button4.textCol = 'white'
		button4.job = function(){
			screen = 3
		
	}
	
		var button5 =createButton(200,200,200,50, null, "Instructions")
		button5.textCol = 'white'
		button5.job = function(){
			screen = 4
		
	}
	var button6 =createButton(200,25,200,50, 'Images/papajohn.jpg', "Play The Music!")
		button6.job = function(){
	
		
	}
	
	var button7 =createButton(200,300,200,50, null, "Retry")
		button7.job = function(){
		screen=2

	scoreboard = 0

	papa.x = Math.random()*300+400

	papa.y = Math.random()*300+100

	papa2.x = Math.random()*300+400

	papa2.y = Math.random()*300+100

	papa3.x = Math.random()*300+400

	papa3.y = Math.random()*300+100

	papa4.x = Math.random()*300+400

	papa4.y = Math.random()*300+100
	
	boss.y = Math.random()*300+100
	
	boss.x = Math.random()*300+400

	boss2.y = Math.random()*300+100
	
	boss2.x = Math.random()*300+400
	
	boss3.y = Math.random()*300+100
	
	boss3.x = Math.random()*300+400

	dunkey.x = 1

	dunkey.y = 50
		
	}
	
	var button8 =createButton(200,400,200,50, null, "Main Menu")
		button8.textCol = 'white'
		button8.job = function(){
			screen = 1
		scoreboard = 0
			papa.x = Math.random()*300+400

	papa.y = Math.random()*300+100

	papa2.x = Math.random()*300+400

	papa2.y = Math.random()*300+100

	papa3.x = Math.random()*300+400

	papa3.y = Math.random()*300+100

	papa4.x = Math.random()*300+400

	papa4.y = Math.random()*300+100
	
	boss.y = Math.random()*300+100
	
	boss.x = Math.random()*300+400
	
	boss2.y = Math.random()*300+100
	
	boss2.x = Math.random()*300+400
	
	boss3.y = Math.random()*300+100
	
	boss3.x = Math.random()*300+400


	dunkey.x = 1

	dunkey.y = 50
	}
	
	
	
	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{
	/////////////////////
	///STATE VARIABLES
	/// All your variables get their start values here.
	dude.x = 480;
	dude.y = 180;
	dude.speedx = 7;
	dude.speedy = 7;
	dude.scale = 0.1
	
	dunkey.speedx = 15;
	dunkey.speedy = 15;
	dunkey.x = 0;
	dunkey.y = 330;
	dunkey.scale = 0.7;
	
	weapon.speedx = 7;
	weapon.speedy = 7;
	weapon.x = 1000;
	weapon.y = -75;
	weapon.scale = 1
	
	player.x = 80;
	player.y = 10;
	player.scale = 0.3;
	player.speedx = 7;
	player.speedy = 7;
	
	dunkey2.x = 245;
	dunkey2.y = 1;
	dunkey2.scale = 1;
	dunkey2.speedx = 7;
	dunkey2.speedy = 7;
	
	papa.speedx = -7;
	papa.speedy = -7;
	papa.x = Math.random()*300+400
	papa.y = Math.random()*300+100
	papa.scale = 0.4;
	
	papa2.speedx = -5;
	papa2.speedy = -7;
	papa2.x = Math.random()*300+400
	papa2.y = Math.random()*300+100
	papa2.scale = 0.4;
	
	papa3.speedx = -5;
	papa3.speedy = -7;
	papa3.x = Math.random()*300+400
	papa3.y = Math.random()*300+100
	papa3.scale = 0.4;
	
	papa4.speedx = -5;
	papa4.speedy = -7;
	papa4.x = Math.random()*300+400
	papa4.y = Math.random()*300+100
	papa4.scale = 0.4;
	
	boss.speedx = -10;
	boss.speedy = -7;
	boss.x = Math.random()*300+400
	boss.y = Math.random()*300+100
	boss.scale = 0.3;
	
	boss2.speedx = -10;
	boss2.speedy = -7;
	boss2.x = Math.random()*300+400
	boss2.y = Math.random()*300+100
	boss2.scale = 0.3;
	
	boss3.speedx = -10;
	boss3.speedy = -7;
	boss3.x = Math.random()*300+400
	boss3.y = Math.random()*300+100
	boss3.scale = 0.3;
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	init();	
	


	
	
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		///////////////////////
		//	CLEAR THE SCREEN
		////////////////////
		ctx.fillStyle = 'black';
		ctx.fillRect(0,0, w, h);	
		
		
		
		if(screen == 0){
		/////////////////////
		//	LOADING SCREEN
			ctx.fillStyle = 'red';
			ctx.fillText("Loading Images & Sounds: " + numObjectsLoaded + "/" + numObjects,100,100)
		
			if(numObjectsLoaded >= numObjects) screen = 1;
		
		}else if(screen == 1){
		////////////////////
		//	MAIN MENU
		
		
			//ctx.fillStyle = 'blue'
			//ctx.fillText("Loaded",100,100);
			
		/*dude.x = dude.x + dude.speedx
		if(dude.x > w -dude.width || dude.x < 0) dude.speedx = dude.speedx * -1
		
		dude.y = dude.y + dude.speedy
		if(dude.y > h -dude.height || dude.y < 0) dude.speedy = dude.speedy * -1
		*/
		//dude.draw();
		ctx.drawImage (cool2,0,0,w,h)
		button.draw();
		button1.draw();
		button2.draw();
		button3.draw();
		button4.draw();
		button5.draw();
		

		//button6.draw();
		
		//dunkey.x = dunkey.x + dunkey.speedx
		//if(dunkey.x > w -dunkey.width || dunkey.x < 0) dunkey.speedx = dunkey.speedx * -1
		
		//dunkey.y = dunkey.y + dunkey.speedy
		//if(dunkey.y > h -dunkey.height || dunkey.y < 0) dunkey.speedy = dunkey.speedy * -1
		
		//sonic.draw();
		
		if(dude.collideObject(sonic)){
			dude.speedx = dude.speedx * -1;
			dude.speedy = dude.speedy * -1;
		}	
		if(sonic.collideObject(dude)){
			sonic.speedx = sonic.speedx * -1;
			sonic.speedy = sonic.speedy * -1;
		}	
		if(sonic.collideObject(player)){
			sonic.speedx = sonic.speedx * -1;
			sonic.speedy = sonic.speedy * -1;
		}
		if(dude.collideObject(player)){
			dude.speedx = dude.speedx * -1;
			dude.speedy = dude.speedy * -1;
		}
		//player.draw();
		}else if(screen == 2){
		////////////////////
		//	GAME SCREEN 1
			
			if(scoreboard == 25){
			screen = 6
			}
			
			papa.x = papa.x + papa.speedx
			papa2.x = papa2.x + papa2.speedx
			papa3.x = papa3.x + papa3.speedx
			papa4.x = papa4.x + papa4.speedx
			
			
			if(weapon.collideObject(papa)){
					papa.x = Math.random()*300+400
					papa.y = Math.random()*300+100
					weapon.x = 1000
					scoreboard += 1
			}
			
			if(weapon.collideObject(papa2)){
					papa2.x = Math.random()*300+400
					papa2.y = Math.random()*300+100
					weapon.x = 1000
					scoreboard += 1
			}
			
			if(weapon.collideObject(papa3)){
					papa3.x = Math.random()*300+400
					papa3.y = Math.random()*300+100
					weapon.x = 1000
					scoreboard += 1
			}
			
			if(weapon.collideObject(papa4)){
					papa4.x = Math.random()*300+400
					papa4.y = Math.random()*300+100
					weapon.x = 1000
					scoreboard += 1
			}
			
			
			if(papa.x <0||papa2.x <0||papa3.x <0||papa4.x <0){
			
			screen = 5
			}
		
		
		
		
		
		
		ctx.fillStyle = 'white';
		ctx.fillRect(0,0, w, h);
		ctx.font="30px Arial"; 
		ctx.fillStyle = 'red';
		ctx.fillText("Papa John Is Coming",150, 50)

		//sonic.draw();
		ctx.drawImage (cool,0,0,w,h)
		dunkey2.draw();
		dunkey.draw();
		weapon.draw();
		papa.draw();
		papa2.draw();
		papa3.draw();
		papa4.draw();
		ctx.fillText(scoreboard,100,100)
		ctx.fillText("Stop Papa John",150, 50)
		ctx.fillText("HeadShots Only",200, 100)
		//ctx.fillText("Practice here, Use Arrow Keys",150, 100)
		weapon.x = weapon.x + weapon.speedx
		}else if(screen == 3){
		//another game screen
		ctx.font="30px Arial"; 
		ctx.fillStyle = 'white';
		ctx.fillText("Credits",230, 80)
		ctx.font="15px Arial"; 
		ctx.fillStyle = 'red';
		ctx.fillText("1.Calvin",225, 125)
		ctx.fillText("2.Guzy",225, 140)
		ctx.fillText("3.Nathan",225, 155)
		ctx.fillText("3.Jacob",225, 170)
		button8.draw();
		}else if(screen == 4){
		//another game screen
		ctx.font="30px Arial"; 
		ctx.fillStyle = 'white';
		ctx.fillText("Instructions",230, 80)
		ctx.font="30px Arial"; 
		ctx.fillStyle = 'red';
		ctx.fillText("Arrow keys and Space-bar",150, 140)
		button8.draw();
	}
		else if(screen == 4){

		}
		
		else if(screen == 5){
		ctx.font="30px Arial"; 
		ctx.fillStyle = 'red';
		ctx.fillText("Game Over",50, 50)
		ctx.fillText("Score =",50, 100)
		ctx.fillText(scoreboard,200,100)
		button7.draw();
		button8.draw();
		}
		
		else if(screen == 6){
		ctx.drawImage (cool,0,0,w,h)
		ctx.fillStyle = 'red';
		ctx.fillText(scoreboard,100,100)
		
		boss.draw();
		boss2.draw();
		boss3.draw();
		dunkey.draw();
		
		weapon.draw();
		
		boss.x = boss.x + boss.speedx
		boss2.x = boss2.x + boss2.speedx
		boss3.x = boss3.x + boss3.speedx
		weapon.x = weapon.x + weapon.speedx
		
		if(weapon.collideObject(boss)){
		boss.x = Math.random()*300+400
		boss.y = Math.random()*300+100
		weapon.x = 1000
		scoreboard += 3
		}
		if(weapon.collideObject(boss2)){
		boss2.x = Math.random()*300+400
		boss2.y = Math.random()*300+100
		weapon.x = 1000
		scoreboard += 3
		}
		if(weapon.collideObject(boss3)){
		boss3.x = Math.random()*300+400
		boss3.y = Math.random()*300+100
		weapon.x = 1000
		scoreboard += 3
		}
		if(boss.x <0||boss2.x <0||boss3.x <0){	
		screen = 5
			}
		if(scoreboard == 52){
	screen = 7
			}
		}		
		else if(screen == 7){
		ctx.drawImage (bosspic,0,0,w,h)
		ctx.font="30px Arial"; 
		ctx.fillStyle = 'blue';
		ctx.fillText("You Win",100, 100)
		}
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	

	
	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	
	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		
		//Runs this code whenever the mouse is clicked
		//For more screens for your game, just add more else ifs
		if(screen == 0){
		
		
		}else if (screen == 1){
		
			if(button.isMouseOver()) button.job()
			if(button1.isMouseOver()) button1.job()
			if(button2.isMouseOver()) button2.job()
			if(button3.isMouseOver()) button3.job()
			if(button4.isMouseOver()) button4.job()
			if(button5.isMouseOver()) button5.job()
			if(button6.isMouseOver()) button6.job()
		
			
		}else if (screen == 5){
		
			if(button7.isMouseOver()) button7.job()
			if(button8.isMouseOver()) button8.job()
		 
		 
		}else if (screen == 3){
		
		if(button8.isMouseOver()) button8.job()
		
		 
		}else if (screen == 4){
		
		if(button8.isMouseOver()) button8.job()
		
		
		 }
		 
	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;
		updateMouse(mx,my);

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
	// up 38
	//down 40
	//right 39
	//left 37
	
		//alert(key)
		if(key==37){//left
			player.x -= Math.abs(player.speedx)
			if(player.x < 0) player.x = 0
			
		}else if (key == 38){//up
			player.y -= Math.abs(player.speedy)
	
		}else if (key == 39){//right
			player.x += Math.abs(player.speedx)
	
		}else if (key == 40){//down
			player.y += Math.abs(player.speedy)
		}
		
		if(key==37){//left
			dunkey.x -= Math.abs(dunkey.speedx)
			if(dunkey.x < 0) dunkey.x = 0
			
		}else if (key == 38){//up
			dunkey.y -= Math.abs(dunkey.speedy)
	0
		}else if (key == 39){//right
			dunkey.x += Math.abs(dunkey.speedx)
	
		}else if (key == 40){//down
			dunkey.y += Math.abs(dunkey.speedy)
		}
		
		if(key==32){//left           //DUNKEYBULLET
		
		
			 if(weapon.x > w || weapon.speedx == 0 || key == 32){
				weapon.x = dunkey.x + 80
				weapon.y = dunkey.y + 40
				weapon.speedx = 20
			}
			
		}
		
	}, false); //End the event listener

	

	

})

