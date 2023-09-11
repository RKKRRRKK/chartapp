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
          name: 'newsheet1',
          date: '12.12.2023',
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
