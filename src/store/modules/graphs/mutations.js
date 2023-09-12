export default {
    toggleSelected(state, payload) {
      state.graphs.forEach(graph => {
        graph.selected = false;
      });
  
      const graph = state.graphs.find(g => g.id === payload.id);
      if (graph) {
        graph.selected = true;
      }
    },

    toggleDeselect(state) {
        state.graphs.forEach(graph => {
          graph.selected = false;
        });
  }};