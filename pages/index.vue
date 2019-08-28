<template>
  <v-layout column class="align-center justify-center">
    <v-btn to="/post/new" v-if="$store.getters.isAdmin">New</v-btn>
    <div
      v-infinite-scroll="loadMorePosts"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
      infinite-scroll-throttle-delay="1000"
    >
      <post-card-vue :posts="posts" />
    </div>
    <v-btn disabled>{{busy? "End" :"Loading More Posts..."}}</v-btn>
  </v-layout>
</template>

<script>
import PostCardVue from "../components/PostCard.vue";

export default {
  async asyncData({ $axios }) {
    // const res = await $axios.$get("/api/post/");
    // return { posts: res.posts };
  },

  data() {
    return {
      busy: false,
      pageSize: 6,
      pageN: 1,
      posts: []
    };
  },
  methods: {
    async loadMorePosts() {
      console.log("Loading More");
      const res = await this.$axios.$get(
        `/api/post/?sort=createdAt_-1&skip=${(this.pageN - 1) *
          this.pageSize}&limit=${this.pageSize}`
      );
      console.log(res.posts);
      if (res.posts && res.posts.length >= this.pageSize) {
        this.posts.push(...res.posts);
        this.busy = false;
        this.pageN++;
      } else {
        this.posts.push(...res.posts);
        this.busy = true;
      }
    }
  },

  mounted() {},

  components: {
    PostCardVue
  }
};
</script>
