const initialState = {
  imageURI: null,
  imageData: null
}

const ascii = ['@', 'M', 'X', '¤', '»', 'c', '¢', '~', '·', '\u00a0']

function getImage (imageURI, width) {
  var img = new Image()

  img.src = imageURI

  var ratio = img.width / width
  img.width = width
  img.height /= ratio
  if (img.height === 0) { return null }
  var canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height
  var canvasContext = canvas.getContext('2d')
  canvasContext.drawImage(img, 0, 0, canvas.width, canvas.height)
  var imageData = canvasContext.getImageData(0, 0, img.width, img.height)
  var data = imageData.data
  var r, g, b, c, avg
  var result = []
  var row = []

  for (var i = 0; i < data.length; i += 4) {
    r = data[i]
    g = data[i + 1]
    b = data[i + 2]
    avg = (0.21 * r) + (0.72 * g) + (0.07 * b)

    c = ascii[Math.floor(avg / 28)]
    if (i !== 0 && i % (4 * width) === 0) {
      result.push(row)
      row = []
    }
    row.push({
      char: c,
      r: r,
      g: g,
      b: b,
      avg: avg
    })
  }
  result.push(row)
  return result
}

export default function (state = initialState, action) {
  var imageData
  switch (action.type) {
    case 'IMAGE_CHANGED':
      imageData = getImage(action.imageURI, action.width)
      return Object.assign({}, state, {
        imageURI: action.imageURI,
        imageData: imageData
      })
    case 'WIDTH_CHANGED':
      if (!state.imageURI) {
        return state
      }
      imageData = getImage(state.imageURI, action.width)
      return Object.assign({}, state, {
        imageData: imageData
      })
  }
  return state
}
