// Create Vue App
const app = Vue.createApp({});

app.component("item", {
  template: `<p>Test</p>`,
});

app.mount(".card");
