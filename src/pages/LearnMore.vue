<template>
  <div class="wrapper">
        <!-- start of page header -->
        <div class="header-1">
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
        <div class="features-7 section-image our-advantage">
            <div class="col-md-8 mr-auto ml-auto text-center">
                <h2 class="title">THERE ARE MANY OPTIONS FOR A BUSINESS PHONE PROVIDER. </h2>
                <h3 class="title text-primary">HERE'S WHAT MAKES DIAL REAY DIFFER FROM THE REST.</h3>
            </div>
            <div class="container-fluid">
                <div class="row d-flex align-items-center">
                    <div class="col-lg-3 col-md-6 col-sm-8 ml-auto mr-auto ml-auto col-md-12 ml-auto mr-auto ">
                            <card type="pricing">
                                <ul class="plan-list">
                                    <li><i class="now-ui-icons ui-1_check text-success"></i>Personalized Service</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i>Customized Programming</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i>Exceptional Customer Service</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i>FREE PHONES</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i>Super VoiP Quality</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i>Unlimited Nationwide Calling</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i>Easy Activation</li>
                                </ul>
                            </card>
                    </div>
                    <div class="col-lg-7 mr-auto col-md-12 ml-auto">
                        <div class="image-container">
                            <img v-lazy="'img/ipad3.png'" alt="">
                        </div>
                    </div>
                </div>
            </div>
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
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="image-container">
                            <img src="/img/ipad.png" alt="" class = "components-macbook">
                            <img src="/img/presentation-page/table.jpg" alt="" class = "table-img">
                            <img src="/img/presentation-page/share-btn.jpg" alt="" class = "share-btn-img">
                            <img src="/img/presentation-page/coloured-card.jpg" alt="" class = "coloured-card-btn-img">
                            <img src="/img/presentation-page/social-row.jpg" alt="" class = "social-img">
                            <img src="/img/presentation-page/linkedin-btn.jpg" alt="" class = "linkedin-btn-img">
                            <img src="img/presentation-page/social-row.jpg" alt="social row" class="social-img">
                        </div>
                    </div>
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
  background-image: url("/img/bg16.jpg");
}

.our-advantage {
  background-image: url("/img/bg11.jpg");
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
