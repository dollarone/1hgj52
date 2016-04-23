var PlatformerGame = PlatformerGame || {};

//loading the game assets
PlatformerGame.Preload = function(){};

PlatformerGame.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

    this.game.load.spritesheet('logo-tiles', 'assets/images/logo-tiles.png', 17, 16);
    this.game.load.spritesheet('tiles', 'assets/images/Jungle_terrain.png', 32, 32);
    this.load.tilemap('level1', 'assets/tilemaps/level.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('sky', 'assets/images/sky_new.png');
  
    this.game.load.spritesheet('thin', 'assets/images/thin.png', 10, 26);
    this.game.load.spritesheet('fat', 'assets/images/fat.png', 12, 26);

    this.game.load.audio('music', 'assets/audio/music.ogg');

  },
  create: function() {
    this.state.start('Logo');
  }
};
