/* import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { InertiaProgress } from '@inertiajs/progress'

createInertiaApp({
  resolve: name => require(`./Pages/${name}`).default,
  setup({ el, app, props, plugin }) {
    createApp({ render: () => h(app, props) })
      .use(plugin)
      .mount(el)
  },
})

InertiaProgress.init() // Opcional */

// resources/js/app.js
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/ue3';
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init();

createInertiaApp({
  resolve: name => require(`./Pages/${name}`).default,
  setup({ el, app, props, plugin }) {
    const app = createApp({ render: () => h(app, props) });
    app.use(plugin);
    app.mount(el);
  },
});