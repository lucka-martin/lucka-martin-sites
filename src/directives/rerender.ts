import { DirectiveOptions, DirectiveFunction } from "vue";
//$forceUpdate()

class Rerender implements DirectiveOptions {

  interval: number;

  get inserted(): DirectiveFunction {
    return (el, binding, vnode) => {
      const timeout: number = binding.value;
      const vue = vnode.context;

      setInterval(() => {
        vue.$forceUpdate();
      }, timeout);
    }
  };

  get unbind(): DirectiveFunction {
    return () => {
      clearInterval(this.interval);
    }
  }
}

export default new Rerender();
