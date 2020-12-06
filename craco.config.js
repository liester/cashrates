const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              "@primary-color": "rgb(255,130,92)",
              "@border-radius-base": "8px"
            },
          },
        },
      },
    },
  ],
};
