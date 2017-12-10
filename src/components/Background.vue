<template>
  <div :style="style" class="bg">

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'

  @Component
  export default class Background extends Vue {
    @Prop({
      required: true,
      type: String
    })
    url: string

    get style () {
      return {
        'background-image': "url('" + this.url + "')"
      }
    }
  }
</script>

<style scoped>
  .bg {
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
  }
</style>
