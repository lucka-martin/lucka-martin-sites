<template>
  <div class="column-item fit">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class Column extends Vue {
  }
</script>

