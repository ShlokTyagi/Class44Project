var NANOTECH
var goblin
var back
var attack
var web
var venom 
var electro
var octopus
var sandman
var morbius
var lizard
var mysterio
var vulture
var morbius

var gameState = "play"
var goblinGroup

function preload(){
backgroundImage = loadImage("back.jpg")
goblinImage = loadImage("goblin.jpg")
NANOTECHImage = loadImage("NANOTECH.jpg")
attackImage = loadImage("attack.jpg")
webImage = loadImage("web.jpg")
venomImage = loadImage("venom.jpg")
electroImage = loadImage("electro.jpg")
octopusImage = loadImage("octopus.jpg")
carnageImage = loadImage("carnage.jpg")
sandmanImage = loadImage("sandman.jpg")
vultureImage = loadImage("vulture.jpg")
mysterioImage = loadImage("mysterio.jpg")
lizardImage = loadImage("lizard.jpg")
morbiusImage = loadImage("morbius.jpg")

}

function setup() {
  createCanvas(900,800);
 NANOTECH =createSprite(80,400,40,60)
 NANOTECH.addImage(NANOTECHImage)
 NANOTECH.scale = 0.2
 //attack =createSprite(300,300,40,60)
 //attack.addImage(attackImage)
 //attack.scale = 0.2


  

  goblinGroup = createGroup()

}
function draw() {
  background(backgroundImage)

 if(gameState=== "play"){
  if(keyIsDown(UP_ARROW)){
    NANOTECH.velocityY = -5
  
   }
    
   NANOTECH.velocityY = NANOTECH.velocityY + 0.5
  
   if(keyWentDown(DOWN_ARROW)){
   // attack.createSprite(300,300,40,60)
    NANOTECH.addImage(attackImage)
    NANOTECH.scale = 0.5
    web = createSprite(300,400,120,50)
web.addImage(webImage)
    web.scale = 0.05
    
    web.velocityX = 9
   }
   if(keyWentUp(DOWN_ARROW)){
     NANOTECH.addImage(NANOTECHImage)
     NANOTECH.scale = 0.2
  
  
   }
  if (goblinGroup.isTouching(web)){
   goblinGroup.destroyEach()
  // web.destroy()
  }
  }
  
   
 
 bullet()
  

     
  
  drawSprites();
}
  
function bullet(){
  if(frameCount % 200===0){
    goblin =createSprite(740,600,50,70)
    venom =createSprite(740,600,50,70)
    carnage =createSprite(740,600,50,70)
    electro =createSprite(740,600,50,70)
    mysterio =createSprite(740,600,50,70)
    lizard =createSprite(740,600,50,70)
    octopus =createSprite(740,600,50,70)
    sandman =createSprite(740,600,50,70)
    vulture =createSprite(740,600,40,60)
    morbius =createSprite(740,600,50,70)

  var rand = Math.round(random(1,10));
    switch(rand) {
      case 1: goblin.addImage(goblinImage);
              break;
      case 2: goblin.addImage(venomImage);
              break;
      case 3: goblin.addImage(octopusImage);
              break;
      case 4: goblin.addImage(electroImage);
              break;
      case 5: goblin.addImage(carnageImage);
              break;
      case 6: goblin.addImage(sandmanImage);
              break;
      case 7: goblin.addImage(lizardImage);
              break;
      case 8: goblin.addImage(mysterioImage);
              break;
      case 9: goblin.addImage(vultureImage);
              break;
      case 10: goblin.addImage(morbiusImage);
              break;
     default:break
    }
    goblin.scale=0.5
    goblin.velocityY = -2
   web.depth = goblin.depth + 1
    goblinGroup.add(goblin)
  }
  
}




