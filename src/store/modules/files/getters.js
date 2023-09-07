export default {
    files(state) {
        return state.files;
    },
    hasFiles(state) {
        return state.files && state.files.length > 0;
    }
}; 