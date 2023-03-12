<template>
  <div class="row">
    <div class="container">
      <div class="card">
        <div class="card-body p-5">

          <div class="form-title">
            <h3>Login</h3>
          </div>

          <div class="form-outline mb-4">
            <label class="form-label">Email</label>
            <input type="email" class="form-input" v-model="email" />
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
      email: '',
      password: '',
      //#endregion Form Inputs

      username: '',
      name: '',
      userImage: ''
    };
  },

  methods: {

    //Send user verification token to validate Login
    sendValue(data: any) {

      this.name = data.firstName + ' ' + data.lastName;
      this.userImage = data.image;

      this.$emit('log-in', this.name + ';' + this.userImage);
    },

    // Method to Login when clicked on Login Button
    async submitLogin(): Promise<void> {

      //Search for the user with the given email
      fetch('https://dummyjson.com/users/search?q=' + this.email)
        .then(res => res.json())
        .then(data => {

          if (data.users[0] != undefined) {

            //Get information to Login
            this.username = data.users[0].username;

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
              .then(data => this.sendValue(data));
          } else {
            alert("Login Failed!");
          }
        });
    }
  }
}
</script>