<template>
  <div>Hello from Article</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({ name: "ArticlePage" })
export default class ArticlePage extends Vue {}
</script>
<style lang="scss" scoped></style>
