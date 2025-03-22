<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Tela de login</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
            <IonCard>
                <IonCardHeader>
                    <!-- <IonCardTitle>Qual será a proxima jogada</IonCardTitle> -->
                    <IonCardContent>
                        <ion-item>
                            <ion-label>Usuário</ion-label>
                            <IonInput v-model="username" type="text"></IonInput>
                        </ion-item>
                        <ion-item>
                            <IonLabel>Senha</IonLabel>
                            <IonInput v-model="password" type="password"></IonInput>
                        </ion-item>
                        <ion-button expand="full" @click="handleLogin" >Entrar</ion-button>
                    </IonCardContent>
                </IonCardHeader>
            </IonCard>
        </IonContent>
    </IonPage>
</template>
    
<script setup lang="ts">
import { login } from '@/Service/authService';
import { IonButton, 
        IonCard, 
        IonCardContent, 
        IonCardHeader, 
        IonCardTitle, 
        IonContent, 
        IonHeader, 
        IonInput, 
        IonLabel, 
        IonPage, 
        IonTitle, 
        IonToolbar,
        IonItem
    } from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


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

</style>
    