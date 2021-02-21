import React, { Component } from 'react';

class Boton2 extends Component {
    constructor (props) {
        super(props)

        this.state = {
            color: 'pink',
            height: 50,
            width: 100,
        }
    }

    changeState = () => {
        this.state.color === 'pink' ? this.setState({ color: 'green', height: 90, width: 190 }) : this.setState({ color: 'pink', height: 50, width: 100 })
    }


    render() {
        return (
            <div>
                <button
                onClick={this.changeState}
                style={{ backgroundColor: this.state.color, height: this.state.height, width: this.state.width }}>
                  {this.props.utilidad}
                </button>
            </div>
        )}
}

export default Boton2;