import GameObject from "./GameObject.js";

export default class Player extends GameObject{
    constructor(x, y, w, h) {
        super(x, y, w, h, "green");
    }

    move(mouse, dt) {
        if (mouse) {
            const centerX = this.x + this.w/2;
            const centerY = this.y + this.h/2;
            this.angle = Math.atan2(mouse.y - centerY, mouse.x - centerX) + Math.PI/2;
            this.x += Math.cos(this.angle - Math.PI/2) * 100 * dt;
            this.y += Math.sin(this.angle- Math.PI/2) * 100 * dt;
        }
    }
}