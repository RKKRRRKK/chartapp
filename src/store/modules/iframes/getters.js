export default {

    checkFrames(state) {
        const available = state.iframes.find(iframes => iframes.taken === false);
        if (available) {
            return available.path;
        }
        else return false;
    }


}