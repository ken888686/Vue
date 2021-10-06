const Counter = {
  data() {
    return {
      counter: 0,
    };
  },
  // mounted() {
  //   setInterval(() => {
  //     this.counter++;
  //   }, 1000);
  // },
};
Vue.createApp(Counter).mount(".counter");

const AttributeBinding = {
  data() {
    return {
      message: `You loaded this page on ${new Date().toLocaleString()}`,
      hint: `asdfasdfasf`,
      description: `Test String`,
    };
  },
};
Vue.createApp(AttributeBinding).mount(".bind-attribute");

const EventHandling = {
  data() {
    return {
      message: `Hello Vue.js`,
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
  },
};
Vue.createApp(EventHandling).mount(".event-handling");

const TwoWayBinding = {
  data() {
    return {
      message: "Hello Vue!",
    };
  },
};
Vue.createApp(TwoWayBinding).mount(".two-way-binding");

const ConditionRendering = {
  data() {
    return {
      seen: false,
    };
  },
};
Vue.createApp(ConditionRendering).mount(".condition-rendering");

const ListRendering = {
  data() {
    return {
      todos: [{ text: "A" }, { text: "B" }, { text: "C" }],
    };
  },
};
Vue.createApp(ListRendering).mount(".list-rendering");
