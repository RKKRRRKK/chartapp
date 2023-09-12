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
          selected: False,
        },
        {
          id: 2,
          selected: False,
        },
        {
          id: 3,
          selected: False,
        },
        {
          id: 4,
          selected: False,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
