<template>
  <div class="pt-4 bg1 h-screen">
    <!-- Some Text -->
    <div class="flex flex-col items-center space-y-4">
      <div class="text-gray-300 select-none">{{ slogan }} - {{ date }}</div>
      <div class="text-7xl text-gray-50 text-center select-none">
        {{ title1 }}<br />{{ title2 }}
      </div>
      <div class="text-gray-300 select-none">{{ place }} - {{ country }}</div>
      <!-- Toggle div -->
      <div
        class="
          bg-gradient-to-r
          from-pink-400
          to-yellow-500
          flex
          items-center
          justify-center
          px-8
          py-3
          rounded-full
        "
      >
        <div
          class="
            text-sm text-center
            uppercase
            font-bold
            text-gray-100
            select-none
          "
        >
          Aun no estas registrado?
        </div>
        <button
          @click="isOpen = !isOpen"
          class="
            bg
            px-4
            py-2
            rounded-full
            focus:outline-none
            ml-6
            text-white
            uppercase
            text-xs
            font-bold
            select-none
          "
        >
          Hazlo Ahora!!
        </button>
      </div>
    </div>
    <!-- Form div -->
    <div class="flex justify-center mt-6">
      <transition name="from-bottom">
        <form
          @submit.prevent="handleRegister"
          v-show="isOpen"
          class="bg-gray-100 w-96 py-8 rounded-xl px-8 space-y-4"
        >
          <div class="flex flex-col items-start">
            <div class="pb-2 uppercase font-bold text-sm select-none">
              Nombre:
            </div>
            <input
              v-model="options.name"
              type="text "
              class="w-full px-4 py-2 rounded focus:outline-none select-none"
              placeholder="Ingresa tu nombre..."
            />
          </div>
          <div class="flex flex-col items-start">
            <div class="pb-2 uppercase font-bold text-sm select-none">
              Email:
            </div>
            <input
              type="text"
              v-model="options.email"
              class="w-full px-4 py-2 rounded focus:outline-none select-none"
              placeholder="Ingresa tu email..."
            />
          </div>
          <div class="flex flex-col items-start">
            <div class="pb-2 uppercase font-bold text-sm select-none">
              Contraseña:
            </div>
            <input
              type="password"
              v-model="options.password"
              class="w-full px-4 py-2 rounded focus:outline-none select-none"
              placeholder="Ingresa tu email..."
            />
          </div>
          <div class="flex flex-col items-start">
            <div class="pb-2 uppercase font-bold text-sm select-none">
              Confirmar Contraseña:
            </div>
            <input
              type="password"
              v-model="options.password_confirmation"
              class="w-full px-4 py-2 rounded focus:outline-none select-none"
              placeholder="Ingresa tu email..."
            />
          </div>
          <!-- <div class="flex flex-col items-start">
            <div class="pb-2 uppercase font-bold text-sm select-none">
              Imagen:
            </div>
            <div
              class="
                flex
                w-full
                items-center
                justify-center
                bg-red-500
                rounded-xl
                group
              "
            >
              <label
                class="
                  w-full
                  flex flex-col
                  items-center
                  px-4
                  py-6
                  bg-white
                  hover:bg-blue-800
                  group-hover:text-white
                  text-blue
                  rounded-lg
                  uppercase
                  border border-blue
                  cursor-pointer
                  hover:bg-blue
                "
              >
                <svg
                  class="w-8 h-8 text-black group-hover:text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M16.88 9.1A4 4 0
                  0 1 16 17H5a5 5 0 0 1-1-9.9V7a3
                  3 0 0 1 4.52-2.59A4.98 4.98 0
                  0 1 17 8c0 .38-.04.74-.12
                  1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                  />
                </svg>
                <span class="mt-2 text-base font-mono font-bold select-none"
                  >Seleccione un archivo</span
                >
                <input type="file" class="hidden" />
              </label>
            </div>
            <div
              class="
                text-xs
                w-full
                pt-1
                text-right
                uppercase
                font-medium
                text-red-500
                select-none
              "
            >
              *opcional*
            </div>
          </div> -->
          <div>
            <button
              type="submit"
              class="
                bg
                text-white
                px-4
                py-3
                rounded-full
                w-full
                uppercase
                focus:outline-none
                font-bold
                text-sm
                select-none
              "
            >
              Enviar
            </button>
          </div>
          <div
            v-if="message"
            class="
              w-full
              flex
              items-center
              justify-center
              space-x-2
              bg-gray-200
              rounded
              py-1
            "
          >
            <svg
              v-if="message.type === 'success'"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <div class="uppercase">{{ message.message }}</div>
          </div>
        </form>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data: () => ({
    isOpen: false,
    title1: 'Conferencia',
    title2: 'JavaScript 2021',
    place: 'Universidad Don Bosco',
    country: 'El Salvador',
    slogan: 'Estamos devuelta',
    date: '01/08/2021',
    options: {},
  }),
  computed: {
    ...mapState('auth', ['loading', 'message']),
  },
  methods: {
    ...mapActions('auth', ['register']),

    async handleRegister() {
      await this.register(this.options);
    },
  },
};
</script>

<style scoped>
.bg {
  background-color: #100a76;
}

/* PARA LA POSTERIDAD */
.from-bottom-enter-active {
  animation: animation 0.5s;
}
.from-bottom-leave-active {
  animation: animation 0.5s reverse;
}

@keyframes animation {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
