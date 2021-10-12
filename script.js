const vm = Vue.createApp({
  data() {
    return {
      count: 100,
      text: "Hello Vue!!",
      style: {
        color: "#000000",
        backgroundColor: "#00ffa2",
        padding: "30px",
        textAlign: "center",
      },
      isPassed: false,
      checked: ["One"],
      products: [
        {
          name: "上衣",
          price: 300,
        },
        {
          name: "褲子",
          price: 500,
        },
        {
          name: "鞋子",
          price: 1500,
        },
        {
          name: "帽子",
          price: 600,
        },
      ],
      carts: [],
      sum: 0,
      num: 20,
    };
  },
  computed: {
    result() {
      return this.count * 10.2;
    },
    total: {
      get() {
        let total = 0;
        this.carts.forEach((item) => {
          total += item.price;
        });
        return total;
      },
      set(val) {
        console.log("val");
        this.sum = val;
      },
    },
    methods: {
      addToCart(product) {
        this.carts.push(product);
      },
    },
  },
}).mount(".container");
