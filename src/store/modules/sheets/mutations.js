export default {
    addSheet(state, sheet) {
        state.sheets.push(sheet);
    },
    deleteSheet(state, id) {
        state.sheets = state.sheets.filter(sheet => sheet.id !== id);
    }
};
