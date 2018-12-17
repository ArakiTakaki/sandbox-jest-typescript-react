interface todo {
  id: number;
  name: string;
  check: boolean;
}

export type stateType = {
  count: number;
  name: string;
  todos: todo[];
};
export const init = (): stateType => ({
  count: 0,
  name: "GUEST",
  todos: [
    {
      id: 0,
      name: "sample todo",
      check: false
    }
  ]
});
