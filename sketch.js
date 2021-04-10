  var P_Button;
  var f1,f2,f3,f4;
  var f1i,f2i,f3i,f4i;
  var gameState="start";
  var redG,blueG,yellowG,pinkG;
  var mImg,Minu;
  var bbees,bbeesi;
  var bb2,bb3;
 var edges;
  var score=0;
  var SCore=0;
  var bg1;
  var bitten=0;
var beegroup;
 var time2=90;
 var right,wrong;
 var b,bb,bbb;
 var yes,mhm;
 var byee;

  function preload(){
    f1i=loadImage("IMAGES/b11.png"); 
    f2i=loadImage("IMAGES/p11.png");
    f3i=loadImage("IMAGES/r11.png");
    mImg=loadImage("IMAGES/m1.png");
    bbeesi=loadImage("IMAGES/bee2.png");
    bg1=loadImage("IMAGES/Bumble field.jpg");
    f4i=loadImage("IMAGES/yellow.png");
    right=loadSound("IMAGES/Sound/Collecting sound.mp3");
    wrong=loadSound("IMAGES/Sound/Wrong thing collected sound.mp3");
    b=loadImage("IMAGES/Basket.png");
    bbb=loadImage("IMAGES/full.png");
    mhm=loadImage("IMAGES/mhm.png");
    byee=loadSound("IMAGES/Sound/ooh.mp3");
  }

  function setup() {
    createCanvas(800,400);

    P_Button=createSprite(400,200,800,400);
    P_Button.visible=false;
yes=createSprite(400,100,10,10);
yes.scale=0.3;
yes.addImage(mhm);
yes.visible=false;

    Minu=createSprite(400,100,40,20);
    Minu.addImage("bear",mImg);
    Minu.scale=0.2;
    Minu.visible=false;
bb=createSprite(750,360,40,40);
bb.scale=0.4;
bb.addImage(b);
    edges=createEdgeSprites();
    
  redG=createGroup();
  blueG=createGroup();
  yellowG=createGroup();
  pinkG=createGroup();
beegroup=createGroup();

  bbees=createSprite(Math.round(random(100,700)),Math.round(random(90,390)),30,30);
  bbees.addImage("bees",bbeesi);
  bbees.velocityX=2;
  bbees.scale=0.3;
 // beegroup.add(bbees);
  bbees.visible=false;
 
   bb2=createSprite(Math.round(random(100,700)),Math.round(random(90,390)),30,30);
  bb2.addImage("bees",bbeesi);
  bb2.velocityX=2;
  bb2.scale=0.3;
 // beegroup.add(bb2);
   bb2.visible=false;
   
   bb3=createSprite(Math.round(random(100,700)),Math.round(random(90,390)),30,30);
   bb3.addImage("bees",bbeesi);
   bb3.velocityX=2;
   bb3.scale=0.3;
  // beegroup.add(bb3);
   bb3.visible=false;
   

  }

  function draw() {
    
   
    Minu.collide(edges);

    bbees.bounceOff(edges);

    bb2.bounceOff(edges);

    bb3.bounceOff(edges);

    if(gameState==="start"){
    background(0); 
    text(mouseX+" "+mouseY,mouseX,mouseY);
    textFont("Monaco");
  fill("white");
  text("Click Anywhere to Play",370,200);
    
    if(mousePressedOver(P_Button)){
      gameState="play";
    }
  }

  if(gameState==="play"){
    level1();
    P_Button.visible=false;

    
  
    /*bb2.visible=true;
    bb3.visible=true;
    bbees.visible=true;*/

  }

  if(Minu.isTouching(bbees)||Minu.isTouching(bb2)||Minu.isTouching(bb3)){
    bitten=bitten+1;
    byee.play();
  }

  if(bitten>10){
    gameState="end";
  }

  if(score===10||SCore===10){
    console.log("You are going to level 2!, Level 1 passed!")
 /* background("black");
  text("Level 2, collect flowers but in 90 secs!",400,200);
    level2();*/
  }

  if(redG.isTouching(Minu)){
    score=score+1;
    SCore=SCore+1;
    pinkG.destroyEach();
    blueG.destroyEach();
    redG.destroyEach();
    yellowG.destroyEach();
    text("Good! Continue",400,50);
    right.play();
    textSize(160);
    text("✅",width/2,height/2);
    //yes.visible=true;
  }
//bbees.debug = true;
///bbees.setCollider("rectangle",0,0,bbees.width,bbees.height);
  if(pinkG.isTouching(Minu)||blueG.isTouching(Minu)||yellowG.isTouching(Minu)){
    score=score-1;
    SCore=SCore-1;
    pinkG.destroyEach();
    blueG.destroyEach();
    redG.destroyEach();
    yellowG.destroyEach();
    text("oops...",400,50);
    push();
    textSize(100);
    fill("red");
    text("X",width/2,height/2);
    pop();
    wrong.play();
  }
  /*if(beegroup.isTouching(Minu)){
    bitten=bitten+1;
   // beegroup.destroyEach();
  }*/

  if(keyDown("RIGHT_ARROW")){
    Minu.x=Minu.x+10;
  }

  if(keyDown("LEFT_ARROW")){
    Minu.x=Minu.x-10;
  }

  if(keyDown("UP_ARROW")){
    Minu.y=Minu.y-10;
  }

  if(keyDown("DOWN_ARROW")){
    Minu.y=Minu.y+10;
  }
if(SCore===10){
bb.addImage(bbb);
}
  drawSprites();

  textSize(25);
  fill("Magenta");
  stroke("Magenta");
  strokeWeight(2);
  text("Score:"+score,700,50);
  text("Bitten:"+bitten,600,50);
  push();
  fill(0);
  stroke(0);
  text(""+SCore,745,373)
pop();
  

  if(gameState==="end"){
   // byee.play();
    background("lime")
    text("Game over",400,200);
    text("R to restart",400,300);
    if(keyDown("R")){
      gameState="play"
      score=0;
      SCore=0;
      bitten=0;
      Minu.x=400;
      Minu.y=100;
    }
    if(keyDown("r")&& gameState==="end"){
      gameState="play";
    
      Minu.x=400;
      Minu.y=100;
  
      score=0;
      bitten=0;
    }
  }
  
   
 
  }

  function level1(){

  console.log("Level 1!");

  background(bg1);

  textSize(25);
  fill("Magenta");
  stroke("Magenta");
  strokeWeight(1);
  text(" Collect Red colour Flowers!",200,390);

  Minu.visible=true;
  bbees.visible=true;
  bb2.visible=true;
  bb3.visible=true;
  var rand=Math.round(random(1,4));
  if(frameCount%60===0){
    if(rand===1){
      pinkf();
    }
    else if(rand===2){
    redf();
    }
    else if(rand===3){
    bluef();
    }
    else{
    yellowf();
    }
  } 
  /*if(frameCount%60===0){
  bluef();
  pinkf();
  redf();
  yellowf();
  }*/
  }

  function bluef(){
    f1=createSprite(Math.round(random(20,780)),Math.round(random(50,380)),30,30);
    f1.addImage("blue flower",f1i);
    f1.scale=0.2;
    f1.lifetime=180;
    blueG.add(f1);  
  }

  function pinkf(){
    f2=createSprite(Math.round(random(20,780)),Math.round(random(50,380)),30,30);
    f2.addImage("pink flower ",f2i)
    f2.scale=0.2;
    f2.lifetime=180;
    pinkG.add(f2);
  }

  function redf(){
    f3=createSprite(Math.round(random(20,780)),Math.round(random(50,380)),30,30);
    f3.addImage("Red flower ",f3i)
    f3.scale=0.2;
    f3.lifetime=180;
    redG.add(f3);
  }

  function yellowf(){

    f4=createSprite(Math.round(random(20,780)),Math.round(random(50,380)),30,30);
  // f4=createSprite(400,200,20,20);
  f4.scale=0.1 ;
  f4.lifetime=180;
    f4.addImage("yellow flower",f4i);
    yellowG.add(f4);
    }
  
  
 
 /* function level2(){
     background(bg1);
     console.log("level 2!")
     textSize(25);
  fill("Magenta");
  stroke("Magenta");
  strokeWeight(1);
  text(" Collect Red colour Flowers!",200,390);

  text("Time:"+time2,600,10);
  Minu.visible=true;
  bbees.visible=true;
  bb2.visible=true;
  bb3.visible=true;

  if(frameCount%60===0){
  bluef();
  pinkf();
  redf();
  }
  if(frameCount%30===0){
    time2=time2-1;
    
  }
  if(time2===0){
    gameState="end";
  }
  if(score==10 && time2>0){
    console.log("level 2 passed!")

  }
   }*/
   
 