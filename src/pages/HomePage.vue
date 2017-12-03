<template>
  <MainLayout>
    <HomeButton></HomeButton>
    <div id="main">
      <Columns :columns="4">
        <!-- Column 1 (horizontal, vertical, horizontal, vertical) -->
        <Card :aspectRatio="16/10" v-fade-in>
          <span>Lucka - foto</span>
        </Card>
        <FlipCard :aspectRatio="11/16" v-fade-in>
          <a slot="front" href="detail1.html">FOTO</a>
          <span slot="back">ABC</span>
        </FlipCard>
        <FlipCard :aspectRatio="16/10" v-fade-in>
          <span slot="front" href="detail1.html">Lucka - Promoce</span>
          <span slot="back">ABC</span>
        </FlipCard>
        <FlipCard :aspectRatio="11/16" v-fade-in>
          <span slot="front">Prstynek - foto</span>
          <span slot="back">Prstynek poloha</span>
        </FlipCard>

        <!-- Column 2 (vertical, horizontal, vertical, horizontal) -->
        <FlipCard :aspectRatio="11/16" v-fade-in>
          <span slot="front">Lucka - narozeni</span>
          <span slot="back">Lucka - misto</span>
        </FlipCard>
        <Card :aspectRatio="16/10" v-fade-in>
          <span>Gymuo</span> <!-- todo zoom in effect -->
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
          <span slot="front">Martin - narozeni</span>
          <span slot="back">Martin - misto</span>
        </FlipCard>
        <Card :aspectRatio="11/16" v-fade-in>
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
        <Card :aspectRatio="11/16" v-fade-in>
          <Duration :from="moment()"
                    :to="moment('2018-09-01 10:00')"
                    v-rerender="1000"
                    countdown
                    display="YMDhm"></Duration>
        </Card>
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
  import HomeButton from '@/components/HomeButton.vue'
  import Columns from '@/components/Columns.vue'
  import Card from '@/components/Card.vue'
  import FlipCard from '@/components/FlipCard.vue'
  import Duration from '@/components/Duration.vue'

  import fadeIn from '@/directives/fadeInDown'
  import rerender from '@/directives/rerender'

  import moment, { duration, FromTo } from 'moment'

  @Component({
    components: {
      MainLayout,
      HomeButton,
      Columns,
      Card,
      FlipCard,
      Duration
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

