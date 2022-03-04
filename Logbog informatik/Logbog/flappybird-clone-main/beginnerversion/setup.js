 //game variables
const gameOverSound = new Audio("../assets/sounds/gameover.mp3");
const music = new Audio("../assets/sounds/Break Free.mp3");
      music.loop = true;
      music.volume = 0.5;
const debugModeIsOn = true;
const startKey = "s";
const restartKey = "r";
const hitboxColor = "#00FF02";
const destructionXPosition = -1000;
const spawnXPosition = canvas.width * 1.2
let gameState = "menu"; // menu, action or gameover

// bird variables
const birdImage = new Image(90, 90);
      birdImage.src = "../assets/images/flying-bird-png-image-png.png";
const birdStartYPosition = 250;
const birdStartYSpeed = 0;
const birdStartYAccelleration = 0;
const birdBeginningYAccelleration = 0.7;
const birdXPosition = 250;
const birdHitboxRadius = 30;
const birdFlapForce = -12;
const birdFlapKey = " ";
let birdYSpeed = birdStartYSpeed;
let birdYAccelleration = birdStartYAccelleration;
let birdYPosition = birdStartYPosition;
let birdCanFlap = false;

// score variables
const scoreImage = new Image(60, 60);
      scoreImage.src = "../assets/images/emoji-flower-emojis-.png";
const scoreImageXPosition = 70;
const scoreImageYPosition = 70;
const scoreTextXPosition = 100;
const scoreTextYPosition = 90;
const scoreTextSize = 50;
const scoreTextColor = "yellow";
let scoreValue = 0;

// cloud variables
const cloudImage = new Image(200, 200);
      cloudImage.src = "../assets/images/cloud.png";
const cloudSpawnInterval = 10000; // milliseconds
const cloudXSpeed = -.7;
let cloudTimeSinceLastSpawn = 0; // milliseconds
let clouds = [
    {
        xPosition: canvas.width,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width -500,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width-1000,
        yPosition: randomBetween(0, canvas.height/2), 
    },
];

// fireball variables
const fireballImage = new Image(350, 350);
      fireballImage.src = "../assets/images/heart-256x256.png";
const fireballXSpeed = -5.5;
const fireballHitboxRadius = 100;
const fireballSpawnInterval = 2000;
let fireballTimeSinceLastSpawn = fireballSpawnInterval;
let fireballs = [];

// coin variables
const coinSound = new Audio("../assets/sounds/coin.wav");
const coinImage = scoreImage; 
const coinHitboxRadius = 30;
const coinXSpeed = -5;
const coinSpawnInterval = 1000;
const coinValue = 1;
let coinTimeSinceLastSpawn = coinSpawnInterval
let coins = [];

// menu text variables
const menuFirstText = "Press " + startKey + " to start";
const menuTextXPosition = 300;
const menuTextYPosition = 400; 
const menuSecondText = "Press space to flap wings";
const menuTextSize = 60;
const menuTextColor = "yellow";
const gameOverText = "Press " + restartKey + " to restart";

// diamond variables
const diamondSound = coinSound;
const diamondImage = new Image(60, 60);
      diamondImage.src = "../assets/images/pink-diamond-png.png";
const diamondHitboxRadius = 30;
const diamondXSpeed = -10;
const diamondSpawnInterval = 5000;
const diamondValue = 5;
let diamondXPosition = canvas.width;
let diamondYPosition = randomBetween(0, canvas.height);
let diamondTimeSinceLastSpawn = diamondSpawnInterval
let diamonds = [];

// simon variables
const simonSound = coinSound;
const simonImage = new Image(60, 60);
      simonImage.src = "../assets/images/simon.png";
const simonHitboxRadius = 30;
const simonXSpeed = -10;
const simonSpawnInterval = 500;
const simonValue = 15;
let simonXPosition = canvas.width;
let simonYPosition = randomBetween(0, canvas.height);
let simonTimeSinceLastSpawn = simonSpawnInterval
let simons = [];

// chocolate variables
const chocolateSound = coinSound;
const chocolateImage = new Image(60, 60);
      chocolateImage.src = "../assets/images/lovepik-love-chocolate-png.png";
const chocolateHitboxRadius = 30;
const chocolateXSpeed = -10;
const chocolateSpawnInterval = 10000;
const chocolateValue = 50;
let chocolateXPosition = canvas.width;
let chokolateYPosition = randomBetween(0, canvas.height);
let chocolateTimeSinceLastSpawn = chocolateSpawnInterval
let chocolates = [];