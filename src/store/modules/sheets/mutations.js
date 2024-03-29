export default {
  addSheet(state, sheet) {
    if (!state.sheets.find(existingSheet => existingSheet.id === sheet.id)) {
      state.sheets.push(sheet);
    } else {
      console.warn(`A sheet with id ${sheet.id} already exists!`);
    }
  },
  
  deleteSheet(state, id) {
    state.sheets = state.sheets.filter((sheet) => sheet.id !== id);
  },

  assignChart(state, id) {
    const sheet = state.sheets.find((sheet) => sheet.active === true);
    if (sheet) {
      sheet.state = id;
    }
  },

  toggleActive(state, payload) {
 //   console.log('Payload ID:', payload.id);
    state.sheets.forEach((sheet) => {
      sheet.active = false;
    });

    const sheet = state.sheets.find((sheet) => sheet.id === payload.id);
    if (sheet) {
      sheet.active = true;
    }
  //  console.log('State of each sheet after potential activation:');
 //   state.sheets.forEach((sheet, index) => {
 //     console.log('Sheet at index', index, ':', sheet);
  //  });
  },

  SET_SHEET_ACTIVE_BY_INDEX(state, index) {
  //  console.log('SET_SHEET_ACTIVE_BY_INDEX called', index, state.sheets);
    if (state.sheets[index]) {
      state.sheets[index].active = true;
  //    console.log('Sheet should now be active:', state.sheets[index]);
    }
  },

  SET_INPUT_DATA(state, { data, sheetId }) {
    const sheet = state.sheets.find(s => s.id === sheetId);
    if (sheet) {
      sheet.inputData = data;
      //sheet.input = true;  //  do we need this???
    }
  },

  SET_NODE_PADDING(state, newPadding ) {
    const sheet = state.sheets.find(sheet => sheet.active && sheet.state);
    if (sheet) {
      sheet.settings.nodePadding = newPadding;
    }
  },
  
  SET_FONT_SIZE(state, newSize ) {
    const sheet = state.sheets.find(sheet => sheet.active && sheet.state);
    if (sheet) {
      sheet.settings.fontSize = newSize;
    }
  },

  SET_NODE_WIDTH(state, newWidth ) {
    const sheet = state.sheets.find(sheet => sheet.active && sheet.state);
    if (sheet) {
      sheet.settings.nodeWidth = newWidth;
    }
  },

  SET_COLOR_MODE(state, newColor ) {
    const sheet = state.sheets.find(sheet => sheet.active && sheet.state);
    if (sheet) {
      sheet.settings.colorMode = newColor;
    }
  },

  UPDATE_NUMBER_COLORS(state,newNumber) {
    const sheet = state.sheets.find(sheet => sheet.active && sheet.state);
    if (sheet) {
      sheet.settings.numberColors = newNumber;
    }
  },

  UPDATE_COLOR_ARRAY(state,newColors) {
    const sheet = state.sheets.find(sheet => sheet.active && sheet.state);
    if (sheet) {
      sheet.settings.colors = newColors;
    }
  },

  UPDATE_BASE_COLOR(state,newBase) {
    const sheet = state.sheets.find(sheet => sheet.active && sheet.state);
    if (sheet) {
      sheet.settings.baseColor = newBase
    }

  },

  UPDATE_LOAD_STATE(state,newState) {
    const sheet = state.sheets.find(sheet => sheet.active && sheet.state);
    if (sheet) {
      sheet.inputLoading = newState
  //    console.log("change", newState)
    }
  },

ADD_ID(state,newFile) {
  const sheet = state.sheets.find(sheet => sheet.id = newFile.sheetId);
  if (sheet) {
    sheet.save.fireId = newFile.fireId;
    sheet.save.state = true;

  }
},




};
