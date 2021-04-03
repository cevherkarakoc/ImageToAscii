import React, { useEffect, useState } from 'react'
import { getImage } from '../imageUtils';

const styles = {
  row: { display: 'flex', marginBottom: 12 }
}

const Uploader = ({ background, setBackground, setImageData }) => {
  const [width, setWidth] = useState(64);
  const [imageURI, setImageURI] = useState();

  useEffect(async () => {
    if (imageURI && width) {
      const imageData = await getImage(imageURI, width);
      setImageData(imageData);
    }
  }, [width, imageURI]);

  const changeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageURI(reader.result);
    }
    reader.readAsDataURL(file);
  }

  const changeWidth = (e) => {
    let newWidth = e.target.value;

    if (newWidth === '' || newWidth === 0) {
      newWidth = 1;
    } else if (newWidth > 256) {
      newWidth = 256;
    }

    setWidth(newWidth);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={styles.row}>
        <span>Resim : </span>
        <input style={{ marginLeft: 8 }} onChange={changeImage} type='file' accept='image/*' />
      </div>
      <div style={styles.row}>
        <span>Genişlik : </span>
        <input style={{ marginInline: 8 }} type='text' onChange={changeWidth} value={width} />
        <span>karakter</span>
      </div>
      <div style={styles.row}>
        <span>Arkaplan Rengi : </span>
        <input style={{ marginInline: 8 }} type='text' onChange={(e) => setBackground(e.target.value)} value={background} />
        <span>("black", "#ad5690", "rgb(45,99,145)")</span>
      </div>
    </div>
  )

}

export default Uploader;
