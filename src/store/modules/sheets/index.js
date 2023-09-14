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
          state: null,  //id of chart if clicked
          input: null, //true or false, checks if there is a chart data stored
          inputData: [], //saved chart input data
          save: null, //true or false, checks if sheet was saved
          settings: {             //saved chart settings data
            nodePadding: 80,
            nodeWidth: 10,
            colors: [
              '#BBD8B3',         
              '#F3B61F',         
              '#A29F15',        
              '#510D0A'], 
            colorMode: 'none', //source,target,gradient,none
            fontSize: 12, //fontsize of label

          }, 
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
