<template>
  <div class="duration">
    <div class="duration-content">
      <div v-if="display.includes('Y') && years" class="block">
        <p class="digit">{{ yearsAsString }}</p>
      </div>
      <div v-if="display.includes('M') && months" class="block">
        <p class="digit">{{ monthsAsString }}</p>
      </div>
      <div v-if="display.includes('D') && days" class="block">
        <p class="digit">{{ daysAsString }}</p>
      </div>
      <div v-if="display.includes('h') && hours" class="block">
        <p class="digit">{{ hoursAsString }}</p>
      </div>
      <div v-if="display.includes('m') && minutes" class="block">
        <p class="digit">{{ minutesAsString }}</p>
      </div>
      <div v-if="display.includes('s') && seconds" class="block">
        <p class="digit">{{ secondsAsString }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'
  import { Moment, Duration, duration } from 'moment'

  @Component
  export default class DurationComponent extends Vue {
    @Prop({
      required: true,
      type: Object
    })
    from: Moment
    @Prop({
      required: true,
      type: Object
    })
    to: Moment
    @Prop({
      default: 'YMDhms',
      type: String
    })
    display: string;
    @Prop({
      default: 'cs',
      type: String
    })
    locale: string;
    @Prop({
      default: false,
      type: Boolean
    })
    countdown: boolean;

    get duration (): Duration {
      return duration({
        from: this.from,
        to: this.to
      }).locale(this.locale)
    }

    get timeParts () : {[key: string]:number} {
      return {
        years: this.years,
        months: this.months,
        days: this.days,
        hours: this.hours,
        minutes: this.minutes,
        seconds: this.seconds
      }
    }

    isFirstNonZero (unit: string): boolean {
      const parts = this.timeParts

      for (const key in parts) {
        if (parts[key] !== 0) {
          return key === unit
        }
      }
      return false
    }

    get seconds () {
      return this.duration.seconds()
    }

    get secondsAsString () {
      return duration(
        {
          seconds: this.seconds
        })
        .locale(this.locale)
        .humanize(this.countdown && this.isFirstNonZero('seconds'))
    }

    get minutes () {
      return this.duration.minutes()
    }

    get minutesAsString () {
      return duration(
        {
          minutes: this.minutes
        })
        .locale(this.locale)
        .humanize(this.countdown && this.isFirstNonZero('minutes'))
    }

    get hours () {
      return this.duration.hours()
    }

    get hoursAsString () {
      return duration(
        {
          hours: this.hours
        })
        .locale(this.locale)
        .humanize(this.countdown && this.isFirstNonZero('hours'))
    }

    get days () {
      return this.duration.days()
    }

    get daysAsString () {
      return duration(
        {
          days: this.days
        })
        .locale(this.locale)
        .humanize(this.countdown && this.isFirstNonZero('days'))
    }

    get months () {
      return this.duration.months()
    }

    get monthsAsString () {
      return duration(
        {
          months: this.months
        })
        .locale(this.locale)
        .humanize(this.countdown && this.isFirstNonZero('months'))
    }

    get years () {
      return this.duration.years()
    }

    get yearsAsString () {
      return this.duration
        .locale(this.locale)
        .humanize(this.countdown && this.isFirstNonZero('years'))
    }
  }
</script>

<style scoped>
  .duration-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .block p {
    margin: 0;
  }

  .digit {
    white-space: nowrap;
    text-align: center;
  }
</style>
