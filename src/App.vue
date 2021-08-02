<template>
  <div>
    <transition name="slide-fade">
      <router-view />
    </transition>
  </div>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateZ(0);
  opacity: 0;
}
</style>
