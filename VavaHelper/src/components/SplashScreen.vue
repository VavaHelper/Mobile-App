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
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
}

.splash-image {
  max-width: 80%;
  max-height: 60vh;
}
</style>
