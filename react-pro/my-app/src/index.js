import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.scss'
import {Provider} from "react-redux"
import store from "./store"
import {HashRouter as Router} from 'react-router-dom'
ReactDOM.render(
  // 标记出应用中潜在问题的工具
  // Provider将自己的属性传递给需要使用的容器组件，容器组件可以监控状态改变，一旦有新的状态，就会给ui组件传递新的属性
  // <React.StrictMode> 出现两次渲染
    <Provider store={store}>
      <Router>
          <App />
      </Router>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

