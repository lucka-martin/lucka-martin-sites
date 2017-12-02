<template>
  <div v-cloak>
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class MainLayout extends Vue {
  }
</script>

<style lang="scss" scoped>

</style>
