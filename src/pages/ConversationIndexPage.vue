<template>
    <div>
        <h1>Conversations</h1>
        <ul>
        <li v-for="conversation in conversations" :key="conversation.id">
            <router-link :to="'/conversations/' + conversation.id">
            {{ conversation.name }}
            </router-link>
        </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'ConversationIndexPage',
    data() {
        return {
            conversations: [
                { id: '1', name: 'John Doe' },
                { id: '2', name: 'Jane Smith' },
            ]   
        };
    },
    methods: {
    }
};
</script>

<style scoped>

</style>