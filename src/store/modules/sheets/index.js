import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      sheets: [
        {
          id: '1',
          name: 'New Sheet 1',
          date: '12.12.2023',
          active: true,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
