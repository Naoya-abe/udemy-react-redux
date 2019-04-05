import React, {Component} from 'react'; // jsxを使う際にこのReactは必要

const App = () => <Counter />;

class Counter extends Component {
  //最初に実行される
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  hundlePlusButton = () => {
    this.setState({count: this.state.count + 1});
  };

  hundleMinusButton = () => {
    this.setState({count: this.state.count - 1});
  };

  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.hundlePlusButton}>+1</button>
        <button onClick={this.hundleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
