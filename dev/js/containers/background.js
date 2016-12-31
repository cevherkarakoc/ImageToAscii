import React, {Component} from 'react'
import {connect} from 'react-redux'

class Background extends Component {
  render () {
    var style = {
      backgroundColor: this.props.background,
      display: 'inline-block',
      padding: 9
    }
    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }

}

function mapStateToProps (state) {
  return {
    background: state.values.background
  }
}

export default connect(mapStateToProps)(Background)
