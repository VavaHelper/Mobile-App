<script setup lang="ts">
import { ref, onMounted } from "vue";
import api from "@/Service/api";
import { logout } from "@/Service/authService";
import { useRouter } from "vue-router";

const mensagem = ref("");
const router = useRouter();

const fetchData = async () => {
  try {
    const response = await api.get("/some-protected-route"); // Altere para seu endpoint protegido
    mensagem.value = response.data;
  } catch (error) {
    console.error("Erro ao buscar dados protegidos:", error);
  }
};

const handleLogout = () => {
  logout();
  router.push("/");
};

onMounted(fetchData);
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Área Protegida</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="handleLogout">Sair</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h2>Bem-vindo!</h2>
      <p>{{ mensagem }}</p>
    </ion-content>
  </ion-page>
</template>
