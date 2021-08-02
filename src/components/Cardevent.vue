<template>
  <!-- CARDS -->
  <div class="flex w-full flex-row flex-wrap">
    <!-- card-inner -->
    <div class="w-full grid xl:grid-cols-5 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Card -->
      <div
        class="
          w-full
          transform
          bg-indigo-500
          hover:scale-105
          duration-300
          mb-8
          rounded-lg
        "
      >
        <div class="flex flex-col items-center py-8">
          <!-- Soon -->
          <div class="text-xs text-white pb-2 select-none">proximamente</div>
          <!-- Title of event -->
          <div
            class="
              text-3xl text-white
              font-bold
              uppercase
              text-center
              select-none
              pb-4
            "
          >
            Concierto de <br />
            Bad Bunny
          </div>
          <!-- Type of event -->
          <div
            class="
              w-full
              py-2
              bg-indigo-600
              text-white
              font-medium
              select-none
              text-center text-lg
            "
          >
            Concierto
          </div>
          <!-- General information -->
          <div class="space-y-4">
            <div class="pt-6">
              <div class="text-center text-xs text-white select-none">
                Sabado, 31 de julio de 2021
              </div>
              <div class="text-center text-xs text-gray-300 select-none">
                6:00 pm - 8:00 pm
              </div>
            </div>
            <div>
              <div class="text-center text-xs text-white select-none">
                Estadio Cuscatlan
              </div>
              <div class="text-center text-xs text-gray-300 select-none">
                Senda 4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-card {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
