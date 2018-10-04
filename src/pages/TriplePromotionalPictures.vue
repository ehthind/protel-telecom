<template>
    <div class="wrapper">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <el-carousel>
                        <el-carousel-item class="carousel-item">
                            <img src="https://picsum.photos/1024/480/?image=52" alt="First slide" class="d-block">
                            <div class="carousel-caption d-non d-md-block">
                                <h5>promotion 1</h5>
                                <n-button type="primary" outline round>
                                    <i class="fa fa-heart"></i> More Info
                                </n-button>
                            </div>
                            
                        </el-carousel-item>
                        <el-carousel-item class="carousel-item">
                            <img src="https://picsum.photos/1024/480/?image=54" alt="Second slide" class="d-block">
                            <div class="carousel-caption d-non d-md-block">
                                <h5>promotion 2</h5>
                                <n-button type="primary" outline round>
                                    <i class="fa fa-heart"></i> More Info
                                </n-button>
                            </div>
                        </el-carousel-item>
                        <el-carousel-item class="carousel-item">
                            <img src="https://picsum.photos/1024/480/?image=58" alt="Third slide" class="d-block">
                            <div class="carousel-caption d-non d-md-block">
                                <h5>promotion 3</h5>
                                <n-button type="primary" outline round>
                                    <i class="fa fa-heart"></i> More Info
                                </n-button>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, CarouselItem } from "element-ui";
import { Button } from "@/components";

export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    [Button.name]: Button
  }
};
</script>