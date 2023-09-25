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
      }






};