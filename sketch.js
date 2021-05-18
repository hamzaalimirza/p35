var virtaulpet;

var dog,happyDog;
var database;
var foodS;
var foodStock;

function preload(){

  dogimage = loadImage("sprite/dogimg.png");

}

function setup() {
	createCanvas(500, 500);
  database = firebase.database()
    var foodStock = database.ref("food");
    foodStock.on("value",readStock);
  dog = createSprite(200,40,20,20);
  dog.addImage(dogImage);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  
if(x<=0){
  x=0;
}else{
  x=x-1

}

database.ref('/').update({
Food:x
})

}



