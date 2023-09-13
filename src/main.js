import { createApp } from 'vue';
import { GChart } from 'vue-google-charts';



import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import SmallButton from './components/ui/SmallButton.vue';

const app = createApp(App)

console.log("Registered mutations",store._mutations);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('small-button', SmallButton);
app.component('GChart', GChart)

app.mount('#app');
