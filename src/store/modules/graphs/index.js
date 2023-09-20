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
          implemented: true,
        },
        {
          id: 2,
          selected: false,
          implemented: false,
        },
        {
          id: 3,
          selected: false,
          implemented: false,
        },
        {
          id: 4,
          selected: false,
          implemented: false,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
