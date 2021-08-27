let player;
let bgImg;
let playerImg;
let obsImg;
let obstacles = [];
let wordClassfier;

function preload() {
  bgImg = loadImage("Backround.jpg");
  playerImg = loadImage("Player.gif");
  obsImg = loadImage("Obstacle.png");
  GameOver = loadImage("GAME OVER.png");

  let options = {
    probabilitythreshold: 0.85,
  };
  wordClassfier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(650, 400);
  player = new Player();
  wordClassfier.classify(heardword);
}
function heardword(error, results) {
  console.log(results[0].label + "  " + results[0].confidence);
  if (results[0].label == "up") {
    player.jump();
  }
}

function draw() {
  background(bgImg);
  player.show();
  player.move();
  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }
  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      image(GameOver, 183, 50, 300, 40);

      noLoop();
    }
  }
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}
