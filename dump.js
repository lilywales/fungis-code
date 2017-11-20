// Array of all of the images you possibly want to serve
var imageURLs = [
   "http://image1.com",
   "http://image2.com",
   "http://image3.com"
];

// Function that returns the URL of an image at random
function generate_random_image() {
   // We want to generate a random index into the imageURLs array
   // so between 0 and (length of the array - 1)
   // Math.random() returns a floating-point between 0 and 1, so we want
   // to times that by the max number we want to generate and then round
   // to an int by flooring it (we don't want to round or we risk going too high)
   var maxIndex = imageURLs.length - 1;
   var randomIndex = Math.floor(Math.random() * maxIndex);

   // These four lines are unneccessary, but you could add them to make sure
   // you don't get an undefined
   if (randomIndex < 0 || randomIndex > maxIndex) {
      console.error("Something went wrong calculating our random index: " + randomIndex);
      return null;
   }

   // Now we have our random index, just return the URL at that index from our array of URLs
   return imageURLs[randomIndex];
}

// Function to call on your "Generate" button onclick event
function setNewImage() {
   // Get the img element using jQuery
   var image = $("img#image-id");

   // Generate a new image URL
   var newUrl = generate_random_image();

   // Replace the image src, triggering the browser to download and render the new image
   image.attr("src", newUrl);
}
