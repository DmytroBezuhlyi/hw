<template>
  <el-footer height="auto">
    <el-row>
      <el-col :span="24">
        <router-link class="footer-logo" to="/">
          <img src="@/assets/img/footer-logo.png" alt="logo" />
        </router-link>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="footer-text">
        {{ $t("footer-text") }}
      </el-col>
    </el-row>
  </el-footer>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class FooterComponent extends Vue {}
</script>
<style lang="scss" scoped>
.el-footer {
  padding: 130px 0;
  text-align: center;
  background-color: #9b9b9b;
  @media (max-width: 768px) {
    padding: 60px 0;
  }

  .footer-logo {
    display: inline-block;
    margin-bottom: 30px;
    img {
      max-width: 100px;
    }
    @media (max-width: 768px) {
      margin-bottom: 15px;
    }
  }

  .footer-text {
    font-size: 18px;
    color: #ffffff;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
}
</style>
