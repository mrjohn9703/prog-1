var sketchProc = function(processingInstance) {
    with (processingInstance) {
		var canvas_size = 400
		size(canvas_size ,canvas_size);
		var frames_per_second = 50;
		frameRate(frames_per_second);
		
		font=loadFont("FFScala.ttf");
		textFont(font);
		textSize(20);


		var drawhill = function() {
			// the hill
			background(202,255, 97);
			fill(200, 200, 100);
			strokeWeight(2);
			ellipse(300, 400, 100, 200);
		}
		var drawPole = function() {
			fill(0, 0, 0);
			stroke(0, 0, 0);
			strokeWeight(5);
			line(300, 300, 300, 100);
		}
		var drawBeam = function() {
			fill(0, 0, 0);
			stroke(0, 0, 0);

		}



		/*
		if (mouseIsclicked)  {}

		}; 
	*/
	    var draw = function () {
	    	drawhill();
	    	drawPole();
	    }

    // Rör inget nedanför
 	}
}
// Get the canvas that processing-js will use
var canvas = document.getElementById("mycanvas");
// Pass the function sketchProc (defined in mycode.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc); 	

