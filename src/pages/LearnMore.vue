<template>
  <div class="wrapper">
        <!-- start of page header -->
        <div class="header-1" :style="{'background-image': 'url(' + headerImgUrl + ')'}">
            <div class="page-header header-filter">
                <div class="page-header-image"></div>
                <div class="content-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 ml-auto text-left">
                                <h2 class="title">Dial Ready's could based VoiP includes every available 
                                    feature we can think of for your business. Such as: auto attendant, 
                                    extension to extension dialing, voicemail, call recording and more.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end of page header -->

        <!-- star of our advantage section -->
        
        <div class="container-fluid our-advantage">
            <img :src="ourAdvantageImg" alt="">
        </div>
        <!-- end of our advantage section -->

        <!-- star of new cloud based VoiP business -->
        <div class="section-space"></div>
        <div class="section section-story-overview">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <div class="card-image">
                            <img :src="image01Path" alt="first image">
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="">
                            <p>
                                Cloud based VoiP business phone systems are becoming more and more popular with growing business. 
                                Forget the days where you have to call a interconnector to come and swap out your old phone system 
                                when you need to expand your business and run new wires through the office to connect your new lines.
                            </p>
                        </div>
                    </div>
                </div><br>
                <div class="row">
                    <div class="col-md-7">
                        <div class = "paraDiv">
                            <p>No longer any need to invest thousands of dollars to install a bulky phone system.</p>
                        </div>
                    </div>

                    <div class="col-md-5">
                        <img :src="bulyPhoneSystemImgPath" alt="bulky-phone-system-image">
                    </div>
                </div><br>
                <div class="row">
                    <div class="col-md-5">
                        <img :src="spaceSavingImgPath" alt="space-saving-image">
                    </div>
                    <div class="col-md-7">
                        <div class="paraDiv">
                            <p>Not to mention space saving, because you wont have to have a room in the office to support your own internal phone system.</p>
                        </div>
                    </div>
                </div><br>
                <div class="row">
                    <div class="col md-7">
                        <div class="paraDiv">
                            <p>Now it's as simple as a phone call to your account manager and the next day a phone is in your office setup and connected to you existing system.</p>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <img :src="quickAccessImgPath" alt="quick-access-image">
                    </div>
                </div>
            </div>
        </div>
        <!-- end of new cloud based VoiP business -->

        <!-- start of floating options -->
        <div class="section-space"></div>
        <div class="section section-components">
            <div class="presentation-page" :style="presentationStyle">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 ml-auto mr-auto">
                            <h2 class="text-center">
                                ALL THE FEATURES OF A TRADITIONAL PHONE SYSTEM ADN MORE
                            </h2>
                        </div>
                        <div class="space-20"></div>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-8 ml-auto mr-auto">
                            <div class="card-container first-card">
                                <div class="card-component">
                                    <a href="#">
                                        <div class="front">
                                            option 1
                                            <card class="card card-background card-raised" data-background-color 
                                            style="background-image: url('img/bg24.jpg')">
                                                <div class="info">
                                                    <div class="descrpition">
                                                        <h4 class="info-title">option title</h4>
                                                        <p>
                                                            descrpition
                                                        </p>
                                                    </div>
                                                </div>
                                            </card>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-8 ml-auto mr-auto">
                            <div class="card-container second-card">
                                <div class="card-component">
                                    <a href="#">
                                        <div class="front">
                                            option 2
                                            <card class="card card-background card-raised" data-background-color 
                                            style="background-image: url('img/bg24.jpg')">
                                                <div class="info">
                                                    <div class="descrpition">
                                                        <h4 class="info-title">option title</h4>
                                                        <p>
                                                            descrpition
                                                        </p>
                                                    </div>
                                                </div>
                                            </card>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-8 ml-auto mr-auto">
                            <div class="card-container third-card">
                                <div class="card-component">
                                    <a href="#">
                                        <div class="front">
                                            option 3
                                            <card class="card card-background card-raised" data-background-color 
                                            style="background-image: url('img/bg24.jpg')">
                                                <div class="info">
                                                    <div class="descrpition">
                                                        <h4 class="info-title">option title</h4>
                                                        <p>
                                                            descrpition
                                                        </p>
                                                    </div>
                                                </div>
                                            </card>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-8 ml-auto mr-auto">
                            <div class="card-container forth-card">
                                <div class="card-component">
                                    <a href="#">
                                        <div class="front">
                                            option 4
                                            <card class="card card-background card-raised" data-background-color 
                                            style="background-image: url('img/bg24.jpg')">
                                                <div class="info">
                                                    <div class="descrpition">
                                                        <h4 class="info-title">option title</h4>
                                                        <p>
                                                            descrpition
                                                        </p>
                                                    </div>
                                                </div>
                                            </card>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end of floating options -->
        <div class="presentation-page">
            <div class="section section-basic-components">
            <div class="container-fluid">
                <div class="col-md-10 mx-auto">
                    <img :src="cloudBaseOptionsImg" alt="cloud based options">
                </div>
            </div>
        </div>
        </div>

        
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
        headerImgUrl: "img/protel-imgs/learn_more_dial_ready.png",
        ourAdvantageImg: "img/protel-imgs/learn_more_dial_ready.png",
        cloudBaseOptionsImg: "img/protel-imgs/cloud_based_options.png",
      image01Path: "/img/bg38.jpg",
      bulyPhoneSystemImgPath: "/img/bg bulky complexity.jpg",
      spaceSavingImgPath: "/img/bg space saving.jpg",
      quickAccessImgPath: "/img/bg quick access.jpg",
      presentationStyle: "background: url('img/bg cloud base phone system.jpg')"
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


  .advantage-detail{
      position: absolute;
      top: 200px;
      right: 150px;
  }
  
.advantage-detail *{
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
</style>
