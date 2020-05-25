import {createStore, applyMiddleware} from "redux"
import reducer from './reducer'
import thunk from 'redux-thunk' //为了在actionCreators中使用异步请求方法
const store = createStore(reducer, applyMiddleware(thunk));
export default store;