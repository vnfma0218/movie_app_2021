import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
 
  state = {
    count: 0
  };
  add =() => {
    this.setState( current => ({count: current.count + 1}));
  };
  minus =() => {
    this.setState({count: this.state.count -1});
  };
  componentDidMount() {
    console.log('Component rendered')
  }

  componentDidUpdate(){
    console.log('I just updated')
  }

  componentWillMount() {
    console.log('goodbye curel worl')
  }

  render(){
    console.log('Im  rendering')
    return (
      <div>
        <h1>The Number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}
export default App;
