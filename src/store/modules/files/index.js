import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      files: [
        {
          id: '1',
          userId: null,
          date: '12.12.2023',
          name: "dummyfile1",
          settings: null,
          inputData: null,
          fileActive: null,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};