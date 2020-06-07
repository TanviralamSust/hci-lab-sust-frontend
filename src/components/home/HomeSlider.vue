<template>
  <div style="margin: 20px">
    <v-carousel cycle height="800" interval="100000" show-arrows-on-hover>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row class="fill-height" justify="center">
          <b class="primaryText">{{ item.num }} decribe the activity happened last week</b>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>

</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://nlpsummerschool2017.files.wordpress.com/2017/07/cropped-dsc_3329_v2.jpg",
          num: "First"
        },
        {
          src: "https://sustbanglaresearch.org/assets/img/ict%20building.jpeg",
          num: "Second"
        },
        {
          src: "https://www.icbslp.org/assets/images/slide/2.jpg",
          num: "Second"
        }
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  }
};
</script>

<style>
</style>
