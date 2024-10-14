<template>
    <div v-if="conversation">
      <h1>Conversation with {{ conversation.name }}</h1>
      <ul>
        <li v-for="message in conversation.messages" :key="message.id">
          <strong>{{ message.sender }}:</strong> {{ message.content }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Loading conversation...</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ConversationPage',
    props: ['id'], 
    data() {
      return {
        conversation: null 
      };
    },
    created() {
      this.fetchConversation();
    },
    methods: {
      fetchConversation() {
        const conversations = [
          { id: '1', name: 'John Doe', messages: [{ id: 1, sender: 'John', content: 'Hey there!' }] },
          { id: '2', name: 'Jane Smith', messages: [{ id: 1, sender: 'Jane', content: 'Hello!' }] },
        ];
  
        this.conversation = conversations.find(conv => conv.id === this.id);
      }
    }
  };
  </script>
  
  <style scoped>

  </style>
  