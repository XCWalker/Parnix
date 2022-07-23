function showAppDraw() {
    var appDraw = document.getElementById('app-draw');
    if (appDraw.classList.contains('visible')) {
        appDraw.classList.remove('visible')
    } else if (!appDraw.classList.contains('visible')) {
        appDraw.classList.add('visible')
    } else {
        console.error("App Draw Classlist Error")
    }
}

function showMenuDraw() {
    var menuDraw = document.getElementById('menu-draw');
    if (menuDraw.classList.contains('visible')) {
        menuDraw.classList.remove('visible')
    } else if (!menuDraw.classList.contains('visible')) {
        menuDraw.classList.add('visible')
    } else {
        console.error("Menu Draw Classlist Error")
    }
}

const appTemplate = document.querySelector("[data-app-template]");
const appContainer = document.querySelector("[data-app-container]");

fetch("https://raw.githubusercontent.com/XCWalker/Default/main/app-switcher.json")
    .then(res => res.json())
    .then(data => {
        sortedapps = data.sort(function (a, b) {
            if (a.title < b.title) { return -1; }
            if (a.title > b.title) { return 1; }
            return 0;
        });
        apps = sortedapps.map(app => {
            if (appContainer != null) {
                const card = appTemplate.content.cloneNode(true).children[0];
                const title = card.querySelector("[data-app-title]");
                const sizingTitle = card.querySelector("[data-app-title]");
                const hoverTitle = card.querySelector("[data-app-hover-title-sizing]");
                const sizingHoverTitle = card.querySelector("[data-app-hover-title-sizing]");
                const icon = card.querySelector("[data-app-icon]");
                title.textContent = app.title;
                sizingTitle.textContent = app.title;
                icon.src = app.iconURL;
                card.href = app.URL;
                hoverTitle.textContent = app.hoverTXT;
                sizingHoverTitle.textContent = app.hoverTXT;

                appContainer.append(card);
            }
            if (app.title == "Parnix") {
                document.title = app.title + " | " + app.hoverTXT + " | XCWalker";
                document.querySelector('meta[name="description"]').setAttribute("content", app.description);
                if (appContainer != null) {
                    app.pages.map(redirect => {
                        const card = menuTemplate.content.cloneNode(true).children[0];
                        const title = card.querySelector("[data-menu-title]");
                        const sizingTitle = card.querySelector("[data-menu-title]");
                        const hoverTitle = card.querySelector("[data-menu-hover-title-sizing]");
                        const sizingHoverTitle = card.querySelector("[data-menu-hover-title-sizing]");

                        title.textContent = redirect.navTXT;
                        sizingTitle.textContent = redirect.navTXT;
                        card.href = redirect.redirectURL;
                        hoverTitle.textContent = redirect.navHoverTXT;
                        sizingHoverTitle.textContent = redirect.navHoverTXT;

                        menuContainer.append(card);
                    })
                }
            }

            return { app }
        })
    })