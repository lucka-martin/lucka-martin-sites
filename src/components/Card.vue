<template>
  <div class="card fit" :style="style">
    <div class="inside">
      <slot name="front"></slot>
      <slot name="back"></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'

  @Component
  export default class Column extends Vue {
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
  .card {
    position: relative;
    width: 100%;
    padding-top: 100%;
  }

  .inside {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
  }
</style>
