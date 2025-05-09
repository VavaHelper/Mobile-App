<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Crie o seu usuário</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
            <IonCard>
                <IonCardHeader>
                    <IonCardContent>
                        <ion-item>
                            <ion-label position="stacked">Usuário</ion-label>
                            <IonInput v-model="username" type="text" class="input-text"></IonInput>
                        </ion-item>
                        <ion-item>
                            <IonLabel position="stacked">Senha</IonLabel>
                            <IonInput v-model="password" type="password" class="input-text"></IonInput>
                        </ion-item>

                        <ul class="password-requirements">
                            <li :class="{ valid: passwordCriteria.length }">✅ Mínimo de 8 caracteres</li>
                            <li :class="{ valid: passwordCriteria.uppercase }">✅ Pelo menos uma letra maiúscula</li>
                            <li :class="{ valid: passwordCriteria.number }">✅ Pelo menos um número</li>
                            <li :class="{ valid: passwordCriteria.specialChar }">✅ Pelo menos um caractere especial (!@#$%^&*)</li>
                        </ul>

                        <IonButton expand="full" @click="handleRegister">Cadastre-se</IonButton>                       
                        <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>
                    </IonCardContent>
                </IonCardHeader>
            </IonCard>
        </IonContent>
    </IonPage>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { register } from '@/Service/authService';


import { 
    IonButton, IonCard, IonCardContent, IonCardHeader, 
    IonContent, IonHeader, IonInput, IonLabel, 
    IonPage, IonTitle, IonToolbar, IonItem 
} from '@ionic/vue';

const username = ref("");
const password = ref("");
const errorMessage = ref("");

const router = useRouter();


const passwordCriteria = computed(() => ({
    length: password.value.length >= 8,
    uppercase: /[A-Z]/.test(password.value),
    number: /[0-9]/.test(password.value),
    specialChar: /[!@#$%^&*]/.test(password.value)
}));


const validCriteriaCount = computed(() => 
    Object.values(passwordCriteria.value).filter(Boolean).length
);


const isPasswordValid = computed(() => validCriteriaCount.value === Object.keys(passwordCriteria.value).length);


const handleRegister = async () => {
    if (!isPasswordValid.value) {
        errorMessage.value = "A senha deve atender todos os critérios acima.";
        return;
    }

    try {
        await register(username.value, password.value);
        router.push("/login");
    } catch (error) {
        errorMessage.value = "Esse úsuario já possui cadastro";
    }
};
</script>

<style scoped>

.input-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}


.error-text {
    color: red;
    text-align: center;
    margin-top: 10px;
}


.password-requirements {
    list-style: none;
    padding: 0;
    margin: 10px 0;
    font-size: 14px;
    color: gray;
}

.password-requirements li.valid {
    color: green;
    font-weight: bold;
}
</style>
