module.exports = {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          minify: false,
        },
      }),
    },
  };
  