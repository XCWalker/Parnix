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
    console.log(imageURL)
    console.log(document.getElementById("lightbox-image").src)
    if (imageURL == null || imageURL == undefined) {
        document.getElementById("lightbox-image").src = null;
        document.getElementById("lightbox-image").alt = null;
        document.getElementById("lightbox").classList.remove("visible");
        document.body.classList.remove("noscroll");
    } else if (alt == document.getElementById("lightbox-image").alt) {
        document.getElementById("lightbox-image").src = null;
        document.getElementById("lightbox-image").alt = null;
        document.getElementById("lightbox").classList.remove("visible");
        document.body.classList.remove("noscroll");
    } else {
        document.getElementById("lightbox-image").src = imageURL;
        document.getElementById("lightbox-image").alt = alt;
        document.getElementById("lightbox").classList.add("visible")
        document.body.classList.add("noscroll");
    }
}


// youtube api
const apiKey = "AIzaSyA_UZjw2F0nAImSiNO3ZAbBewkmFLSrBP4"; //CHANGE ME!!!
const playlistID = "PLY3WBignFwAZ0uuxGFx-6k8mrga0_oWLP";

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