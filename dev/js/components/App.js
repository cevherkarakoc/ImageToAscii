import React from 'react'
import Uploader from '../containers/uploader'
import ProImage from '../containers/proImage'
import Background from '../containers/Background'
import Stylem from '../containers/Style'

const App = () => (
  <div>
    <Stylem />
    <h2>ImageToAscii</h2>
    <Uploader />
    <hr />
    <h2>Sonuç</h2>
    <Background>
      <ProImage />
    </Background>
  </div>
)

export default App
