export default {

    checkAndUpdateSheetState({ state, commit, dispatch  }) {
        console.log("checkAndUpdateSheetState action called.");
        
        const activeSheet = state.sheets.find(sheet => sheet.active === true);

        if (state.sheets.length === 0) {
            console.log("No sheets available. Terminating.");
            return;
          }
        
        console.log("Found active sheet:", activeSheet);
        
        if (activeSheet) {
          console.log("Committing setSelected mutation with id:", activeSheet.state);
          commit('graphs/setSelected', activeSheet.state, {root: true});
        } else {
          console.log("No active sheet found or active sheet's state is null. Proceed with dispatch");
          dispatch('ensureOneSheetIsActive');
          dispatch('checkAndUpdateSheetState');
        }
      },

      ensureOneSheetIsActive({ commit, state }) {
        // Check if any sheet is active
        const isActiveSheetPresent = state.sheets.some(sheet => sheet.active);
    
        // If no active sheet is found, set the one with the highest index as active
        if (!isActiveSheetPresent && state.sheets.length > 0) {
          const highestIndex = state.sheets.length - 1;
          commit('SET_SHEET_ACTIVE_BY_INDEX', highestIndex);
        }
      },


};