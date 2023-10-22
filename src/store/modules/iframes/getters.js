export default {

    checkFrames(state) {
        console.log("checkFrames successfully triggered")
        const available = state.iframes.find(iframes => iframes.taken === false);
        if (available) {
            console.log("checkFrames iframes available")
            return available.path;
        }
        else {
            console.log("checkframes iframes not available")
            return false;
            
        }
    },

    getFrameData(state, id) {
        const iframe = state.iframes.find(iframe => iframe.id === id)
        return iframe.data
    }


}