<template >
<div class="signUp">
  <div ><img src="../../assets/icons/Union.png" class="signUpIcon" id='signUpIcon'/></div>
  <input type="text" placeholder="Email" v-model="email" class="signUpInput" id='signUpEmail'/>
<input type="text" placeholder="Full Name" v-model="fullName" class="signUpInput" id='signUpFullName'/>
  <input
    type="password"
    class="signUpInput"
    placeholder="Password"
    v-model="password"
    id='signUpPassword'
  />
 <input type="password" placeholder="Confirm Password" v-model="confirmPassword" class="signUpInput" id='signUpConfirmPassword'  @keyup.enter="signUp"/>
  <button class="button" @click="signUp" id='signUpButton'>SIGN UP</button>
   <div class="accountText" > 
    <p id='signUpAccountInfoText'>Have an account? </p>
    <p class="signIn" @click="this.$router.push('/')" id='signUpSignInButton'>Sign In</p>
    </div>

    </div>
</template>

<script src="./sign-up.js" />
<style  src="./sign-up.css" />

