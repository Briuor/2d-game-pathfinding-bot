import Player from "./models/Player.js";
import Enemy from "./models/Enemy.js";
import TileMap from "./map/TileMap.js";

class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.canvas.width = window.innerWidth - 4;
        this.canvas.height = window.innerHeight - 4;
        this.ctx = canvas.getContext('2d');

        this.map = new TileMap();
        this.player = new Player(2*this.map.tileSize, 3*this.map.tileSize, this.map.tileSize, this.map.tileSize);
        this.enemy = new Enemy(8*this.map.tileSize, 3*this.map.tileSize, this.map.tileSize, this.map.tileSize);
        this.mouse = null;
        this.initInputListener(this);
    }

    initInputListener(gameCtx) {
        // document.addEventListener("mousemove", (e) => {
        //     var rect = this.canvas.getBoundingClientRect();
        //     gameCtx.mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        // })
        gameCtx.canvas.addEventListener("click", (e) => {
            var rect = this.canvas.getBoundingClientRect();
            gameCtx.player.x = Math.floor(e.clientX - rect.left);
            gameCtx.player.y =  Math.floor(e.clientY - rect.top);
        })
    }

    update() {
        let now = Date.now();
        let dt = (now - this.lastUpdate) / 1000;
        this.lastUpdate = now;
        // move player
        // this.player.move(this.mouse, dt);
        const enemyPath = this.map.findPath(this.enemy.x, this.enemy.y, this.player.x, this.player.y);
        // console.log("len: " , enemyPath.length)
        if (enemyPath.length > 2) {
            console.log(enemyPath)
            this.enemy.move(enemyPath[1], dt);
        }
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.map.draw(this.ctx);
        this.player.draw(this.ctx);
        this.enemy.draw(this.ctx);
    }

    run() {
        this.update();
        this.render();
    }

    start() {
        this.lastUpdate = Date.now();
        setInterval(this.run.bind(this), 1000/60);
    }
}

const game = new Game();
game.start();