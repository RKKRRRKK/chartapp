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
    console.log("State of each sheet after potential activation:");
    state.sheets.forEach((sheet, index) => {
      console.log("Sheet at index", index, ":", sheet);
    });
  },
};