import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Stylem extends Component{
    render(){
        if(!this.props.isColor)
            return (
                <style>{"\
                    span{\
                    color:black !important;\
                    }\
                "}</style>
            );
        else
            return(<span></span>)
    }

}

function mapStateToProps(state) {
    return {
        isColor: state.values.isColor
    }

}

export default connect(mapStateToProps)(Stylem);