<template>
  <MainLayout>
    <HomeButton></HomeButton>
    <div id="main">
      <Columns :columns="4">
        <!-- Column 1 (horizontal, vertical, horizontal, vertical) -->
        <Card :aspectRatio="16/10">
          <a href="detail1.html"><img src="images/pic01.jpg" alt="" /></a>
        </Card>
        <FlipCard :aspectRatio="11/16">
          <a slot="front" href="detail1.html"><img src="images/pic02.jpg" alt="" /></a>
          <span slot="back">ABC</span>
        </FlipCard>
        <FlipCard :aspectRatio="16/10">
          <a slot="front" href="detail1.html"><img src="images/pic03.jpg" alt="" /></a>
          <span slot="back">ABC</span>
        </FlipCard>
        <FlipCard :aspectRatio="11/16">
          <a slot="front" href="detail1.html"><img src="images/pic04.jpg" alt="" /></a>
          <span slot="back">ABC</span>
        </FlipCard>

        <!-- Column 2 (vertical, horizontal, vertical, horizontal) -->
        <Card :aspectRatio="11/16">
          <a href="detail1.html"><img src="images/pic06.jpg" alt="" /></a>
        </Card>
        <FlipCard :aspectRatio="16/10">
          <a slot="front" href="detail1.html"><img src="images/pic05.jpg" alt="" /></a>
          <span slot="back">ABC</span>
        </FlipCard>
        <FlipCard :aspectRatio="11/16">
          <a slot="front" href="detail1.html"><img src="images/pic08.jpg" alt="" /></a>
          <span slot="back">ABC</span>
        </FlipCard>
        <FlipCard :aspectRatio="16/10">
          <a slot="front" href="detail1.html"><img src="images/pic07.jpg" alt="" /></a>
          <span slot="back">ABC</span>
        </FlipCard>

        <!-- Column 3 (horizontal, vertical, horizontal, vertical) -->
        <Card :aspectRatio="16/10">
          <a href="detail1.html"><img src="images/pic09.jpg" alt="" /></a>
        </Card>
        <FlipCard :aspectRatio="11/16">
          <a slot="front" href="detail1.html"><img src="images/pic12.jpg" alt="" /></a>
          <span slot="back">ABC</span>
        </FlipCard>
        <FlipCard :aspectRatio="16/10">
          <a slot="front" href="detail1.html"><img src="images/pic11.jpg" alt="" /></a>
          <span slot="back">ABC</span>
        </FlipCard>
        <FlipCard :aspectRatio="11/16">
          <a slot="front" href="detail1.html"><img src="images/pic10.jpg" alt="" /></a>
          <span slot="back">ABC</span>
        </FlipCard>

        <!-- Column 4 (vertical, horizontal, vertical, horizontal) -->
        <Card :aspectRatio="11/16">
          <a href="detail1.html"><img src="images/pic13.jpg" alt="" /></a>
        </Card>
        <FlipCard :aspectRatio="16/10">
          <a slot="front" href="detail1.html"><img src="images/pic14.jpg" alt="" /></a>
          <span slot="back">ABC</span>
        </FlipCard>
        <FlipCard :aspectRatio="11/16">
          <a slot="front" href="detail1.html"><img src="images/pic15.jpg" alt="" /></a>
          <span slot="back">ABC</span>
        </FlipCard>
        <FlipCard :aspectRatio="16/10">
          <a slot="front" href="detail1.html"><img src="images/pic16.jpg" alt="" /></a>
          <span slot="back">ABC</span>
        </FlipCard>
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

  @Component({
    components: {
      MainLayout,
      HomeButton,
      Columns,
      Card,
      FlipCard
    }
  })
  export default class HomePage extends Vue {
  }
</script>

