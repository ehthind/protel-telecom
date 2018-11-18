<template>
  <div class="wrapper">
        <!-- star of our advantage section -->
        
        <div class="container-fluid our-advantage">
            <img :src="ourAdvantageImg" alt="">
        </div>
        <!-- end of our advantage section -->

        <!-- star of new cloud based VoiP business -->
        <div class="section-space"></div>
        <div class="section section-story-overview">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-md-5">
                        <div class="card-image">
                            <img :src = cloudBasedBusinessImgs.convenience alt="convenience">
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="">
                            <p>
                                Cloud based VoiP business phone systems are becoming more and more popular with growing business. 
                                Forget the days where you have to call a interconnector to come and swap out your old phone system 
                                when you need to expand your business and run new wires through the office to connect your new lines,
                                or any need to invest thousands of dollars to install a bulky phone system.
                            </p>
                        </div>
                    </div>
                </div><br>
                <div class="row mb-5">
                    <div class="col-md-7">
                        <div class="paraDiv">
                            <p>Not to mention space saving, because you wont have to have a room in the office to support your own internal phone system.</p>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <img :src= cloudBasedBusinessImgs.spaceSaving alt="space-saving-image">
                    </div>
                </div><br>
                <div class="row mb-5">
                    <div class="col-md-5">
                        <img :src= cloudBasedBusinessImgs.simple alt="quick-access-image">
                    </div>
                    <div class="col-md-7">
                        <div class="paraDiv">
                            <p>Now it's as simple as a phone call to your account manager and the next day a phone is in your office setup and connected to you existing system.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end of new cloud based VoiP business -->

        <!-- start of floating options -->
        <div class="section-space"></div>
        <div class="section section-components">
            <div class="presentation-page service-presentation">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 ml-auto mr-auto mt-5">
                            <h2 class="text-center pt-4">
                                ALL THE FEATURES OF A TRADITIONAL PHONE SYSTEM AND MORE
                            </h2>
                        </div>
                        <div class="space-20"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end of floating options -->        
  </div>
</template>

<script>
import { Card } from "@/components";
export default {
  components: {
    Card
  },

  props: {},

  data() {
    return {
      ourAdvantageImg: "img/protel-imgs/learn_more_dial_ready.png",
      image01Path: "/img/bg38.jpg",
      bulyPhoneSystemImgPath: "/img/bg bulky complexity.jpg",
      spaceSavingImgPath: "/img/bg space saving.jpg",
      quickAccessImgPath: "/img/bg quick access.jpg",
      cloudBasedBusinessImgs: {
        convenience: "/img/bg35.jpg",
        spaceSaving: "/img/bg37.jpg",
        simple: "/img/project15.jpg"
      }
    };
  },

  methods: {}
};
</script>

<style scoped>
.page-header-image {
  background-repeat: no-repeat;
}

.our-advantage {
  position: relative;
}

.advantage-detail {
  position: absolute;
  top: 200px;
  right: 150px;
}

.advantage-detail * {
  text-align: end;
}
.features-7 .image-container {
  margin-top: 0px;
}

.paraDiv {
  position: absolute;
  top: 50%;
  margin-top: -50px;
}
.section-components {
  background-image: url("../../public/img/protel-imgs/cloud_based_options.png");
  height: 100vh;
}
.service-card {
  opacity: 0.5;
}

@media screen and (max-width: 780px) {
  .paraDiv {
    position: relative;
    top: 0px;
    margin: 0px;
  }
}
</style>
