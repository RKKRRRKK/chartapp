export default {
  checkAndUpdateSheetState({ state, commit, dispatch }) {
  //  console.log('checkAndUpdateSheetState action called.');

    const activeSheet = state.sheets.find((sheet) => sheet.active === true);

    if (state.sheets.length === 0) {
      console.log('No sheets available. Returning from recursion.');
      return;
    }

  //  console.log('Found active sheet:', activeSheet);

    if (activeSheet) {
   //   console.log(
    //    'Committing setSelected mutation with id:',
   //     activeSheet.state
   //   );
      commit('graphs/setSelected', activeSheet.state, { root: true });
    } else {
   //   console.log(
 //       "No active sheet found or active sheet's state is null. Proceed with dispatch"
//      );
      dispatch('ensureOneSheetIsActive');
      dispatch('checkAndUpdateSheetState');
    }
  },

  ensureOneSheetIsActive({ commit, state }) {
    // Check if any sheet is active
    const isActiveSheetPresent = state.sheets.some((sheet) => sheet.active);

    // If no active sheet is found, set the one with the highest index as active
    if (!isActiveSheetPresent && state.sheets.length > 0) {
      const highestIndex = state.sheets.length - 1;
      commit('SET_SHEET_ACTIVE_BY_INDEX', highestIndex);
    }
  },

  updateInputData({ commit, state }, data) {
    // Find the active sheet
    const activeSheet = state.sheets.find((sheet) => sheet.active);
    if (activeSheet) {
      commit('SET_INPUT_DATA', { data, sheetId: activeSheet.id });
    }
  },

  updateNodePadding({ commit }, newPadding) {
    commit('SET_NODE_PADDING',  newPadding );
  },

  updateFontSize({ commit }, newSize) {
    commit('SET_FONT_SIZE',  newSize );
  },
  updateNodeWidth({ commit }, newWidth) {
    commit('SET_NODE_WIDTH',  newWidth );
  },
  updateColorMode({ commit }, newColor) {
    commit('SET_COLOR_MODE',  newColor );
  },

  updateNumberColors({commit}, newNumber) {
    commit('UPDATE_NUMBER_COLORS', newNumber);
  },

  updateColors({commit}, newColors) {
    commit('UPDATE_COLOR_ARRAY', newColors);
  },

  updateBase({commit}, newBase) {
    commit('UPDATE_BASE_COLOR', newBase)
  },

  isLoading({commit}, newState) {
    commit('UPDATE_LOAD_STATE', newState)
  },


  async saveSheet(context, payload) {
    const newFile = payload.activeSheet;
    const userId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    console.log(userId, " ", token);
    
    const response = await fetch(
      `https://graphingsite-default-rtdb.europe-west1.firebasedatabase.app/files/${userId}.json?auth=` + token,
      {
        method: 'POST',
        body: JSON.stringify(newFile)
      }
    );
  
    const responseData = await response.json();
  
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to save data.'
      );
      throw error;
    } else {
      console.log("successfully sent to firebase")
    }
  
    newFile.fireId = responseData.name;
    newFile.userId = payload.id;
    //context.commit('ADD_ID', newFile);
  },






  async fetchFiles(context) {
    const userId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    console.log(userId, " ", token)
    const response = await fetch(
      `https://graphingsite-default-rtdb.europe-west1.firebasedatabase.app/files/${userId}.json?auth=` +
        token
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch saved files.'
      );
      throw error;
    }

    const files = [];

    for (const key in responseData) {
      const file = {
        id: key,
        userId: userId,
        date: responseData[key].date,
        name: responseData[key].inputName ? responseData[key].inputName : responseData[key].name,
        settings: responseData[key].settings,
        inputData: responseData[key].inputData,
        fileActive: null, 

      };
      files.push(file);
    }

    if (files.length > 0) {
      files[0].fileActive = true;
      context.commit('files/SET_FILES', files, {root:true});
    }
  }





};
