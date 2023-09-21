export default {
    sheets(state) {
        return state.sheets;
    },
    hasSheets(state) {
        return state.sheets && state.sheets.length > 0;
    },
    getName(state) {
        return state.sheets.length > 0 ? state.sheets[state.sheets.length - 1].name : 'New Sheet 1';
    },
    getActive(state) {
        const activeSheet = state.sheets.find(sheet => sheet.active);
        const active = activeSheet ? activeSheet.id : false;
      //  console.log('getter', active);
        return active;
    },

    getState(state) {
        const activeSheetAndGraph = state.sheets.find(sheet => sheet.active && sheet.state);
        const active = activeSheetAndGraph ? true : false;
        return active;
    },

    //this checks graphs selection too
    getActiveSheet(state) {
        const activeSheetAndGraph = state.sheets.find(sheet => sheet.active && sheet.state);
        return activeSheetAndGraph
    },

    getActiveSheetFix(state) {
        const activeSheet = state.sheets.find(sheet => sheet.active);
        return activeSheet
    }
}; 