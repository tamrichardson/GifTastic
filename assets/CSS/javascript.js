// Initial array of foods
var food = ["cake", "burger", "pizza", "taco"];


$.ajax({

  url: "http://api.giphy.com/v1/gifs/search?q=food&limit=10&api_key=IRQP9t5IFrEkWl7y1LiJoQR8IUUKqF64",
  type: "GET",
  success: function (response) {


    // this loops through the data in the result
    for (var i = 0; i < response.data.length; i++) {
      console.log(response.data[i])

      //grabbed the content div and created an image tag and the called the response data, the images, fixed_height, the url
      $("#content").append("<img src=" + response.data[i].images.fixed_height.url + ">")
    }

  }
});


//this is creating a button with click function that calls the giphy API
// attaches an event to clicking on the thing with the cat-button
//$("#food-button").on("click", function () {

  //this is the url and key for the giphy api
  //var queryURL = "http://api.giphy.com/v1/gifs/search?q=food&limit=10&api_key=IRQP9t5IFrEkWl7y1LiJoQR8IUUKqF64";

  // Performing an AJAX request with the queryURL
  //$.ajax({
   // url: queryURL,
   // method: "GET"
  //})

    //when the response returns asunchronously this line is a function accessing the response from the ajax query
   //.then(function (response) {

      // storing the data from the AJAX request in the results variable

     // var results = response.data;
      // Looping through each result item
      //for (var i = 0; i < results.length; i++) {
       // var gifDiv = $("<div>");

        //var rating = results[i].rating;

        // Creating a paragraph tag with the result item's rating
        //var p = $("<p>").text("Rating: " + rating);


        // Creating and storing an image tag
        //var foodImage = $("<img>");

        // Setting the src attribute of the image to a property pulled off the result item
        //foodImage.attr("src", results[i].//images.fixed_height.url);

        // Appending the paragraph and image tag to the animalDiv
        //gifDiv.prepend(p);
        //gifDiv.prepend(foodImage);

        // Prependng the foodDiv to the HTML page in the "#gifs-appear-here" div
        //$("#gifs-appear-here").prepend(gifDiv);
     // }
    //});
//});
