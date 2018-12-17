import { Action } from "redux";

export enum ActionTypes {
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
  DECREMENT_COUNTER = "DECREMENT_COUNTER"
}

interface counterAction extends Action {
  type: string;
  payload: {
    num: number;
  };
}
export const incrementAmount = (amount: number): counterAction => ({
  type: ActionTypes.INCREMENT_COUNTER,
  payload: {
    num: amount
  }
});

export const decrementAmount = (amount: number): counterAction => ({
  type: ActionTypes.DECREMENT_COUNTER,
  payload: {
    num: amount
  }
});

export type CounterActions = counterAction;
