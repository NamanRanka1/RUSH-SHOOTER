var hero,enemy,back,bull;
var heroIMG,BACKgroundIMG,enemyIMG,bulletsIMG;
var END=2;
var PLAY=1;
var START=0;
var gameState=START;
var a;
var invisibleGround;
var BULLgroup,ENEMgroup;
var score=0;
var SBG;
var PBG;
var startius;
 var won,lose;
 var results,replay,restart;



function preload(){

heroIMG=loadAnimation("p1.png","p2.png","p3.png","p4.png","p5.png","p6.png");
BACKgroundIMG=loadImage("bacu.jpg");
enemyIMG=loadImage("enem.png");
bulletsIMG=loadImage("bullets.png");
SBG=loadImage("SBGIMG.png");
PBG=loadImage("pllla.png");
won=loadImage("YOUwon.png");
lose=loadImage("YOUlose.png");
replay=loadImage("restart.png");
}

function setup(){

createCanvas(displayWidth,displayHeight-115);


results=createSprite(770,300);
results.visible=false;


restart=createSprite(displayWidth-100,100);
restart.addImage(replay);
restart.visible=false;

startius=createSprite(700,510);
startius.addImage(PBG);
startius.scale=0.2;


back=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
back.addImage(BACKgroundIMG);
back.scale=2;


hero=createSprite(300,540);
hero.addAnimation("running",heroIMG);
hero.scale=0.8;
hero.debug=false;
hero.setCollider("rectangle",-40,-20,50,120)

invisibleGround = createSprite(260,displayHeight-280,100,20);
invisibleGround.visible = false;


BULLgroup=createGroup();
ENEMgroup=createGroup();


}

function draw(){


if(gameState===START){//ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

background(SBG)

fill("black");
strokeWeight(3);
stroke("white")

textStyle(BOLD)
textSize(42)
text("WELCOME TO RUSH SHOOTER ",500,150);
textSize(35)
text("HOW TO PLAY:- ",640,250);
textSize(28)
text("-You will be given with two minutes to beat this game",460,300);
textSize(28)
text(" -Press SPACE to jump" ,540,350);
textSize(28)
text("-Press RIGHT ARROW to shoot ",550,400);
textSize(28)
text("-Kill 60 enemies to win the game",550,450);







drawSprites();

hero.visible=false;
back.visible=false;


if(mousePressedOver(startius)){

    gameState=PLAY;
}




} 

if(gameState===PLAY){// ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp

    
    startius.visible=false;

     back.visible=true;
     hero.visible=true;
    

    background("black");


    

    enemi();
    
    back.velocityX=-4;
    if (back.x <displayWidth/2-200){
        back.x = 910;
      }
    
     if(keyWentDown("RIGHT_ARROW")&& frameCount%2===0){
    
        bull=createSprite(hero.x,hero.y,20,10);
        
    bull.addImage(bulletsIMG);
    bull.scale=0.1;
    bull.depth=hero.depth;
        bull.velocityX=6;
        BULLgroup.add(bull);
     }
    
     if(BULLgroup.isTouching(ENEMgroup)){
        
         BULLgroup[0].destroy();
         ENEMgroup[0].destroy();
    
         score=score+1;
     }
    
    
    if(keyDown("space")&&hero.y<800){
    
    hero.velocityY=-10;
    
    }
    
    hero.velocityY+=0.8;
    
    
    
    // gamestate query
    

    
    
    
    
    
    
    
    
    
  
    drawSprites();
    
strokeWeight(2)
stroke("white");
fill("black")
textSize(28)
text("Score :"+score,displayWidth/2,300)
  
    
if(frameCount===3600){
    gameState=END;
}
console.log(gameState);

} 

if (gameState===END){//eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee


    hero.visible=false;
    back.visible=false;
    ENEMgroup.destroyEach();
    BULLgroup.destroyEach();
 
results.visible=true;


restart.visible=true;
restart.scale=0.2;


    
if (score>=60){
  
    background("black")
    results.addImage(won);
    results.scale=1.6;

} else{
    
    results.addImage(lose);
    results.scale=2.1;
}



if (mousePressedOver(restart)){
    resetiiii();
}

drawSprites();

}



hero.collide(invisibleGround);


}

function  enemi(){




if(frameCount%50===0){
  a=Math.round(random(400,displayHeight-300));
enemy=createSprite(displayWidth,a);
enemy.addImage(enemyIMG);
enemy.scale=0.5;
enemy.velocityX=-10;
ENEMgroup.add(enemy);


}








}



function resetiiii(){
    gameState = PLAY;



   results.visible = false;
    restart.visible = false;
    
    /*obstaclesGroup.destroyEach();
    cloudsGroup.destroyEach();
    
    trex.changeAnimation("running",trex_running);*/
    
   
    
    score = 0;
    
  }