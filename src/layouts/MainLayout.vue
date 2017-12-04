<template>
  <div v-cloak>
    <main>
      <slot></slot>
    </main>
    <footer class="elevation-5">
      <div>
        © {{ new Date().getFullYear() }}
      </div>
    </footer>
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
  footer {
    color: rgba(0,0,0,.87);
    padding: 8px 16px;
    text-align: right;
  }
</style>
