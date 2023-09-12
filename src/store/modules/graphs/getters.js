export default {
    selectedGraph(state) {
      return state.graphs.find(graph => graph.selected);
    },
    graphs(state) {
        return state.graphs;
    },
  };