import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
  data() {
    return {
      displayName: '',
      price: 0,
      color: 'nil',
      id: '',
      metaname: '',
      result: '',
    };
  },

  methods: {
    generate() {
      this.result = `
{
  displayName = "${this.displayName}",
  price = ${this.price},
  color = ${this.color},
  id = "${this.id}",
  metaname = "${this.metaname}",
}
      `;
    },
  },
}).mount('#main');