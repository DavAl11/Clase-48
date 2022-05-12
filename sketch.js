var player;
var liberty;
var jetImage;
var libertyImage;
var bomb, bombGroup;
var edif1, edif2, edif3, edif4, edif5, edif6, edif7;
var edif1Image, edif2Image, edif3Image, edif4Image, edif5Image, edif6Image, edif7Image;
var explosion;
var life = 8;
var score = 0;
var gameState = 0;
var bala, balaImage;

function preload() {
  jetImage = loadImage("assets/jetbody.png");
  libertyImage = loadImage("assets/liberty.png");
  bombImage = loadImage("assets/jet_02.png");
  edif1Image = loadImage("assets/edif_01.png");
  edif2Image = loadImage("assets/edif_02.png");
  edif3Image = loadImage("assets/edif_03.png");
  edif4Image = loadImage("assets/edif_04.png");
  edif5Image = loadImage("assets/edif_05.png");
  edif6Image = loadImage("assets/edif_06.png");
  edif7Image = loadImage("assets/edif_07.png");
  explosion = loadImage("assets/explosion.png");
  balaImage = loadImage("assets/bala.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  ;
  player = createSprite(windowWidth / 2, windowHeight / 2);
  player.addAnimation("jetbody", jetImage);
  player.scale = 0.4

  liberty = createSprite(windowWidth / 2 - 850, windowHeight - 230);
  liberty.addAnimation("liberty", libertyImage);
  liberty.scale = 0.5
  liberty.addAnimation("explosion0", explosion);


  bombGroup = new Group();

  edif1 = createSprite(windowWidth / 2 - 650, windowHeight - 190);
  edif2 = createSprite(windowWidth / 2 - 450, windowHeight - 220);
  edif3 = createSprite(windowWidth / 2 - 250, windowHeight - 150);
  edif4 = createSprite(windowWidth / 2 + 50, windowHeight - 70);
  edif5 = createSprite(windowWidth / 2 + 350, windowHeight - 70);
  edif6 = createSprite(windowWidth / 2 + 550, windowHeight - 255);
  edif7 = createSprite(windowWidth / 2 + 800, windowHeight - 40);

  edif1.addAnimation("edif1", edif1Image);
  edif1.addAnimation("explosion1", explosion);
  edif2.addAnimation("edif2", edif2Image);
  edif2.addAnimation("explosion2", explosion);
  edif3.addAnimation("edif3", edif3Image);
  edif3.addAnimation("explosion3", explosion);
  edif4.addAnimation("edif4", edif4Image);
  edif4.addAnimation("explosion4", explosion);
  edif5.addAnimation("edif5", edif5Image);
  edif5.addAnimation("explosion5", explosion);
  edif6.addAnimation("edif6", edif6Image);
  edif6.addAnimation("explosion6", explosion);
  edif7.addAnimation("edif7", edif7Image);
  edif7.addAnimation("explosion7", explosion);
}

function draw() {
  edges = createEdgeSprites();

  background("lightblue");

  drawSprites();

  textSize(40);
  text("Puntuación: " + score, 50, 50)

  if (keyDown("w")) {
    player.y = player.y - 12
  }
  if (keyDown("s")) {
    player.y = player.y + 12
  }
  if (keyDown("a")) {
    player.x = player.x - 12
  }
  if (keyDown("d")) {
    player.x = player.x + 12
  }

  if (bombGroup.isTouching(liberty)) {
    liberty.changeAnimation("explosion0")
    life -= 1
  }
  if (bombGroup.isTouching(edif1)) {
    edif1.changeAnimation("explosion1")
    life -= 1
  }
  if (bombGroup.isTouching(edif2)) {
    edif2.changeAnimation("explosion2")
    life -= 1
  }
  if (bombGroup.isTouching(edif3)) {
    edif3.changeAnimation("explosion3")
    life -= 1
  }
  if (bombGroup.isTouching(edif4)) {
    edif4.changeAnimation("explosion4")
    life -= 1
  }
  if (bombGroup.isTouching(edif5)) {
    edif5.changeAnimation("explosion5")
    life -= 1
  }
  if (bombGroup.isTouching(edif6)) {
    edif6.changeAnimation("explosion6")
    life -= 1
  }
  if (bombGroup.isTouching(edif7)) {
    edif7.changeAnimation("explosion7")
    life -= 1
  }
  if (life == 0) {
    gameState = 1
  }

  player.bounceOff(edges);

  spawnBomb();

  if (keyWentDown("space")) {
    bala = createSprite(player.x + 75, player.y + 20);
    bala.addImage("bala", balaImage)
    bala.scale = 0.25;
    bala.velocityX = 50
  }

}

function spawnBomb() {
  if (frameCount % 30 === 0) {
    var num = Math.round(random(0, windowWidth))
    var bomb = createSprite(num, -20);
    bomb.velocityY = 8
    var inr = Math.round(random(-1, 1))
    bomb.velocityX = inr
    bomb.addImage(bombImage);
    bomb.scale = 0.2
    bombGroup.add(bomb);
  }
}
