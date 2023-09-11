export default {
    sheets(state) {
        return state.sheets;
    },
    hasSheets(state) {
        return state.sheets && state.sheets.length > 0;
    }
}; 