Webcam.set({
width:300,
height:350,
image_format="png"
png_quality=100
});
var camera=document.getElementById("Camera");
Webcam.attach("#Camera")
function takeSnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML='<img id="snapped" src="'+data_uri+'">';
    });
}
console.log("ml5 version=",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/IC8lx_A62/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model has loaded,yay!");