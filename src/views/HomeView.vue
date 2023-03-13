<script setup lang="ts">
import HeaderChallenge from '.././components/HeaderChallenge.vue'
import LoginFormChallenge from '.././components/LoginFormChallenge.vue'
import PostsListChallenge from '.././components/PostsListChallenge.vue';

</script>

<template>
    <HeaderChallenge @log-out="logOut()" :userName="userName" :userImage="userImage" />
    <LoginFormChallenge v-if="!loggedIn" @log-in="logIn($event)" />
    <PostsListChallenge v-if="loggedIn" />
</template>

<script lang="ts">

export default {
    name: 'HomeView',
    data() {
        return {
            loggedIn: false,
            userName: '',
            userImage: ''
        }
    },
    methods: {
        logIn(data: string) {
            this.userName = data.split(';')[0];
            this.userImage = data.split(';')[1];
            this.loggedIn = true;
        },

        logOut() {
            this.userName = '';
            this.userImage = '';
            this.loggedIn = false;
        }
    }
}
</script>