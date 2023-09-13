export default {

    checkAndUpdateSheetState({ state, commit }) {
        console.log("checkAndUpdateSheetState action called.");
        
        const activeSheet = state.sheets.find(sheet => sheet.active === true);
        
        console.log("Found active sheet:", activeSheet);
        
        if (activeSheet) {
          console.log("Committing setSelected mutation with id:", activeSheet.state);
          commit('graphs/setSelected', activeSheet.state, {root: true});
        } else {
          console.log("No active sheet found or active sheet's state is null.");
        }
      },


};