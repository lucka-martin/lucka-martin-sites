<template>
  <div class="card fit" :style="style">
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
  @import "./src/assets/scss/css3-mixins.scss";
  @import "./src/assets/scss/card.scss";

  .card figure {
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    text-align: center;
    font-weight: bold;
  }
  .card figure {
    @include backface-visibility(hidden);
  }

  .card-content {
    height: 100%;
    @include transition(1s);
    @include transform-style(preserve-3d);
    @include transform-origin(right center);
  }

  .card:hover .card-content {
    @include transform(translateX(-100%) rotateY(-180deg));
  }

  .card .back {
    @include transform(rotateY(180deg));
  }
</style>
