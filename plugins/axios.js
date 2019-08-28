export default function({ $axios, redirect, store }) {
  $axios.setHeader("Content-Type", "application/json");
  $axios.setToken(store.getters.token);
  $axios.onError(error => {
    // Remove cookies localsotrage
    console.log("Normal:", error.response.data.msg);
    console.log(JSON.stringify(error.response.status));

    if (error.response.status !== 401) {
      throw new Error(error.response.data.msg);
    } else {
      store.dispatch("logoutUser");
      //   redirect("/auth/login");
      throw new Error(error.response.data.msg);
    }

    // throw new Error(error.response.data.msg);
  });
}
