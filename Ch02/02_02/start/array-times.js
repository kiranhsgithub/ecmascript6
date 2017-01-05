var cat = {
  meow: function (times) {
      console.log(Array(times+1).join("meow"));
  },
  purr: function (times) {
      console.log(Array(times+1).join("purr"));
  },
  snore: function (times) {
      console.log(Array(times+1).join("snore"));
  }
};

cat.meow(3);
cat.purr(4);
cat.snore(5);

cat = {
  meow(times) {
      console.log("meow".repeat(times));
  },
  purr(times) {
      console.log("purr".repeat(times));
  },
  snore(times) {
      console.log("snore".repeat(times));
  }
};

cat.meow(3);
cat.purr(4);
cat.snore(5);
