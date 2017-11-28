import { fromJS } from 'immutable'

export const addToCounter = () => (
  {
    type: 'ADD'
  }
)

const defaultState = fromJS(
  {
    counter: 0
  }
)

const reducer = (state=defaultState, action={}) => {

  if (action.type === 'ADD') {
    let newStateAdd = state.setIn(["counter"], state.getIn(["counter"])+1)
    return newStateAdd
  }

  return state
}

export default reducer
