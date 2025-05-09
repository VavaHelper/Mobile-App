<template>
    <IonPage class="Login-page">
        <div class="Login-Box">
            <h2 class="Login-title" size="xl">Tela de login</h2>
            <IonItem class="input-item">
                <IonLabel class="custom-label" position="stacked">Username</IonLabel> 
                <IonInput v-model="username" type="text"></IonInput>
            </IonItem>
            <IonItem class="input-item">
                <IonLabel class="custom-label" position="stacked">Senha</IonLabel>
                <IonInput v-model="password" type="password"></IonInput>
            </IonItem>
            <IonItem lines="none" class="remenber-iten">
                <ion-note class="forgot-password" slot="end">Esqueceu a Senha?</ion-note>
            </IonItem>
            <IonButton expand="block" class="login-button" @click="handleLogin">
                <ion-icon name="star-outline" slot="start"></ion-icon>
                Entrar
            </IonButton>
        
            <div class="register-link">
                <a href="/register"> Aperte aqui para se registrar</a>
            </div>
        </div>  
    </IonPage>
</template>
    
<script setup lang="ts">
import { login } from '@/Service/authService';
import { IonButton, 
        IonCard, 
        IonCardContent, 
        IonCardHeader, 
        IonContent, 
        IonHeader, 
        IonInput, 
        IonLabel, 
        IonPage, 
        IonTitle, 
        IonToolbar,
        IonItem,
        IonIcon
    } from '@ionic/vue';
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const username = ref("")
const password = ref("")
const errorMessage = ref("")

const router = useRouter();

const handleLogin = async () => {
    try 
    {
        await login(username.value, password.value);
        router.push("/perfil");
    } 
    catch (error) 
    {
        errorMessage.value = "Usuário não encontrado"
    }
}

</script>
    
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');

.login-page {
  --ion-background-color: #141313;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.Login-Box {
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  background-color: transparent;
  text-align: center;
  font-family: 'Jersey 10', sans-serif;
  font-size: larger;
}

.login-title {
  font-weight: bold;
  font-family: 'Jersey 10', sans-serif;
  letter-spacing: 20px;
  margin-bottom: 30px;
  align-items: center;

}

.input-item {
  --background: transparent;
  --border-color: red;
  --highlight-color-focused: red;
  --color: white;
  margin-bottom: 15px;
  border: 1px solid red;
  border-radius: 5px;
}

.custom-label {
  color: red;
  font-family: 'Jersey 10', sans-serif;
  font-size: 31px;
}

ion-input {
  color: white;
}

.remember-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  --color: rgb(255, 255, 255);
  margin-top: 10px;
}

.forgot-password {
  color: red;
  font-size: 0.9em;
  cursor: pointer;
}

.login-button {
  --background: #ff4d4d;
  --color: white;
  margin-top: 20px;
  font-weight: bold;
  border-radius: 5px;
}

.register-link {
  margin-top: 20px;
}

.register-link a {
  color: red;
  text-decoration: none;
  font-weight: bold;
}



</style>
    