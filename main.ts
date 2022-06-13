input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    servos.P0.setAngle(90)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    servos.P0.setAngle(0)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    servos.P0.setAngle(90)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
})
input.onButtonPressed(Button.AB, function () {
    servos.P0.setAngle(0)
    basic.pause(800)
    servos.P0.setAngle(180)
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    servos.P0.setAngle(180)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    servos.P0.setAngle(90)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
servos.P0.setAngle(90)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    `)
