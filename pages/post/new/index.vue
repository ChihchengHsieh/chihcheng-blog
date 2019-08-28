<template>
  <v-layout>
    <v-flex xs12>
      <v-tabs>
        <v-tab>New</v-tab>
        <v-tab>Preview</v-tab>
        <v-tab-item>
          <v-form v-model="valid" class="pa-5">
            <v-text-field outlined v-model="title" label="Title" type="text" :rules="titleRules" />
            <v-textarea rows="30" outlined name="content" label="Content" v-model="content" />
            <v-checkbox v-model="privatePost" :label="`Private Post`" color="white"></v-checkbox>
            <div class="text-right">
              <v-btn @click.stop="createNewPost">Create</v-btn>
            </div>
          </v-form>
        </v-tab-item>
        <v-tab-item>
          <div class="pa-5" v-html="previewContent"></div>
        </v-tab-item>
      </v-tabs>
    </v-flex>
  </v-layout>
</template>

<script>
import utils from "~/components/utils";

export default {
  data() {
    return {
      valid: false,
      content: "",
      title: "",
      titleRules: [v => !!v || "Title is Required!"],
      privatePost: false
    };
  },
  middleware:['adminAuth'],
  methods: {
    async createNewPost() {
      var bodyFormData = new FormData();

      bodyFormData.set("uid", this.$store.getters.user._id);
      bodyFormData.set("title", this.title);
      bodyFormData.set("content", this.content);
      bodyFormData.set("privatePost", this.privatePost);
      await this.$axios.$post("/api/post/", bodyFormData);
      this.$router.push("/");
    }
  },

  computed: {
    previewContent() {
      return utils.compiledMarkdown(this.content);
    }
  }
};
</script>

<style lang="scss" scopedSlots>
img {
  max-width: 100%;
}
</style>