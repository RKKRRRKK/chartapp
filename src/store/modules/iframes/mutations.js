export default {

    assignFileData(state, payload) {
        const frame = state.iframes.find((iframe) => iframe.path === payload.frame);
        if (frame) {
            frame.data = payload.data
        }
    }



}