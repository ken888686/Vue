Vue.component("counter", {
  template: `
    <div>
      <p>Child - {{message}}</p>
      <div>
        <input type="button" v-on:click="returnData" value="Child return">
      </div>
    </div>
  `,
  props: ["message"],
  data() {
    return {
      text: "Got it!!",
    };
  },
  methods: {
    returnData() {
      this.$emit("responsedata", this.text);
    },
  },
});

const app = new Vue({
  el: `.container`,
  data: {
    msg: "Parent",
    receive: "Nothing",
  },
  methods: {
    getChildMessage(context) {
      this.receive = context;
    },
  },
});
