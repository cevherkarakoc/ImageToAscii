import React, { useState } from 'react'
import Uploader from './Uploader'
import ProImage from './ProImage'
import Background from './Background'

const App = () => {
  const [background, setBackground] = useState('black');
  const [imageData, setImageData] = useState();

  return (
    <div>
      <h2>ImageToAscii</h2>
      <Uploader
        background={background}
        setBackground={setBackground}
        setImageData={setImageData}
      />
      <hr />
      <h2>Sonuç</h2>
      <Background background={background}>
        <ProImage imageData={imageData} />
      </Background>
    </div>
  )
}

export default App;
