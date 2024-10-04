<template>
    <v-app-bar :elevation="2">
        <SigninButton class="signin">Signin with Microsoft</SigninButton>
    </v-app-bar>
</template>

<script>
import SigninButton from '@/components/SigninButton.vue';
export default {
    name: 'BaseHeader',
    components: {
        SigninButton
    }
}
</script>

<style scoped>
    .signin {
        background-color: #6fd472;
    }
</style>
