<template>
  <!-- <el-carousel :height="carouselHeight" >
      <el-carousel-item v-for = "img in imgList" :key = "img.id">
          <img ref = "imgRef" :src = "img.path" class = "promotion-img">
          <div class="carousel-caption d-md-block">
                <h5>{{img.name}}</h5>
                <n-button type="primary" outline round>
                    <i class="fa fa-heart"></i> More Info
                </n-button>
            </div>
      </el-carousel-item>
  </el-carousel> -->
  <div class="page-header-small">
    <el-carousel height="100vh">
        <el-carousel-item>
            <div class="page-header header-filter">
                <div class="page-header-image"
                      id = "firstBgImage">
                </div>
                <div class="content-center">
                    <div class="container text-left">
                        <div class="content-center">
                            <div class="row">
                                <div class="col-md-6 ml-auto mr-auto text-right">
                                    <h1 class="title">{{promotions.firstPromotion.title}}</h1>
                                    <h4 class="description ">
                                      {{promotions.firstPromotion.description}}
                                    </h4>
                                    <br/>
                                    <div class="buttons">
                                        <router-link to = "/learn" class = "btn btn-primary btn-lg"><i class = "fa fa-heart"></i>More info</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-carousel-item>
        <el-carousel-item>
            <div class="page-header header-filter">
                <div class="page-header-image" id = "secondBgImage">
                </div>
                <div class="content-center">
                    <div class="container">
                        <div class="content-center">
                            <div class="row">
                                <div class="col-md-8 ml-auto mr-auto text-center">
                                    <h1 class="title">{{promotions.secondPromotion.title}}</h1>
                                    <h4 class="description ">{{promotions.secondPromotion.description}}</h4>
                                    <br/>
                                    
                                    <div class="buttons">
                                        <router-link to = "/learn" class = "btn btn-primary btn-lg"><i class = "fa fa-heart"></i>More info</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-carousel-item>
        <el-carousel-item>
            <div class="page-header header-filter">
                <div class="page-header-image"
                      id = "thirdBgImage">
                </div>
                <div class="content-center">
                    <div class="container">
                        <div class="content-center">
                            <div class="row">
                                <div class="col-md-6 text-left">
                                    <h1 class="title">{{promotions.thirdPromotion.title}}</h1>
                                    <h4 class="description ">{{promotions.thirdPromotion.description}}</h4>
                                    <br/>
                                    <div class="buttons">
                                        <router-link to = "/learn" class = "btn btn-primary btn-lg"><i class = "fa fa-heart"></i>More info</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
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
      promotions: {
        firstPromotion: {
          title: "promotion 1",
          description: "promotion 1 description"
        },
        secondPromotion: {
          title: "promotion 2",
          description: "promotion 2 description"
        },
        thirdPromotion: {
          title: "promotion 3",
          description: "promotion 3 description"
        }
      }
    };
  },
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    [Button.name]: Button
  },
  methods: {
    // setCarouselHeight() {
    //   let windowWidth = document.body.clientWidth;
    //   let imgHeight = this.$refs.imgRef[0].height;
    //   let imgWidth = this.$refs.imgRef[0].width;
    //   let widthRatio = windowWidth / imgWidth;
    //   this.carouselHeight = `${widthRatio * imgHeight}px`;
  }
  // },
  // mounted() {
  //   window.addEventListener("resize", this.setCarouselHeight);
  //   this.setCarouselHeight();
  // },
  // destroyed() {}
};
</script>
<style scoped>
#firstBgImage {
  background-image: url("/img/bg20.jpg");
}
#secondBgImage {
  background-image: url("/img/bg15.jpg");
}
#thirdBgImage {
  background-image: url("/img/bg17.jpg");
}
</style>
