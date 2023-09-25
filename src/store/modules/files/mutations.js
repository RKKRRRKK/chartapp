export default {
    SET_FILES(state, payload) {
        console.log(payload);
        state.files = payload;
      },
      toggleActive(state, payload) {
          console.log("payload.id",payload.id);
           state.files.forEach((file) => {
             file.fileActive = false;
           });
       
           const file = state.files.find((file) => file.id === payload.id);
           if (file) {
            console.log("found matching file id:", file.id)
             file.fileActive = true;
           }},

      DELETE_FILE(state,id) {
        state.files =  state.files.filter((file) => file.id !== id)
      }
};