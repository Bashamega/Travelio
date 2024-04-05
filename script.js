const slides = [
    {
        url: '1.jpeg',
    },
    {
        url: '2.jpg',
    },
    {
        url: '3.jpeg',
    },
    {
        url: '4.jpeg',
    }



];

let currentIndex = 0;


const container = document.getElementById('banner')
function render() {
    container.innerHTML = ""
    slides.forEach((slide, index) => {
        const banner = document.createElement("img");
        banner.setAttribute("key", slide.url);
        banner.src = "img/" + slide.url;
        banner.style.transform = `translateX(${-100 * currentIndex}%)`;
        banner.className = "w-screen flex-shrink-0 flex-grow-0"
        container.appendChild(banner);
    });
}
render()
setInterval(() => {
    if (currentIndex !== slides.length) {
        currentIndex += 1;
    } else {
        currentIndex = 0;
    }
    render()
}, 10000);

