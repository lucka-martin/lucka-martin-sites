<template>
  <div class="moment">
    <div class="moment-content">
      <div v-if="display.includes('D')" class="block">
        <p class="digit">{{ dayAsString }}</p>
      </div>
      <div v-if="display.includes('d')" class="block">
        <p class="digit">{{ dateAsString }}</p>
      </div>
      <div v-if="display.includes('t')" class="block">
        <p class="digit">{{ timeAsString }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'
  import { Moment } from 'moment'

  @Component
  export default class DurationComponent extends Vue {
    @Prop({
      required: true,
      type: Object
    })
    moment: Moment;
    @Prop({
      default: 'Ddt',
      type: String
    })
    display: string;
    @Prop({
      default: 'cs',
      type: String
    })
    locale: string;

    get _moment () {
      return this.moment.locale(this.locale)
    }

    get dayAsString () {
      return this._moment.format('dddd')
    }

    get dateAsString () {
      return this._moment.format('D. MMMM YYYY')
    }

    get timeAsString () {
      return this._moment.format('H:mm')
    }
  }
</script>

<style scoped>
  .block p {
    margin: 0;
  }

  .digit {
    white-space: nowrap;
    text-align: center;
  }
</style>
