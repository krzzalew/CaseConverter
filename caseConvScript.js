function upper() {
    const area = document.getElementById("text");
    area.value = area.value.toUpperCase();
}
function lower() {
    const area = document.getElementById("text");
    area.value = area.value.toLowerCase();
}
function proper() {
    lower();
    const area = document.getElementById("text");
    const words = area.value.split(" ");
    const len = words.length;
    for (let i = 0; i < len; i++) {
        let word = words[i];
        if (word !== '') {
            words[i] = word[0].toUpperCase() + word.slice(1);
        }
    }
    area.value = words.join(" ");
}
function sentence() {
    lower();
    const area = document.getElementById("text");
    const separators = [".", "!", "?"]
    for (let sep of separators) {
        let sentences = area.value.split(sep);
        let len = sentences.length;
        for (let i = 0; i < len; i++) {
            let sentence = sentences[i];
            if (sentence.trim() !== '') {
                let firstLetter = 0;
                while (sentence[firstLetter] === ' ' ||
                sentence[firstLetter] === '\n') {
                    firstLetter++;
                }
                sentences[i] = sentence.slice(0, firstLetter) +
                    sentence[firstLetter].toUpperCase() +
                    sentence.slice(firstLetter + 1);
            }
        }
        area.value = sentences.join(sep);
    }
}
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}