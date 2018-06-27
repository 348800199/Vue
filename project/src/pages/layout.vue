<template>
  <div class="page">
      布局
    <button class="" @click="goDetail">跳转布局</button>
      <!-- <Swiper /> -->
  </div>
</template>

<script type="text/ecmascript-6">
// import Swiper from "../components/swiper"
export default {
  name: "layout",
  data() {
    return {
      pageParam: {
        keyword: "",
        pageNumber: 1,
        pageSize: 10,
        totals: ""
      }
    };
  },
  created() {
      this.getList();
  },
  methods: {
    getList() {
      this.$axios
        .get("/sxtstu/news/juhenews.php", {
          params: {
            count: 10,
            type: "top"
          }
        })
        .then((data) => {
                    console.log(data)
        })
        .catch(error => {
            console.log(error)

        });
    },
    goDetail(){
      this.$router.push({
        name:'detail'
      })
    }
  },
  components: {
    // Swiper
  }
};
</script>

<style scoped>
</style>
