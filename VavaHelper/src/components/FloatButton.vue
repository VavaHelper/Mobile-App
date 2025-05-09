<template>
  <div class="float-bar">
    <ion-button fill="clear" router-link="/home"  :class="{active: rout.path === '/home'}">
      <ion-icon :icon="homeOutline" />
    </ion-button>
    <ion-button fill="clear" router-link="/agents" :class="{active: rout.path === '/agents'}">
      <ion-icon :icon="starOutline" />
    </ion-button>
    <ion-button fill="clear" router-link="/agents" :class="{active: rout.path === '/...'}">  <!-- Movimentação -->
      <ion-icon :icon="walkOutline" />
    </ion-button>
    <ion-button fill="clear" router-link="/perfil" :class="{active: rout.path === '/perfil'} ">
      <ion-icon :icon="personOutline" />
    </ion-button>
  </div>
</template>

<script setup>
import { IonButton, IonIcon } from '@ionic/vue';
import { homeOutline, personOutline, starOutline, walkOutline } from 'ionicons/icons';
import { onActivated } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const rout = useRoute();
const router = useRouter()



</script>
d
<style scoped>
.float-bar {
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  background-color: transparent;
  border-radius: 20px;
  padding: 10px;
  z-index: 99;
  
}

ion-button.active {
  --background: #FF5252;
  --color: rgb(255, 255, 255);     
  transform: scale(1.3); 
}
ion-icon {
  font-size: 24px; /* Tamanho do ícone */
}

.ion-button:hover{
  transform: scale(1.1);
}

.float-bar ion-button {
  width: 60px;  
  height: 35px;
  border-radius: 50%;
  --background: transparent;
  --color: #ffffff;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
