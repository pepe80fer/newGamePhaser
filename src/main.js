import Phaser from './lib/phaser.js'
import MainScene from './scenes/MainScene.js'

const window = {width: 800, height: 480};

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: window.width,
    height: window.height,
    parent: "canvas",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
            debug: true
		}
	},
    scene: [MainScene]
});
