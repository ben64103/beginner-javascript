const button = document.querySelector('.bigger')

button.addEventListener('click', (e) => {
  // const incrementFont = e.currentTarget.style.fontSize + `${1}px`
  // e.target.style.fontSize = incrementFont++
  const newFontSize = parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`

})