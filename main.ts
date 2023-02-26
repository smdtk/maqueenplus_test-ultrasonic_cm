basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showNumber(DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2))
    basic.pause(2000)
})
