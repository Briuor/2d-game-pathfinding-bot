import GameObject from "./GameObject.js";

export default class Player extends GameObject{
    constructor(x, y, w, h) {
        super(x, y, w, h, "white");
    }

    move(mouse, dt) {
        if (mouse) {
            this.x = mouse.x
            this.y = mouse.y;
        }
    }
}