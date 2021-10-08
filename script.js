const passScore = 60;
const app = new Vue({
  el: ".container",
  data: {
    list1: [
      { name: "A", id: 1, score: 66 },
      { name: "B", id: 2, score: 82 },
      { name: "C", id: 3, score: 65 },
      { name: "D", id: 4, score: 59 },
    ],
    list2: {
      Mary: {
        phone: "0912345678",
      },
      sandy: {
        phone: "0912345123",
      },
    },
  },
  methods: {
    isPassed(score) {
      return score > passScore;
    },
  },
});
