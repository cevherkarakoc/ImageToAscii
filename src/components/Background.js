import React from 'react'

const Background = ({ background, children }) => {
  const style = {
    backgroundColor: background,
    display: 'inline-block',
    padding: 9
  };

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Background;
