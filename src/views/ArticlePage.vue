<template>
  <div>
    <el-row type="flex" justify="center" class="article-page">
      <el-col :xs="23" :sm="22" :md="20" :lg="16" :xl="16">
        <h1>{{ content.title }}</h1>
        <img :src="content.image" alt="post picture" />
        <p>
          {{ content.text }}
        </p>
        <el-divider></el-divider>
        <el-row type="flex" justify="space-between">
          <el-col :span="12" class="article-information text-left">
            {{ content.author }}
          </el-col>
          <el-col :span="12" class="article-information text-right">
            {{ content.postTime }}
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" class="article-control">
          <el-col :span="12">
            <el-button @click="backToArticles" type="primary">{{
              $t("buttons.button-back")
            }}</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({ name: "ArticlePage" })
export default class ArticlePage extends Vue {
  content = "";

  created() {
    this.content =
      this.$route.params.item ||
      this.$store.getters.getArticles[`${this.$route.params.id}`];
  }

  backToArticles() {
    this.$router.go(-1);
  }
}
</script>
<style lang="scss" scoped>
.article-page {
  margin-bottom: 30px;
  img {
    width: 100%;
  }
}
.article-information {
  color: #5c5c5c;
}
.article-control {
  margin-top: 20px;
}
</style>
