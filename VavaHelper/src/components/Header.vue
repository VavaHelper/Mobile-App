<template>
        <header class="flex justify-between items-center px-6 py-3 bg-dark-gradient">
            <div class="flex items-center space-x-2">
                <img src="@/assets/HeaderLogo.png" alt="Vava Helper Logo" class="h-8">
            </div>

            <ion-button class="login-button" :routerLink="'/login'">

                 login
            </ion-button>
        </header>
</template>

<script setup> 
import { IonButton } from '@ionic/vue';
import { RouterView, RouterLink } from 'vue-router';

</script>

<style scoped>
/* Garante que o header ocupe 100% da largura e os elementos fiquem bem alinhados */
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}

/* Estilizando o botão Ionic */
.login-button {
    --background: #93e9be; /* Cor de fundo */
    --color: black; /* Cor do texto */
    --border-radius: 20px; /* Borda arredondada */
    font-weight: bold;
    padding: 10px 20px;
    margin-left: auto; /* Garante que o botão vá para a direita */
}

/* Hover do botão */
.login-button:hover {
    --background: #5fc99a; /* Mudança de cor ao passar o mouse */
}

/* Mensagem de erro */
.error-text {
    color: red;
    text-align: center;
    margin-top: 10px;
}
</style>
