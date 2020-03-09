// array of foods
var foods = ["Pizza", "Banana", "Tacos", "Cheeseburgers", "Pie", "Spaghetti"];

// this is a function for capturing the food names from the data-attribute
function alertFoodName() {
  var food = $(this).attr("data-name");

  //making the query URL with endpoint + key value pairs and api key
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    food + "&api_key=IRQP9t5IFrEkWl7y1LiJoQR8IUUKqF64&limit=10";

  // AJAX request with the queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    //after the data comes back from the request
    .then(function (response) {
      console.log(queryURL)
      //show the results in the console
      console.log(response)

      //storing the data from the AJAX request in the results variable
      var results = response.data;

      //looping throught each result
      for (var i = 0; i < results.length; i++) {
        //creating and storing a div tag
        var foodDiv = $("<div>");

        // creating a paragraph tag with the result items rating
        var p = $("<p>").text("Rating: " + results[i].rating);

        // Creating and storing an image tag
        var foodImage = $("<img>");

        // Setting the source attribute of the image to a property pulled off the result item (response - data - images - fixed_height - url)
        foodImage.attr("src", results[i].images.fixed_height.url)

        // Appending the paragraph and image tag to the foodDiv
        foodDiv.append(p);
        foodDiv.append(foodImage)

        // Prepending the foodDiv to the HTML page in the "#populate-gifs" div
        $("#populate-gifs").prepend(foodDiv);
      }
    })

}

// this is a function for displaying food data
function generateButtons() {

  // we need to delete the foods prior to adding new foods so that we dont end up with repeat buttons
  $("#buttons-view").empty();

  // Looping through the array of foods
  for (var j = 0; j < foods.length; j++) {

    // now we need to generate buttons for each food in the array
    // This code $("<button>") creates the buttons
    var foodList = $("<button>");
    // Adding a class of food to our button
    foodList.addClass("food");
    // Adding a data-attribute
    foodList.attr("data-name", foods[j]);
    // Providing the initial button text
    foodList.text(foods[j]);
    // Adding the button to the HTML
    $("#buttons-view").append(foodList);
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

  // Calling generatButtons which handles the processing of our foods array
  generateButtons();


});

// Function for displaying the food info
// We're adding a click event listener to all elements with the class "food"
// We're adding the event listener to the document because it will work for dynamically generated elements
// $(".foods").on("click") will only add listeners to elements that are on the page at that time
$(document).on("click", ".food", alertFoodName);

// Calling the generatedButtons function to display the intial buttons
generateButtons();
alertFoodName()





