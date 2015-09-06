function dofirst()
{
 var x=document.getElementById('canvas');
 canvas=x.getContext('2d');
 /*
 //change fill color
 canvas.fillStyle="green";
 
 //change stroke color
 canvas.strokeStyle="red";
 
 //2nd rect(only bondary rect)
 canvas.strokeRect(20,200,100,200);
 
 //1st rect
 canvas.fillRect(20,20,200,100);//create total black color rect
 canvas.clearRect(20,20,50,50);//clear the part of created rect
 canvas.clearRect(170,20,50,50);

 //gradient
 var g=canvas.createLinearGradient(0,0,100,100);
  g.addColorStop(.0,"green");
 g.addColorStop(1s,"red");

 canvas.fillStyle=g;
 canvas.fillRect(250,20,100,100);

  // create your own shapes
  canvas.beginPath();
  canvas.moveTo(70,20);
  canvas.lineTo(100,120);
  canvas.lineTo(20,50);
  canvas.closePath();
  canvas.fillStyle="orange";
  canvas.fill();
    */
  canvas.beginPath();
  canvas.moveTo(200,100);
  canvas.lineTo(210,150);
  canvas.lineTo(260,160);
  
  canvas.stroke();
 
 
 
 }
 window.addEventListener("load",dofirst,false);