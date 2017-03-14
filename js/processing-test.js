
var sketchProc = function(processingInstance) {
 with (processingInstance) {
 		size(400,400)
 		frameRate(50);
 		// ProgramCodeGoesHere
 		var xPosition = 200;
 		var yPosition = 200;
 		var xSpeed = 2;
 		var ySpeed = 5;
 		var faceSize = 300;
 		var draw = function ()  {
 			backgroud(49);
 			if ( xPosition <= faceSize/2) {
 				xSpeed = Math.abs(xSpeed);
 			}

	 		if  ( xPosition >= 400 - faceSize/2 ) {
 				xSpeed = Math.abs(xSpeed);
 			}
 				if ( yPosition <= faceSize/2 )  {
 		    	ySpeed = Math.abs (ySpeed);
 		   		 
 		    }

 		    	if > yPosition >= 400 - faceSize(2 {
 		    		ySpeed = -Mth.abs(YSpeed);
 		    	}
					 		    
 		    		xPosition += xSpeed;
 		    		yPosition += ySpeed;
 		    		fill(255, 255, 0;)
 		    		ellipse(xPosition, yPosition, faceSize, faceSize);
 		    		noFill();
 		    		stroke(0,0,0);
 		    		strokeWeight(2);
 		    		arc(xPosition, yPosition, 0,75 * faceSize, 0.5 * faceSize, 0, PI); 
 		    		fill(0, 0, 0);
 		    		ellipse(xPosition + faceSize/4, yPosition, faceSize/20, faceSize/20);
					ellipse(xPosition - faceSize/4, yPosition, faceSize/20, faceSize/20);

				}

				}};


				// Get the canvas that processing-js will use
				var canvas = document.getElementById("mycanvas");
				// Pass the function sketchProc (defined in mycode.js) to Processing's constructor.
				var processingInstance = new Processing(canvas, sketchProc); 		    			
				





 		}