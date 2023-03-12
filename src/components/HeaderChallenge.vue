<template>
    <nav class="header-nav">
        <div class="logo col-1">
            <img alt="Koerber logo" class="logo" src="@/assets/icons/korber-logo.svg" width="50" height="50" />
        </div>

        <div v-if="userName != ''" class="basic-information col-10">
            {{ userName }}<img v-if="userImage != ''" alt="User image" class="user-image" v-bind:src="userImage" width="50"
                height="50">
        </div>

        <div v-if="userName != ''" class="logout col-1">
            <a @click="logout()">Logout</a>
        </div>
    </nav>
</template>
<script lang="ts">
export default {
    name: 'HeaderChallenge',
    props: {
        userName: String,
        userImage: String,
    },
    methods: {
        logout() {
            this.$emit('log-out', '');
        }
    }
}
</script>