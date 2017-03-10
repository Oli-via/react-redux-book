import { combineReducers } from 'redux';
import BookReducer from './reducer_book'
import ActiveBookReducer from './reducer_active_book'

const rootReducer = combineReducers({
  // *****any key in combineReducers ends up as a key on our global state*****
  // 这里的key是全局的state，每个container都可以通过this.props.的方式获取到
  books: BookReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
