<template>
  <div class="card fit" :style="style">
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'

  @Component
  export default class Card extends Vue {
    @Prop({
      default: 1 / 1,
      type: Number
    })
    aspectRatio: number;

    get style () {
      const percent = (1 / this.aspectRatio) * 100
      return {
        'padding-top': percent + '%'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./src/assets/scss/card.scss";
</style>
