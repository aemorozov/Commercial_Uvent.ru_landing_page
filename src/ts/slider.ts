const fieldServices: HTMLElement | null = document.querySelector('.uslugi-for-circles')
const buttonLeft: HTMLElement | null = document.querySelector('.arrow-left')
const buttonRight: HTMLElement | null = document.querySelector('.arrow-right')
const arrowsAria: HTMLElement | null = document.querySelector('.arrows')
const timeToTakeTheMarginLeft = 500
const screenWidth = window.innerWidth
const shift = 461
const correctionDeltaX = 1
const correctionDeltaY = 1
const step = 5
let enabled: Boolean = true
let redLineForMovingToLeft = -1650

setTimeout(() => {

    if(fieldServices) {

        if(screenWidth < 1440 && screenWidth > 740) redLineForMovingToLeft = -1600
        else if(screenWidth < 741) redLineForMovingToLeft = -700

        let margin = fieldServices.offsetLeft
        let redLineForMovingToRight = margin - 1

        wheel()
        touch()
        buttons()
        
        function wheel() {
            fieldServices?.addEventListener('wheel', moveForWheel)
            arrowsAria?.addEventListener('wheel', moveForWheel)
            function moveForWheel(i: WheelEvent): void {
                i.preventDefault()
                const delta = Math.floor((i.deltaX / correctionDeltaX) || (i.deltaY / correctionDeltaY))
                if ((delta > step || delta < -step) && enabled === true) {
                    if(delta < 0 && margin < redLineForMovingToRight) toRight()
                    if(delta > 0 && margin > redLineForMovingToLeft) toLeft()
                    addNewMargin()
                }
            }
            checkedTrueOrFalse()
        }

        function buttons() {
            buttonLeft?.addEventListener('click', () => {
                if(margin < redLineForMovingToRight) {
                    toRight()
                    addNewMargin()
                    checkedTrueOrFalse()
                }
            })
            buttonRight?.addEventListener('click', () => {
                if(margin > redLineForMovingToLeft) {
                    toLeft()
                    addNewMargin()
                    checkedTrueOrFalse()
                }
            })
        }

        function touch() {
            fieldServices?.addEventListener('touchstart', saveStartX)
            arrowsAria?.addEventListener('touchstart', saveStartX)
            const coordinates = [0, 0]

            function saveStartX(event: TouchEvent) {
                const screenX = Math.floor(event.changedTouches[0].clientX)
                coordinates[0] = screenX
                    fieldServices?.addEventListener('touchmove', saveActualX)
                    arrowsAria?.addEventListener('touchmove', saveActualX)
            }

            function saveActualX(event: TouchEvent) {
                const clientX = Math.floor(event.changedTouches[0].clientX)
                coordinates[1] = clientX
                move()
            }

            function move() {
                const deltaX = coordinates[0] - coordinates[1]
                console.log('coordinates', coordinates, 'deltaX', deltaX)
                if(deltaX > 200 && margin > redLineForMovingToLeft) {
                    toLeft()
                    addNewMargin()
                    coordinates[0] = coordinates[1]
                }
                else if(deltaX < -200 && margin < redLineForMovingToRight) {
                    toRight()
                    addNewMargin()
                    coordinates[0] = coordinates[1]
                }
            }
        }

        function addNewMargin() {
            if(fieldServices) {
                fieldServices.style.marginLeft = `${margin}px`   
            }
        }

        function toRight() {
            enabled = false  
            margin += shift
        }

        function toLeft() {
            enabled = false  
            margin -= shift
        }

        function checkedTrueOrFalse() {
            fieldServices?.addEventListener("transitionend", () => {
                enabled = true
            })
        }
    }
}, timeToTakeTheMarginLeft)
