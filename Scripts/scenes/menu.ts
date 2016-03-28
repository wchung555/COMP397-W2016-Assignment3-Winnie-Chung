// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _menuBackground: createjs.Bitmap;
        private _instructionsButton: objects.Button;
        private _startButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            //Add Menu Label
            this._menuBackground = new createjs.Bitmap(assets.getResult("MenuBackground"));
            this.addChild(this._menuBackground);            
            
            // add the Instructions button to the MENU scene
            this._instructionsButton = new objects.Button(
                "InstructionsButton",
                50,
                config.Screen.HEIGHT - 150, false);
            this.addChild(this._instructionsButton);
            
            // Instructions Button event listener
            this._instructionsButton.on("click", this._instructionsButtonClick, this);
            
            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.WIDTH - 300,
                config.Screen.HEIGHT - 150, false);
            this.addChild(this._startButton);
            
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        // START Button click event handler
        private _instructionsButtonClick(event: createjs.MouseEvent) {
            // Switch to the PLAY Scene
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        }
        
        // START Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
            changeScene();
        }

    }
}