import { createApp } from 'vue';
import App from './App.vue';
import components from './components/index';
import store from './store';
import ApiService from '@/api';
import router from '@/router';

const app = createApp(App);

components.forEach((component: any) => app.component(component.name, component));

ApiService.init();

app.directive('font', {
  mounted(el, binding) {
    if (binding.value === 'm') {
      el.style.fontSize = '24px';
    }
    if (binding.value === 'l') {
      el.style.fontSize = '40px';
    }
    if (binding.arg === 'uppercase') {
      el.style.textTransform = 'uppercase';
    }
  },
}).use(store).use(router).mount('#app');
