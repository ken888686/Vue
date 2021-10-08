const passScore = 60;
const app = new Vue({
  el: ".container",
  data: {
    count: 1,
  },
  methods: {
    add() {
      this.count++;
    },
    warn(message, event) {
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
    dodo() {
      alert(`dodo`);
    },
    doThis() {
      alert(`doThis`);
    },
    doThat() {
      alert(`doThat`);
    },
  },
});
