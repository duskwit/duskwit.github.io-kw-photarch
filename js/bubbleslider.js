//BUBBLE SLIDER
		// This simple function returns object reference for elements by ID
		function _(x){return document.getElementById(x);}
		// Variables for bubble array, bubble index, and the setInterval() variable
		var ba, bi=0, intrvl;
		// bca - Bubble Content Array. Put your content here.
		var bca = [
		    '<img src="ach/ach1.jpg" /> <p><b>Honorable mention</b> in the competition<br> <b>Budowle Dolnego Śląska 2005-2016</b><br>Edition I, Wrocław 2016<br>Dolnośląska Okręgowa Izba Inżynierów Budownictwa</p>',
		    '<img src="ach/ach0.jpg" /> <p><b>Second award</b> in the competition<br> <b>Kadry Modernizmu 2016</b><br> Edition VI, Przestrzeń dla piękna<br> Stowarzyszenie Architektów Polskich WROCŁAW </p>',
			'<img src="ach/ach3.jpg" /> <p><b>First award</b> in the competition<br> <b>Kadry Modernizmu 2014</b> <br>Edition IV, Miasto w ruchu<br> Stowarzyszenie Architektów Polskich WROCŁAW</p>'
		];
		// This function is triggered by the bubbleSlide() function below
		function bubbles(bi){
			// Fade-out the content
			_("bubblecontent").style.opacity = 0;
			// Loop over the bubbles and change all of their background color
			for(var i=0; i < ba.length; i++){
				ba[i].style.background = "rgba(0,0,0,.1)";
			}
			// Change the target bubble background to be darker than the rest
			ba[bi].style.background = "#999";
			// Stall the bubble and content changing for just 300ms
			setTimeout(function(){
				// Change the content
				_("bubblecontent").innerHTML = bca[bi];
				// Fade-in the content
				_("bubblecontent").style.opacity = 1;
			}, 300);
		}
		// Start the application up when document is ready
		window.addEventListener("load", function(){
			// Get the bubbles array
			ba = _("bubbles").children;
			// Set the interval timing for the slideshow speed
			intrvl = setInterval(bubbleSlide, 5000);
		});