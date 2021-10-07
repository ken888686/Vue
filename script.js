const vm = new Vue({
  el: `.container`,
  data: {
    // 宣告變數
    message: ``,
    selected: ``,
    num: 0,
  },
  methods: {
    // 宣告事件處理
    click: function (e) {
      if (this.message === "") {
        alert("Please input some text.");
        return;
      }
      console.log(`My Message is "${this.message}"`);
      this.message = ``;
    },
  },
});
