<template>
    <div class="profileScreen">
        <div class="header">
            <div class="title" id='profileScreenHeaderTitle'>TO DO LIST</div>
            <router-link to="/profile-screen">
                <img src="../../assets/icons/settings.png" id='profileScreenHeaderIcon'/>
            </router-link>
        </div>
        <div class="body">
            <img src="../../assets/icons/profile-settings-icon.png" id='profileScreenIcon'/>
        </div>
        <div class="userInfo" id='userInfoContainer'>
               <div class="label">
                    <p class="info" id='userFullNameLabel'>Full Name:</p>
                    <h5 class="userDetail" id='userFullName'> {{userObj.userName}}</h5>
                </div>
                <div class="label">
                    <p class="info" id='userEmailLabel'>Email:</p>
                    <p class="userDetail" id='userEmail'>{{userObj.userEmail}}</p>
                </div>
        </div>
         <router-link to="/" id='profileScreenLogoutRouter'>
            <button class="logout" id='profileScreenLogout' >Log Out</button>
         </router-link>
    </div>
</template>
<script src="./profile-screen.js" />
<style src="./profile-screen.css" />

