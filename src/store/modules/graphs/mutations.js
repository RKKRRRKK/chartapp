export default {
  toggleSelected(state, payload) {
    state.graphs.forEach((graph) => {
      graph.selected = false;
    });

    const graph = state.graphs.find((g) => g.id === payload.id);
    if (graph) {
      graph.selected = true;
    }
  },

  toggleDeselect(state) {
    state.graphs.forEach((graph) => {
      graph.selected = false;
    });
  },

  setSelected(state, id) {
    console.log("setSelected mutation called with id:", id);
    state.graphs.forEach((graph) => {
        graph.selected = false;
      });
    const graph = state.graphs.find((graph) => graph.id === id);
  
    console.log("Found graph:", graph);
  
    if (graph) {
      graph.selected = true;
      console.log("Graph's selected state set to true.");
    } else {
      console.log("No graph found with the given id.");
    }
  },
};
