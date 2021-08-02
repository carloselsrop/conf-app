import axios from 'axios';
import { LOGIN, REGISTER_FAILURE, REGISTER_SUCCESS } from '../../utils';

export default {
  async login({ commit }, options) {
    try {
      const {
        data: { token },
      } = await axios.post('https://conf-app-api-be.herokuapp.com/api/login', options);
      commit(LOGIN, token);
    } catch (error) {
      console.error(error);
    }
  },

  async register({ commit }, options) {
    try {
      const { data } = await axios.post(
        'https://conf-app-api-be.herokuapp.com/api/register',
        options,
      );
      commit(REGISTER_SUCCESS, data);
    } catch (error) {
      commit(REGISTER_FAILURE, error.response?.data);
      console.error(error);
    }
  },
};
