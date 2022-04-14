noseX=0
noseY=0
difference=0
leftWristX=0
rightWristX=0
function setup(){
    video=createCapture(VIDEO)
    video.size(550,500)
    canvas=createCanvas(550,550)
    canvas.position(560,150)
    posenet=ml5.poseNet(video,modeloaded)
    posenet.on('pose', gotposes)
}
function draw(){
    background("white")
    document.getElementById("square_sides").innerHTML="size of the square is: " + difference + "px"
    fill("purple")
    stroke("purple")
    square(noseX, noseY, difference)
}

function modeloaded(){
    console.log("posenet is loaded")
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        leftWristX=results[0].pose.leftWrist.x
        rightWristX=results[0].pose.rightWrist.x
        difference=floor(leftWristX-rightWristX)
    }

}