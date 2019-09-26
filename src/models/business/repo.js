export default {
  namespace: "repo",
  state: {
    current: null,
    tokens: {}
  },
  reducers: {
    choose(state, { payload }) {}
  },
  effects: {
    // 添加 gitlab/github url
    *add({ payload }, { put, call }) {}
  }
};
