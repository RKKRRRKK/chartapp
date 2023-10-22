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

    getFramedFileId(state) {
        const framedFile = state.files.find(file => file.fileFramed);
        const framed = framedFile ? framedFile.id : false;
        return framed;
    },

    getFrame(state) {
        const framedFile = state.files.find(file => file.fileFramed);
        const framed = framedFile ? framedFile.fileFramed : false;
        return framed;
    },

    getActiveFile(state) {
        const activeFile = state.files.find(file => file.fileActive);
        return activeFile;
    },

    
}; 