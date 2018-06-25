<template>
  <div class="page">
      布局
      <Swiper />
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from "../components/swiper"
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
    }
  },
  components: {
    Swiper
  }
};
</script>

<style scoped>
</style>
