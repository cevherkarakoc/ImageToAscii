const ascii = ['@', 'M', 'X', '¤', '»', 'c', '¢', '~', '·', '\u00a0'];

const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    })
}

export const getImage = async (imageURI, width) => {
    const img = await loadImage(imageURI);

    var ratio = img.width / width;
    img.width = width;
    img.height /= ratio;

    if (img.height === 0) { return null }
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var canvasContext = canvas.getContext('2d');
    canvasContext.drawImage(img, 0, 0, canvas.width, canvas.height);
    var imageData = canvasContext.getImageData(0, 0, img.width, img.height);
    var data = imageData.data;
    var r, g, b, c, avg;
    var result = [];
    var row = [];
    for (var i = 0; i < data.length; i += 4) {
        r = data[i];
        g = data[i + 1];
        b = data[i + 2];
        avg = (0.21 * r) + (0.72 * g) + (0.07 * b);

        c = ascii[Math.floor(avg / 28)];
        if (i !== 0 && i % (4 * width) === 0) {
            result.push(row);
            row = [];
        }
        row.push({
            char: c,
            r: r,
            g: g,
            b: b,
            avg: avg
        });
    }
    result.push(row);
    return result;
}
