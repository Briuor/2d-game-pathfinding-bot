import GameObject from "./GameObject.js";

export default class Enemy extends GameObject {
    constructor(x, y, w, h) {
        super(x, y, w, h, "red");
        this.speed = 20;
    }

    lerp(start, end, amt) {
        return (1 - amt) * start + amt * end
    }

    move(prev, nextPoint, dt) {
        let tileSize = 20;

        // console.log(nextPoint[0] - Math.floor(this.x/tileSize), nextPoint[1] - Math.floor(this.y/tileSize))
        this.x += (nextPoint[0] - prev[0]) * this.speed * dt;
        this.y += (nextPoint[1] - prev[1]) * this.speed * dt;
        // this.x = this.lerp(this.x, nextPoint[0]*20, 0.6);
        // this.y = this.lerp(this.y, nextPoint[1]*20, 0.6);
        // this.x = (nextPoint[0] * tileSize);
        // this.y = (nextPoint[1] * tileSize);
        console.log(this.x, this.y)

    }
}