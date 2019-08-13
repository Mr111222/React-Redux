import React, { Component } from 'react'
import * as types from '../store/types'
import {connect} from 'react-redux' // 连接器
// class TodoList extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() { 
//     let {list, inputValue, changeInp, addFn, delFn} = this.props // 结构 推荐方法
//     return ( 
//       <div>
//         <div> 
//           <input type="text" 
//             value = {inputValue}
//             onChange = {changeInp}
//             /> 
//           <button onClick={addFn}>提交</button> 
//         </div>
//         <div>
//           <ul>
//             {
//               list.map((item, index) => <li key={index} onClick={()=>{delFn(index)}}>{index+1}.{item}</li>)
//             }
//           </ul>
//         </div>
//       </div>
//      )
//   }
// }

// 无状态组件
const TodoList = (props) =>{
  let {list, inputValue, changeInp, addFn, delFn} = props // 结构 推荐方法
    return ( 
      <div>
        <div> 
          <input type="text" 
            value = {inputValue}
            onChange = {changeInp}
            /> 
          <button onClick={addFn}>提交</button> 
        </div>
        <div>
          <ul>
            {
              list.map((item, index) => <li key={index} onClick={()=>{delFn(index)}}>{index+1}.{item}</li>)
            }
          </ul>
        </div>
      </div>
     )
}



// state 状态映射为props
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
// dispatch 方法映射为props
const dispatchToProps = (dispatch)=> {
  return {
    changeInp (e) {
      let action = {
        type: types.change_Inp,
        val: e.target.value
      }
      dispatch(action)
    },
    addFn() {
      let action = {
        type: types.add_List
      }
      dispatch(action)
    },
    delFn (index) {
      let action = {
        type: types.del_List,
        index
      }
      dispatch(action)
    }
  }
}
export default connect(stateToProps, dispatchToProps)(TodoList) // 通过连接器包裹从而使状态映射为属性 state->props 