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
          name: 'dummyfile',
          date: '12.12.2023',
          sheetData: {},
        },
        {
          id: '2',
          name: 'dummyfile2',
          date: '15.12.2023',
          sheetData: {},
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
