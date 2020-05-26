<template>
  <div class="default container">
    <div class="row">
      <button class="col btn btn-light rounded border-0" @click="toPage('About')">
        <my-icon id="icon-jurassic_report" color="text-danger" size="48"></my-icon>
        <h3>About me</h3>
      </button>
      <button class="col btn btn-light rounded border-0" @click="toPage('Resume')">
        <my-icon id="icon-xinxi" color="text-warning" size="45"></my-icon>
        <h3>Resume</h3>
      </button>
    </div>
    <div class="row">
      <button class="col btn btn-light rounded border-0" @click="toPage('Portfolio')">
        <my-icon id="icon-gongjuxiang" color="text-success" size="45"></my-icon>
        <h3>Portfolio</h3>
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
// import { routerJump } from "../lib/router-lib.js";
const RouterJump = () => {
  const router = useRouter()
  const toPage = path => router.push(path)
  return {
    toPage
  }
}
export default {
  setup() {
     const { toPage } = RouterJump()
     return {
       toPage
     }
  }
};
</script>

<style scoped>
.row {
  height: 30vh;
}
.default > .row > .col {
  color: white;
  margin: 10px 20px;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>