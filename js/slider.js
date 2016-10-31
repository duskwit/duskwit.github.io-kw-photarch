		var number = Math.floor(Math.random()*5)+1;

		var timer1=0;
		var timer2=0;

		function setslide(nrofslide)
		{
			clearTimeout(timer1);
			clearTimeout(timer2);
			number=nrofslide-1;
			hide();
			setTimeout("changeslide()",500);
		}

		function hide()
		{
			$("#slider").fadeOut(500);
		}

		function changeslide()
		{
			number++;
			if(number>6) number=1;
			var file="<img src=\"slides/slide"+number+".jpg\" />";
			document.getElementById("slider").innerHTML=file;
			$("#slider").fadeIn(400);
			timer1=setTimeout("changeslide()",7000);
			timer2=setTimeout("hide()",6500)
		}