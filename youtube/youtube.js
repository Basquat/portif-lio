const searchInput = document.getElementById("searchInput")
const videosContainer = document.getElementById("videosContainer")
const videoCards = Array.from(videosContainer.getElementsByClassName("video-card"))

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase()
    videoCards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase()
        const channel = card.querySelector("p").textContent.toLowerCase()
        const show = title.includes(value) || channel.includes(value)
        card.style.display = show ? "" : "none"
    })
})
