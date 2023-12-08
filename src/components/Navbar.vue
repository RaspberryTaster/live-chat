<template>
    <nav v-if="user">
      <div class="nav-content">
          <div class="user-info">
              <p>Hey there... {{ user.displayName }}</p>
              <p class="email">Currently logged in as... {{ user.email }}</p>
          </div>
          <button @click="handleClick">Logout</button>
      </div>
    </nav>
  </template>
  

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
export default {
    setup(){
        const {logout,error} = useLogout()
        const {user} = getUser()
        const handleClick = async () =>{
            await logout()
            if(!error.value){
                console.log('user logged out')
            }
        }

        return {handleClick,user}
    }

}
</script>

<style>
nav {
    background-color: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: center; /* Align nav content to center */
    align-items: center;
}

.nav-content {
    width: 100%; /* Full width of the nav bar */
    display: flex;
    justify-content: space-between; /* Space between user info and button */
    align-items: center;
}

.user-info {
    display: flex;
    align-items: center;
}

nav p {
    margin: 0 10px;
    color: #333;
    font-size: 16px;
}

nav .email {
    font-size: 14px;
    color: #666;
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 15px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3;
}
</style>
