export default {
  loading(state) {
    state.loading = !state.loading;
  },

  'fetch participants': function (state, payload) {
    state.participants = payload;
  },
};
