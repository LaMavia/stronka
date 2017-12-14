const title = document.querySelector('.landing_title')
const desc = document.querySelector('.landing_desc')

title.addEventListener('click', (e) => {
	const text = prompt('Tell me about your day...')
	desc.innerHTML = text
})