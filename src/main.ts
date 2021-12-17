import { createApp } from 'vue';
import App from './App.vue';
import components from './components/index';

const app = createApp(App);

components.forEach((component: any) => app.component(component.name, component));

app.directive('font', {
  mounted(el, binding) {
    if (binding.value === 'm') {
      el.style.fontSize = '28px';
    }
    if (binding.value === 'l') {
      el.style.fontSize = '48px';
    }
    if (binding.arg === 'uppercase') {
      el.style.textTransform = 'uppercase';
    }
  },
});

app.mount('#app');
