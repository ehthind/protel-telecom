<template>
    <div class="wrapper">
      <div class="page-header page-header-small">
          <parallax class="page-header-image"
                style="background-image: url('img/contactUs.jpg')">
          </parallax>
      </div>
      <div class="section contact-us-section">
            
            <div class="projects-5">
                <div class="container">
                    <div class="row">
                       
                    </div>
                    <div class="row">
                        <div class="col-md-6 d-flex">
                            <card type="background" class="picture-of-phone" raised rounded
                                  style="background-image: url('img/project8.jpg')">
                                <h2 class="card-title">Should be a picture of phone</h2>
                                <p class="card-description">
                                </p>
                                <badge type="neutral">Analytics</badge>
                            </card>
                        </div>
                        <div class="col-md-6">
                            <info-section type="success"
                                          icon="now-ui-icons ui-2_chat-round"
                                          title="TALK TO US!"
                                          description="We're Dial Ready-enableled, so we're easy to reach."
                            /><br>

                            <info-section type="success"
                                          icon=""
                                          title="Local: (555) 555-5555"
                                          description=""
                            />
                            <info-section type="success"
                                          icon=""
                                          title="Toll Free: 1-877-555-5555"
                                          description=""
                            />
                            <info-section type="success"
                                          icon=""
                                          title="Fax: (555) 555-5555"
                                          description=""
                            /><br>

                            <info-section type="success"
                                          icon="now-ui-icons ui-2_like"
                                          title="Let's Get Social"
                                          description=""/>
                        </div>
                    </div>
                    </div>
                    
            </div>
      </div>
      <div class="section contact-form-section">
        <div class="main">
            <div class="contact-content">
                <div class="container">
                  <div class="row">
                    <div class="col-md-10 ml-auto mr-auto text-center">
                      <h2 class="title">QUESTIONS?</h2>
                      <p class="title text-danger">Complete the form below to have one of our team members contact you A.S.A.P.</p>
                    </div>
                  </div>
                  <div class="section-space"></div>
                  <div class="row">
                    <div class="container">
                      <form role="form" id="get-a-quote-form" method="post">
                        <div class="form-group row">
                            <fg-input class="col-md-6"
                                      label = "First Name "
                                      placeholder = "first name"
                                      v-model = "firstName">
                            </fg-input>
                            <fg-input class="col-md-6"
                                      label = "Last Name "
                                      placeholder = "last name"
                                      v-model = "lastName">
                            </fg-input>
                            <span v-if = "!validName" class = "text-danger">*invalid first name or last name</span>
                        </div>
                        <br>
                        <div class="form-group">
                          <fg-input label = "Bussiness Email"
                                    placeholder = "eg: example@business.com"
                                    v-model = "businessEmail">
                          </fg-input>
                          <span v-if = "!validEmail" class = "text-danger">*invalid email</span>
                        </div><br>
                        <div class="form-group">
                              <label>Who can best address your needs today?</label><br>
                            <div class="form-check form-check-radio">
                              <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="staffRadios" id="marketingRadio" value="Marketing" v-model="typeOfHelp">
                                  Marketing
                                  <span class="form-check-sign"></span>
                              </label>
                            </div>
                            <div class="form-check form-check-radio">
                              <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="staffRadios" id="salesRadio" value="Sales" v-model="typeOfHelp">
                                  Sales
                                  <span class="form-check-sign"></span>
                              </label>
                            </div>
                            <div class="form-check form-check-radio">
                              <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="staffRadios" id="technicalRadio" value="Technical Support" v-model="typeOfHelp">
                                  Technical Support
                                  <span class="form-check-sign"></span>
                              </label>
                            </div>
                        </div><br>
                        <div class="form-group">
                          <label for = "comment">Comments</label>
                          <textarea name="message" v-model="comments" class="form-control" id="comment" form-groups="6"></textarea>
                        </div>
                        <div class="submit text-center">
                          <h5><n-button type = "primary" round @click.native = "submitContactForm"> Submit </n-button></h5>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
</template>
<script>
import {
  Badge,
  Button,
  Card,
  FormGroupInput,
  InfoSection,
  Radio
} from "@/components";
import Vue from "vue";

export default {
  name: "contact-us",
  bodyClass: "about-us",
  components: {
    Badge: Badge,
    [Button.name]: Button,
    Card,
    [FormGroupInput.name]: FormGroupInput,
    InfoSection,
    [Radio.name]: Radio
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      businessEmail: "",
      typeOfHelp: "Marketing",
      comments: "",
      validName: true,
      validEmail: true,
      contactJSONObj: ""
    };
  },
  methods: {
    verifyName: function() {
      if (this.firstName.length == 0 || this.lastName == 0)
        this.validName = false;
      // normalize first name and last name and update full name
      else {
        this.validName = true;
        this.firstName = this.firstName.toLowerCase();
        this.lastName = this.lastName.toLowerCase();

        this.firstName = this.firstName.replace(/\b\w/g, function(l) {
          return l.toUpperCase();
        });
        this.lastName = this.lastName.replace(/\b\w/g, function(l) {
          return l.toUpperCase();
        });
      }
    },
    verifyEmail: function() {
      let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.validEmail = emailRegex.test(this.businessEmail);
    },
    submitContactForm: function() {
      this.verifyName();
      this.verifyEmail();
      if (this.validName && this.validEmail) {
        const contactObj = {
          firstName: this.firstName,
          lastName: this.lastName,
          serviceType: this.typeOfHelp,
          comments: this.comments
        };
        this.contactJSONObj = JSON.stringify(contactObj);
        alert(
          `Hello ${this.firstName} ${this.lastName}, 
            thanks for your comment. Our 
            ${this.typeOfHelp}
            staff would contact you as soon as possible viar your emal :
            ${this.businessEmail}`
        );
      }
    }
  }
};
</script>
<style scoped>
.wrapper {
  font-size: 20px;
}
</style>

          