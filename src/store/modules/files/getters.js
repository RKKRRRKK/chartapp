export default {
    files(state) {
        return state.files;
    },
    hasFiles(state) {
        return state.files && state.files.length > 0;
    },

    getActive(state) {
        console.log("getActive triggered with state", state)
        const activeFile = state.files.find(file => file.fileActive);
        const active = activeFile ? activeFile.id : false;
        console.log("getActive getter: activeFile: ", activeFile," ", ", active id: ", active)
        return active;
    },

    getActiveFile(state) {
        const activeFile = state.files.find(file => file.fileActive);
        return activeFile;
    },

    
}; 