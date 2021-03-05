class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
   

    if(gameState === 0){
     car1.visibility = false
     car2.visibility = false
    }

    
   
    
    cars = [car1, car2];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    Player.getCarsInWater();
    
    
    if(allPlayers !== undefined){
     // background(rgb(198,135,103));
      
     // image(groundImg, 140, -100, displayWidth-280, displayHeight-200)
      car1 = createSprite(200,displayHeight/2);
      car1.addImage(carImg1)
      car2 = createSprite(800,displayHeight/2);
      car2.addImage(carImg2)
    
      
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        //cars[index-1].x = x;
       // cars[index-1].y = y;
       // console.log(index, player.index)

       
       // if (index === player.index){
        //  stroke(10);
        //  fill("red");
        //  ellipse(x,y,60,60);
       //   cars[index - 1].shapeColor = "red";
         
        //}
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank)
  }
}
