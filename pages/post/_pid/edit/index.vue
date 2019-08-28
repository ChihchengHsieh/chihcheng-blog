<template>
  <div>
    <post-edit-form-vue :post="post" />
  </div>
</template>
<script>
import PostEditFormVue from "../../../../components/PostEditForm.vue";
export default {
  async asyncData({ $axios, params }) {
    // get the post
    const res = await $axios.$get(`/api/post/detail/${params.pid}`);
    return { post: res.post };
  },
  middleware: ["adminAuth"],
  components: {
    PostEditFormVue
  }
};
</script>