//redux.js
import Redux from 'redux';

// --- REDUCER ---
const reducer = (state = [], action) => {
	if (action.type === 'split_string') {
    return action.payload.split('');
  } else if (action.type === 'add_character') {
    return [...state, action.payload];
  }
  return state;
};

// --- STORE ---
const store = Redux.createStore(reducer);

store.getState();

// --- ACTION 1 ---
const action1 = {
  type: 'split_string',
  payload: 'asdf'
};

// Llamada a action1
store.dispatch(action1);
store.getState();

// --- ACTION 2 ---
const action2 = {
	type: 'add_character',
  payload: 'a'
};

// Llamada a action2
store.dispatch(action2);
store.getState();
