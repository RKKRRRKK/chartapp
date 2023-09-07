import { createStore } from 'vuex';

import filesModule from './modules/files/index.js';

const store = createStore({
    modules: {
        files: filesModule
    }
});

export default store;
