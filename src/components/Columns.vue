<template>
  <div class="inner">
    <div class="columns" :style="style">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'

  @Component
  export default class Columns extends Vue {
    @Prop()
    columns: number = 4;

    get style () {
      return {
        '-moz-column-count': this.columns,
        '-webkit-column-count': this.columns,
        'column-count': this.columns
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
