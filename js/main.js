console.log('javascript file is linked to index.html');
$(document).ready(function () {
console.log('jquery is loaded');

/*add onclick action to the update button.*/
$('#submit-btn').click(changeBackground);

function changeBackground(event) {
  // Prevent default refreshing of page upon click of button.
	event.preventDefault();
  /*  Get the value of the city name entered. */
	var cityNameInput = $('#city-type').val();
	var nameWithSpace = $('#city-type').val();
	// remove all spaces in the text input area
	var nameWithoutSpace = nameWithSpace.replace(/ /g, "");

  /*Change the background photo to the city image corresponding to the input. Use conditional statement like if...else if...*/
  if ((nameWithoutSpace === "NewYorkCity") || (nameWithoutSpace ==="NewYork") || (nameWithoutSpace === "NYC")) {
  	$('body').css('background', 'url(images/nyc.jpg) no-repeat');
  	} else if ((nameWithoutSpace === "SanFrancisco") || (nameWithoutSpace === "SF") || (nameWithoutSpace === "BayArea")) {
  	$('body').css('background', 'url(images/sf.jpg)');
  	} else if ((nameWithoutSpace === "LosAngeles") || (nameWithoutSpace === "LA") || (nameWithoutSpace === "LAX")) {
  	$('body').css('background', 'url(images/la.jpg)');
	} else if ((nameWithoutSpace === "Austin") || (nameWithoutSpace === "ATX")) {
	$('body').css('background', 'url(images/austin.jpg)');
	} else if ((nameWithoutSpace === "Sydney") || (nameWithoutSpace === "SYD")) {
	$('body').css('background', 'url(images/sydney.jpg)');
	} console.log('hello', nameWithoutSpace);

	// make the background image stretch to fill the entire screen and in the right position
	$('body').css({'background-size': '1050px 440px', 'background-position-x': '50%'});
	console.log('hi', nameWithoutSpace);

	// reset the text input field after submitting each city name
	$('form')[0].reset();
	console.log('goodbye', nameWithoutSpace);
  }
});


