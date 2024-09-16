import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
	preload() {
		this.load.image('coin', './assets/coin.png');
	}

	create() {
		this.add
			.text(this.sys.canvas.width / 2, 300, 'Hello World')
			.setOrigin(0.5, 0.5);

		this.add.image(this.sys.canvas.width / 2, 250, 'coin');
	}
}

const game = new Phaser.Game({
	type: Phaser.AUTO,
	scale: {
		mode: Phaser.Scale.ScaleModes.FIT,
		autoCenter: Phaser.Scale.Center.CENTER_BOTH,
	},
	parent: 'game',
	width: 800,
	height: 600,
	scene: GameScene,
});

if (process.env.DEBUG === 'true') {
	console.log('loaded esbuild watch listener');
	new EventSource('/esbuild').addEventListener('change', () =>
		location.reload()
	);
}
