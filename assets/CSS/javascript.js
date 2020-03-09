// Initial array of movies
var foods = ["Apple", "Banana", "Tacos", "Cheeseburgers"];

// Generic function for capturing the movie name from the data-attribute
function alertFoodName() {
  var movieName = $(this).attr("data-name");


  alert(foodName);
}

// Function for displaying movie data
function generateButtons() {

  // Deleting the movies prior to adding new movies
  // (this is necessary otherwise we will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of movies
  for (var i = 0; i < foods.length; i++) {

    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of movie to our button
    a.addClass("food");
    // Adding a data-attribute
    a.attr("data-name", foods[i]);
    // Providing the initial button text
    a.text(foods[i]);
    // Adding the button to the HTML
    $("#buttons-view").append(a);
  }
}

// This function handles events where one button is clicked
$("#add-food").on("click", function (event) {
  // Preventing the buttons default behavior when clicked (which is submitting a form)
  event.preventDefault();
  // This line grabs the input from the textbox
  var moreFood = $("#food-input").val().trim();

  // Adding the food from the textbox to our array
  foods.push(moreFood);

  // Calling renderButtons which handles the processing of our movie array
  generateButtons();

});

// Function for displaying the movie info
// We're adding a click event listener to all elements with the class "movie"
// We're adding the event listener to the document because it will work for dynamically generated elements
// $(".movies").on("click") will only add listeners to elements that are on the page at that time
$(document).on("click", ".food", alertFoodName);

// Calling the renderButtons function to display the intial buttons
generateButtons();


// Performing an AJAX request with the queryURL
//$.ajax({
  //this is the url and key for the giphy api
  //url: "http://api.giphy.com/v1/gifs/search?q=food&limit=10&api_key=IRQP9t5IFrEkWl7y1LiJoQR8IUUKqF64",
  //type: "GET",
  //success: function (response) {


    // this loops through the data in the response
   //for (var i = 0; i < response.data.length; i++) {
      //console.log(response.data[i])

      //grabbed the content div and created an image tag and the called the response data, the images, fixed_height, the url
      //$("#content").append("<img src=" + response.data[i].images.fixed_height.url + ">")
   // }

 // }
//});


