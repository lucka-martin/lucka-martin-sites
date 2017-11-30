<template>
  <HomeButton></HomeButton>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import HomeButton from '@/components/HomeButton.vue'

  @Component({
    components: {
      HomeButton
    }
  })
  export default class HomePage extends Vue {
  }
</script>

<style lang="scss" scoped>

</style>
