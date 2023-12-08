<template>
  <div class="welcome container">
    <p>Welcome</p>
    
    <div v-if="showLogin">
        <h2>Login</h2>
        <LoginForm @login="enterChat"/>
        <p>No account? <span @click="showLogin = false">Signup</span> instead</p>
    </div>
    <div v-else>
        <h2>Sign up </h2>
        <SignupForm @signup="enterChat"/>
        <p>Already registerd <span @click="showLogin = true">Login</span> instead</p>
    </div>

    <!--LoginForm/>-->
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import {ref} from 'vue'
import { useRouter } from 'vue-router'

export default {
 components:{SignupForm, LoginForm},
 setup(){
    const showLogin = ref(true)
    const router = useRouter()
    const enterChat = () =>{
        router.push({name:'Chatroom'})
    }
    return {showLogin,enterChat}
 }
}
</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
    font-family: 'Arial', sans-serif; /* Modern, sans-serif font */
}

.welcome form {
    width: 300px;
    margin: 20px auto; /* Corrected the margin value */
}

.welcome label {
    display: block;
    margin: 15px 0 5px; /* Adjusted spacing for a balanced look */
    color: #333; /* Darker color for better readability */
    font-size: 16px; /* Slightly larger font size */
}

.welcome input {
    width: 100%;
    padding: 12px; /* Slightly more padding for comfort */
    border-radius: 10px; /* Less pronounced border-radius */
    border: 1px solid #ddd; /* Lighter border color */
    outline: none;
    color: #555; /* Darker color for input text */
    margin: 5px auto; /* Reduced margin for a compact form */
    /*box-shadow: inset 0 1px 3px rgba(0,0,0,0.1); /* Subtle inner shadow for depth */
    transition: border-color 0.3s; /* Smooth transition for focus effect */
}

.welcome input:focus {
    border-color: #007bff; /* Highlight color when the input is focused */
}
.welcome p {
    font-size: 14px; /* Slightly smaller font size for subtlety */
    color: #666; /* A softer color for less emphasis */
    margin-top: 20px; /* Added margin for spacing */
}

.welcome span {
    color: #007bff; /* A standout color for clickable elements */
    cursor: pointer; /* Changes the cursor to indicate clickability */
    font-weight: bold; /* Makes the text slightly bolder */
    text-decoration: underline; /* Underlines to indicate it's clickable */
    transition: color 0.3s; /* Smooth color transition on hover */
}

.welcome span:hover {
    color: #0056b3; /* Darker color on hover for interactivity */
}
</style>
