import { Action } from 'redux';
import { Todo } from './model';

export enum ActionTypes {
  INCREMENT_COUNTER = 'INCREMENT_COUNTER',
  DECREMENT_COUNTER = 'DECREMENT_COUNTER',
  TODO_GET = 'TODO_GET',
  TODO_ADD = 'TODO_ADD',
  TODO_DELETE = 'TODO_DELETE',
  TODO_EDIT = 'TODO_EDIT'
}

export interface BaseAction extends Action<string> {
  payload: any;
}

interface TodoAction extends BaseAction {
  type: string;
  payload: Todo;
}
export const todoAddAmount = (amount: Todo): TodoAction => ({
  type: ActionTypes.TODO_ADD,
  payload: amount
});
export const todoDeleteAmount = (amount: Todo): TodoAction => ({
  type: ActionTypes.TODO_DELETE,
  payload: amount
});
export const todoEditAmount = (amount: Todo): TodoAction => ({
  type: ActionTypes.TODO_EDIT,
  payload: amount
});

interface CounterAction extends BaseAction {
  payload: number;
}
export const incrementAmount = (amount: number): CounterAction => ({
  type: ActionTypes.INCREMENT_COUNTER,
  payload: amount
});
export const decrementAmount = (amount: number): CounterAction => ({
  type: ActionTypes.DECREMENT_COUNTER,
  payload: amount
});
