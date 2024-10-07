<template>
    <AsyncButton @click="signInAndGetUser">        
        <slot></slot>
    </AsyncButton>
</template>

<script>
import {signInAndGetUser} from '../lib/microsoftGraph';
import AsyncButton from '@/components/AsyncButton.vue';
export default {
    name: 'SignInButton',
    components: {
        AsyncButton
    },
    methods: {
        async signInAndGetUser() {
            const account = await signInAndGetUser();
            this.$emit('connected', account);
        }
    },
}
</script>