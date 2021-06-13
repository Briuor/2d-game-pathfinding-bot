import GameObject from "./GameObject.js";

export default class Enemy extends GameObject {
    constructor(x, y, w, h) {
        super(x, y, w, h, "black");
        this.speed = 8;
    }

    lerp(start, end, amt) {
        return (1-amt)*start+amt*end
    }

    move(prev, nextPoint, dt) {
        let tileSize = 20;
        let directionX = (nextPoint[0]*20) - this.x;
        let directionY = (nextPoint[1]*20) - this.y;
        console.log(directionX, directionY);
        this.x += directionX * this.speed * dt;
        this.y += directionY * this.speed * dt;

        // let directionX = (nextPoint[0] * 20 - this.x);
        // let directionY = (nextPoint[1] * 20 - this.y);
        // console.log(directionX, directionY);
        // this.x += directionX * this.speed * dt;
        // this.y += directionY * this.speed * dt;


        // this.x = nextPoint[0] * tileSize;
        // this.y = nextPoint[1] * tileSize;


        // console.log(nextPoint[0] - Math.floor(this.x/tileSize), nextPoint[1] - Math.floor(this.y/tileSize))
        // this.x += (nextPoint[0] - prev[0]) * this.speed * dt;
        // this.y += (nextPoint[1] - prev[1]) * this.speed * dt;
        // this.x = this.lerp(this.x, nextPoint[0] * 20, 0.1 * dt*this.speed);
        // this.y = this.lerp(this.y, nextPoint[1] * 20, 0.1 * dt*this.speed);
    
        // let nextX = (nextPoint[0] * 20);
        // let nextY = (nextPoint[1] * 20);
        // if ((nextX - this.x) != 0) {
        //     console.log(((nextX - this.x) / (nextX - this.x)) * this.speed * dt)
        //     this.x += ((nextX - this.x) / (nextX - this.x)) * this.speed * dt;
        // }
        // if ((nextY - this.y) != 0) {
        //     console.log(((nextY - this.y) / (nextY - this.y)) * this.speed * dt)
        //     this.y += ((nextY - this.y) / (nextY - this.y)) * this.speed * dt;
        // }
        // console.log(this.x, this.y)

    }
}