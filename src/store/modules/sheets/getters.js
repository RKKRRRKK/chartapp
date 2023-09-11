export default {
    sheets(state) {
        return state.sheets;
    },
    hasSheets(state) {
        return state.sheets && state.sheets.length > 0;
    },
    getName(state) {
        return state.sheets.length > 0 ? state.sheets[state.sheets.length - 1].name : 'New Sheet 1';
    }
}; 