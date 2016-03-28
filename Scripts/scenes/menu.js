var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            //Add Menu Label
            this._menuBackground = new createjs.Bitmap(assets.getResult("MenuBackground"));
            this.addChild(this._menuBackground);
            // add the Instructions button to the MENU scene
            this._instructionsButton = new objects.Button("InstructionsButton", 50, config.Screen.HEIGHT - 150, false);
            this.addChild(this._instructionsButton);
            // Instructions Button event listener
            this._instructionsButton.on("click", this._instructionsButtonClick, this);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.WIDTH - 300, config.Screen.HEIGHT - 150, false);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Menu.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // INSTRUCTIONS Button click event handler
        Menu.prototype._instructionsButtonClick = function (event) {
            // Switch to the PLAY Scene
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        };
        // START Button click event handler
        Menu.prototype._startButtonClick = function (event) {
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        return Menu;
    })(objects.Scene);
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map