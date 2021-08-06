var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4681a7e7-a43b-4634-9bff-6f282e6b7fd0"],"propsByKey":{"4681a7e7-a43b-4634-9bff-6f282e6b7fd0":{"name":"kidportrait_02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV/category_faces/kidportrait_02.png","frameSize":{"x":264,"y":362},"frameCount":1,"looping":true,"frameDelay":2,"version":"puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":362},"rootRelativePath":"assets/api/v1/animation-library/gamelab/puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV/category_faces/kidportrait_02.png"}}};
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

var life = 3;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  sam.setAnimation("kidportrait_02_1");
 sam.scale=0.1;
//add the velocity to make the car move.
car1.velocityY=7;
car2.velocityY=7;
car3.velocityY=-7;
car4.velocityY=-7;

function draw() {
  background("white");
  textSize(25);
  text("Lives: " + life,160,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries

car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);

//Add the condition to make the sam move left and right
if(keyDown(RIGHT_ARROW)){
sam.x=sam.x+2;
}
if(keyDown(LEFT_ARROW)){
  sam.x=sam.x-2;
}

//Add the condition to reduce the life of sam if it touches the car.
  if(sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)){
  sam.x=20;
  sam.y=190;
  life=life-1;
  playSound("assets/category_hits/puzzle_game_button_04.mp3")
  }
  if(life===0){
  textSize(20);
  text("Game Over",130,200);
  car1.velocityY=0;
  car2.velocityY=0;
  car3.velocityY=0;
  car4.velocityY=0;
    
    
  }
 drawSprites();
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
