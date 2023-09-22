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
        console.log("getActive sheet triggered with state", state)
        const activeSheet = state.sheets.find(sheet => sheet.active);
        const active = activeSheet ? activeSheet.id : false;
        console.log("getActive sheet: activeSheet: ", activeSheet," ", ", active id: ", active)
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
    },

    getActiveInputData(state) {
        const activeSheet = state.sheets.find(sheet => sheet.active);
        if (activeSheet && activeSheet.inputData && activeSheet.inputData.length > 0) {
            return true;
        }
        else return false;
    }
}; 