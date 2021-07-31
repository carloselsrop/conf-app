<template>
  <div class="pt-8 bg1 h-screen">
    <div class="flex flex-col items-center space-y-4">
      <div class="text-gray-300">Estamos de vuelta - Julio 31/2021</div>
      <div class="text-7xl text-gray-50">No-Code <br />Conf 2021</div>
      <div class="text-gray-300">
        Palacio del arte San Salvador - El Salvador
      </div>
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
        <div class="text-sm text-center uppercase font-bold text-gray-100">
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
          "
        >
          Hazlo Ahora!!
        </button>
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <form
        @click="submitInfo()"
        v-show="isOpen"
        action=""
        class="bg-gray-100 w-96 py-8 rounded-xl px-8 space-y-12"
      >
        <div class="flex flex-col items-start">
          <div class="pb-2 uppercase font-bold text-sm">Nombre:</div>
          <input
            type="text"
            class="w-full px-4 py-2 rounded focus:outline-none"
            placeholder="Ingresa tu nombre..."
          />
        </div>
        <div class="flex flex-col items-start">
          <div class="pb-2 uppercase font-bold text-sm">Email:</div>
          <input
            type="text"
            class="w-full px-4 py-2 rounded focus:outline-none"
            placeholder="Ingresa tu email..."
          />
        </div>
        <div class="flex flex-col items-start">
          <div class="pb-2 uppercase font-bold text-sm">Imagen:</div>
          <input type="file" />
          <div
            class="
              text-xs
              w-full
              pt-1
              text-right
              uppercase
              font-medium
              text-red-500
            "
          >
            *opcional*
          </div>
        </div>
        <div>
          <button
            class="
              bg
              text-white
              px-4
              py-3
              rounded-full
              w-full
              uppercase
              font-bold
              text-sm
            "
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: false,
  }),
};
</script>

<style scoped>
.bg {
  background-color: #100a76;
}
</style>
