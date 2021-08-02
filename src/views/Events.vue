<template>
  <div class="bg">
    <Navbar navbar="Eventos" />
    <div class="px-8">
      <carousel :items-to-show="1">
        <slide v-for="slide in imgs" :key="slide">
          <div
            :style="{ 'background-image': 'url(' + slide + ')' }"
            class="
              w-full
              min-h-screen
              carousel__item
              flex
              justify-center
              items-center
            "
          >
            <button
              class="
                px-6
                py-3
                bg
                transform
                hover:scale-110
                transition
                duration-300
                rounded-lg
                text-sm text-white
                uppercase
                font-bold
              "
            >
              Ver evento
            </button>
          </div>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
      <div class="pt-6 px-2">
        <Cardevent />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import {
  Carousel, Slide, Pagination, Navigation,
} from 'vue3-carousel';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Cardevent from '../components/Cardevent.vue';

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Navbar,
    Footer,
    Cardevent,
  },
  data: () => ({
    imgs: {
      img1: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      img2: 'https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      img3: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
  }),
};
</script>

<style scoped>
.bg {
  background-color: #100a76;
}

.carousel__item {
  min-height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-color: var(--carousel-color-primary);
  color: var(--carousel-color-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 5px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 25px solid white;
}
</style>
