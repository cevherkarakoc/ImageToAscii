
export const handleInput = (data, width) => {
  return {
    type: 'IMAGE_CHANGED',
    imageURI: data,
    width: width
  }
}

export const handleWidth = (width) => {
  console.log(width)
  if (width === '' || width === 0) { width = 1 } else if (width > 256) {
    width = 256
  }
  return {
    type: 'WIDTH_CHANGED',
    width: width
  }
}

export const handleColorCheck = (isColor) => {
  return {
    type: 'TEXT_COLOR_CHANGED',
    isColor: isColor
  }
}

export const handleBackground = (newBack) => {
  return {
    type: 'BACKGROUND_CHANGED',
    background: newBack
  }
}
