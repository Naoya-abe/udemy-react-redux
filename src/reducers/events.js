import _ from 'lodash';
import {
  CREATE_EVENT,
  READ_EVENTS,
  DELETE_EVENT,
  READ_EVENT,
  UPDATE_EVENT,
} from '../actions';

//状態の初期値を定義

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data;
      console.log(action.response.data);
      // {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."}
      return {...events, [data.id]: data};

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
