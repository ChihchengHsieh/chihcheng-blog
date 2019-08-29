<template>
  <v-layout column>
    <v-flex xs12 v-for="(p, idx) in posts" :key="idx" class="pa-3">
      <v-card
        primary-title
        header
        class="pa-2"
        :max-width="getWitdth"
        :to="`/post/${p._id}`"
        v-if="($store.getters.isAdmin || !p.privatePost)"
      >
        <v-card-title>
          <div>
            <div class="headline font-weight-bold mb-3">{{p.title}}</div>
            <div class="grey--text caption">{{formateTime(p.createdAt)}}</div>
          </div>
        </v-card-title>
        <v-img
          v-if="getFirstImage(p.content)"
          :src="getFirstImage(p.content)"
          max-width="100%"
          contain
        ></v-img>
        <v-card-text class="text-truncate">{{pureText(p.content)}}</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import utils from "./utils";
import rmMd from "remove-markdown";

export default {
  data() {
    return {};
  },
  props: ["posts"],
  methods: {
    pureText(content) {
      return rmMd(content);
    },
    getFirstImage(content) {
      if (content && content.match(/!\[.*?\]\((.*?)\)/)) {
        return content.match(/!\[.*?\]\((.*?)\)/)[1];
      } else {
        return null;
      }
    },
    formateTime(time) {
      return utils.formateTime(time);
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