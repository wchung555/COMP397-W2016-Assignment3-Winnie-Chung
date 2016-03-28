/// <reference path = "_reference.ts" />
// global variables
var assets;
var canvas;
var stage;
var stats;
var currentScene;
var scene;
var score;
// Game Scenes
var menu;
var instructions;
var play;
var end;
var assetData = [
    // Add your Assets here
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "InstructionsButton", src: "../../Assets/images/InstructionsButton.png" },
    { id: "RestartButton", src: "../../Assets/images/RestartButton.png" },
    { id: "MenuBackground", src: "../../Assets/images/MenuBackground.png" },
    { id: "InstructionsBackground", src: "../../Assets/images/InstructionsBackground.png" },
    { id: "EndBackground", src: "../../Assets/images/EndBackground.png" },
    { id: "space", src: "../../Assets/images/space.png" },
    { id: "cat", src: "../../Assets/images/cat.gif" },
    { id: "donut", src: "../../Assets/images/donut.png" },
    { id: "ebil", src: "../../Assets/images/ebil.gif" },
    { id: "heart", src: "../../Assets/images/heart.png" },
    { id: "bgm", src: "../../Assets/audio/bgmusic.ogg" },
    { id: "coinSound", src: "../../Assets/audio/coin.ogg" },
    { id: "stabSound", src: "../../Assets/audio/stab.ogg" }
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
    // play background music (infinite loop)
    createjs.Sound.play("bgm", { loop: -1 });
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.INSTRUCTIONS:
            // show the PLAY scene
            stage.removeAllChildren();
            instructions = new scenes.Instructions();
            currentScene = instructions;
            console.log("Starting INSTRUCTIONS Scene");
            break;
        case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
window.onload = preload;
//# sourceMappingURL=game.js.map