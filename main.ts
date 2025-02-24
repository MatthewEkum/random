input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Pitchfork)
})
basic.showNumber(7)
basic.forever(function () {
    music.play(music.stringPlayable("- - F C5 - - - - ", 120), music.PlaybackMode.LoopingInBackground)
    radio.sendNumber(78)
})
