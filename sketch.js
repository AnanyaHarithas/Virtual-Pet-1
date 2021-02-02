//Create variables here
var dog, happyDog, database;
var foodS, foodStock;

function preload() {
  //load images here
  dogImage=loadImage('images/Dog.png');
  dog1Image=loadImage('images/happydog.png');
}

function setup() {
  createCanvas(500, 500);
 dog= createSprite(250,250,10,20);
 dog.addImage(dogImage);
 dog.scale=0.2;
database = firebase.database();
foodStock=database.ref('Food');
foodStock.on("value",readStock);
  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog1Image);
  }
  drawSprites();
  //add styles here

  fill("white")
  stroke("white") 
  text("Food Remaining = "+ foodS, 300,100);
}


function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}
