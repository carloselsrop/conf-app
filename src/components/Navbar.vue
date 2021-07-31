<template>
  <div class="w-full flex py-6 items-center">
    <!-- Menu div -->
    <div class="w-1/3 px-8 space-x-12">
      <router-link to="/">
        <button class="text-xs uppercase select-none text-white font-semibold">
          Inicio
        </button>
      </router-link>
      <router-link to="/participants">
        <button class="text-xs uppercase select-none text-white font-semibold">
          Participantes
        </button>
      </router-link>
    </div>
    <!-- Logo div -->
    <div class="w-1/3 flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 text-gray-200"
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
    </div>
    <div class="w-1/3 flex justify-end pr-8">
      <router-link to="/login" class="mr-4">
        <button
          class="text-center text-xs text-white uppercase font-bold py-2 px-1"
        >
          <div class="select-none">Cerrar Sesion</div>
        </button>
      </router-link>
      <a
        target="_blank"
        href="https://github.com/carloselsrop?tab=repositories"
      >
        <button
          class="
            flex
            animate-bounce
            items-center
            hover:bg-white
            transition
            duration-300
            text-xs text-black
            uppercase
            font-bold
            bg-pink-400
            py-2
            px-4
            rounded-full
            select-none
          "
        >
          <img
            class="w-6 h-6 mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
            alt=""
          />
          <div>@carloselsrop</div>
        </button>
      </a>
    </div>
  </div>
</template>
