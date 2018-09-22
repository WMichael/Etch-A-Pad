$(document).ready(function() {

  // Variables
  var sizeOfPad = 500;
  var colour = "black" //Default colour of Pixel
  var random = false
  var erase = false
  var recentSize = 16 // Used so addCells function knows previous size of grid.
  var mouseDown = false; // Checks when mouse is down on the page.

  // Function called to set Cells on page load.
  addCells(recentSize) // Default grid of pixels.

  // Event listeners
  $("#clear").click(function(){
    $('#outContainer').effect('shake', {times:2});
    $("#container").empty();
    addCells(recentSize);
  });

  $("#resize").click(function(){
    $("#container").empty();
    var size = prompt("Please enter the new size");
    recentSize = size;
    addCells(size);
    console.log("Add cells");
  });

  $("#randomc").click(function(){
      $(".option").removeClass("selected");
      random = true;
      erase = false;
      $(this).addClass("selected");
  });

  $("#black").click(function(){
      $(".option").removeClass("selected");
      random = false;
      erase = false;
      colour = "black";
      $(this).addClass("selected");
  });

  $("#erase").click(function(){
    $(".option").removeClass("selected");
      random = false;
      erase = true;
      $(this).addClass("selected");
  });

  $(document).mousedown(function(){ mouseDown = true;}).mouseup(function(){ mouseDown = false;});

  // Function called on page load and after a clear & resize.
  function addCells(size) { // Add's the pixels to the grid.
    var pixelSize = sizeOfPad / size
    for(x = 0; x < size; x++) { // X axis
      for(y = 0; y < size; y++) { // Y axis
        $("#container").append("<div class='pixel'> </div>")
      }
    }

     // Applies CSS to all the pixels
    $(".pixel").css({"height":pixelSize,"width":pixelSize});

    // Hover event listener must be applied after everytime a new pixel is added.
    $(".pixel").hover(function(){
      if(mouseDown == true) { // Only if mouse is down on the page.
        if (random == true) { // if random colour is on then change pixel colour randomly.
          colour1 = Math.floor((Math.random() * 255));
          colour2 = Math.floor((Math.random() * 255));
          colour3 = Math.floor((Math.random() * 255));
          colour = "rgb(" + colour1 + ", " + colour2 + ", " + colour3 + ")"
        }

        if (erase == true) {
          colour = "white"
        }

        $(this).css("background-color",colour); // Changes background-color of pixel that is hovered on.
      }
    });
  };

});
