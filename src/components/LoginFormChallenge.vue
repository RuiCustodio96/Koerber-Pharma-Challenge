<template>
  <div class="container">
    <div class="row login-form">
      <div class="card">
        <div class="card-body p-5">

          <div class="form-title">
            <h3>Login</h3>
          </div>

          <div class="form-outline mb-4">
            <label class="form-label">Username</label>
            <input type="text" class="form-input" v-model="username" />
            <!-- <input type="email" class="form-input" v-bind:value="email" /> -->
          </div>

          <div class="form-outline mb-4">
            <label class="form-label">Password</label>
            <input type="password" class="form-input" v-model="password" />
            <!-- <input type="password" class="form-input" v-bind:value="password" /> -->
          </div>

          <div class="login-button">
            <button class="btn btn-primary btn-lg btn-block" @click="submitLogin" type="submit">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script lang="ts">

export default {
  name: 'LoginFormChallenge',
  data() {
    return {

      //#region Form Inputs
      username: '',
      password: '',
      //#endregion Form Inputs

      name: '',
      userImage: ''
    };
  },

  methods: {

    //Send user verification token to validate Login
    sendValue(data: any) {
      if (data.message == null || data.message == undefined) {
        this.name = data.firstName + ' ' + data.lastName;
        this.userImage = data.image;

        this.$emit('log-in', this.name + ';' + this.userImage);
      } else {
        alert("Login Failed!");
      }
    },

    // Method to Login when clicked on Login Button
    async submitLogin(): Promise<void> {

      //Login API
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        })
      })
        .then(res => res.json())
        .then(data => this.sendValue(data))
    }
  }
}
</script>