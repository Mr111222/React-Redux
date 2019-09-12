### 使用注意点 react-redux
  文件目录
  src---
    |-store
    |   |-index.js // 主入口
    |   |-reducer.js // 定义初始化数据,以及当有action提交逻辑时候，修改数据
    |   |
    |   |-types.js // 保存action提交的type值
    |-components
    |   |-todolist.js
    |-app.js

  1. in app.js
  	import {Provider} from 'react-redux'
  	import store = './store'
  	import TodoList from './components/todolist'
  	const APP = (
			<Provider store = {store}> 
				// 通过Provider变迁进行包裹之后，里面组件就可以共享store里定义的defautState的初始数据，不用之前this.state = store.getState()方法进行获取数据了
				<TodoList />
			</Provider>
  	)

  	ReactDOM.render(APP, document.getElementById('app'))


  2. in store/index.js
  	import {createStore} from 'redux'
		import reducer from './reducer'
		const store = createStore(
		  reducer
		)
		export default store

	3. in components/todolist.js
		import React, { Component } from 'react'
		import * as types from '../store/types'
		import {connect} from 'react-redux' // 连接器

		class TodoList extends Components{
			constructor(...arg){
				super(...arg)
			}
			render () {
				return (
					<div>
							<button onClick = {this.props.addFn}></button>
							<ul>
								{
									this.props.list
									?
									this.props.list.map((item, index)=> <li key={index}>{item}</li>)
									:
									''
								}
							</ul>
					</div>>
				)
			}
		}
		// 将定义的初始数据映射props身上并返回 ---->使用: this.props.list
		const stateToProps = (state) => {
			return {
				list: state.list
			}
		}

		// 将dispatch映射到props上并返回 ---->使用: this.props.addFn
		cosnt dispatchToProps = (dispatch) => {
			return {
				addFn(){
					let action = {
						type: 'ADDLIST',
						val: '增加的数据'
					}
					dispatch(action)
				}
			}
		}
		export default connect(stateToProps, dispatchToProps)(TodoList) // 通过连接器包裹从而使状态映射为属性 state->props 
	
	4. in reducer.js

		const defaultState = {
			list: []
		}

		export default (state=defaultState, acton){
			if(ation.type === 'ADDLIST'){
				let newState = JSON.parse(JSON.stringify(state))
				newState.list.push(action.val)
				return newState
			}

			return state
		}
  	28.5.34 ---> 8097
1.看面试题视频
2.看vue的面试题看一下
3.看一下react的面试题看一下
4.反复看看，这个重要性你只清楚


