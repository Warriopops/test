import { createApp } from 'vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import App from './App.vue';

createApp(App).mount('#app');

/* add icons to the library */
library.add(faTrashAlt)
  .component('font-awesome-icon', FontAwesomeIcon);
