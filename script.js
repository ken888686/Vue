const vm = new Vue({
  el: `.card`,
  data: {
    // 宣告變數
    message: `Hello Vue!`,
    rawHtml: `<p>Raw HTML</p>`,
  },
  methods: {
    // 宣告事件處理
    remove: function (e) {
      this.message = "Removed!";
      this.rawHtml = `<ol><li>1</li></ol>`;
    },
  },
});
