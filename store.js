import { createStore, combineReducers } from 'redux';
import axios from 'axios';

const {createStore, combineReducers} = Redux;
const { HashRouter, Link, Route } = ReactRouterDOM;

const reducer = combineReducers({
  events: (state =[], action) =>{
    if(action.type === 'SET_EVENTS'){
      return action.event;
    } else if (action.type === "CREATE_EVENTS"){
      return [...state, action.event]
    }
    return state;
  }
})

const store = createStore(reducer);

const loadStore = async ()=>{
  const [events] = await (axios.get('./events')).data;
};


const createEvent = async (thing)=> {
  const created = (await axios.post('/api/event', event)).data;
  store.dispatch( type: 'CREATE_EVENT', event: created)
};
​
export default store;
export { loadStore }
