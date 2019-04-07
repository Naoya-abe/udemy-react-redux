import _ from 'lodash';
import {READ_EVENTS, DELETE_EVENT} from '../actions';

//状態の初期値を定義

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id');
    case DELETE_EVENT:
      console.log(action.id);
      delete events[action.id];
      // スプレッド演算子　新しいメモリ空間上に更新後のupdateされたイベントのオブジェクトをreducerが返してくれる
      return {...events};
    default:
      return events;
  }
};
