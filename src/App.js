import React, {Component} from 'react'; // jsxを使う際にこのReactは必要

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input
          type="text"
          onChange={() => {
            console.log("I'm clicked.");
          }}
        />
      </React.Fragment>
    );
  }
}

export default App;
