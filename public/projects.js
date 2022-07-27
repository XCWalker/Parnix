const projectTemplate = document.querySelector("[data-app-template]");
const projectContainer = document.querySelector("[data-project-container]");

fetch("./data/projects.json")
    .then(res => res.json())
    .then(data => {
        sortedprojects = data.sort(function (a, b) {
            if (a.title < b.title) { return -1; }
            if (a.title > b.title) { return 1; }
            return 0;
        });
        projects = sortedprojects.map(project => {
            if (projectContainer != null) {
                const card = projectTemplate.content.cloneNode(true).children[0];
                const title = card.querySelector("[data-project-title]");
                const date = card.querySelector("[data-project-date]");
                const description = card.querySelector("[data-project-description]")
                const iframe = card.querySelector("[data-project-iframe")
                const iframeContainer = card.querySelector("[data-project-iframe-container")
                const icon = card.querySelector("[data-project-icon]");

                title.textContent = project.title;
                date.textContent = project.date;
                description.textContent = project.description;
                icon.src = "https://parnix.xcwalker.dev" + project.iconURL;
                iframe.src = "https://parnix.xcwalker.dev" + project.url;
                iframeContainer.href = "https://parnix.xcwalker.dev" + project.url;

                projectContainer.append(card);
            }

            return { project }
        })
    })