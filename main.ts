input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.Y, -2)
    basic.pause(500)
    Player.change(LedSpriteProperty.Y, 2)
})
let Player: game.LedSprite = null
Player = game.createSprite(1, 3)
let Obstacle = game.createSprite(4, 3)
game.setLife(1)
game.setScore(0)
basic.forever(function () {
    Obstacle.move(-0.75)
    basic.pause(250)
    if (Obstacle.get(LedSpriteProperty.X) == 0) {
        Obstacle.change(LedSpriteProperty.X, 4)
        Obstacle.change(LedSpriteProperty.Y, 0)
        game.addScore(1)
        basic.pause(randint(20, 150))
    }
    if (Obstacle.isTouching(Player)) {
        game.gameOver()
    }
})
