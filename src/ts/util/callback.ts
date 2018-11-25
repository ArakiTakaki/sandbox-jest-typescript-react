export const fetchData = (callback: Function) => {
  setTimeout(() => {
    callback("callback");
  }, 1000);
};