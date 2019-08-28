<template>
  <v-layout>
    <v-flex xs12>
      <v-tabs>
        <v-tab>Edit</v-tab>
        <v-tab>Preview</v-tab>
        <v-tab-item>
          <v-form v-model="valid" class="pa-5">
            <v-text-field outlined v-model="title" label="Title" type="text" :rules="titleRules" />
            <v-textarea rows="30" outlined name="content" label="Content" v-model="content" />
            <v-checkbox v-model="privatePost" :label="`Private Post`" color="white"></v-checkbox>
            <div class="text-right">
              <v-btn @click.stop="$router.go(-1)">Cancel</v-btn>
              <v-btn @click.stop="updatePost">Update</v-btn>
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
  methods: {
    async updatePost() {
      var bodyFormData = new FormData();

      //   bodyFormData.set("title", this.title);
      //   bodyFormData.set("content", this.content);
      //   bodyFormData.set("privatePost", this.privatePost);
      bodyFormData.set(
        "post",
        JSON.stringify({
          title: this.title,
          content: this.content,
          privatePost: this.privatePost
        })
      );

      await this.$axios.$put(`/api/post/detail/${this.post._id}`, bodyFormData);
      console.log(this.post);
      this.$router.push(`/post/${this.post._id}`);
    }
  },

  mounted() {
    this.title = this.post.title;
    this.content = this.post.content;
    this.privatePost = this.post.privatePost;
  },
  props: ["post"],
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