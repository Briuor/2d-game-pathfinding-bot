import GameObject from "./GameObject.js";

export default class Enemy extends GameObject {
    constructor(x, y, w, h) {
        super(x, y, w, h, "#7fa663");
        this.speed = 7;
    }

    lerp(start, end, amt) {
        return (1-amt)*start+amt*end
    }

    move(nextPoint, dt) {
        let tileSize = 20;
        let directionX = (nextPoint[0]*tileSize) - this.x;
        let directionY = (nextPoint[1]*tileSize) - this.y;
        this.x += directionX * this.speed * dt;
        this.y += directionY * this.speed * dt;
    }
}