import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      iframes: [
        {
        id:1,
        path:'/iframe1',
        taken:false,
        data:{},
        type:'Sankey',
        },
          {
        id:2,
        path:'/iframe2',
        taken:false,
        data:{},
        type:'Sankey',
        },
          {
        id:3,
        path:'/iframe3',
        taken:false,
        data:{},
        type:'Sankey',
        },
          {
        id:4,
        path:'/iframe4',
        taken:false,
        data:{},
        type:'Sankey',
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
