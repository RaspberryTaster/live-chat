<template>
  <nav>
    <div>
        <p>
            Hey there... display name here
        </p>
        <p class = "email">
            Currently logged in as... email
        </p>
        <button @click="handleClick">Logout</button>
    </div>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
export default {
    setup(){
        const {logout,error} = useLogout()
        const handleClick = async () =>{
            await logout()
            if(!error.value){
                console.log('user logged out')
            }
        }

        return {handleClick}
    }

}
</script>

<style>
nav {
    background-color: #fff; /* White background for a clean look */
    /*box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    padding: 10px 20px; /* Padding for spacing */
    display: flex; /* Flexbox for layout */
    justify-content: space-between; /* Space out the elements */
    align-items: center; /* Align items vertically */
}

nav div {
    display: flex; /* Flexbox for inner div */
    align-items: center; /* Align items vertically */
}

nav p {
    margin: 0 10px 0 0; /* Margin to space out text and button */
    color: #333; /* Darker color for text */
    font-size: 16px; /* Readable font size */
}

nav .email {
    font-size: 14px; /* Slightly smaller font size for email */
    color: #666; /* Lighter color for less emphasis */
}

button {
    background-color: #007bff; /* Bright color for the button */
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 15px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3; /* Darker shade on hover */
}
</style>
