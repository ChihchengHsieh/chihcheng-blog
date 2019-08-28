<template>
  <v-layout column>
    <v-flex xs12 class="pa-3">
      <v-card primary-title header class="pa-2" width="80vw">
        <v-card-title>
          <div>
            <div class="headline font-weight-bold mb-3">{{post.title}}</div>
            <div class="grey--text caption">{{formateTime(post.createdAt)}}</div>
          </div>
          <v-spacer />

          <v-btn class="ma-1" v-if="$store.getters.isAdmin" :to="`/post/${post._id}/edit`">Edit</v-btn>

          <v-btn
            class="ma-1"
            v-if="$store.getters.isAdmin"
            @click.stop="deleteOverlay = !deleteOverlay"
          >Delete</v-btn>
          <v-overlay absolute :value="deleteOverlay">
            <v-card class="px-3 py-1">
              <v-card-title>Delete this post ?</v-card-title>
              <v-card-actions class="mt-5">
                <v-spacer />
                <v-btn @click.stop="deleteOverlay=false" v-if="$store.getters.isAdmin">Cancel</v-btn>
                <v-btn @click.stop="deletePost" v-if="$store.getters.isAdmin">Yes</v-btn>
              </v-card-actions>
            </v-card>
          </v-overlay>
        </v-card-title>
        <v-card-text>
          <div class="pa-5" v-html="compiledContent(post.content)"></div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import utils from "./utils";

export default {
  data() {
    return {
      deleteOverlay: false
    };
  },
  props: ["post"],
  methods: {
    formateTime(time) {
      return utils.formateTime(time);
    },
    compiledContent(content) {
      return utils.compiledMarkdown(content);
    },

    async deletePost() {
      console.log(this.post);
      await this.$axios.$delete(`/api/post/detail/${this.post._id}`);
      this.$router.push("/");
    }
  }
};
</script>