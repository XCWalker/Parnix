function showNav() {
    var nav = document.getElementById("nav");

    if (nav.classList.contains("hidden")) {
        nav.classList.remove("hidden")
    } else if (!nav.classList.contains("hidden")) {
        nav.classList.add("hidden")
    }
}

// youtube api
const apiKey = "AIzaSyBfvHpycrZaRpJ9gNQ3KC5DzbSakwi1GyI"; //CHANGE ME!!!
const playlistID = "PLY3WBignFwAYor6APrIeJjXfgYdtfKCGZ";

const youtubeTemplate = document.querySelector("[data-youtube-template]");
const youtubeContainer = document.querySelector("[data-youtube-container]");

function onLoadYoutube() {
    gapi.client.setApiKey(apiKey); 
    gapi.client.load('youtube', 'v3', function () {

        var request = gapi.client.youtube.playlistItems.list({
            part: 'snippet',
            playlistId: playlistID,
            maxResults: 50
        });

        request.execute(function (response) {
            if (response.items.length == null || response.items.length == 0) {
                const card = vodTemplate.content.cloneNode(true).children[0];
                const title = card.querySelector("[data-youtube-title]");
                const date = card.querySelector("[data-youtube-date]");
                const image = card.querySelector("[data-youtube-image]");
                title.textContent = "No youtubes";
                date.textContent = "Sorry, come back soon";
                image.src = "https://media.istockphoto.com/vectors/shrugmug-emoji-vector-id872831978?k=20&m=872831978&s=612x612&w=0&h=K_oWfARLQLn4H5m0Fh88Xv342wmwukkiMbZvnsnNiqU=";

                youtubeContainer.append(card);
                console.error("API quota met")
            }


            for (var i = 0; i < response.items.length; i++) {
                const card = youtubeTemplate.content.cloneNode(true).children[0];
                const title = card.querySelector("[data-youtube-title]");
                const date = card.querySelector("[data-youtube-date]");
                const link = card.querySelector("[data-youtube-link]");
                const image = card.querySelector("[data-youtube-image]");
                title.textContent = response.items[i].snippet.title;
                date.textContent = new Date(response.items[i].snippet.publishedAt).toDateString();
                image.src = response.items[i].snippet.thumbnails.high.url;
                link.href = "https://www.youtube.com/watch?" + response.items[i].snippet.resourceId.videoId;

                youtubeContainer.append(card);
            }
        });
    });
}