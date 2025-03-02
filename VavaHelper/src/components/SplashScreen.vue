<template>
  <div class="splash-screen">
    <img src="@/assets/splash/logo.png" alt="Splash Screen" class="splash-image" />
  </div>
</template>

<script>
export default {
  name: 'SplashScreen',
}
</script>

<style scoped>

.splash-screen {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  height: 100vh; /* 100% da altura da tela */
  width: 100vw; /* 100% da largura da tela */
  background-color: #ffffff;
}

/* Ajusta a imagem */
.splash-image {
  max-width: 80%; /* Evita que a imagem fique grande demais */
  max-height: 60vh; /* Ajusta a altura para se adaptar à tela */
}
</style>
