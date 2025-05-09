<script setup lang="ts">
import { ref, onMounted } from "vue";
import api from "@/Service/api";
import { logout } from "@/Service/authService";
import { useRouter } from "vue-routerHeader";
import Header from "@/components/.vue";
import FloatButton from "@/components/FloatButton.vue";


const router = useRouter();
const nomeUsuario = ref('')

const buscarUsuário = async() =>
{
  try{
    const response = await api.get('/usuario')
  }
  catch{
    console.error("Nome de usário não encontrado")
  }
}

const handleLogout = () => {
  logout();
  router.push("/");
};

</script>

<template>
  <ion-page>
    <ion-header>
        <Header/>


        <FloatButton/>
    </ion-header>
    <ion-content class="ion-padding">
      <h2>Bem-vindo!</h2>
    </ion-content>
  </ion-page>
</template>
 