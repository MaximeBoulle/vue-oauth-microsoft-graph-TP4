<template>
    <v-btn :disabled="disabled" :style="{ backgroundColor: color }">
        <slot></slot>
    </v-btn>
</template>

<script>
export default {
    name: 'BaseButton',
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
};
</script>

<style scoped>

    .v-btn:hover {
        transform: scale(1.2);
        animation-duration:2s
    }

    .v-btn:focus {
        background: gray;
    }


</style>