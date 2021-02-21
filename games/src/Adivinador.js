import React, { Component } from 'react';

class Adivinador extends Component {
    constructor (props) {
        super(props);

        this.state = {
            contador: 0,
            valorArriesgado: -1
        }
    };

    start = () => {
        setInterval(
            () => {
              this.setState({contador: this.state.contador + 1})
            },
            1000
          )
    };

    stop = () => {
        clearInterval(this.start);
    }

    myChangeHandler = (Event) => {
        this.setState({valorArriesgado: parseInt(Event.target.value)})
        
    };

    render() {
        return (
            <div>
                <button onClick={this.start}>
                    start
                </button>
                {this.state.contador}
                <form>
                    <h1>Buenas</h1>
                    <p>Arriesga aca:</p>
                    <input type="text" onChange={this.myChangeHandler}/>
                </form>
                {this.state.contador === this.state.valorArriesgado ? 'Ganaste' : 'Segui Participando'}
                {this.state.contador === this.state.valorArriesgado ? this.stop : null}
            </div>
        )}
}

export default Adivinador;