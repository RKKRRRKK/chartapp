import { createApp } from 'vue';
import { GChart } from 'vue-google-charts';



import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import SmallButton from './components/ui/SmallButton.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseRadio from './components/ui/BaseRadio.vue';
import BaseWindow from './components/ui/BaseWindow.vue';

const app = createApp(App)

console.log("Registered mutations",store._mutations);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('small-button', SmallButton);
app.component('GChart', GChart);
app.component('base-dialog', BaseDialog);
app.component('base-spinner', BaseSpinner);
app.component('base-radio', BaseRadio);
app.component('base-window', BaseWindow);


app.mount('#app');
