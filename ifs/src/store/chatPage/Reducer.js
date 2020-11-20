import { act } from 'react-test-renderer'
import { SEND_MESSAGE } from './ActionType'

export default (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      return { ...state, [action.data.index]: state[action.data.index].concat({ sender: 'me', message: action.data.message }) }


    default:
      return state
  }
}

const initialState = {
  loding: false,
  Christopher:

    [
      { sender: 'me', message: "Hi" },
      { sender: 'Him', message: "Hi its test message" },
      { sender: 'Him', message: "Hi empty blank" },
      { sender: 'Him', message: "ok let's do it" },
      { sender: 'me', message: "Hi, How are you" },
      { sender: 'me', message: "i'm ok" },

    ],


  Charles: [
    { sender: 'me', message: "Hi" },


  ]
  ,

  Cooper: [
    { sender: 'me', message: "Hi" },


  ]
  ,

  Carlos: [
    { sender: 'me', message: "Hi" },


  ]





}
