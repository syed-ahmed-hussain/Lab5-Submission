var game_status = 0;

function start() {
 
  window.addEventListener('keydown', moves);
}

function moves(evt) {
var obj = document.getElementById("plane");
var bound = document.getElementById("layout");

    switch (evt.keyCode) {
		case 37:
		 if(game_status == 0){
			var objrect = obj.getBoundingClientRect();	
			var boundrect = bound.getBoundingClientRect();
			if(objrect.left >= boundrect.left + 10){
				obj.style.left = parseInt(obj.style.left) - 10 + 'px';
			}
		 }
        break;
		case 39:
		if(game_status == 0){
			var objrect = obj.getBoundingClientRect();			
			var boundrect = bound.getBoundingClientRect();
			if(objrect.right <= (boundrect.right - 10)){
				obj.style.left = parseInt(obj.style.left) + 10 + 'px';
			}
		}
        break;
        case 38:
		if(game_status == 0){
			var objrect = obj.getBoundingClientRect();			
			var boundrect = bound.getBoundingClientRect();
			var objrect = obj.getBoundingClientRect();
			if(objrect.top >= boundrect.top){
				obj.style.top = parseInt(obj.style.top) - 10 + 'px';
			}
		}
        break;
        case 40:
		if(game_status == 0){
			var objrect = obj.getBoundingClientRect();			
			var boundrect = bound.getBoundingClientRect();
			if(objrect.bottom <= boundrect.bottom){
				obj.style.top = parseInt(obj.style.top) + 10 + 'px';
			}
		}
		break;
    }
};

var x = setInterval(function(){
var gamevoer = document.getElementById("gameover");
var bound = document.getElementById("layout");
var obj = document.getElementById("plane");
var sun = document.getElementById("sun");
var enemy = document.getElementById("enemy");
var enemy2 = document.getElementById("enemy2");
var enemy3 = document.getElementById("enemy3");
var enemy4 = document.getElementById("enemy4");
var enemy5 = document.getElementById("enemy5");

var objrect = obj.getBoundingClientRect();
var sunrect = sun.getBoundingClientRect();
var enemyrect = enemy.getBoundingClientRect();
var enemy2rect = enemy2.getBoundingClientRect();
var enemy3rect = enemy3.getBoundingClientRect();
var enemy4rect = enemy4.getBoundingClientRect();
var enemy5rect = enemy5.getBoundingClientRect();


if((Collision(objrect,sunrect)==0) || (Collision(objrect,enemyrect)==0) || (Collision(objrect,enemy2rect)==0) || (Collision(objrect,enemy3rect)==0) ||(Collision(objrect,enemy4rect)==0) || (Collision(objrect,enemy5rect)==0)){
		bound.style.animationPlayState = "paused";
		enemy.style.animationPlayState = "paused";
		enemy2.style.animationPlayState = "paused";
		enemy3.style.animationPlayState = "paused";
		enemy4.style.animationPlayState = "paused";
		enemy5.style.animationPlayState = "paused";
		gameover.style.display = "block";
		//window.alert("GameOver");
		game_status=1;
		clearInterval(x);
	}
},0.5);

function Collision(obj,enemy) {
	var objleft = obj.left;
	var objright = obj.right;
	var objbottom = obj.bottom;
	var objtop = obj.top;
	var enemleft = enemy.left;
	var enemright = enemy.right;
	var enemtop = enemy.top;
	var enembottom = enemy.bottom;

	if (enemleft < (objright-10) && enemright > (objleft+10) && enemtop < (objbottom-10) && enembottom > (objtop+10)) {
    return 0;
	}
	
	return 1;
};

