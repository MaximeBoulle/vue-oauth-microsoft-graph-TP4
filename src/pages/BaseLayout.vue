<template>
    <v-app>
        <BaseHeader @userChanged="setAccount" />
        <slot></slot>
        <BaseFooter />
    </v-app>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue';
import BaseFooter from '@/components/BaseFooter.vue';

export default {
    components: {
        BaseHeader,
        BaseFooter
    },
    data() {
        return {
            account: null
        };
    }, 
    methods: {
        setAccount(account) {
            this.account = account;
            this.$emit('userChanged', account);
        }
    }
};
</script>

<style scoped>
/* Add your styles here */
</style>