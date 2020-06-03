import M from "materialize-css";
export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    Vue.prototype.$message = function(html) {
      M.toast({ html });
    };
    Vue.prototype.$error = function(html) {
      M.toast({ html: `[Ошибка]: ${html}` });
    };
  }
};
