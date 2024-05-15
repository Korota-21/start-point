 // Array of GIF file names

 // Function to generate HTML for image list
 function generateImageList() {
     var imageContainer = document.getElementById("image-container");
     var html = "";

     // Loop through each GIF file and create <img> elements
     gifFiles.forEach(function(fileName, index) {
         var imageIndex = index + 1;
         html += '<img src="./media/' + fileName + '" alt="Image ' + imageIndex + '">';
     });

     // Set the generated HTML to the image container
     imageContainer.innerHTML = html;
 }

 // Call the function to generate the image list
 generateImageList();