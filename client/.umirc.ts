import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  proxy: {
    "/api":{
      target:"http://127.0.0.1:8080",
    }
  },

  fastRefresh: {},
});
