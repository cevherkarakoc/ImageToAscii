import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Background extends Component{
    render(){
        var style = {backgroundColor : this.props.background}
        return (
            <div style={style} className="cover">
                {this.props.children}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        background: state.values.background
    }

}

export default connect(mapStateToProps)(Background);