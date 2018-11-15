<template>
  <div class="page-header-small">
    <el-carousel height="100vh">
        <el-carousel-item v-for="(url, id) in imgs" :key="id">
            <div class="page-header header-filter">
                <div class="page-header-image"
                    :style = url>
                </div>
                <div class="carousel-caption">
                    <div class="col-md-6 ml-auto mr-auto">
                        <router-link to = "/learn" class = "btn-primary btn-lg"><i class = "fa fa-heart"></i>More info</router-link>
                    </div>
                </div>
            </div>
        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { Carousel, CarouselItem } from "element-ui";
import { Button } from "@/components";

export default {
  data: function() {
    return {
      imgs: [
        'background-image: url("/img/protel-imgs/free_phones_01.png")',
        'background-image: url("/img/protel-imgs/free_phones_02.png")',
        'background-image: url("/img/protel-imgs/promote_01.png")',
        'background-image: url("/img/protel-imgs/promote_02.png")',
        'background-image: url("/img/protel-imgs/ip_phone_brands_01.png")',
        'background-image: url("/img/protel-imgs/ip_phone_brands_02.png")',
        'background-image: url("/img/protel-imgs/replace_and_save_01.png")',
        'background-image: url("/img/protel-imgs/replace_and_save_02.png")',
        'background-image: url("/img/protel-imgs/replace_phone.png")'
      ]
    };
  },
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    [Button.name]: Button
  },
  methods: {}
};
</script>
<style scoped>
</style>
