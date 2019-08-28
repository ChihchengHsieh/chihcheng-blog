export default {
    isLogin: state => {
      return !!(state.token && state.user);
    },
  
    token: state => {
      return state.token;
    },
  
    user: state => {
      return state.user;
    },
  
    isAdmin: state => {
      return state.user && state.user.role == "admin";
    }
  };
  