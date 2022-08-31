function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function saveImage() {
    document.querySelector('section.canvas').classList.remove('scaled');
    html2canvas(document.querySelector('#capture')).then(canvas => {
        document.querySelector('section#output').appendChild(canvas);
        document.querySelector('section#output').classList.add('visible');
        document.querySelector('section.canvas').classList.add('scaled');
        }
    )
};

function closeImage() {
    document.querySelector('section#output').classList.remove('visible');
}

function updateBigText(text) {
    const textElem = document.querySelector("#bigText")
    const textElem1 = document.querySelector("#bigText1")
    const textElem2 = document.querySelector("#bigText2")
    const textElem3 = document.querySelector("#bigText3")
    const textElem4 = document.querySelector("#bigText4")

    textElem.textContent = text;
    textElem1.textContent = text;
    textElem2.textContent = text;
    textElem3.textContent = text;
    textElem4.textContent = text;
}