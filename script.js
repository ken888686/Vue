const app = new Vue({
  el: ".container",
  data: {
    A: ``,
    B: ``,
    C: ``,
    total: 0,
    done: false,
  },
  computed: {
    filterNum() {
      if (this.A >= 100) {
        this.A = ``;
        alert(`Please under 100`);
      }
    },
  },
  methods: {
    sum() {
      this.total = `(A x ${this.A}) + (B x ${this.B}) + (C x ${this.C}) = ${
        this.A * 50 + this.B * 25 + this.C * 10
      }`;
      this.A = ``;
      this.B = ``;
      this.C = ``;
      this.done = true;
    },
  },
});
