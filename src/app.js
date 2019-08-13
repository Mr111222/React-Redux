import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import Todolist from './components/todolist'
import store from './store'

//globe css
import './style/index.styl'
import './style/less.less'
import './style/sass.sass'
import './style/scss.scss'

// 提供器 包裹组件，<Provider>里面包裹组件</Provider> 组件就可以使用store里面的数据
const App = (
  <Provider store={store}>  
    <Todolist />
  </Provider>
)


ReactDOM.render(App, document.getElementById('app'))
