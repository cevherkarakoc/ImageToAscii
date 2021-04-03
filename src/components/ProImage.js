import React from 'react'

const convertAscii = (imageData) => {
  return imageData.map((row, i) => {
    return (
      <span key={i}>
        {row.map((pixel, j) => {
          var style = { color: 'rgb(' + pixel.r + ',' + pixel.g + ',' + pixel.b + ')' }
          return (
            <span key={i + 'x' + j} style={style} >
              {pixel.char}
            </span>)
        })}
        <br />
      </span>
    )
  });
}

const ProImage = ({ imageData }) => {
  if (!imageData) return (<p style={{ color: 'white' }}>Bir resim yükleyin...</p>)
  return (
    <div style={{ font: '14px/8px monospace', width: 'auto' }}>
      {convertAscii(imageData)}
    </div>
  )
}

export default ProImage;
