import _ from 'lodash';
import {READ_EVENTS} from '../actions';

//状態の初期値を定義

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id');
    default:
      return events;
  }
};
