const checkBox: HTMLInputElement | null = document.querySelector('#checkbox-mobile-menu')

checkBox?.addEventListener('change', () => {
    checkBox.checked
        ? document.documentElement.style.overflowY = 'hidden'
        : document.documentElement.style.overflowY = ''
})