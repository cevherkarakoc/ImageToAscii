import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ProImage extends Component{

    convertAscii(){
        return this.props.imageData.map((row,i) => {
            return (
                <span key={i}>
                    {row.map((pixel,j) => {
                        var style = {color : "rgb("+pixel.r+","+pixel.g+","+pixel.b+")"};
                        return (
                        <span key={i+"x"+j} style={style} >
                            {pixel.char}
                        </span>)
                    })}
                    <br/>
                </span>
                
            )
        })
    }

    render(){
         if(!this.props.imageData) return (<p>Bir resim yükleyin...</p>);
        return (
           
            <div className="asciiBox">
                {this.convertAscii()}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        imageData: state.image.imageData
    }

}

export default connect(mapStateToProps)(ProImage);