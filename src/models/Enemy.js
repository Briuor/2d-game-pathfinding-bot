import GameObject from "./GameObject.js";

export default class Enemy extends GameObject {
    constructor(x, y, w, h) {
        super(x, y, w, h, "red");
        this.speed = 2500;
        this.alpha = 0.1
        this.lastPoint = {x: this.x, y: this.y};
    }

    lerp(start, end, amt) {
        return (1-amt)*start+amt*end
    }

    move(nextPoint, dt) {
        const centerX = Math.floor(this.x);
        const centerY = Math.floor(this.y);
        console.log(centerX, centerY)
        console.log(nextPoint[0]*32, nextPoint[1]*32)
        
        let angle = Math.atan2(nextPoint[1]*32 - centerY, nextPoint[0]*32 - centerX) + Math.PI/2;
        console.log(angle)
        this.x += (Math.cos(angle - Math.PI/2)/32) * this.speed * dt;
        this.y += (Math.sin(angle- Math.PI/2)/32) * this.speed * dt;


        // let tileSize = 20;
        // // this.alpha = this.speed*dt;
        // console.log({...nextPoint})
        // let lerpX = this.lerp(this.x, nextPoint[0]*32, this.alpha);
        // let lerpY = this.lerp(this.y, nextPoint[1]*32, this.alpha);
        // console.log({x: this.x, y: this.y})
        // console.log({nextX: nextPoint[0]*32, nextY: nextPoint[1]*32})
        // console.log({lerpX, lerpY})
        // if(Math.abs(lerpX - nextPoint[0]*32) < 0.2) {
        //     this.x = nextPoint[0]*32;
        //     this.y = nextPoint[1]*32;
        // }
        // else {
        //     this.x = lerpX;
        //     this.y = lerpY;
        // }
        // this.x = this.lerp(this.x, nextPoint[0]*20, 0.6);
        // this.y = this.lerp(this.y, nextPoint[1]*20, 0.6);
        // this.x = (nextPoint[0] * tileSize);
        // this.y = (nextPoint[1] * tileSize);

    }
}