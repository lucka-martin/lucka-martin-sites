<template>
  <div class="card-component fit elevation-2" :style="style">
    <div class="card-content">
      <figure class="front">
        <slot name="front"></slot>
      </figure>
      <figure   class="back">
        <slot name="back" class="back"></slot>
      </figure>
    </div>
  </div>
</template>

<script lang="ts">
  import Card from './Card.vue'
  import Component from 'vue-class-component'

  @Component
  export default class FlipCard extends Card {
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/css3-mixins.scss";
  @import "../assets/scss/card.scss";

  .card-component figure {
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    text-align: center;
    font-weight: bold;
  }
  .card-component figure {
    @include backface-visibility(hidden);
  }

  .card-content {
    height: 100%;
    @include transition(1s);
    @include transform-style(preserve-3d);
    @include transform-origin(right center);
  }

  .card-component:hover .card-content {
    @include transform(translateX(-100%) rotateY(-180deg));
  }

  .card-component .back {
    @include transform(rotateY(180deg));
  }
</style>
