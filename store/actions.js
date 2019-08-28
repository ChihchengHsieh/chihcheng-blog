export default {
    async nuxtServerInit(context) {
      await context.dispatch("initAuth");
    },
  
    initAuth(context) {
      if (!context.getters.isLogin) {
        let user = null;
        let token = null;
  
        if (process.client) {
          user = JSON.parse(localStorage.getItem("user"));
          token = JSON.parse(localStorage.getItem("token"));
        } else {
          user = this.$cookies.get("user");
          token = this.$cookies.get("token");
        }
  
        if (user) {
          context.dispatch("setUser", user);
        }
  
        if (token) {
          context.dispatch("setToken", token);
        }
      }
    },
  
    async signupUser(context, user) {
      const { email, password, signupCode } = user;
  
      console.log("user:", user);
  
      var bodyFormData = new FormData();
      bodyFormData.set("email", email);
      bodyFormData.set("code", signupCode);
      bodyFormData.set("password", password);
  
      const res = await this.$axios.$post("/api/user/signup", bodyFormData);
  
      console.log(res);
  
      context.dispatch("setUser", res.user);
      context.dispatch("setToken", res.token);
    },
  
    async loginUser(context, user) {
      const { email, password } = user;
      var bodyFormData = new FormData();
  
      bodyFormData.set("email", email);
      bodyFormData.set("password", password);
  
      const res = await this.$axios.$post("/api/user/login", bodyFormData);
  
      context.dispatch("setToken", res.token);
      context.dispatch("setUser", res.user);
    },
  
    logoutUser(context) {
      context.dispatch("setToken", null);
      context.dispatch("setUser", null);
  
      if (process.client) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
  
      this.$cookies.remove("user");
      this.$cookies.remove("token");
    },
  
    setUser(context, user) {
      if (process.client) {
        localStorage.setItem("user", user);
      }
      this.$cookies.set("user", user);
      context.commit("setUser", user);
    },
  
    setToken(context, token) {
      console.log("In client:", process.client);
      this.$axios.setToken(token);
      // console.log("After setting token: ");
  
      if (process.client) {
        localStorage.setItem("token", token);
      }
      this.$cookies.set("token", token);
      context.commit("setToken", token);
    }
  };
  