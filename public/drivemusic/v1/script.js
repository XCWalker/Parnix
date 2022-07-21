function showNav() {
    var nav = document.getElementById("nav");

    if (nav.classList.contains("hidden")) {
        nav.classList.remove("hidden")
    } else if (!nav.classList.contains("hidden")) {
        nav.classList.add("hidden")
    }
}