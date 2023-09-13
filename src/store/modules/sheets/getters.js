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
        console.log('getter', active);
        return active;
    }
}; 