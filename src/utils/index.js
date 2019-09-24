
export const promisify = (func, options) => {
  const arg = (success, fail) =>
      func({
          ...options,
          success,
          fail
      });
  return new Promise(arg);
};

export const delay = time =>
    new Promise(resolve => {
        setTimeout(resolve, time);
    });
