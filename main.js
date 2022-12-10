leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload() {
song1=loadSound("Stay_320(PagalWorld).mp3");
song2=loadSound("Baby_320(PagalWorld).mp3");    
}

function setup() {
canvas = createCanvas(600,600)
canvas.center();    
video= createCapture(VIDEO);
video.size(550,500);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded() {
console.log('PoseNet is initialized!');
}

function draw() {
image(video,0,0,600,500);    
}

function gotPoses(results) {
    if(results.length > 0) {
    console.log(results);
    
    leftWristX=results[0].pose.leftWrist.x  
    leftWristY=results[0].pose.leftWrist.y
    console.log("leftWristX= "+leftWristX+"leftWristX= "+leftWristY);
    
    rightWristX=results[0].pose.rightWrist.x  
    rightWristY=results[0].pose.rightWrist.y
    console.log("rightWristX= "+rightWristX+"rightWristX= "+rightWristY);
        
    }
    }
    
    