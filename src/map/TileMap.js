var PF = require('pathfinding');

export default class TileMap {
    constructor() {
        this.tilemap = [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
            [1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        ];
        
        this.grid = new PF.Grid(this.tilemap);
        this.finder = new PF.AStarFinder();
        this.tileSize = 32;
    }

    findPath(x1, y1, x2, y2) {
        this.grid = this.grid.clone();

        let path = this.finder.findPath(
            Math.floor((x1)/this.tileSize), 
            Math.floor((y1)/this.tileSize), 
            Math.floor((x2)/this.tileSize), 
            Math.floor((y2)/this.tileSize), 
            this.grid
        );
        return path;
    }

    draw(ctx) {
        this.tilemap.forEach((tileRow, tileRowIndex) => {
            tileRow.forEach((tile, tileIndex) => {
                if(tile == 0) {
                    ctx.strokeStyle =  "blue"
                    ctx.strokeRect(tileIndex*this.tileSize, tileRowIndex*this.tileSize, this.tileSize, this.tileSize);
                } else {
                    ctx.fillStyle =  "black"
                    ctx.fillRect(tileIndex*this.tileSize, tileRowIndex*this.tileSize, this.tileSize, this.tileSize);
                }
                ctx.font = "10px";
                ctx.fillStyle =  "black"
                ctx.fillText(tileRowIndex*this.tilemap[0].length + tileIndex, tileIndex*this.tileSize+this.tileSize/2, tileRowIndex*this.tileSize+this.tileSize/2, 20)
            })
        })
    }

}