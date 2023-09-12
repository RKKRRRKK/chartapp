import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      graphs: [
        {
          id: 1,
          selected: false,
        },
        {
          id: 2,
          selected: false,
        },
        {
          id: 3,
          selected: false,
        },
        {
          id: 4,
          selected: false,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
