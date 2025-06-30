const searchInput = document.getElementById('searchInput')
const videosContainer = document.getElementById('videosContainer')
const videoCards = Array.from(videosContainer.getElementsByClassName('video-card'))

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase()
    videoCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase()
        const channel = card.querySelector('p').textContent.toLowerCase()
        const match = title.includes(query) || channel.includes(query)
        card.style.display = match ? '' : 'none'
    })
})
