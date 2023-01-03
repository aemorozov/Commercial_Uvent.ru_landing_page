const body: HTMLElement | null = document.querySelector('.body')
const forSlider: HTMLElement | null = document.querySelector('.for-slider')
const fieldServices: HTMLElement | null = document.querySelector('.uslugi-for-circles')
const buttonLeft: HTMLElement | null = document.querySelector('.arrow-left')
const buttonRight: HTMLElement | null = document.querySelector('.arrow-right')
const arrowsAria: HTMLElement | null = document.querySelector('.arrows')
const timeToTakeTheMarginLeft = 500
const screenWidth = window.innerWidth
const correctionDeltaX = 1
const correctionDeltaY = 1
const step = 5
let enabled: Boolean = true
let redLineForMovingToLeft = -1650
let shift = 461

setTimeout(() => {

    if(fieldServices) {

        let margin = fieldServices.offsetLeft
        let redLineForMovingToRight = margin - 1

        isScreenWidth()
        wheel()
        touch()
        buttons()

        function isScreenWidth() {
            if(screenWidth < 1440 && screenWidth > 1200) {
                redLineForMovingToLeft = -1100
                shift = 330
            }
            else if(screenWidth <= 1200 && screenWidth > 1000) {
                redLineForMovingToLeft = -1300
                shift = 300
            }
            else if(screenWidth <= 1000 && screenWidth > 744) {
                redLineForMovingToLeft = -1600
                shift = 280
            }
            else if(screenWidth <= 744 && screenWidth > 550) {
                redLineForMovingToLeft = -900
                shift = 240
            }
            else if(screenWidth <= 550 && screenWidth > 400) {
                redLineForMovingToLeft = -1000
                shift = 210
            }
            else if(screenWidth <= 400) {
                redLineForMovingToLeft = -1100
                shift = 190
            }
        }
        
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
            fieldServices?.addEventListener('body', addOverflowX)
            // arrowsAria?.addEventListener('touchstart', addOverflowX)

            function addOverflowX() {
                if(forSlider) forSlider.style.overflowX = 'auto'
            }
        }

        // function touch_old() {
        //     fieldServices?.addEventListener('touchstart', saveStartX)
        //     arrowsAria?.addEventListener('touchstart', saveStartX)
        //     const coordinates = [0, 0]
        //     // fieldServices?.style.overflowX = 'auto';

        //     let screenX: number
        //     let screenY: number
            
        //     function saveStartX(event: TouchEvent) {
        //         // event.preventDefault()
        //         screenX = Math.floor(event.changedTouches[0].clientX)
        //         screenY = Math.floor(event.changedTouches[0].clientY)
        //         coordinates[0] = screenX
        //             fieldServices?.addEventListener('touchmove', saveActualX)
        //             arrowsAria?.addEventListener('touchmove', saveActualX)
        //     }

        //     function saveActualX(event: TouchEvent) {
        //         const clientY = Math.floor(event.changedTouches[0].clientY)
        //         console.log('screenY', screenY, 'clientY', clientY)
        //         if(Math.abs(screenY - clientY) < 20) {
        //             event.preventDefault()
        //             const clientX = Math.floor(event.changedTouches[0].clientX)
        //             coordinates[1] = clientX
        //             move()
        //         }
        //     }

        //     function move() {
        //         const deltaX = coordinates[0] - coordinates[1]
        //         console.log('coordinates', coordinates, 'deltaX', deltaX)
        //         if(deltaX > 40 && margin > redLineForMovingToLeft) {
        //             toLeft()
        //             addNewMargin()
        //             coordinates[0] = coordinates[1]
        //         }
        //         else if(deltaX < -40 && margin < redLineForMovingToRight) {
        //             toRight()
        //             addNewMargin()
        //             coordinates[0] = coordinates[1]
        //         }
        //     }
        // }

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
