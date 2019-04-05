//適切な状態遷移を実現するための仕組みづくり
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

//Action Creater
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
