<template>
    <div class="wrapper">
        <component v-bind:is="currentPromotion"></component>
        <div class="section" id = "promotion-section">
            <div class="about-bussiness-descrption text-center">
                <div class="features-3">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 mr-auto ml-auto">
                                
                    <div class="container">
                        <button type="button"
                            v-on:click = "changeCurrentPromotion"
                        >chagePromotion</button>
                        </div>
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
        </div>
        <div class="section" id = "getting-start-section">
            <div class="about-description text-center">
                <div class="features-2">
                    <div class = "container">
                        <div class="row">
                            <div class="col-md-8 mr-auto ml-auto">
                                <h1 class="title">Getting Started is Simple</h1>
                            </div>
                        </div>
                    </div>
                    <div class="section">
                        <div class="container" id="get-start-service">
                        <div class="card-deck">
                            <card class="text-center" type = "pricing">
                                <div class="icon icon-success">
                                    <i class="now-ui-icons shopping_cart-simple"></i>
                                </div>
                                <h4 class="card-title">Order</h4>
                                <p class="card-text">Choose a package that suits your business needs,
                                    speak to a Dial Ready account manager by calling
                                    1-800-555-5555
                                </p>
                            </card>
                            <card class="card-nav-tabs text-center" type = "pricing">
                                <div class="icon icon-info">
                                    <i class="now-ui-icons ui-2_settings-90"></i>
                                </div>
                                <h4 class="card-title">Configuration</h4>
                                <p class="card-text">
                                    Our provisioning team configures your selected VoiP phones, extensions, 
                                    features and system. Once configured, your phonees are carefully packaged 
                                    and ready for shipping.
                                </p>
                            </card>
                            <card class="card-nav-tabs text-center" type = "pricing">
                                <div class="icon icon-primary">
                                    <i class="now-ui-icons shopping_delivery-fast"></i>
                                </div>
                                <h4 class="card-title">Shipping</h4>
                                <p class="card-text">
                                    Your business phones are individually labeled with all the details and shipped express right to your location.
                                </p>
                            </card>
                            <card class="card-nav-tabs text-center" type = "pricing">
                                <div class="icon icon-warning">
                                    <i class="now-ui-icons emoticons_satisfied"></i>
                                </div>
                                <h4 class="card-title">Plug & Use</h4>
                                <p class="card-text">
                                    Simply plug in each phone at the designated location and voila. Simple as that.
                                </p>
                            </card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-description text-center" id = "plan-section">
                <div class="features-3">
                    <div class = "container">
                        <div class="row">
                            <div class="col-md-8 mr-auto ml-auto">
                                <h1 class="title">Choose a Plan</h1>
                            </div>
                        </div>
                    <div class="section-space"></div>
                    <div class="row" id = "plans">
                        <div class="col-md-4">
                            <card type="pricing">
                                <h6 class="category">Basic</h6>
                                <div class="icon icon-danger">
                                    <i class="now-ui-icons design_palette"></i>
                                </div>
                                <h1 class="card-title">
                                    <small>$</small>
                                    29.99
                                    <small>/month</small>
                                </h1>
                                    <ul>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i>Free Phones</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i>Free <b>Local</b> Calling</li>
                                    <li><i class="now-ui-icons ui-1_simple-remove text-danger"></i><b>Unlimited</b> Canada & U.S. Calling</li>
                                    <li><i class="now-ui-icons ui-1_simple-remove text-danger"></i>Conference Bridge Included</li>
                                    <li><i class="now-ui-icons ui-1_simple-remove text-danger"></i><b>1,000</b> Minutes included for Conference Bridge</li>
                                    <li><i class="now-ui-icons ui-1_simple-remove text-danger"></i><b>5,000</b> Toll-Free Minutes <b>($250.00 Value)</b> For 6 or more phones</li>
                                </ul>
                            </card>
                        </div>
                        <div class="col-md-4">
                            <card type="pricing" color = "gray">
                                <h6 class="category">Professional</h6>
                                <div class="icon icon-info">
                                    <i class="now-ui-icons business_briefcase-24"></i>
                                </div>
                                <h1 class="card-title">
                                    <small>$</small>
                                    34.99
                                    <small>/month</small>
                                </h1>
                                <ul>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i>Free Phones</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i>Free <b>Local</b> Calling</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i><b>Unlimited</b> Canada & U.S. Calling</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i><b>Conference Bridge</b> Included</li>
                                    <li><i class="now-ui-icons ui-1_simple-remove text-danger"></i><b>1,000</b> Minutes included for Conference Bridge</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i><b>5,000</b> Toll-Free Minutes <b>($250.00 Value)</b> For 6 or more phones</li>
                                </ul>
                            </card>
                        </div>
                        <div class="col-md-4">
                            <card type="pricing" color="black">
                                <h6 class="category">Enterprise</h6>
                                <div class="icon icon-success">
                                    <i class="now-ui-icons tech_headphones"></i>
                                </div>
                                <h1 class="card-title">
                                    <small>$</small>
                                    44.99
                                    <small>/month</small>
                                </h1>
                                <ul>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i>Free Phones</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i>Free <b>Local</b> Calling</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i><b>Unlimited</b> Canada & U.S. Calling</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i><b>Conference Bridge</b> Included</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i><b>1,000</b> Minutes included for Conference Bridge</li>
                                    <li><i class="now-ui-icons ui-1_check text-success"></i><b>10,000</b> Toll-Free Minutes <b>($500.00 Value)</b> For 6 or more phones</li>
                                </ul>
                            </card>
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
        </div>
        <div class="" id = "learn-more-about-plans-section">
            <component :is="plansDetailsComponent"></component>
        </div>
</div>

    
    
</template>

<script>
import triplePromotions from "../pages/TriplePromotionalPictures";
import singlePromotion from "../pages/SinglePromotionPicture";
import plansDetails from "../pages/PlansDetails";
import { Card, Button } from "@/components";

export default {
  components: {
    triplePromotions,
    singlePromotion,
    plansDetails,
    Card,
    [Button.name]: Button
  },
  data: function() {
    return {
      currentPromotion: singlePromotion,
      promotionSet: ["single", "triple"],
      promotion: "triple",
      plansDetailsComponent: "",
      showPanel: false
    };
  },
  computed: {},
  methods: {
    changeCurrentPromotion: function() {
      if (this.promotion === "single") {
        this.currentPromotion = triplePromotions;
        this.promotion = "triple";
      } else if (this.promotion === "triple") {
        this.currentPromotion = singlePromotion;
        this.promotion = "single";
      }
    },
    showPlanDetails: function() {
      this.showPanel = !this.showPanel;
      this.plansDetailsComponent = this.showPanel ? plansDetails : "";
    }
  }
};
</script>

<style scoped>
</style>
