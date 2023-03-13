<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <!-- Title -->
                <div class="form-title">
                    <h3>New Post</h3>
                </div>
                <!-- End Title -->

                <!-- Body -->
                <div class="row post-input">
                    <div class="container">
                        <div class="mb-4">
                            <label class="form-label">Title</label>
                            <input type="text" class="form-input" v-model="title" />
                        </div>
                        <div class="mb-4">
                            <label class="form-label">Description</label>
                            <textarea class="form-input" name="Description" cols="40" rows="5"
                                v-model="description"></textarea>
                        </div>
                    </div>
                </div>
                <!-- End Body -->

                <!-- Footer -->
                <div class="modal-footer">
                    <div class="col-6 text-start">
                        <button class="btn btn-primary" @click="$emit('close')">
                            Leave
                        </button>
                    </div>
                    <div class="col-6 text-end">
                        <button class="btn btn-primary" @click="createPost()" type="submit">New
                            Post</button>
                    </div>
                </div>
                <!-- End Footer -->

            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    name: 'ModalNewPostChallenge',
    data() {
        return {
            title: '',
            description: '',
            showModalNewPost: false
        }
    },
    props: {
        showModalNewPost: Boolean
    },
    methods: {
        createPost() {

        }
    }
}
</script>
