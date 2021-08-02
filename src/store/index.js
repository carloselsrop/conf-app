import { createStore } from 'vuex';
import authModule from './modules/auth';
import eventsModule from './modules/events/index';

export default createStore({
  modules: {
    auth: authModule,
    events: eventsModule,
  },
});
