function preload() {
    world_start = loadSound("world_start.wav");
    setSprites();
    MarioAnimation();
}

function setup() {
    canvas = createCanvas(1240, 336);
    canvas.parent("canvas");
    video = createCapture(VIDEO);
    video.size(800, 400);
    video.parent('game_console');
    instializeInSetup(mario);

    //intializing posenet! nothing muck dumbo
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    game()
}

function modelLoaded() {
    console.log("THE MODEL IS INITALIZED BUT IF YOU TRY TO STEAL MY WEBAPP I WILL COME TO YOUR HOUSE AND SLAP YOUR FACE SOOOO HARD THAT YOU WILL FLY OFF TO THE SPACE AND NEVER COME BACK");
}

function gotPoses(results) {
    if (results.length > 0) {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}