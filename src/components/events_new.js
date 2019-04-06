import React, {Component} from 'react'; // jsxを使う際にこのReactは必要
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';

// import {postEvent} from '../actions';

class EventsNew extends Component {
  render() {
    return (
      <React.Fragment>
        <div>foo</div>
      </React.Fragment>
    );
  }
}

//stateの情報からこのコンポーネントに必要なpropsを取り出してこのコンポーネント内のpropsとしてmappingする機能を持つ関数
// const mapStateToProps = state => ({events: state.events});

//あるアクションが発生した時にreducerにtypeに応じた状態遷移を実行させるための関数
// const mapDispatchToProps = {postEvent};

export default connect(
  null,
  null
)(EventsNew);
