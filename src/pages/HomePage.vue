<template>
  <MainLayout>
    <HomeButton></HomeButton>
    <div id="main">
      <Columns>
        <!-- Column 1 (horizontal, vertical, horizontal, vertical) -->
        <ColumnItem>
          <a href="detail1.html"><img src="images/pic01.jpg" alt="" /></a>
        </ColumnItem>
        <ColumnItem>
          <a href="detail1.html"><img src="images/pic02.jpg" alt="" /></a>
        </ColumnItem>
        <ColumnItem>
          <a href="detail1.html"><img src="images/pic03.jpg" alt="" /></a>
        </ColumnItem>
        <ColumnItem>
          <a href="detail1.html"><img src="images/pic04.jpg" alt="" /></a>
        </ColumnItem>

        <!-- Column 2 (vertical, horizontal, vertical, horizontal) -->
        <ColumnItem>
          <a href="detail1.html"><img src="images/pic06.jpg" alt="" /></a>
        </ColumnItem>
        <ColumnItem>
          <a href="detail1.html"><img src="images/pic05.jpg" alt="" /></a>
        </ColumnItem>
        <ColumnItem>
          <a href="detail1.html"><img src="images/pic08.jpg" alt="" /></a>
        </ColumnItem>
        <ColumnItem>
          <a href="detail1.html"><img src="images/pic07.jpg" alt="" /></a>
        </ColumnItem>

        <!-- Column 3 (horizontal, vertical, horizontal, vertical) -->
        <ColumnItem>
          <a href="detail1.html"><img src="images/pic09.jpg" alt="" /></a>
        </ColumnItem>
        <ColumnItem>
          <a href="detail1.html"><img src="images/pic12.jpg" alt="" /></a>
        </ColumnItem>
        <ColumnItem>
          <a href="detail1.html"><img src="images/pic11.jpg" alt="" /></a>
        </ColumnItem>
        <ColumnItem>
          <a href="detail1.html"><img src="images/pic10.jpg" alt="" /></a>
        </ColumnItem>

        <!-- Column 4 (vertical, horizontal, vertical, horizontal) -->
        <ColumnItem>
          <a href="detail1.html"><img src="images/pic13.jpg" alt="" /></a>
        </ColumnItem>
        <ColumnItem>
          <a href="detail1.html"><img src="images/pic14.jpg" alt="" /></a>
        </ColumnItem>
        <ColumnItem>
          <a href="detail1.html"><img src="images/pic15.jpg" alt="" /></a>
        </ColumnItem>
        <ColumnItem>
          <a href="detail1.html"><img src="images/pic16.jpg" alt="" /></a>
        </ColumnItem>
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
  import ColumnItem from '@/components/ColumnItem.vue'

  @Component({
    components: {
      MainLayout,
      HomeButton,
      Columns,
      ColumnItem
    }
  })
  export default class HomePage extends Vue {
  }
</script>

