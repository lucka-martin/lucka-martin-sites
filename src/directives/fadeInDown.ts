export default {
  inserted: function (el: HTMLElement) {
    el.classList.add('fadeInDown');
    el.classList.add('animated');
    el.style.animationDelay = (Math.random() / 2) + "s";
  }
}
