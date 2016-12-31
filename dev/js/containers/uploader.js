import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {handleInput, handleWidth,
     handleColorCheck, handleBackground } from '../actions/index'

class Uploader extends Component {
  changeImage (e) {
    var file = e.target.files[0]
    var reader = new FileReader()
    var that = this
    reader.onloadend = function () {
      that.props.handleInput(reader.result, that.props.values.width)
    }
    reader.readAsDataURL(file)
  }

  changeWidth (e) {
    var newValue = e.target.value
    this.props.handleWidth(newValue)
  }

  changeTextColor (e) {
    var isColor = e.target.checked
    this.props.handleColorCheck(isColor)
  }

  changeBackground (e) {
    var newBack = e.target.value
    this.props.handleBackground(newBack)
  }

  render () {
    return (
      <div>
                Resim : <input onChange={(e) => this.changeImage(e)}
                  type='file' accept='image/*' /> <br /> <br />
                Genişlik: <input id='input_width' type='text' onChange={(e) => this.changeWidth(e)}
                  value={this.props.values.width} /> karakter <br /> <br />
                Arkaplan Rengi : <input id='input_background' type='text' onChange={(e) => this.changeBackground(e)}
                  defaultValue={this.props.values.background} /> ("black", "#ad5690", "rgb(45,99,145)") <br /> <br />
                Renkli : <input id='color' type='checkbox' onChange={(e) => this.changeTextColor(e)} /> <br />

      </div>
    )
  }

}

function mapStateToProps (state) {
  return {
    values: state.values
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({
    handleInput: handleInput,
    handleWidth: handleWidth,
    handleColorCheck: handleColorCheck,
    handleBackground: handleBackground
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Uploader)
