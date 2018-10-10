<template>
    <el-carousel :height="carouselHeight" >
        <el-carousel-item v-for = "img in imgList" :key = "img.id">
            <img ref = "imgRef" :src = "img.path" class = "promotion-img">
            <div class="carousel-caption d-md-block">
                 <h5>{{img.name}}</h5>
                 <n-button type="primary" outline round>
                     <i class="fa fa-heart"></i> More Info
                 </n-button>
             </div>
        </el-carousel-item>
    </el-carousel>
    
</template>

<script>
import { Carousel, CarouselItem } from "element-ui";
import { Button } from "@/components";

export default {
  data: function() {
    return {
      carouselHeight: "400px",
      imgList: [
        {
          id: 0,
          name: "promotion 1",
          path: "https://picsum.photos/1024/480/?image=52"
        },
        {
          id: 1,
          name: "promotion 2",
          path: "https://picsum.photos/1024/480/?image=54"
        },
        {
          id: 2,
          name: "promotion 3",
          path: "https://picsum.photos/1024/480/?image=58"
        }
      ]
    };
  },
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    [Button.name]: Button
  },
  methods: {
    setCarouselHeight() {
      let windowWidth = document.body.clientWidth;
      let imgHeight = this.$refs.imgRef[0].height;
      let imgWidth = this.$refs.imgRef[0].width;
      let widthRatio = windowWidth / imgWidth;
      this.carouselHeight = `${widthRatio * imgHeight}px`;
    }
  },
  mounted() {
    window.addEventListener("resize", this.setCarouselHeight);
    this.setCarouselHeight();
  },
  destroyed() {}
};
</script>
<style scoped>
img {
  width: 100%;
}
</style>
