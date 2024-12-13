<template >
<div class="signIn">
  <div ><img src="../../assets/icons/Union.png" class="signInIcon" id='signInIcon'/></div>
  <input type="text" placeholder="Email" v-model="email" class="signInInput" id='signInEmail'/>
  <input
    type="password"
    class="signInInput"
    placeholder="Password"
    v-model="password"
    id='signInPassword'
    @keyup.enter="signIn"
  />
  <router-link to="/forgot-password" class="forgetText" v-if="page" id='signInForgotPassword'>Forgot Password? </router-link>
  <button class="button" @click="signIn" id='signInButton'>SIGN IN</button>
   <div class="accountText" id='signInAccountInfo'> <p>Don't have an account? </p>
    <p @click="this.$router.push('/sign-up');" class="signUp" id='signUpButton'> Sign Up</p></div>

    </div>
</template>

<script src="./sign-in.js" />
<style scoped src="./sign-in.css" />

