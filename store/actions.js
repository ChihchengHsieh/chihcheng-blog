export default {
  nuxtServerInit(context) {
    context.dispatch("initAuth");
  },

  nuxtClientInit(context) {
    context.dispatch("initAuth");
  },

  initAuth(context) {
    if (!context.getters.isLogin) {
      let user = null;
      let token = null;

      // console.log("process.client:", process.client);
      // console.log("2");
      if (process.client) {
        // user = JSON.parse(localStorage.getItem("user"));
        // token = JSON.parse(localStorage.getItem("token"));

        user = JSON.parse(localStorage.getItem("user"));
        token = localStorage.getItem("token");
        // console.log("3");
        // console.log("user:", user);
        // console.log("token:", token);

        // console.log("Found in the client");
        // console.log("user:", user);
        // console.log("token", token);
      }

      if (user == null) {
        user = this.$cookies.get("user");
        // console.log("user in cookie:", user);
      }

      if (token == null) {
        token = this.$cookies.get("token");
        // console.log("token in cookie:", token);
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
      localStorage.setItem("user", JSON.stringify(user));
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
