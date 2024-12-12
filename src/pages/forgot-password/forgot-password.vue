<template>
<div class="forgot-password">
  <div><img src="../../assets/icons/Union.png" class="icon"/></div>
  <input
    type="password"
    class="forgotPasswordInput"
    placeholder="Password"
    v-model="password"
  />
  <p v-if="wrongPassword" class="message"> Invalid Password</p>
  <input
    type="text"
    placeholder="Confirm Password"
    v-model="confirmPassword"
    class="forgotPasswordInput"
  />
  <button class="button" @click="changePassword">CHANGE PASSWORD</button>
  </div>
</template>

<script src="./forgot-password.js" />
<style src="./forgot-password.css" />



