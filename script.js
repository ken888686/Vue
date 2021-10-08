Vue.component("counter", {
  template: `
    <div>
      Child - {{message}}
    </div>
  `,
  props: ["message"],
});

const app = new Vue({
  el: `.container`,
  data: {
    msg: "Parent",
  },
});
