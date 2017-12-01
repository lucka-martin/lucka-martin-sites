<template>
  <div id="header" class="hide">
    <div class="inner">
      <router-link to="/" class="button hidden"></router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class HomeButton extends Vue {
  }
</script>

