<template>
  <ion-app>
    <SplashScreen v-if="isLoading" />
    <ion-router-outlet :key="$route.fullPath" />
  </ion-app>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import SplashScreen from '@/components/SplashScreen.vue';

const isLoading = ref(true);

// Carregamento Splash Screen
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000); 
});
</script>

<style scoped>
/* Estilos globais */
</style>