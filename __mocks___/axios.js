module.exports = {
  get: function () {
    return {
      then: function (fn) {
        fn({ body: [] });
      },
    };
  },
};
