import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {number: this.props.initial};
      setInterval(
        () => {
          this.setState({number: this.state.number + 1})
        },
        1000
      )
    }  
    
    render() {
      return (
      <div>
        Count: <NumberStyled number={this.state.number} /> {this.props.extra}
      </div>
      );
    }
  }
  
  function NumberStyled(props) {
    return "NUMBER:" + (props.number + 1);
  }
  
  class CounterManager extends React.Component {
    constructor(props)   {
      super(props);
      this.state = {switch: false};
      setInterval(() => this.setState({switch: !this.state.switch}), 3000)  ;
  
    }
  
    render() {
      return (
        <>
          <Counter initial={4} extra={this.state.switch ? "hola": "chau"} />
          <Counter initial={15} extra={"chau"} />
        </>
      );  
    }
  }
 
export default CounterManager;