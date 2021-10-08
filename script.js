Vue.component("counter", {
  template: `
    <div>
      <input type="button" v-on:click="count+=1" value="Save" />
      {{count}}
    </div>
  `,
  data() {
    return { count: 0 };
  },
});

const app = new Vue({
  el: `.container`,
  data: {},
});
