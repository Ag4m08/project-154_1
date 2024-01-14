AFRAME.registerComponent("treasure", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `circle${i}`;
  
        //position variables     
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createCoins(id, position);
      }
    } ,
  
    createCoins: function(id, position) { 
      
      var islandE1 = document.querySelector("#island");
  
      var coinsE1 = document.createElement("a-entity");
  
      coinsE1.setAttribute("id",id);
      coinsE1.setAttribute("position",position);
      
      coinsE1.setAttribute("material","color","#ff9100");
      
      coinsE1.setAttribute("geometry",{ primitive: "circle",radius: 8 });   
  
      islandE1.appendChild(coinsE1);
    }
  });
  
  