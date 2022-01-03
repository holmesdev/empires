import 'phaser';

export default class App extends Phaser.Scene
{
    preload ()
    {
        this.load.image('map-tiles', 'assets/tilemap.png');
    }

    create ()
    {
        // Load a map from a 2D array of tile indices
    var level = [
        [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
        [  0,  1,  2,  3,  0,  0,  0,  1,  2,  3,  0, 1, 2 ],
        [  0,  5,  6,  7,  0,  0,  0,  5,  6,  7,  0, 1, 2 ],
        [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 1, 2 ],
        [  0,  0,  0,  4,  3,  4,  0,  0,  0,  0,  0, 1, 2 ],
        [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 1, 2 ],
        [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 1, 2 ],
        [  0,  0,  4,  4,  4,  4,  4,  0,  0,  0,  5, 1, 2 ],
        [  0,  0,  0,  0,  0,  0,  0,  0,  0,  5,  5, 1, 2 ],
        [  5,  6,  7,  0,  0,  0,  0,  0,  5,  5,  5, 1, 2 ],
        [  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9, 1, 2 ]
      ]
  
      // When loading from an array, make sure to specify the tileWidth and tileHeight
      var map = this.make.tilemap({ data: level, tileWidth: 64, tileHeight: 64 });
      var tiles = map.addTilesetImage('map-tiles');
      var layer = map.createLayer(0, tiles, 0, 0);
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: App
};

const game = new Phaser.Game(config);
