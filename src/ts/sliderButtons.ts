const sliders = document.querySelectorAll('.for-sliders')
const arrows = document.querySelectorAll('.arrows')
const shift = 500

buttons()

function buttons() {

    arrows?.forEach(element => {
        listenerThanWatchToParentAndScroll(element)
    })

    function listenerThanWatchToParentAndScroll(element: Element) {
        element.addEventListener('click', () => {
            const parent= element.parentElement?.querySelector('.for-sliders')
            if (!parent) return
            scroll(parent, element)
        })
    }

    function scroll(parent: Element | null, element: Element | null) {
        if (!parent) return
        if (!element) return
        parent.scrollLeft += (element.className === 'arrow-right arrows') ? shift : -shift
    }
}
