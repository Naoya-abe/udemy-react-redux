import React, {Component} from 'react'; // jsxを使う際にこのReactは必要
import {connect} from 'react-redux';

import {increment, decrement} from '../actions';
import {dispatch} from '../../../../../Library/Caches/typescript/3.2/node_modules/rxjs/internal/observable/range';

class App extends Component {
  //最初に実行される

  //reduxにおいては、reduserで状態の初期化を行うので削除
  // constructor(props) {
  //   super(props);
  //   this.state = {count: 0};
  // }

  //ここも同様にactionとreducerで同じ処理を行うので不要
  // hundlePlusButton = () => {
  //   this.setState({count: this.state.count + 1});
  // };

  // hundleMinusButton = () => {
  //   this.setState({count: this.state.count - 1});
  // };

  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

//stateの情報からこのコンポーネントに必要なpropsを取り出してこのコンポーネント内のpropsとしてmappingする機能を持つ関数
const mapStateToProps = state => ({value: state.count.value});

//あるアクションが発生した時にreducerにtypeに応じた状態遷移を実行させるための関数
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
