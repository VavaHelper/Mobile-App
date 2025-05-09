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
import { useAuthStore } from './Service/authStore';

const isLoading = ref(true);

// Carregamento Splash Screen
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000); 
});


</script>

<style scoped>

.router-outlet {
  position: relative; /* Garante que o outlet tenha um contexto de posicionamento */
  z-index: 1; /* Coloca o outlet abaixo dos outros elementos com z-index maior */
}
/* Estilos globais */
</style>