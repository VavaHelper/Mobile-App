<template>
  <ion-app>
    <!-- Exibe o Splash Screen enquanto isLoading é true -->
    <SplashScreen v-if="isLoading" />
    <!-- O conteúdo do app será mostrado depois que o Splash Screen desaparecer -->
    <ion-router-outlet v-else />
  </ion-app>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import SplashScreen from '@/components/SplashScreen.vue';

const isLoading = ref(true); // Controla a exibição do Splash Screen

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