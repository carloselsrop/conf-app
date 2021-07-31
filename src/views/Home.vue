<template>
  <div class="bg h-screen overflow-hidden">
    <Navbar />
    <div class="bg1">
      <Content />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Content from '../components/Content.vue';

export default {
  components: {
    Navbar,
    Content,
  },
};
</script>

<style scoped>
.bg {
  background-color: #100a76;
}

.bg1 {
  background: url("https://www.pngall.com/wp-content/uploads/2016/07/Vector-Download-PNG.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
