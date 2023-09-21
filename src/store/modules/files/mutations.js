export default {
    SET_FILES(state, payload) {
        console.log(payload);
        state.files = payload;
      }
};