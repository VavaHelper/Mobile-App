import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getToken, logout } from '@/Service/authService';

export const useAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref(!!getToken());

    const checkAuth = () => {
        isAuthenticated.value = !!getToken();
    };

    const handleLogout = () => {
        logout();
        checkAuth();
    };

    return { isAuthenticated, checkAuth, handleLogout };
});
