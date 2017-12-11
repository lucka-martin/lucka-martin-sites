<template>
  <MainLayout>
    <HomeButton></HomeButton>
    <div id="main">
      <Columns :columns="4" v-cloak>
        <!-- Column 1 (horizontal, vertical, horizontal, vertical) -->
        <FlipCard :aspectRatio="11/16" v-fade-in>
          <a slot="front" href="detail1.html">FOTO</a>
          <span slot="back">ABC</span>
        </FlipCard>
        <Card :aspectRatio="16/10" v-fade-in>
          <span>Lucka - foto</span>
        </Card>
        <FlipCard :aspectRatio="16/10" v-fade-in>
          <span slot="front" href="detail1.html">Lucka - Promoce</span>
          <span slot="back">ABC</span>
        </FlipCard>
        <Card :aspectRatio="11/16" v-fade-in>
          <img src="/static/images/ring.jpg"/>
          <!--<Background slot="front" url="/static/images/ring.jpg">-->
          <!--</Background>-->
          <!--<span slot="back">-->
            <!--<a href="https://earth.google.com/web/@45.8489444,10.86875,360.18591757a,709.16499163d,35y,0h,45t,0r/data=CjkaNxIxCgAZrp7ul6rsRkAhRHkwc8u8JUAqGzQ1wrA1MCc1Ni4yIk4gMTDCsDUyJzA3LjUiRRgCIAEoAg">-->
              <!--here-->
            <!--</a>-->
          <!--</span>-->
        </Card>

        <!-- Column 2 (vertical, horizontal, vertical, horizontal) -->
        <FlipCard :aspectRatio="16/10" v-fade-in>
          <Moment slot="front"
                  :moment="moment('1993-06-08')"
                  display="d">
          </Moment>
          <span slot="back">Ústí nad Orlicí</span>
        </FlipCard>
        <Card :aspectRatio="11/16" v-fade-in>
          <span>Gymuo</span>
        </Card>
        <FlipCard :aspectRatio="11/16" v-fade-in>
          <span slot="front">Brno - VUT</span>
          <span slot="back">Brno - MU</span>
        </FlipCard>
        <FlipCard :aspectRatio="16/10" v-fade-in>
          <a slot="front" href="detail1.html">FOTO</a>
          <span slot="back">ABC</span>
        </FlipCard>

        <!-- Column 3 (horizontal, vertical, horizontal, vertical) -->
        <FlipCard :aspectRatio="16/10" v-fade-in>
          <Moment slot="front"
                  :moment="moment('1990-09-27')"
                  display="d">
          </Moment>
          <span slot="back">Ústí nad Orlicí</span>
        </FlipCard>
        <Card :aspectRatio="11/16" v-fade-in class="hearts">
          <Duration :from="moment('2009-11-28')"
                    :to="moment()"
                    v-rerender="1000"
                    display="YMDhm"></Duration>
        </Card>
        <FlipCard :aspectRatio="16/10" v-fade-in>
          <span slot="front">Brno foto</span>
          <span slot="back">Brno foto</span>
        </FlipCard>
        <FlipCard :aspectRatio="11/16" v-fade-in>
          <span slot="front">Svatba - cas</span>
          <span slot="back">Svatba - misto</span>
        </FlipCard>

        <!-- Column 4 (vertical, horizontal, vertical, horizontal) -->
        <Card :aspectRatio="11/16" v-fade-in>
          <span>Martin - foto</span>
        </Card>
        <FlipCard :aspectRatio="16/10" v-fade-in>
          <span slot="front" href="detail1.html">Martin - promoce</span>
          <span slot="back">ABC</span>
        </FlipCard>
        <FlipCard :aspectRatio="11/16" v-fade-in class="wedding-arch">
          <Moment slot="front"
                  :moment="moment('2018-09-01 10:00')">
          </Moment>
          <Duration slot="back"
                    :from="moment()"
                    :to="moment('2018-09-01 10:00')"
                    v-rerender="1000"
                    countdown
                    display="YMDhm"></Duration>
        </FlipCard>
        <Card :aspectRatio="16/10" v-fade-in>
          <span>FOTO</span>
        </Card>
      </Columns>
    </div>
  </MainLayout>
</template>

<script lang="ts">
  import Vue from 'vue'

  import Component from 'vue-class-component'
  import MainLayout from '@/layouts/MainLayout.vue'
  import Background from '@/components/Background.vue'
  import Card from '@/components/Card.vue'
  import Columns from '@/components/Columns.vue'
  import Duration from '@/components/Duration.vue'
  import FlipCard from '@/components/FlipCard.vue'
  import HomeButton from '@/components/HomeButton.vue'
  import Moment from '@/components/Moment.vue'

  import fadeIn from '@/directives/fadeIn'
  import rerender from '@/directives/rerender'

  import moment, { duration, FromTo } from 'moment'

  @Component({
    components: {
      Background,
      Card,
      Columns,
      FlipCard,
      MainLayout,
      HomeButton,
      Duration,
      Moment
    },
    directives: {
      fadeIn,
      rerender
    }
  })
  export default class HomePage extends Vue {
    moment (date?: string) {
      return date ? moment(date) : moment()
    }

    duration (date: FromTo) {
      return duration(date)
    }
  }
</script>

