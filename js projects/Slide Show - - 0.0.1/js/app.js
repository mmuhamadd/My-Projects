var arrayOfImages = ["images/HP.jpg","images/HP_1.png","images/HP_2.jpg","images/HP_3.png"];

var slideImage = document.querySelector("#slide_container img");


window.onload = function(){
	loadImages();
	slideControls();
}



function loadImages(){
	// the slide images source are equal to the first index on the array
	slideImage.src = arrayOfImages[0];
	// make a foor loop in our array of images
	for(let i = 0; i < arrayOfImages.length; i++){
		// our slide buttons
		var slideButton = document.createElement("button");
		// set a new attribute for the button to put the images on
        slideButton.setAttribute("slide_src",arrayOfImages[i])
        // give it a class
		slideButton.classList.add("slideButton");
		// put the button on slide buttons container
		document.getElementById('slide_buttons').appendChild(slideButton);

	}
	document.querySelectorAll(".slideButton")[0].style.backgroundColor = 'crimson';     
}



function slideControls(){
	// a loop in our controls
	for(let i = 0; i < document.querySelectorAll(".slideButton").length; i++){
       // when we click the slide button
		document.querySelectorAll(".slideButton")[i].onclick = function(){
			// all the slide controls background are equal to the origenal background of them because of we wan't the only controls that crimson our chosen
			 document.querySelectorAll(".slideButton")[0].style.backgroundColor = 'lightgreen'
			  document.querySelectorAll(".slideButton")[1].style.backgroundColor = 'lightgreen'
				document.querySelectorAll(".slideButton")[2].style.backgroundColor = 'lightgreen'
				 document.querySelectorAll(".slideButton")[3].style.backgroundColor = 'lightgreen'
			// our image will be equal tho the slide button attribute under the name of slide source
			slideImage.src = document.querySelectorAll(".slideButton")[i].getAttribute("slide_src");
              document.querySelectorAll(".slideButton")[i].style.backgroundColor = 'crimson';			
		}

	}
}