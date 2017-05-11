document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('slowButton').onclick = illuminateYellow;
document.getElementById('goButton').onclick = illuminateGreen;


function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red"
  document.getElementById('slowButton').style.backgroundColor = "yellow";
}


function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowButton').style.backgroundColor = "black";
}






	
	}