<template>
    <BaseButton :disabled="isDisabled" @click="handleClick">
        <slot></slot>
    </BaseButton>
</template>

<script>

import BaseButton from '@/components/BaseButton.vue';

export default {
    name: 'AsyncButton',
    inheritAttrs: false,
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: 'primary',
        },
    },
    data() {
        return {
            isDisabled: this.disabled 
        };
    },
    methods: {
        handleClick() {
            const originalOnClick = (this.$attrs || {}).onClick || (() => Promise.resolve());
            this.isDisabled = true;
            originalOnClick().finally(() => {
                this.isDisabled = false;
            });
        },
    },
    components: {
        BaseButton
    }
};
</script>

<style scoped>
    .v-btn:hover {
        transform: scale(1.2);
        animation-duration: 2s;
    }
    .v-btn:focus {
        background: gray;
    }
</style>
