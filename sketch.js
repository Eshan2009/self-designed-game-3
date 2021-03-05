const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var ground
var water
var groundImg
var carImg1
var carImg2

var form, player, game;

var cars, car1, car2



function preload(){
  groundImg=loadImage("images/groundImg.jpg")
  carImg1=loadImage("images/car-1.png")
  carImg2=loadImage("images/car-2.png")
  
  
  
}

function setup(){
  engine = Engine.create();
	world = engine.world;
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  Engine.run(engine);
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
