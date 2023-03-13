<script setup lang="ts">
import ModalNewPostChallenge from '.././components/ModalNewPostChallenge.vue';
</script>

<template>
    <ModalNewPostChallenge v-if="showModalNewPost" @close="showModalNewPost = false" @new-post="addPost($event)"
        :showModalNewPost="showModalNewPost" />

    <!-- Title -->
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-sm-6 col-6 posts-title">
                <h3>Posts List</h3>
            </div>
            <div class="col-lg-5 col-sm-6 col-6 posts-button">
                <button class="btn btn-primary" @click="newPost()">New Post</button>
            </div>
        </div>
    </div>

    <!-- End Title -->

    <!-- Form -->
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-12 email-form">
                <label class="form-label">Insert Email</label>
                <div class="inline">
                    <input type="email" class="posts-email" v-on:blur="validateEmail()" v-model="email" />
                    <button class="btn btn-primary get-posts" v-bind:class="{ valid: !invalidEmail }"
                        v-bind:disabled="invalidEmail" @click="getPosts()">Get
                        Posts</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End Form -->

    <!-- Cards -->
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-12 col-sm-12 card-post" v-for="post in posts">
                <div class="card-post-body">
                    <div class="form-title">
                        <h5>{{ post.title }}</h5>
                    </div>

                    <div class="form-body">
                        <p>{{ post.body }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Cards -->
</template>

<script lang="ts">

export default {
    name: 'PostsListChallenge',
    data() {
        return {
            showModalNewPost: false,
            email: '',
            userId: '',
            invalidEmail: true,
            posts: Array<{ title: string, body: string }>()
        }
    },
    mounted() {
        const cookieValue = document.cookie.split("; ")
            .find((row) => row.startsWith("PostsListEmail="))
            ?.split("=")[1];

        this.email = cookieValue != undefined ? cookieValue : '';

        if (this.email != '') {
            this.invalidEmail = false;
        }
    },
    methods: {

        //Validate if valid email to enable/disable get posts button
        validateEmail() {
            this.invalidEmail = !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)
        },

        //Get posts for given email
        async getPosts(): Promise<void> {

            document.cookie = 'PostsListEmail=' + this.email + ";maxage=31536000;";

            //Search for the user with the given email
            fetch('https://dummyjson.com/users/search?q=' + this.email)
                .then(res => res.json())
                .then(data => {

                    this.posts = new Array<{ title: string, body: string }>();

                    if (data.users[0] != undefined) {

                        //Get ID to get posts
                        this.userId = data.users[0].id;

                        //Get Posts
                        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + this.userId)
                            .then(res => res.json())
                            .then(data => {
                                data.forEach((element: any) => {
                                    this.posts.push({ title: element.title, body: element.body });
                                });
                            });
                    } else {
                        //Case email doesn't exist
                        alert("Invalid Email!");
                    }
                });
        },

        newPost() {
            this.showModalNewPost = true;
        },

        addPost(post: any) {
            this.posts.push({ title: post.title, body: post.body });
        }
    },
    test() {

    }
}

</script>