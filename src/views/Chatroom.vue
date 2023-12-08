<template>
  <div class="container">
    <p>Chatroom</p>
    <Navbar/>
    <NewChatForm/>
  </div>
</template>

<script>
import NewChatForm from '@/components/NewChatForm.vue';
import Navbar from '@/components/Navbar.vue';
import getUser from '@/composables/getUser';
import { useRouter } from 'vue-router';
import { watch } from 'vue';

export default {
    components: {Navbar,NewChatForm},
    setup(){
        const {user} = getUser()
        const router = useRouter()

        watch(user, () => {
            if(!user.value){
                router.push({name: 'Welcome'})
            }
        })
    }
}
</script>
<style scoped>
form {
    margin: 10px;
    display: flex;
    flex-direction: column; /* Organize form elements in a column */
    align-items: center; /* Center-align form elements */
}

textarea {
    width: 100%;
    max-width: 500px; /* Set a max-width for better readability on large screens */
    height: 150px; /* Set a default height */
    margin-bottom: 10px; /* Increase margin for better spacing */
    padding: 12px; /* Slightly more padding for comfort */
    box-sizing: border-box;
    border: 1px solid #ddd; /* Add a light border for definition */
    border-radius: 8px; /* Less pronounced border-radius for modern look */
    font-family: 'Arial', sans-serif; /* Ensure a consistent, readable font */
    font-size: 16px; /* Increase font size for readability */
    outline: none;
    resize: vertical; /* Allow vertical resizing only */
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle inner shadow for depth */
    transition: border-color 0.3s, box-shadow 0.3s; /* Smooth transition for focus effect */
}

textarea:focus {
    border-color: #007bff; /* Highlight color when the textarea is focused */
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2); /* Deeper shadow for focus */
}
</style>
