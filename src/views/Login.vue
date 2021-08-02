<template>
  <div
    class="bg h-screen flex flex-col items-center bg1"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <div class="flex flex-col items-center pt-20 pb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-40 w-40 text-gray-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2
          2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2
          0 002-2v-4a2 2 0 00-2-2h-2.343M11
          7.343l1.657-1.657a2 2 0 012.828
          0l2.829 2.829a2 2 0 010 2.828l-8.486
          8.485M7 17h.01"
        />
      </svg>
      <div class="text-2xl text-white font-bold font-mono text-center">
        No-Code <br />
        Conf 2021
      </div>
    </div>
    <form
      @submit.prevent="handleLogin"
      class="w-96 px-8 rounded-xl space-y-8 py-8 bg-blue-800"
    >
      <div>
        <div class="text-gray-200 uppercase font-bold font-mono">Correo:</div>
        <input
          v-model="options.email"
          type="email"
          class="
            w-full
            py-1
            rounded-lg
            border-2
            focus:outline-none
            transition
            duration-300
            focus:border-black
            px-4
          "
        />
      </div>
      <div>
        <div class="text-gray-200 uppercase font-bold font-mono">
          Contraseña:
        </div>
        <input
          v-model="options.password"
          type="password"
          class="
            w-full
            py-1
            rounded-lg
            border-2
            focus:outline-none
            transition
            duration-300
            focus:border-black
            px-4
          "
        />
      </div>
      <div>
        <button
          type="submit"
          :disabled="loading"
          class="text-white bg rounded py-2 uppercase font-mono font-bold"
        >
          Ingresar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data: () => ({
    image: 'https://www.pngall.com/wp-content/uploads/2016/07/Vector-Download-PNG.png',
    options: {},
  }),
  created() {
    console.log(this.$store);
  },
  computed: {
    ...mapState('auth', ['loading']),
  },
  methods: {
    ...mapActions('auth', ['login']),

    async handleLogin() {
      await this.login(this.options);
    },
  },
};
</script>

<style scoped>
.bg {
  background-color: #100a76;
  width: 100%;
}

.bg1 {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
