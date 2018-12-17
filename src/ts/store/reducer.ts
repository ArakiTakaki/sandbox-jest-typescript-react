import * as Actions from "./actions";
import { stateType, init } from "./initialState";

const { ActionTypes } = Actions;
const reducer = (
  state: stateType = init(),
  action: Actions.CounterActions
): stateType => {
  switch (action.type) {
    case ActionTypes.INCREMENT_COUNTER:
      return { ...state, count: state.count + action.payload.num };
    case ActionTypes.DECREMENT_COUNTER:
      return { ...state, count: state.count - action.payload.num };
    default:
      return state;
  }
};

export default reducer;
