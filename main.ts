namespace SpriteKind {
    export const Powerup = SpriteKind.create()
    export const power = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    half = 1
})
info.onCountdownEnd(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`finish`, function (sprite, location) {
    if (vueltas == 3) {
        info.stopCountdown()
        tiempo = info.score()
        game.over(true)
        info.setScore(0)
    }
    info.startCountdown(45)
    info.setScore(vueltas)
    if (half == 1) {
        vueltas += 1
        half = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.power, function (sprite, otherSprite) {
    controller.moveSprite(car1, 150, 150)
    for (let index = 0; index < 4; index++) {
        tiempo += 1
        pause(1000)
    }
    controller.moveSprite(car1, 100, 100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    game.over(false)
})
let tiempo = 0
let vueltas = 0
let car1: Sprite = null
let half = 0
scene.setBackgroundColor(1)
tiles.setTilemap(tilemap`track1`)
scene.setBackgroundImage(assets.image`Fire 2`)
let turbo = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 8 8 8 8 8 8 8 8 8 8 2 2 f 
    f 2 2 8 8 8 8 8 8 8 8 8 8 2 2 f 
    f 2 2 2 2 2 8 8 8 8 2 2 2 2 2 f 
    f 2 2 2 2 2 8 8 8 8 2 2 2 2 2 f 
    f 2 2 2 2 2 8 8 8 8 2 2 2 2 2 f 
    f 2 2 2 2 2 8 8 8 8 2 2 2 2 2 f 
    f 2 2 2 2 2 8 8 8 8 2 2 2 2 2 f 
    f 2 2 2 2 2 8 8 8 8 2 2 2 2 2 f 
    f 2 2 2 2 2 8 8 8 8 2 2 2 2 2 f 
    f 2 2 2 2 2 8 8 8 8 2 2 2 2 2 f 
    f 2 2 2 2 2 8 8 8 8 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.power)
tiles.placeOnTile(turbo, tiles.getTileLocation(7, 40))
half = 1
car1 = sprites.create(assets.image`car0`, SpriteKind.Player)
let humo = sprites.create(assets.image`humo1`, SpriteKind.Player)
scene.cameraFollowSprite(car1)
tiles.placeOnTile(car1, tiles.getTileLocation(7, 32))
tiles.placeOnTile(humo, tiles.getTileLocation(7, 32))
controller.moveSprite(car1, 100, 100)
humo.setStayInScreen(false)
game.onUpdate(function () {
    if (controller.right.isPressed()) {
        car1.setImage(assets.image`car1`)
    }
    if (controller.left.isPressed()) {
        car1.setImage(assets.image`car6`)
    }
    if (controller.up.isPressed()) {
        car1.setImage(assets.image`car0`)
    }
    if (controller.down.isPressed()) {
        car1.setImage(assets.image`car3`)
    }
})
game.onUpdateInterval(1000, function () {
	
})
forever(function () {
    scene.setBackgroundImage(assets.image`Fire 1`)
    pause(400)
    scene.setBackgroundImage(assets.image`Fire 2`)
    pause(400)
})
