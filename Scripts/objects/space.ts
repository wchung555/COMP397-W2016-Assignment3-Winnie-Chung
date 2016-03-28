module objects {
    // SPACE CLASS ++++++++++++++++++++++++++++++++++++
    export class Space extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("space");

            this._speed.x = 5; //space speed
            this._reset(0);
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            // check to see if the left of the space 
            // is met the left of the scene

            if (this.x <= value) {
                this._reset(0);
            }
        }

        // reset the space off-screen
        protected _reset(value: number): void {
            this.x = value;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            this._checkBounds(-1250); // space width - canvas width
            // scroll the space 5 px per frame
            this.x -= this._speed.x;
        }
    }
}