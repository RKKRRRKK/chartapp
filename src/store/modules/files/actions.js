export default {

    async deleteFile(context, id) {
        const userId = context.rootGetters.userId;
        const token = context.rootGetters.token;
        const response = await fetch(
          `https://graphingsite-default-rtdb.europe-west1.firebasedatabase.app/files/${userId}/${id}.json?auth=` + token,
          {
            method: 'DELETE'
          }
        );
      
        if (!response.ok) {
          const responseData = await response.json();
          const error = new Error(
            responseData.message || 'Failed to delete the file.'
          );
          throw error;
        }
      
        // If the deletion was successful, you can update your local state
        context.commit('DELETE_FILE', id);
      },


      assignFrame(state, payload) {
        const file = state.files.find((file) => file.id === payload.fileID);
        file.fileFramed = payload.frame
      },

      assignFileData({commit,state}, payload) {
        const file = state.files.find((file) => file.id === payload.fileID);
        const data = file.inputData;
        const settings = file.settings;
        const frame = file.frame;
        commit('iframes/assignFileData', {data: data, frame: frame, settings: settings}, { root: true })
      }
      



};