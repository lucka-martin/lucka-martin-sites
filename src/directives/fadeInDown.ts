import { DirectiveOptions, DirectiveFunction } from "vue";

class FadeInDownDirective implements DirectiveOptions {

  get inserted(): DirectiveFunction {
    return (el) => {
      el.classList.add('fadeInDown');
      el.classList.add('animated');
      el.style.animationDelay = (Math.random() / 2) + "s"
    }
  };
}

export default new FadeInDownDirective();
