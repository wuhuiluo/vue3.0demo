<template>
  <div class="home">
    <div class="wrapper">
      <slide-bar icon-id="icon-wangluo" icon-color="text-warning" icon-size="45">Welcome to here</slide-bar>

      <div class="w-100 pre-scrollable" style="max-height: 90vh">
        <content-head>
          <template #title>{{title}}</template>
          <template #des>{{des}}</template>
          <template #calc>您已被赞{{praise}}次</template>
        </content-head>
        <transition enter-active-class="animate__animated animate__zoomIn">
          <router-view></router-view>
        </transition>
      </div>

      <user-profile :src="src" />
    </div>
  </div>
</template>

<script>
import { pathToSign } from "@/lib/router-lib.js";
// import { praise } from "@/lib/praise-lib.js";
import { useStore } from "vuex";
import { computed } from 'vue'
import userProfile from "@/components/user-profile/user-profile.vue";
import slideBar from "@/components/slide-bar/slide-bar.vue";
import contentHead from "@/components/content-head/content-head.vue";
export default {
  name: "Home",
  components: {
    userProfile,
    slideBar,
    contentHead
  },
  setup() {
    // const { title, des } = pathToSign();
    // const title = ref("I am");
    // const des = ref("whl")
    // const store = useStore();
    // const praise = computed(() => store.state.praiseMod.praise);
    // const router = useRouter();
    const store = useStore()
    const praise = computed(() => store.state.praiseMod.praise)
    const { title,des } = pathToSign() 
    // console.log(router);
    // watch(router.currentRoute, ({ path, name }) => {
    //   const condition = path === "/" ? "I am" : "";
    //   title.value = condition
    //   const condition2 = path === "/" ? 'WHL' : name
    //   des.value = condition2
    // });
    return {
      src: require("../assets/img/wr-user.jpg"),
      title,
      des,
      praise
    };
  }
};
</script>

<style>
.home {
  height: 100vh;
  background: url("../assets/img/bg.jpg") no-repeat center;
  background-size: cover;
}

.wrapper {
  width: 95vw;
  height: 90vh;
  background-color: rgb(44, 48, 80);
  position: absolute;
  left: calc(50% - 95vw / 2);
  top: calc(50% - 90vh / 2);
  display: flex;
  justify-content: space-between;
}
</style>
