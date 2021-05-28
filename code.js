var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["45900c37-34d4-45c6-b9e4-544162ea45bb","4cb7571a-117e-48a6-82bd-45afb5d0ddb8","107c159c-7184-47fd-a17f-325cab00b8d5","64c0bb5c-b1c3-41a5-8eb2-214f31a0fba8","6a2c22a8-3cd9-4ca2-b26e-9cae7e926d75","f0860fd4-0d7f-44d8-9874-d4b2a78f87ef","f02009df-a329-409a-b4c7-ef8357f52b9f","474b8c9c-038d-4f6a-955f-4a391d4a2874","3b1c3e84-022c-41c9-9eab-55f3abeb777b"],"propsByKey":{"45900c37-34d4-45c6-b9e4-544162ea45bb":{"name":"Coronavirus-CDC-645x645.jpg_1","sourceUrl":"assets/v3/animations/fQVxhK-hX8zhEfxBD0HdT8Zkbx3GNSPVUfEogwHTF4w/45900c37-34d4-45c6-b9e4-544162ea45bb.png","frameSize":{"x":645,"y":645},"frameCount":1,"looping":true,"frameDelay":4,"version":"lHDrIxrJG_Jg4tZb6EBJewBxddjii5.C","loadedFromSource":true,"saved":true,"sourceSize":{"x":645,"y":645},"rootRelativePath":"assets/v3/animations/fQVxhK-hX8zhEfxBD0HdT8Zkbx3GNSPVUfEogwHTF4w/45900c37-34d4-45c6-b9e4-544162ea45bb.png"},"4cb7571a-117e-48a6-82bd-45afb5d0ddb8":{"name":"virus03_04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png"},"107c159c-7184-47fd-a17f-325cab00b8d5":{"name":"virus03_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KoZz0QksHdpzqfX71bq5vgJR__O0e4sP/category_germs/virus03_03.png","frameSize":{"x":388,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"KoZz0QksHdpzqfX71bq5vgJR__O0e4sP","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KoZz0QksHdpzqfX71bq5vgJR__O0e4sP/category_germs/virus03_03.png"},"64c0bb5c-b1c3-41a5-8eb2-214f31a0fba8":{"name":"gameplaywacky_13_1","sourceUrl":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png","frameSize":{"x":400,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png"},"6a2c22a8-3cd9-4ca2-b26e-9cae7e926d75":{"name":"covid vaccine","sourceUrl":"assets/v3/animations/fQVxhK-hX8zhEfxBD0HdT8Zkbx3GNSPVUfEogwHTF4w/6a2c22a8-3cd9-4ca2-b26e-9cae7e926d75.png","frameSize":{"x":1200,"y":900},"frameCount":1,"looping":true,"frameDelay":4,"version":"jw90rf5vOq1Ov.bviQC3ERuFLrdTCZV8","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":900},"rootRelativePath":"assets/v3/animations/fQVxhK-hX8zhEfxBD0HdT8Zkbx3GNSPVUfEogwHTF4w/6a2c22a8-3cd9-4ca2-b26e-9cae7e926d75.png"},"f0860fd4-0d7f-44d8-9874-d4b2a78f87ef":{"name":"sanitizer","sourceUrl":"assets/v3/animations/fQVxhK-hX8zhEfxBD0HdT8Zkbx3GNSPVUfEogwHTF4w/f0860fd4-0d7f-44d8-9874-d4b2a78f87ef.png","frameSize":{"x":600,"y":600},"frameCount":1,"looping":true,"frameDelay":4,"version":"cCs8Y2AFSnZgYwua8E7ygm1MsShhK_OW","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/v3/animations/fQVxhK-hX8zhEfxBD0HdT8Zkbx3GNSPVUfEogwHTF4w/f0860fd4-0d7f-44d8-9874-d4b2a78f87ef.png"},"f02009df-a329-409a-b4c7-ef8357f52b9f":{"name":"mask","sourceUrl":"assets/v3/animations/fQVxhK-hX8zhEfxBD0HdT8Zkbx3GNSPVUfEogwHTF4w/f02009df-a329-409a-b4c7-ef8357f52b9f.png","frameSize":{"x":700,"y":700},"frameCount":1,"looping":true,"frameDelay":4,"version":"CikJUjmvgTfoG8IrR6kZQPR1n2oP4g5_","loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":700},"rootRelativePath":"assets/v3/animations/fQVxhK-hX8zhEfxBD0HdT8Zkbx3GNSPVUfEogwHTF4w/f02009df-a329-409a-b4c7-ef8357f52b9f.png"},"474b8c9c-038d-4f6a-955f-4a391d4a2874":{"name":"distance","sourceUrl":"assets/v3/animations/fQVxhK-hX8zhEfxBD0HdT8Zkbx3GNSPVUfEogwHTF4w/474b8c9c-038d-4f6a-955f-4a391d4a2874.png","frameSize":{"x":246,"y":205},"frameCount":1,"looping":true,"frameDelay":4,"version":"duODu2RHQwC2DgXDCeR2XtoT4SOmU3uG","loadedFromSource":true,"saved":true,"sourceSize":{"x":246,"y":205},"rootRelativePath":"assets/v3/animations/fQVxhK-hX8zhEfxBD0HdT8Zkbx3GNSPVUfEogwHTF4w/474b8c9c-038d-4f6a-955f-4a391d4a2874.png"},"3b1c3e84-022c-41c9-9eab-55f3abeb777b":{"name":"distanc","sourceUrl":"assets/v3/animations/fQVxhK-hX8zhEfxBD0HdT8Zkbx3GNSPVUfEogwHTF4w/3b1c3e84-022c-41c9-9eab-55f3abeb777b.png","frameSize":{"x":600,"y":600},"frameCount":1,"looping":true,"frameDelay":4,"version":"g41txCyPjDwQXKz0WxS8N6KVS6ts_su3","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/v3/animations/fQVxhK-hX8zhEfxBD0HdT8Zkbx3GNSPVUfEogwHTF4w/3b1c3e84-022c-41c9-9eab-55f3abeb777b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

playSound("assets/Mission-Impossible-Themefull-the.mp3",true);

//creating the walls
var wall1 = createSprite(250,100,400,5);
wall1.shapeColor = "red";
var wall2 = createSprite(150,200,400,5);
wall2.shapeColor = "green";
var wall3 = createSprite(250,300,400,5);
wall3.shapeColor = "maroon";

//creating the player
var player = createSprite(350,50,15,15);
player.shapeColor = "green";

//creating the easy balls
var easyball1 = createSprite(300,0,10,10);
easyball1.velocityX = 0;
easyball1.velocityY = 8;
easyball1.shapeColor = "red";
easyball1.setAnimation("virus03_04_1");
easyball1.scale = 0.06;
var easyball2 = createSprite(250,100,10,10);
easyball2.velocityX = 0;
easyball2.velocityY = -7;
easyball2.shapeColor = "red";
easyball2.setAnimation("virus03_04_1");
easyball2.scale = 0.06;
var easyball3 = createSprite(200,0,10,10);
easyball3.velocityX = 0;
easyball3.velocityY = 8;
easyball3.shapeColor = "red";
easyball3.setAnimation("virus03_04_1");
easyball3.scale = 0.06;
var easyball4 = createSprite(150,100,10,10);
easyball4.velocityX = 0;
easyball4.velocityY = -9;
easyball4.shapeColor = "red";
easyball4.setAnimation("virus03_04_1");
easyball4.scale = 0.06;
var easyball5 = createSprite(100,0,10,10);
easyball5.velocityX = 0;
easyball5.velocityY = 10;
easyball5.shapeColor = "red";
easyball5.setAnimation("virus03_04_1");
easyball5.scale = 0.06;



//creating the level2 balls
var mediumball1 = createSprite(60,175,12.5,12.5);
mediumball1.velocityX = 0;
mediumball1.velocityY = 6;
mediumball1.shapeColor = rgb(255,69,0);
mediumball1.setAnimation("virus03_03_1");
mediumball1.scale = 0.06;
var mediumball2 = createSprite(111,150,12.5,12.5);
mediumball2.velocityX = 0;
mediumball2.velocityY = 2.5;
mediumball2.shapeColor = rgb(255,69,0);
mediumball2.setAnimation("virus03_03_1");
mediumball2.scale = 0.06;
var mediumball3 = createSprite(158,100,12.5,12.5);
mediumball3.velocityX = 0;
mediumball3.velocityY = 3.4;
mediumball3.shapeColor = rgb(255,69,0);
mediumball3.setAnimation("virus03_03_1");
mediumball3.scale = 0.06;
var mediumball4 = createSprite(210,196,12.5,12.5);
mediumball4.velocityX = 0;
mediumball4.velocityY = 2.5;
mediumball4.shapeColor = rgb(255,69,0);
mediumball4.setAnimation("virus03_03_1");
mediumball4.scale = 0.06;
var mediumball5 = createSprite(267,150,12.5,12.5);
mediumball5.velocityX = 0;
mediumball5.velocityY = 2.5;
mediumball5.shapeColor = rgb(255,69,0);
mediumball5.setAnimation("virus03_03_1");
mediumball5.scale = 0.06;


//creating the tough balls
var toughball1 = createSprite(313,250,10,10);
toughball1.setAnimation("gameplaywacky_13_1");
toughball1.scale = 0.06;
toughball1.velocityX = 0;
toughball1.velocityY = 3;
var toughball2 = createSprite(260,200,10,10);
toughball2.setAnimation("gameplaywacky_13_1");
toughball2.scale = 0.06;
toughball2.velocityX = 0;
toughball2.velocityY = 6;
var toughball3 = createSprite(205,296,10,10);
toughball3.setAnimation("gameplaywacky_13_1");
toughball3.scale = 0.06;
toughball3.velocityX = 0;
toughball3.velocityY = 3; 
var toughball4 = createSprite(150,250,10,10);
toughball4.setAnimation("gameplaywacky_13_1");
toughball4.scale = 0.06;
toughball4.velocityX = 0;
toughball4.velocityY = 6; 
var toughball5 = createSprite(94,200,10,10);
toughball5.setAnimation("gameplaywacky_13_1");
toughball5.scale = 0.06;
toughball5.velocityX = 0;
toughball5.velocityY = 3; 

//creating coranavirus
var covid1 = createSprite(300,350,10,10);
covid1.shapeColor = "purple";
covid1.setAnimation("Coronavirus-CDC-645x645.jpg_1");
covid1.scale = 0.07;
covid1.velocityY = 2;
var covid2 = createSprite(220,350,10,10);
covid2.shapeColor = "purple";
covid2.scale = 0.07;
covid2.setAnimation("Coronavirus-CDC-645x645.jpg_1");
covid2.velocityY = 2.2;
var covid3 = createSprite(135,400,10,10);
covid3.shapeColor = "purple";
covid3.scale = 0.07;
covid3.setAnimation("Coronavirus-CDC-645x645.jpg_1");
covid3.velocityY = 2.2;
var covid4 = createSprite(70,300,10,10);
covid4.shapeColor = "purple";
covid4.scale = 0.07;
covid4.setAnimation("Coronavirus-CDC-645x645.jpg_1");
covid4.velocityY = 2.2;

//creating the vaccine
var vaccine = createSprite(370,350,10,10);
vaccine.setAnimation("covid vaccine");
vaccine.scale = 0.06;
player.velocityX = 0;
player.velocityY = 0;

//creating the sanitizer
var sanitizer = createSprite(20,50,10,01);
sanitizer.setAnimation("sanitizer");
sanitizer.scale = 0.1;

//creating the mask
var mask = createSprite(380,145,10,10);
mask.setAnimation("mask");
mask.scale = 0.1;

// should follow social distance
var distance = createSprite(20,235,10,10);
distance.setAnimation("distanc");
distance.scale = 0.05;

var playerdeaths = 0;


function draw() {
 background("white");
 
//Controls For The Player 
if(keyDown("up")){
  player.y = player.y -10;
} 
if(keyDown("down")){
  player.y = player.y +10;
}
if(keyDown("left")){
  player.x = player.x -10;
}
if(keyDown("right")){
  player.x = player.x +10;
}


if(mediumball1.isTouching(wall1)){
  mediumball1.shapeColor = "red";
}
if(mediumball1.isTouching(wall2)){
  mediumball1.shapeColor = "orange";
}
if(player.isTouching(easyball1) || player.isTouching(easyball2) || player.isTouching(easyball3) || player.isTouching(easyball4) || player.isTouching(easyball5) || player.isTouching(covid1) || player.isTouching(covid2) || player.isTouching(covid3) || player.isTouching(covid4) || player.isTouching(mediumball1) || player.isTouching(mediumball2) || player.isTouching(mediumball3) || player.isTouching(mediumball4) || player.isTouching(mediumball5) || player.isTouching(toughball1) || player.isTouching(toughball2) || player.isTouching(toughball3) || player.isTouching(toughball4 ) || player.isTouching(toughball5) ){
  player.x = 350;
  player.y = 50;
  playerdeaths = playerdeaths + 1;
  
   
}

if(player.isTouching(vaccine)){
  fill("blue");
  stroke("blue");
  textSize(20);
  text("You Are Vaccinated And Safe" , 90,190);
  end();
}
if(player.isTouching(sanitizer)){
  sanitizer1();
}
if(player.isTouching(mask)){
  mask1();
}
if(player.isTouching(distance)){
  distance1();
}

createEdgeSprites();
easyball1.bounceOff(wall1);
easyball1.bounceOff(topEdge);
easyball2.bounceOff(wall1);
easyball2.bounceOff(topEdge);
easyball3.bounceOff(wall1);
easyball3.bounceOff(topEdge);
easyball4.bounceOff(wall1);
easyball4.bounceOff(topEdge);
easyball5.bounceOff(wall1);
easyball5.bounceOff(topEdge);

mediumball1.bounceOff(wall1);
mediumball1.bounceOff(wall2);
mediumball2.bounceOff(wall1);
mediumball2.bounceOff(wall2);
mediumball3.bounceOff(wall1);
mediumball3.bounceOff(wall2);
mediumball4.bounceOff(wall1);
mediumball4.bounceOff(wall2);
mediumball5.bounceOff(wall1);
mediumball5.bounceOff(wall2);

toughball1.bounceOff(wall2);
toughball1.bounceOff(wall3);
toughball2.bounceOff(wall2);
toughball2.bounceOff(wall3);
toughball3.bounceOff(wall2);
toughball3.bounceOff(wall3);
toughball4.bounceOff(wall2);
toughball4.bounceOff(wall3);
toughball5.bounceOff(wall2);
toughball5.bounceOff(wall3);
covid1.bounceOff(bottomEdge);
covid1.bounceOff(wall3);
covid2.bounceOff(bottomEdge);
covid2.bounceOff(wall3);
covid3.bounceOff(bottomEdge);
covid3.bounceOff(wall3);
covid4.bounceOff(bottomEdge);
covid4.bounceOff(wall3);
player.bounceOff(wall1);
player.bounceOff(wall2);
player.bounceOff(wall3);
player.bounceOff(edges);
player.bounceOff(sanitizer);
player.bounceOff(mask);
player.bounceOff(distance);

  drawSprites();
}






function sanitizer1(){
  mediumball1.destroy();
  mediumball2.setVelocity(0,2);
  mediumball3.destroy();
  mediumball4.setVelocity(0,2.5);
  mediumball5.setVelocity(0,1.7);
  
}
function mask1(){
  toughball1.setVelocity(0,2);
  toughball2.destroy();
  toughball3.setVelocity(0,2);
  toughball4.destroy();
  toughball5.setVelocity(0,2);
}
function distance1(){
 covid1.destroy(); 
 covid2.setVelocity(0,3);
 covid3.destroy();
 covid4.setVelocity(0,3);
}
function end(){
  easyball1.destroy();
  easyball2.destroy();
  easyball3.destroy();
  easyball4.destroy();
  easyball5.destroy();
  
  mediumball1.destroy();
  mediumball2.destroy();
  mediumball3.destroy();
  mediumball4.destroy();
  mediumball5.destroy();
  
  toughball1.destroy();
  toughball2.destroy();
  toughball3.destroy();
  toughball4.destroy();
  toughball5.destroy();
  
  covid1.destroy();
  covid2.destroy();
  covid3.destroy();
  covid4.destroy();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
