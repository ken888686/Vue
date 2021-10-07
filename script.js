const app = Vue.createApp({
  data() {
    return {
      rawHtml: `<span style="color: red">This should be red.</span>`,
    };
  },
});

const vm = app.mount(".card");
