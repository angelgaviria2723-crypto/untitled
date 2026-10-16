
    let puntaje = 0

    basic.showString("JUEGO")

    input.onButtonPressed(Button.A, function () {
        puntaje += 1
            basic.showNumber(puntaje)
            })

            input.onButtonPressed(Button.B, function () {
                if (puntaje >= 10) {
                        basic.showString("GANASTE")
                            } else {
                                    basic.showString("SIGUE")
                                            basic.showNumber(puntaje)
                                                }
                                                })

                                                basic.forever(function () {
                                                    if (puntaje >= 10) {
                                                            basic.showIcon(IconNames.Happy)
                                                                }
                                                                })


