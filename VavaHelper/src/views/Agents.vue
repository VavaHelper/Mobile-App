<template>
    <Header/>
    
    <h1>Tstando o sistema d</h1>
    
    <FloatButton/>
    </template>
    
    <script setup lang="ts">
    import Header from '@/components/Header.vue';
    import FloatButton from '@/components/FloatButton.vue'
    </script>
    <style scoped>
    ion-content {
      --padding-bottom: 100px; /* espaço pra não ficar por trás da barra */
    }
    #container {
      text-align: center;
      
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    
    #container strong {
      font-size: 20px;
      line-height: 26px;
    }
    
    #container p {
      font-size: 16px;
      line-height: 22px;
      
      color: #8c8c8c;
      
      margin: 0;
    }
    
    #container a {
      text-decoration: none;
    }
    </style>
    