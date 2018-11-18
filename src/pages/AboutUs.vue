<template>
  <div class="wrapper">
        <!-- start of page header section -->
        <div class="page-header page-header-small">
            <parallax class="page-header-image">
            </parallax>
            <div class="content-center">
                <div class="row">
                    <div class="col-md-10 ml-auto mr-auto">
                        <h1 class="title"><u>ABOUT US</u></h1>
                        <h4>
                            OUR GOAL IS TO LEAD THE INDUSTRY IN VOIP BUSINESS SOLUTIONS 
                            READY FOR THE NEXT GENERATION OF UNIFIED COMMUNICATIONS
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <!-- end of page header section -->

    
        <div class="features-2 section-image">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-10 ml-auto mr-auto">
                        <h2 class="title">Our Services</h2>
                        <h4 class="description">
                            Our services are based on a new-age platform allowing scalability 
                            and solid voice solutions. It's simple you do what you do best for 
                            your business and let us handle the communication technology that we do best.
                        </h4>
                    </div>
                </div>
                <!-- <div class="row">
                    <div class="col-md-4">
                    <div class="info">
                        <div class="icon icon-primary icon-circle">
                            <i class="now-ui-icons users_single-02"></i>
                        </div>
                        <h4 class="info-title">best 1</h4>
                        <p class="description">description</p>
                    </div>
                    </div>
                    <div class="col-md-4">
                        <div class="info">
                            <div class="icon icon-primary icon-circle">
                                <i class="now-ui-icons users_single-02"></i>
                            </div>
                            <h4 class="info-title">best 1</h4>
                            <p class="description">description</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="info">
                            <div class="icon icon-primary icon-circle">
                                <i class="now-ui-icons users_single-02"></i>
                            </div>
                            <h4 class="info-title">best 1</h4>
                            <p class="description">description</p>
                        </div>
                    </div>  
                </div> -->
            </div>
        </div>

        <!-- start of business success -->
        <div class="section">
            <div class="about-services">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-md-10 ml-auto mr-auto">
                            <h2 class="title">Achieve Business Success</h2>
                            <h4 class="description">
                                We pride ourselves on our ability to help our business customers and partners every setp of
                                the way. Our sales, technical and customer support team are always available and eager to 
                                make your business run smoother. We help companies of all sizes unlcok the power of communications.
                            </h4>
                        </div>
                    </div>
                    <div class="separator-line separator-primary"></div>
                    <div class="row mb-3">
                        <div class="col-md-4">
                            <img class="rounded img-raised" alt="Raised Image" :src=teamImg04>
                        </div>
                        <div class="col-md-4">
                            <img class="rounded img-raised" alt="Raised Image" :src=teamImg02>
                        </div>
                        <div class="col-md-4">
                            <img class="rounded img-raised" alt="Raised Image" :src=teamImg05>
                        </div>
                    </div>
                    <div class="row">
                                                <div class="col-md-6">
                            <img class="rounded img-raised" alt="Raised Image" :src=teamImg01>
                        </div>
                        <div class="col-md-6">
                            <img class="rounded img-raised" alt="Raised Image" :src=teamImg03>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- start of business success -->
    </div>
</template>

<script>
import { Card, InfoSection } from "@/components";

export default {
  components: {
    Card,
    InfoSection
  },

  props: {},

  data() {
    return {
        teamImg01: "img/bg27.jpg",
        teamImg02: "img/bg24.jpg",
        teamImg03: "img/bg28.jpg",
        teamImg04: "img/project6.jpg",
        teamImg05: "img/project14.jpg"
    };
  },

  methods: {}
};
</script>

<style scoped>
.page-header-image{
    background-image: url("../../public/img/bg32.jpg");
}
</style>
