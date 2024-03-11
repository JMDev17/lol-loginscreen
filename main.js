const input = document.querySelectorAll('input');

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active')
}

input.forEach((inputs) => {
    inputs.addEventListener('focus', handleFocus)
});