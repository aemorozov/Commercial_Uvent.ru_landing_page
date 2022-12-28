const fieldServices: HTMLElement | null = document.querySelector('.uslugi-for-circles')
const buttonLeft: HTMLElement | null = document.querySelector('.arrow-left')
const buttonRight: HTMLElement | null = document.querySelector('.arrow-right')
const screenWidth = window.innerWidth
const shift = 500
const correctionDeltaX = 1
const correctionDeltaY = 1
const step = 5
let enabled: Boolean = true
let redLineForMovingToLeft = -1900

setTimeout(() => {

    if(fieldServices) {

        if(screenWidth < 1440 && screenWidth > 740) redLineForMovingToLeft = -1600
        else if(screenWidth < 741) redLineForMovingToLeft = -700

        let margin = fieldServices.offsetLeft
        let redLineForMovingToRight = margin - 1

        if(margin) {
            fieldServices.addEventListener('wheel', getDelta)

            function getDelta(i: WheelEvent) {
                enabled = false
                i.preventDefault()
                let delta = Math.floor((i.deltaX / correctionDeltaX) || (i.deltaY / correctionDeltaY))
                if (delta > step || delta < -step && enabled) {  
                    motion(delta)
                    addNewMargin()
                }
                checkedTrueOrFalse()
                // console.log('margin:', margin, 'delta:', delta, 'enabled:', enabled)
            }
    
            function motion(delta: Number) {
                if(delta < 0 && margin < redLineForMovingToRight) {
                    toRight()
                }
                if(delta > 0 && margin > redLineForMovingToLeft) {
                    toLeft()
                }
            }
        }

        if(buttonLeft && buttonRight) {
            buttonLeft.addEventListener('click', () => {
                if(margin < redLineForMovingToRight) {
                    toRight()
                    addNewMargin()
                    checkedTrueOrFalse()
                }
            })
            buttonRight.addEventListener('click', () => {
                if(margin > redLineForMovingToLeft) {
                    toLeft()
                    addNewMargin()
                    checkedTrueOrFalse()
                }
            })
        }

        function addNewMargin() {
            if(fieldServices) {
                fieldServices.style.marginLeft = `${margin}px`   
            }
        }

        function toRight() {
            margin += shift
        }

        function toLeft() {
            margin -= shift
        }

        function checkedTrueOrFalse() {
            console.log('before', enabled)
            if(fieldServices) {
                fieldServices.addEventListener("transitionend", () => {
                    enabled = true
                    console.log('after', enabled)
                })
            }
        }
    }
}, 500)
