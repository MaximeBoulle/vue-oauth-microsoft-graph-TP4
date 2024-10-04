<template>
    <v-app>
        <BaseHeader />
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
    }
};
</script>

<style scoped>
/* Add your styles here */
</style>