import { createApp } from 'vue';
import App from './App.vue';
import components from './components/index';

const app = createApp(App);

console.log(components);

components.forEach((component: any) => app.component(component.name, component));

app.mount('#app');
