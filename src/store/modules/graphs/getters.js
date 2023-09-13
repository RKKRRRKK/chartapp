export default {
    selectedGraph(state) {
      return state.graphs.find(graph => graph.selected);
    },
    selectedGraphId(state) {
        const graph = state.graphs.find(graph => graph.selected);
        return graph ? graph.id : null;
      },
    graphs(state) {
        return state.graphs;
    },
  };