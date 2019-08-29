<template >
  <v-layout column justify-center align-center="" >
    <post-content-vue :post="post" />
  </v-layout>
</template>

<script>
import PostContentVue from "../../../components/PostContent.vue";

export default {
  async asyncData({ $axios, params }) {
    console.log(params);
    const res = await $axios.$get(`/api/post/detail/${params.pid}`);
    return { post: res.post };
  },
  components: {
    PostContentVue
  }
};
</script>

<style lang="scss">
</style>