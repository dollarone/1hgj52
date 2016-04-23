var PlatfomerGame = PlatformerGame || {};

//title screen
PlatformerGame.Game = function(){};

PlatformerGame.Game.prototype = {
    create: function() {

        //  A simple background for our game
        var sky = this.game.add.sprite(0, 0, 'sky');
        sky.scale.setTo(1.4);

        this.map = this.game.add.tilemap('level1');

        this.map.addTilesetImage('Jungle_terrain', 'tiles');

        this.backgroundLayer = this.map.createLayer('backgroundLayer');
        this.players = this.game.add.group();
        this.foregroundLayer = this.map.createLayer('foregroundLayer');


        // make the world boundaries fit the ones in the tiled map

        //var result = this.findObjectsByType('playerStart', this.map, 'objectLayer');
        //  We need to enable physics on the player
        //this.game.camera.setSize(this.game.world.width, this.game.world.height);

        //  Player physics properties. Give the little guy a slight bounce.

        this.music = this.game.add.audio('music');
        this.music.loop = true;
///        this.music.play();

        //  The score
        this.scoreText = this.game.add.text(356, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
        //this.scoreText.fixedToCamera = true;
        this.score = 0;

        this.weightText = this.game.add.text(376, 52, 'Weight on bridge: 0kgs', { fontSize: '32px', fill: '#000' });
        //this.scoreText.fixedToCamera = true;
        this.score = 0;

        this.timeText = this.game.add.text(556, 16, 'Time left: 0', { fontSize: '32px', fill: '#000' });
        //this.scoreText.fixedToCamera = true;
        this.timer = 30;

        //  Our controls.
        this.cursors = this.game.input.keyboard.createCursorKeys();
        
        this.timer = 0;

        this.showDebug = true; 
        this.gameover = false;

        var enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        enterKey.onDown.add(this.spawnPlayer, this);
        var rKey = this.game.input.keyboard.addKey(Phaser.Keyboard.R);
        rKey.onDown.add(this.reset, this);

        this.buildBridge();
        this.blockedLayer = this.map.createLayer('blockedLayer');
        this.blockedLayer.resizeWorld();
        this.map.setCollisionBetween(1, 10000, true, 'blockedLayer');

        this.spawnPlayer();
        this.startTime = this.game.time.now;
        this.currentWeight = 0;

    },
    buildBridge: function() {
        this.bridge = this.game.add.group();
        var bridgepart = this.bridge.create(288, 128, 'tiles');
        bridgepart.frame = 365;
        var bridgepart = this.bridge.create(288+ 32*1, 128, 'tiles');
        bridgepart.frame = 366;

        var bridgepart = this.bridge.create(288+ 32*2, 128, 'tiles');
        bridgepart.frame = 367;
        var bridgepart = this.bridge.create(288+ 32*3, 128, 'tiles');
        bridgepart.frame = 367;
        var bridgepart = this.bridge.create(288+ 32*4, 128, 'tiles');
        bridgepart.frame = 367;
        var bridgepart = this.bridge.create(288+ 32*5, 128, 'tiles');
        bridgepart.frame = 367;
        var bridgepart = this.bridge.create(288+ 32*6, 128, 'tiles');
        bridgepart.frame = 367;
        var bridgepart = this.bridge.create(288+ 32*7, 128, 'tiles');
        bridgepart.frame = 367;
        var bridgepart = this.bridge.create(288+ 32*8, 128, 'tiles');
        bridgepart.frame = 367;
        var bridgepart = this.bridge.create(288+ 32*9, 128, 'tiles');
        bridgepart.frame = 367;
        var bridgepart = this.bridge.create(288+ 32*10, 128, 'tiles');
        bridgepart.frame = 367;
        var bridgepart = this.bridge.create(288+ 32*11, 128, 'tiles');
        bridgepart.frame = 367;
        var bridgepart = this.bridge.create(288+ 32*12, 128, 'tiles');
        bridgepart.frame = 367;
        var bridgepart = this.bridge.create(288+ 32*13, 128, 'tiles');
        bridgepart.frame = 367;
        var bridgepart = this.bridge.create(288+ 32*14, 128, 'tiles');
        bridgepart.frame = 367;
        var bridgepart = this.bridge.create(288+ 32*15, 128, 'tiles');
        bridgepart.frame = 367;
        var bridgepart = this.bridge.create(288+ 32*16, 128, 'tiles');
        bridgepart.frame = 368;


        var bridgepart = this.bridge.create(288, 128+32, 'tiles');
        bridgepart.frame = 365+28;
        var bridgepart = this.bridge.create(288+ 32*1, 128+32, 'tiles');
        bridgepart.frame = 366+28;

        var bridgepart = this.bridge.create(288+ 32*2, 128+32, 'tiles');
        bridgepart.frame = 367+28;
        var bridgepart = this.bridge.create(288+ 32*3, 128+32, 'tiles');
        bridgepart.frame = 367+28;
        var bridgepart = this.bridge.create(288+ 32*4, 128+32, 'tiles');
        bridgepart.frame = 367+28;
        var bridgepart = this.bridge.create(288+ 32*5, 128+32, 'tiles');
        bridgepart.frame = 367+28;
        var bridgepart = this.bridge.create(288+ 32*6, 128+32, 'tiles');
        bridgepart.frame = 367+28;
        var bridgepart = this.bridge.create(288+ 32*7, 128+32, 'tiles');
        bridgepart.frame = 367+28;
        var bridgepart = this.bridge.create(288+ 32*8, 128+32, 'tiles');
        bridgepart.frame = 367+28;
        var bridgepart = this.bridge.create(288+ 32*9, 128+32, 'tiles');
        bridgepart.frame = 367+28;
        var bridgepart = this.bridge.create(288+ 32*10, 128+32, 'tiles');
        bridgepart.frame = 367+28;
        var bridgepart = this.bridge.create(288+ 32*11, 128+32, 'tiles');
        bridgepart.frame = 367+28;
        var bridgepart = this.bridge.create(288+ 32*12, 128+32, 'tiles');
        bridgepart.frame = 367+28;
        var bridgepart = this.bridge.create(288+ 32*13, 128+32, 'tiles');
        bridgepart.frame = 367+28;
        var bridgepart = this.bridge.create(288+ 32*14, 128+32, 'tiles');
        bridgepart.frame = 367+28;
        var bridgepart = this.bridge.create(288+ 32*15, 128+32, 'tiles');
        bridgepart.frame = 367+28;
        var bridgepart = this.bridge.create(288+ 32*16, 128+32, 'tiles');
        bridgepart.frame = 368+28;


    },
    breakBridge: function() {
        this.blockedLayer = this.map.createLayer('blocked2Layer');
        this.map.setCollisionBetween(1, 10000, true, 'blocked2Layer');
        var i = 0;
        this.bridge.forEach(function(piece) {
            i+=5;
            this.game.physics.arcade.enable(piece);
            
            piece.body.gravity.y = 600 - (piece.x/6);
         

        }, this);
        this.players.forEach(function(dude) {
            
            if (dude.notCrossed) {
                dude.body.velocity.x = 0;
                dude.animations.stop();
                dude.frame = 1;
            }
        }, this);
    },
    update: function() {
        this.timer++;
        this.game.physics.arcade.collide(this.players, this.blockedLayer);
        this.currentWeight = 0;

        this.players.forEach(function(dude) {
            if (dude.notCrossed && dude.x >= 828) {
                this.score++;
                this.scoreText.text = "Score: " + this.score;
                dude.notCrossed = false;
            }
            if (dude.alive && dude.x >= 266 && dude.x < 828) {
                
                this.currentWeight += dude.playerWeight;
            }
        }, this);

        
        this.weightText.text = "Weight on bridge: " + this.currentWeight + "kgs";
        this.timeSpent = this.game.time.now - this.startTime;

        
        var draft = "Time left: " + parseFloat( 30 - (this.timeSpent / 1000)).toFixed(1) + "s";
        if (parseFloat( 30 - (this.timeSpent / 1000)).toFixed(1) < 0) {
            draft = "Time left: 0.0s";
            if (!this.gameover) {
                this.gameover = true;
                this.breakBridge();
            }
        }
        this.timeText.text = draft;
        
        if(!this.gameover && this.currentWeight > 1000) {

            this.gameover = true;
            this.breakBridge();
        }
        
    },

    reset: function() {
        this.players.forEach(function(dude) {
            dude.kill()
        }, this);
        this.bridge.forEach(function(dude) {
            dude.kill()
        }, this);
        this.buildBridge();
        this.blockedLayer = this.map.createLayer('blockedLayer');
        this.map.setCollisionBetween(1, 10000, true, 'blockedLayer');
        this.timer = 30;
        this.score = 0;
        this.startTime = this.game.time.now;
        this.gameover = false;
        this.spawnPlayer();
        this.scoreText.text = "Score: 0"
        this.weightText.text = "Weight on bridge: 0kgs"
    },


    spawnPlayer: function() {
        var player = null;
        if (this.game.rnd.integerInRange(1, 2) == 1) {
            player = this.players.create(0, 130, 'thin');
            player.playerSize = 'thin';
            player.playerWeight = this.game.rnd.integerInRange(50, 75);
        }
        else {
            player = this.players.create(0, 130, 'fat');
            player.playerSize = 'fat';
            player.playerWeight = this.game.rnd.integerInRange(75, 130);
        }
        this.game.physics.arcade.enable(player);
        player.body.bounce.y = 0;
        player.body.gravity.y = 400;
        player.anchor.setTo(0.5);
        player.body.collideWorldBounds = false;

        player.animations.add('right', [1, 2, 1, 0], 10, true);
        player.body.velocity.x = 100;
        player.animations.play('right');
        player.notCrossed = true;

    },


    // find objects in a tiled layer that contains a property called "type" equal to a value
    findObjectsByType: function(type, map, layer) {
        var result = new Array();
        map.objects[layer].forEach(function(element) {
            if (element.properties.type === type) {
                // phaser uses top left - tiled bottom left so need to adjust:
                element.y -= map.tileHeight;
                result.push(element);
            }
        });
        return result;
    },

    createFromTiledObject: function(element, group) {
        var sprite = group.create(element.x, element.y, 'objects');
        sprite.frame = parseInt(element.properties.frame);

        // copy all of the sprite's properties
        Object.keys(element.properties).forEach(function(key) {
            sprite[key] = element.properties[key];
        });
    },


    render: function() {

        if (false) {
            this.game.debug.body(this.star);
            this.game.debug.body(this.player);
        }
    },

};