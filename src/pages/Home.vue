<template>
    <div class="wrapper">
        <!-- start of promotion section -->
        <div class="page-header-small">
            <el-carousel height="100vh">
                <el-carousel-item v-for="(url, id) in promoteImgs" :key="id">
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
        <!-- end of promotion section -->
        
        <!-- start of business description -->
        <div class="sectioin business-description-section">
            <div class="features-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 mr-auto ml-auto text-center">
                            <h3 class="description">
                                Business Phone Service. Evolved.
                                Small to Large Businesses Choose Dial Ready for Hosted VoiP Communications.
                                Dial Ready surpasses expectations in busines phone communications. Providing the best sevice and 100% focus on cloud-based VoiP communications for businesses, Dial Ready delivers the highest quality phone systems, all the features your business requires, and enterprise integrations and plugins. Dial Ready takes pride in customer service and provides well-trained staff to answer all your customer service needs.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end of business description -->
        
        <!-- start of get start section -->
        <div class="section get-start-section" style="background: white">
            <div class="features-4">
                <div class="container-fluid get-start-container" >
                    <div class="row">
                        <div class="col-md-8 ml-auto mr-auto text-center">
                            <h2 class="title">Getting Started is Simple</h2>
                        </div>
                    </div>
                    <div class="row get-start-row">
                        <div class="col-lg-6 col-xl-3 d-flex">
                            <card class="card card-background card-raised" data-background-color 
                            :style= getStartCardBg.order>
                                <div class="info">
                                    <div class="icon icon-success">
                                        <i class="now-ui-icons shopping_cart-simple"></i>
                                    </div>
                                    <div class="descrpition">
                                        <h4 class="info-title">Order</h4>
                                        <p>
                                            Choose a package that suits your business needs,
                                            speak to a Dial Ready account manager by calling
                                            1-800-555-5555
                                        </p>
                                    </div>
                                </div>
                                <p class="card-text">
                                </p>
                            </card>
                        </div>
                        <div class="col-lg-6 col-xl-3 d-flex">
                            <card class=" card card-background card-raised" data-background-color 
                            :style = getStartCardBg.configuration>
                                <div class="info">
                                    <div class="icon icon-info">
                                        <i class="now-ui-icons now-ui-icons ui-2_settings-90"></i>
                                    </div>
                                    <div class="descrpition">
                                        <h4 class="info-title">Configuration</h4>
                                        <p>
                                            Our provisioning team configures your selected VoiP phones, extensions, 
                                            features and system. Once configured, your phonees are carefully packaged 
                                            and ready for shipping.
                                        </p>
                                    </div>
                                </div>
                                <p class="card-text">
                                </p>
                            </card>
                        </div>
                        <div class="col-lg-6 col-xl-3 d-flex">
                            <card class=" card card-background card-raised" data-background-color 
                            :style = getStartCardBg.shipping>
                                <div class="info">
                                    <div class="icon icon-primary">
                                        <i class="now-ui-icons shopping_delivery-fast"></i>
                                    </div>
                                    <div class="descrpition">
                                        <h4 class="info-title">Shipping</h4>
                                        <p>
                                            Your business phones are individually labeled with all 
                                            the details and shipped express right to your location.
                                        </p>
                                    </div>
                                </div>
                                <p class="card-text">
                                </p>
                            </card>
                        </div>
                        <div class="col-lg-6 col-xl-3 d-flex">
                            <card class=" card card-background card-raised" data-background-color 
                            :style = getStartCardBg.plugAndUse>
                                <div class="info">
                                    <div class="icon icon-warning">
                                        <i class="now-ui-icons emoticons_satisfied"></i>
                                    </div>
                                    <div class="descrpition">
                                        <h4 class="info-title">Plug & Use</h4>
                                        <p>
                                            Simply plug in each phone at the designated 
                                            location and voila. Simple as that.
                                        </p>
                                    </div>
                                </div>
                                <p class="card-text">
                                </p>
                            </card>
                        </div>
                    </div>
                </div>
             </div>
        </div>
        <!-- end of get start section -->

        <!-- start of plan section -->
        <div class="section plan-section" data-background-color="black">
            <div class="features-3">
                <div class = "container">
                    <div class="row">
                        <div class="col-md-8 mr-auto ml-auto">
                            <h1 class="title">Choose a Plan</h1>
                        </div>
                    </div>
                <div class="section-space"></div>
                <div class="container plan-container">
                    <div class="row" id = "plans">
                        <!-- start of first plan description -->
                        <div class="plan col-lg-4 d-flex">
                            <card type="pricing">
                                <h5 class="category">Basic</h5>
                                <div class="icon icon-danger">
                                    <i class="now-ui-icons design_palette"></i>
                                </div>
                                <h1 class="card-title">
                                    <small>$</small>
                                    29.99
                                    <small>/month</small>
                                </h1>
                                    <ul class="plan-list">
                                    <li><i class="now-ui-icons ui-1_check text-success"></i>Free Phones</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i>Free <b>Local</b> Calling</li>
                                    <li>
                                        <i class="now-ui-icons ui-1_simple-remove text-danger"></i>
                                        <b>Unlimited</b> Canada & U.S. Calling<br>
                                    </li>
                                    <li>
                                        <i class="now-ui-icons ui-1_simple-remove text-danger"></i>
                                        Conference Bridge Included <br>
                                    </li>
                                    <li>
                                        <i class="now-ui-icons ui-1_simple-remove text-danger"></i>
                                        <b>1,000</b> Minutes included for Conference Bridge <br>
                                    </li>
                                    <li>
                                        <i class="now-ui-icons ui-1_simple-remove text-danger"></i>
                                        <b>5,000</b> Toll-Free Minutes 
                                        <b>($250.00 Value)</b> 
                                        For 6 or more phones
                                    </li>
                                </ul>
                            </card>
                        </div>
                        <!-- end of first plan description -->

                        <!-- start of second plan description -->
                        <div class="plan col-lg-4 d-flex">
                            <card type="pricing">
                                <h5 class="category">Professional</h5>
                                <div class="icon icon-info">
                                    <i class="now-ui-icons business_briefcase-24"></i>
                                </div>
                                <h1 class="card-title">
                                    <small>$</small>
                                    34.99
                                    <small>/month</small>
                                </h1>
                                <ul class="plan-list">
                                    <li><i class="now-ui-icons ui-1_check text-success"></i>Free Phones</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i>Free <b>Local</b> Calling</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i><b>Unlimited</b> Canada & U.S. Calling</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i><b>Conference Bridge</b> Included</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i><b>5,000</b> Toll-Free Minutes <b>($250.00 Value)</b> For 6 or more phones</li>
                                    <li><i class="now-ui-icons ui-1_simple-remove text-danger"></i><b>1,000</b> Minutes included for Conference Bridge</li>
                                </ul>
                            </card>
                        </div>
                        <!-- end of second plan description -->

                        <!-- start of third plan description -->
                        <div class="plan col-lg-4 d-flex">
                            <card type="pricing">
                                <h5 class="category">Enterprise</h5>
                                <div class="icon icon-success">
                                    <i class="now-ui-icons tech_headphones"></i>
                                </div>
                                <h1 class="card-title">
                                    <small>$</small>
                                    44.99
                                    <small>/month</small>
                                </h1>
                                <ul class="plan-list">
                                    <li><i class="now-ui-icons ui-1_check text-success"></i>Free Phones</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i>Free <b>Local</b> Calling</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i><b>Unlimited</b> Canada & U.S. Calling</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i><b>Conference Bridge</b> Included</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i><b>1,000</b> Minutes included for Conference Bridge</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i><b>10,000</b> Toll-Free Minutes <b>($500.00 Value)</b> For 6 or more phones</li>
                                </ul>
                            </card>
                        </div>
                        <!-- start of third plan description -->
                        
                    </div>
                </div>
                <div class="section-space"></div>
                    <div class="row">
                        <div class="ml-auto mr-auto">
                            <n-button type = "info" v-on:click.native = "showPlanDetails" size = "lg" round to = "/about">Learn More</n-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end of plan section -->

        <!-- star of plan table section -->
        <div class="section plans-details-section">
            <div class="features-5">
                <component :is="plansDetailsComponent"></component>
            </div>
        </div>
        <!-- end of plan table section -->
    </div>
</template>

<script>
import { Carousel, CarouselItem } from "element-ui";
import { Button } from "@/components";
import triplePromotions from "../pages/TriplePromotionalPictures";
import singlePromotion from "../pages/SinglePromotionPicture";
import plansDetails from "../pages/PlansDetails";
import { Card } from "@/components";

export default {
  components: {
    triplePromotions,
    singlePromotion,
    plansDetails,
    Card,
    [Button.name]: Button,
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  },
  data: function() {
    return {
      promoteImgs: [
        'background-image: url("/img/protel-imgs/promote_01.png")', //1
        'background-image: url("/img/protel-imgs/ip_phone_brands_01.png")', //2
        'background-image: url("/img/protel-imgs/ip_phone_brands_02.png")', //3
        'background-image: url("/img/protel-imgs/replace_phone.png")', //4
        'background-image: url("/img/protel-imgs/replace_and_save_01.png")', //5
        'background-image: url("/img/protel-imgs/replace_and_save_02.png")', //6
        'background-image: url("/img/protel-imgs/free_phones_01.png")', //7
        'background-image: url("/img/protel-imgs/promote_02.png")', //8
        'background-image: url("/img/protel-imgs/free_phones_02.png")' //9
      ],

      getStartCardBg: {
        order: "background-image: url('img/bg24.jpg')",
        configuration: "background-image: url('img/project15.jpg')",
        shipping: "background-image: url('img/bg38.jpg')",
        plugAndUse: "background-image: url('img/bg27.jpg')"
      },
      plansDetailsComponent: "",
      showPlansTable: false
    };
  },
  computed: {},
  methods: {
    showPlanDetails: function() {
      this.showPlansTable = !this.showPlansTable;
      this.plansDetailsComponent = this.showPlansTable ? plansDetails : "";
    }
  }
};
</script>

<style scoped>
.wrapper {
  /* font-size: 20px; */
  position: relative;
}
.page-header-small ::before {
  position: relative;
}
.page-header-image {
  opacity: 0.9;
}
.business-description-section {
  background: aliceblue;
}
.container-fluid {
  padding: 0 5%;
}

.get-start-section h4,
.get-start-section p {
  color: #ffffff;
}

.plans-details-section {
  background: mintcream;
}
</style>
