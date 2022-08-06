const header = document.querySelector("header");
const topSection = document.querySelector("section.fullscreen");
document.addEventListener("scroll", e => {
    if (topSection.getBoundingClientRect().top < 0) {
        header.classList.add("scrolled")
    } else if (topSection.getBoundingClientRect().top >= 0) {
        header.classList.remove("scrolled")
    }
})

const body = document.body;
const nav = document.querySelector("nav")
function showNav(vis) {
    if (vis != false) {
        showMenu(false)
    }

    if (nav.classList.contains("visible")) {
        nav.classList.remove("visible")
        body.classList.remove("noscroll")
    } else if (!nav.classList.contains("visible")) {
        nav.classList.add("visible")
        body.classList.add("noscroll")
    }

    if (vis == false) {
        nav.classList.remove("visible")
        body.classList.remove("noscroll")
    }
}

const menu = document.querySelector(".switcher")
function showMenu(vis) {
    if (vis != false) {
        showNav(false)
    }
    
    if (menu.classList.contains("visible")) {
        menu.classList.remove("visible")
        body.classList.remove("noscroll")
        header.classList.remove("scrolled")
    } else if (!menu.classList.contains("visible")) {
        menu.classList.add("visible")
        body.classList.add("noscroll")
        header.classList.add("scrolled")
    }

    if (vis == false) {
        menu.classList.remove("visible")
        body.classList.remove("noscroll")
        header.classList.remove("scrolled")
    } 
}


fetch("./data/examples.json")
    .then(res => res.json())
    .then(data => {
        sortedexamples = data.sort(function (a, b) {
            if (a.title < b.title) { return -1; }
            if (a.title > b.title) { return 1; }
            return 0;
        });
        examples = sortedexamples.map(example => {
            if (example.catagory == "horizontal") {
                var exampleTemplate = document.querySelector("[data-horizontal-example-template]")
                var exampleContainer = document.querySelector("[data-horizontal-example-container]")
            } else if (example.catagory == "transform") {
                var exampleTemplate = document.querySelector("[data-transform-example-template]")
                var exampleContainer = document.querySelector("[data-transform-example-container]")
            }

            const card = exampleTemplate.content.cloneNode(true).children[0];
            const title = card.querySelector("[data-example-title]");
            const subtitle = card.querySelector("[data-example-subtitle]");
            title.textContent = example.title;
            subtitle.textContent = example.catagory;
            card.href = example.url;

            if (example.color != undefined) {
                card.style.setProperty('--background-color', example.color.background);
                card.style.setProperty('--text-color', example.color.foreground);
                card.style.setProperty('--border-color', example.color.border);
            }

            exampleContainer.append(card);
        });
    })