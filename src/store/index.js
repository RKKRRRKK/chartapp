import { createStore } from 'vuex';

import filesModule from './modules/files/index.js';
import sheetsModule from './modules/sheets/index.js';

const store = createStore({
    modules: {
        files: filesModule,
        sheets: sheetsModule
    }
});

console.log("Store State: ", store.state);
console.log("Store Modules: ", store._modules.root._children);

export default store;
