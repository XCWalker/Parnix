function showNav() {
    var nav = document.getElementById("nav");

    if (nav.classList.contains("hidden")) {
        nav.classList.remove("hidden")
    } else if (!nav.classList.contains("hidden")) {
        nav.classList.add("hidden")
    }
}

function mailTo(id, user, domain, subject) {
    document.querySelector("#" + id).href = "mailto:" + user + "@" + domain + "?Subject=" + subject;
}

// gallery
function galleryImage(imageURL, alt) {
    document.getElementById("lightbox-image").src = imageURL;
    document.getElementById("lightbox-image").alt = alt;
    document.getElementById("lightbox").classList.add("visible")
    document.body.classList.add("noscroll");
}

function hideLightbox() {
    document.getElementById("lightbox").classList.remove("visible")
    document.body.classList.remove("noscroll");
}


// youtube api
const apiKey = "AIzaSyBGF-_q24Hs9nN_ElRrnVMR-i0t0QiuShI"; //CHANGE ME!!!
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
            for (var i = 0; i < response.items.length; i++) {
                const card = youtubeTemplate.content.cloneNode(true).children[0];
                const title = card.querySelector("[data-youtube-title]");
                const date = card.querySelector("[data-youtube-date]");
                const link = card.querySelector("[data-youtube-link]");
                const image = card.querySelector("[data-youtube-image]");
                title.textContent = response.items[i].snippet.title;
                date.textContent = new Date(response.items[i].snippet.publishedAt).toDateString();
                image.src = response.items[i].snippet.thumbnails.high.url;
                link.href = "https://www.youtube.com/watch?v=" + response.items[i].snippet.resourceId.videoId;

                youtubeContainer.append(card);
            }
        });
    });
}