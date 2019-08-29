<template>
  <v-layout column>
    <v-flex xs12 class="pa-3">
      <v-card primary-title header class="pa-2" :width="getWitdth">
        <v-card-title>
          <v-layout wrap>
            <v-flex xs12 md8 lg9 xl10>
              <div>
                <div class="headline font-weight-bold mb-3">{{post.title}}</div>
                <div class="grey--text caption">{{formateTime(post.createdAt)}}</div>
              </div>
            </v-flex>
            <v-flex xs12 md4 lg3 xl2 pa-3 >
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
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-card-text class="contentClass">
          <div :class="{'pa-5':$vuetify.breakpoint.lgAndUp}" v-html="compiledContent(post.content)"></div>
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
  },
  computed: {
    getWitdth() {
      if (this.$vuetify.breakpoint.lgAndUp) {
        return "80vw";
      } else {
        return "100vw";
      }
    }
  }
};
</script>

<style lang="scss" scopedSlots>
.contentClass img {
  width: 100%;
}
</style>


