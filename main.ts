pins.digitalWritePin(DigitalPin.P0, 1)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P1, 2)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 3)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P1, 1)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P0, 1)
basic.forever(function () {
	
})
