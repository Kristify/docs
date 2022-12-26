import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
  data() {
    return {
      pkey: '',
      name: '',
      self: '',
      storage: [],
      storageFields: 1,
      noMetaname: '',
      nonexistantItem: '',
      notenoughMoney: '',
      notenoughStock: '',
      change: '',
      startedSound: '',
      purchaseSound: '',
      errorSound: '',
      webhookType: '1',
      webhook: '',
      result: '',
      monitor: '',
      tagline: '',
    };
  },

  methods: {
    getStorage() {
      const lines = [];

      for (let chest of this.storage) {
        lines.push(`      "${chest}",`);
      }

      return lines.join('\n');
    },

    generate() {
      this.result = `
return {
  pkey = "${this.pkey}",
  name = "${this.name}",
  monSide = "${this.monitor}",
  tagline = "${this.tagline}",
  storage = {
${this.getStorage()}
  },
  self = "${this.self}",
  messages = {
    noMetaname      = "${this.noMetaname || 'message=No metaname found! Refunding.'}",
    nonexistantItem = "${this.nonexistantItem || 'message=The item you requested is not available for purchase'}",
    notenoughMoney  = "${this.notenoughMoney || 'message=Insufficient amount of krist sent.'}",
    notenoughStock  = "${this.notenoughStock || "message=We don't have that much stock!"}",
    change          = "${this.change || 'message=Here is your change! Thanks for using our shop.'}"
  },
  webhooks = {
    {
      type = "${this.webhookType}",
      url = "${this.webhook}"
    }
  },
  sounds = {
    started = "${this.startedSound}",
    purchase = "${this.purchaseSound}",
    error = "${this.errorSound}"
  }
}
      `;
    },
  },
}).mount('#main');
