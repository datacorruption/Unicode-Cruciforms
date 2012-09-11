var count = 0;
var numHori = 0;
var numVert = 0;
var numHDrawn = 0;
var numVDrawn = 0;

var face = new Array(250);

var block = new Array(5);
block[0] = "\u2588";
block[1] = "\u2593";
block[2] = "\u2592";
block[3] = "\u2591";
block[4] = " ";

function setup() { 
	for (var i = 0; i < 250; i++) {
	    face[i] = new Array(77);
	  }
	
	for(var x = 0; x < 250; x++) {
		for(var y = 0; y < 77; y++) {
			face[x][y] = block[4];
		}
	}
	
	numHori = Math.floor((Math.random()*38)+1);
	numVert = Math.floor((Math.random()*125)+1);
	
	draw();
}

function draw() {
	numHDrawn = 0;
	numVDrawn = 0;
	
	drawHori();
	drawVert();
	
	for(var x = 0; x < 250; x++) {
		for(var y = 0; y < 77; y++) {
			document.write(face[x][y]);
		}
		document.write('\n');
	}
}

function drawHori() {
	while(numHDrawn < numHori) {
		var y = Math.floor((Math.random()*76)+1);
		var x = Math.floor((Math.random()*249)+1);
		var len = Math.floor((Math.random()*242)+7);
		
		if(x + len < 250) {
			for(var l = 0; l < len; l++) {
				face[x+l][y] = block[0];
				if(l < 6*(Math.floor(len/16)) || l > 10*(Math.floor(len/16)))
		          face[x+l][y] = block[1];
		        if(l < 3*(Math.floor(len/16)) || l > 13*(Math.floor(len/16)))
		          face[x+l][y] = block[2];
		        if(l < Math.floor(len/16) || l > 15*(Math.floor(len/16)))
		          face[x+l][y] = block[3];
			}
			numHDrawn++;
		}
	}
}

function drawVert() {
	while(numVDrawn < numVert) {
		var x = Math.floor((Math.random()*249)+1);
		var y = Math.floor((Math.random()*76)+1);
		var len = Math.floor((Math.random()*69)+7);
		
		if(y + len < 77) {
			for(var l = 0; l < len; l++) {
				face[x][y+l] = block[0];
		        if(l < 6*(Math.floor(len/16)) || l > 10*(Math.floor(len/16)))
		          face[x][y+l] = block[1];
		        if(l < 3*(Math.floor(len/16)) || l > 13*(Math.floor(len/16)))
		          face[x][y+l] = block[2];
		        if(l < Math.floor(len/16) || l > 15*(Math.floor(len/16)))
		          face[x][y+l] = block[3];
			}
			numVDrawn++;
		} 
	}
}
