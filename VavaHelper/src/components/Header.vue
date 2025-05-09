<template>
        <header class="flex justify-between items-center px-6 py-3 bg-dark-gradient">
            <div class="flex items-center space-x-2">
                <img src="@/assets/HeaderLogo.png" alt="Vava Helper Logo" class="h-8">
            </div>

            <ion-button v-if="!isAutenticad" class="login-button" :routerLink="'/login'">
                 login
            </ion-button>

            <ion-button  v-if="isAutenticad" class="login-button" @click="handleLogout"> Deslogar </ion-button>
        </header>
</template>

<script setup> 
import router from '@/router';
import { getToken, logout } from '@/Service/authService';
import { IonButton } from '@ionic/vue';
import { onMounted, ref } from 'vue';
import { RouterView, RouterLink } from 'vue-router';


    const isAutenticad = ref(false)

    const cheackAuth = () =>{
        isAutenticad.value = !!getToken();
    }

    onMounted(cheackAuth);

const handleLogout = () => {
    logout();
    cheackAuth();
    router.push("/");
    setTimeout(() => {
        window.location.reload(); // Recarrega a página para limpar qualquer estado residual
    }, 100);
    
};


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
    z-index: 10; /* Mais alto do que o z-index do ion-router-outlet */
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
