import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
  loading: false,
  token: null,
  message: null,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
