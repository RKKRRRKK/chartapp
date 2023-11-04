export default {

    assignFileData2(state, payload) {
        console.log('Mutation triggered with payload:', payload);
        const frame = state.iframes.find((iframe) => iframe.path === payload.frame);
        if (frame) {
            frame.data = payload.data
            frame.settings= payload.settings
            frame.taken = true 
            console.log("assignFileData2 triggered")
        }
    }



}