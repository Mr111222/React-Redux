import * as types from './types'
const defaultState = {
  inputValue: 'jsut do it',
  list:[
    '早晨上班打卡',
    '中午吃饭休息',
    '休息的时候看个电影',
    '下午下班回家',
    '回家堵车中......'
  ],
}
export default (state = defaultState, action)=>{
  if(action.type === types.change_Inp) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.val
    return newState
  }

  if(action.type === types.add_List) {
    let newState = JSON.parse(JSON.stringify(state))
    // newState.list.push(action.val)  是获取不到值得
    newState.list.push(newState.inputValue) 
    newState.inputValue = ''
    return newState
  } 
  if(action.type === types.del_List) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }

  
  return state
}