import { createStore } from 'vuex';

import filesModule from './modules/files/index.js';
import sheetsModule from './modules/sheets/index.js';
import graphsModule from './modules/graphs/index.js';
import authModule from './modules/auth/index.js';
import iFramesModule from './modules/iframes/index.js';

const store = createStore({
    modules: {
        files: filesModule,
        sheets: sheetsModule,
        graphs: graphsModule,
        auth: authModule,
        iframes: iFramesModule,
    }
});

console.log("Store State: ", store.state);
console.log("Store Modules: ", store._modules.root._children);

export default store;
