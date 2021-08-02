import { LOGIN, REGISTER_SUCCESS, REGISTER_FAILURE } from '../../utils';

export default {
  [LOGIN](state, payload) {
    state.token = payload;
  },

  [REGISTER_SUCCESS](state, payload) {
    state.message = payload;
  },

  [REGISTER_FAILURE](state, payload) {
    state.message = payload;
  },
};
