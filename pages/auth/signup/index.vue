<template>
  <v-layout row justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card class="elevation-24 signup-form">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Sign Up</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="email"
              prepend-icon="fa-envelope"
              name="login"
              label="Email"
              type="text"
              :rules="emailRules"
              v-on:keyup.enter="signupUser"
            ></v-text-field>
            <v-text-field
              v-model="password"
              prepend-icon="fa-lock"
              name="password"
              label="Password"
              id="password"
              type="password"
              :rules="passwordRules"
              v-on:keyup.enter="signupUser"
            ></v-text-field>
            <v-text-field
              v-model="passwordAgain"
              prepend-icon="fa-lock"
              name="password"
              label="Password Again"
              id="passwordAgain"
              type="password"
              :rules="passwordAgainRules"
              v-on:keyup.enter="signupUser"
            ></v-text-field>
            <v-text-field
              v-model="signupCode"
              prepend-icon="fa-user-secret"
              name="signupCode"
              label="Signup Code"
              id="signupCode"
              type="password"
              :rules="singupCodeRules"
              v-on:keyup.enter="signupUser"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click.stop="signupUser">Sign Up</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      passwordAgain: "",
      feedback: "",
      signupCode: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length >= 6 || "Pssword must be more than 6 characters"
      ],
      passwordAgainRules: [
        v => !!v || "Password checking is required",
        v => v === this.password || "Password does not match"
      ],
      singupCodeRules:[
        v => !!v || "Singup Code is required",
      ]
    
    };
  },
  layout: "auth",
  methods: {
    async signupUser() {
      if (this.password !== this.passwordAgain) {
        throw new Error("Password doesn't match");
      }
      if (!(this.password && this.passwordAgain && this.email)) {
        throw new Error("Input is required");
      }
      await this.$store.dispatch("signupUser", {
        email: this.email,
        password: this.password,
        signupCode: this.signupCode
      });
      this.$router.push("/");
    }
  }
};
</script>

<style>
.signup-form {
  margin: 10vh auto;
}
</style>