import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
      inputs: [],
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  submitChange = event => {
    this.setState({
      inputs: [...this.state.inputs, this.state.value],
      value: ''
    });
    event.preventDefault();
  }

  addList = () => {
      const newItem = this.state.inputs.map((item) => {
         return <li>{item}</li>
      })
      return newItem;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <form onSubmit={this.submitChange}>
          <input value={this.state.value} onChange= {this.handleChange}/>
          <button>Submit</button>
        </form>
        <ul>
            <this.addList />
       </ul>
        </header>
      </div>
    );
  }
}

export default App;
