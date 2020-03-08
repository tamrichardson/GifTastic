 //this is creating a button with click function that calls the giphy API
    // attaches an event to clicking on the thing with the cat-button
    $("#band-button").on("click", function () {

        //this is the url and key for the giphy api
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats";
  
        //makes an ajax call
        $.ajax({
          url: queryURL,
          method: "GET"
        })
  
          //when the response returns asunchronously this line is a function accessing the response from the ajax query
          .then(function (response) {
  
            //this line is accessing the response then drilling down to data  to find the url for the image
            var imageUrl = response.data.image_original_url;
  
            //this is creating an image tag using jQuery
            var catImage = $("<img>");
  
            //populates the attributes of the image tag
            catImage.attr("src", imageUrl);
            catImage.attr("alt", "cat image");
  
            //the adds each new gif before the last one previously called and viewed
            $("#images").prepend(catImage);
          });
      });