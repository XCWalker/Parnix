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