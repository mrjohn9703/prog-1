var sketchProc = function(processingInstance) {
    with (processingInstance) {
        var canvas_size = 400; // Sidan på kvadraten för rityta
 	    size(canvas_size, canvas_size)
 		frameRate(50);
 		// Rör inget ovanför mer än värdet på canvas_size
 		// ProgramCodeGoesHere

 		// Hjälpfunktioner här

 		var i = 0;
 		var draw = function() {
 		    // Allt här inne uppdtaeras 50 ggr per sekund (frameRate)
 		    // Kod typ Khanacademy här

 		    line(i, 10, 400, 400);
 		    if ( i < 400 ) {
 		    	i+=0.10;
 		    }
 		}

				


    // Rör inget nedanför
 	}
}
// Get the canvas that processing-js will use
var canvas = document.getElementById("mycanvas");
// Pass the function sketchProc (defined in mycode.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc); 	


	    			
