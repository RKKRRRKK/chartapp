export default {
  addSheet(state, sheet) {
    state.sheets.push(sheet);
  },
  deleteSheet(state, id) {
    state.sheets = state.sheets.filter((sheet) => sheet.id !== id);
  },
  toggleActive(state, payload) {
    console.log("Payload ID:", payload.id);
    state.sheets.forEach((sheet) => {
      sheet.active = false;
    });

    const sheet = state.sheets.find((sheet) => sheet.id === payload.id);
    if (sheet) {
      sheet.active = true;
    }
  },
};
