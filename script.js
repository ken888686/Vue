const TodoList = {
  data() {
    return {
      myList: [
        { id: 0, text: "A" },
        { id: 1, text: "B" },
        { id: 2, text: "C" },
      ],
    };
  },
};

const app = Vue.createApp(TodoList);

app.component("todo-item", {
  props: ["todo"],
  template: `<p>{{todo.text}}</p>`,
});

app.mount(".card");
