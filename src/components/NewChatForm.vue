<template>
    <form @submit.prevent="handleSubmit">
      <textarea placeholder="Type a message and hit enter to send..."
                v-model="message" 
                @keydown.enter.prevent="handleSubmit">
      </textarea>
      <div class="error">{{ error }}</div>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue'
  import getUser from '@/composables/getUser'
  import useCollection from '../composables/useCollection'
  import { timestamp } from '@/firebase/config'
  
  export default {
    setup() {
      const { user } = getUser()
      const { addDoc, error } = useCollection('messages')
      const message = ref('')
  
      const handleSubmit = async () => {
        const chat = {
          name: user.value.displayName,
          message: message.value,
          createdAt: timestamp()
        }
        await addDoc(chat)
        if (!error.value) {
          message.value = ''
        }
      }
  
      return { message, handleSubmit, error } // Move this line outside of handleSubmit
    }
  }
  </script>
<style scoped>
form{
    margin:10px;
}
textarea{
    width:100%;
    max-width:100%;
    margin-bottom:6px;
    padding:10px;
    box-sizing:border-box;
    border:0;
    background-color: #f8f8f8;
    border-radius: 20px;
    font-family:inherit;
    outline: none;
}

textarea:focus {
    border-color: #007bff; /* Highlight color when focused */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Increased shadow on focus for depth */
}
</style>