import React, {Component} from 'react'; // jsxを使う際にこのReactは必要
import {connect} from 'react-redux';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableHeaderRow,
  TableRowColumn,
  TableRow,
} from 'material-ui/Table';
import FloatingActioinButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {readEvents} from '../actions';

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`events/${event.id}`}>{event.title}</Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ));
  }

  render() {
    const style = {
      position: 'fixed',
      right: 12,
      bottom: 12,
    };
    return (
      <React.Fragment>
        <FloatingActioinButton
          style={style}
          containerElement={<Link to="/events/new" />}>
          <ContentAdd />
        </FloatingActioinButton>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

//stateの情報からこのコンポーネントに必要なpropsを取り出してこのコンポーネント内のpropsとしてmappingする機能を持つ関数
const mapStateToProps = state => ({events: state.events});

//あるアクションが発生した時にreducerにtypeに応じた状態遷移を実行させるための関数
const mapDispatchToProps = {readEvents};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsIndex);
