import React from 'react'; // jsxを使う際にこのReactは必要

// class componentの例

// class App extends Component { //AppというクラスがComponentを継承している
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input
//           type="text"
//           onChange={() => {
//             console.log("I'm clicked.");
//           }}
//         />
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};

const Cat = () => {
  return <div>Meow!</div>;
};
export default App;
